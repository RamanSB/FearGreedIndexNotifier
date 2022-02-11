import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import axios from 'axios';
import { formatPlusMinus, formatPrice } from '../helpers/format-utils';
import { ChartData, useGetChartData } from './CryptoChartData';
import '../assets/styles/crypto-chart.css';

const CryptoChart = ({cryptoName} : {cryptoName: string}) => {
    console.log(`CryptoName: ${cryptoName}`);
    
    const { data, isLoading } = useGetCardData(cryptoName, {
        refetchInterval: 60000,
        staleTime: 60000
    })

    if (isLoading) {
        return null;
    }

    const {image, name, market_data: marketData} : { // Extracts the variable market_data within data and renames to "marketData"
        image: {thumb: string, small: string, large: string},
        name: string,
        market_data: any
     } = data
     
    return (
        <div className={`card`}>
          <div className="top-data">
            <img src={image?.large} alt={`${name} logo`}/>
            <div className="price-container">
                <h4>{formatPrice(marketData?.current_price?.usd)}</h4>
                <h4>{formatPlusMinus(marketData?.price_change_percentage_24h)}</h4>
            </div>
            <ChartData cryptoName={cryptoName}/>
          </div>
        
      </div>
    )
}

const queryClient = new QueryClient();

const WrappedCryptoChart = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CryptoChart cryptoName="bitcoin"/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

const useGetCardData = (cryptoName: string, options: any) => {
    return useQuery(`${cryptoName}-card`, async () => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoName}`);
        console.log(`Response from query: ${JSON.stringify(response)}`);
        return response.data;
    }, options);
}
 
export { WrappedCryptoChart };