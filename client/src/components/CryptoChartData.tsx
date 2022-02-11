import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
// For price formatting (we wrote this earlier and made it an export for this reason!)
import axios from 'axios';
import { format } from 'date-fns';
import "../assets/styles/chart-data.css";

const intervals = [
    {
      label: '1D',
      value: 1,
    },
    {
      label: '7D',
      value: 7,
    },
    {
      label: '1M',
      value: 30,
    },
    {
      label: '3M',
      value: 90,
    },
    { 
      label: '1Y',
      value: 365
    },
    {
        label: '2Y',
        value: 730
    },
    {
        label: '3Y',
        value: 1095
    },
    {
        label: '5Y',
        value: 1825
    },
    {
        label: '10Y',
        value: 3650
    }
  ];
  

const ChartData = ({ cryptoName } : {cryptoName: string}) => {
    const [dataInterval, setDataInterval] = useState(intervals[4].value);

    const { isLoading, data } = useGetChartData(cryptoName, dataInterval, {
        refetchInterval: 60000,
        staleTime: 60000, 
        select: (data: {prices: Array<any>, total_volumes: Array<any>, market_caps: Array<any>}) => data?.prices?.map((item) => ({
            x: item[0],
            y: item[1]
        })),
    });

    console.log(`[ChartData]`);
    console.log(isLoading, data);

    return (
        <div className="chart">
            <div className="chart-actions">
                {intervals.map((interval) => (
                    <button
                        key={interval.value}
                        className={`interval-btn ${dataInterval === interval.value ? 'active' : 'inactive'}`}
                        onClick={() => setDataInterval(interval.value)}>
                            {interval.label}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="loading-container">
                    <span>Loading...</span>
                </div>
            ) : (
                    <VictoryChart
                        width={800}
                        height={300}
                        domainPadding={5}>
                            <VictoryLine
                                style={{
                                    data: {
                                        stroke: "white",
                                        strokeWidth: 3,
                                    }
                                }}
                                data={data}
                            />
                            <VictoryAxis
                                orientation="bottom"
                                style={{
                                    axis: {
                                        stroke: '#fff',
                                        strokeWidth: 2,
                                      },
                                        tickLabels: {
                                            fill: '#fff',
                                        },
                                    }}
                                tickFormat={(x) => {
                                    if (dataInterval === 1) {
                                        return format(x, 'p');
                                    } else if (dataInterval > 1 && dataInterval <= 365) {
                                        return format(x, 'MM/dd');
                                    } else if (dataInterval > 365 && dataInterval <= 365*3) {
                                        return format(x, "MM/yyyy");
                                    } else {
                                        return format(x, "yyyy");
                                    }
                                }}
                                />
                    </VictoryChart>
                )
            }
        </div>
    );

}

const useGetChartData = (cryptoName: string, interval: number, options: any) => {
    return useQuery(['chartData', interval], async () => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=${interval}`);
        return response.data;
    }, options);
}

export { ChartData, useGetChartData };