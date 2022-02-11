import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import '../assets/styles/fear-greed-index-chart-data.css';
import { format } from 'date-fns';

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

const FearGreedIndexChartData = () => {
    console.log(`[FearGreedIndexChartData]`);
    const [dataInterval, setDataIntervals] = useState(intervals[4].value);

    const { data, isLoading } = useGetChartData(dataInterval, {
        refetchInterval: 60000*24,
        staleTime: 60000*24,
        select: (data: {name: string, data: Array<{value: string, value_classification: string, timestamp: string, time_until_update?: string}>}) => 
            data?.data?.map((item) => ({
                x: Number(item.timestamp + '000'),
                y: Number(item.value)
            }))
        });

    console.log(data);
    return (
        <div className='fear-greed-chart'>
            <div className="fear-greed-chart-actions">
                {intervals.map((interval) => (
                    <button
                        key={interval.value}
                        className={`interval-btn ${dataInterval === interval.value ? 'active' : 'inactive'}`}
                        onClick={() => setDataIntervals(interval.value)}>
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
            )}
        </div>
    )
}


const useGetChartData = (dataInterval: number, options?: any) => {
    return useQuery([`chartData`, dataInterval], async () => {
        const response = await axios.get(`https://api.alternative.me/fng/?`, { params: {limit: dataInterval} });
        return response.data;
    }, options)
}



export {FearGreedIndexChartData};