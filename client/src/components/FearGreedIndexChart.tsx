import { QueryClient, QueryClientProvider, useQuery} from 'react-query';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import '../assets/styles/fear-greed-index-chart.css';
import { FearGreedIndexChartData } from './FearGreedIndexChartData';


const FearGreedIndexChart = () => {
    console.log(`[FearGreedIndexChart]`);
    const { data, isLoading } = useGetCardData({
        refetchInterval: 60000*24,
        staleTime: 60000*24
    });

    if (isLoading) {
        return null;
    }
    const { data: processedData } = data;
    const fgiValue = processedData[0].value;
    const fgiClassification = processedData[0].value_classification;
    const todaysDate = new Date();

    return (
        <div className="fear-greed-card">
            <span className="fgi-status">{todaysDate.toDateString()}: {fgiValue} | {fgiClassification}</span>
            <div className="fear-greed-top-data">
                <h4 className="fear-greed-title">Fear & Greed Index</h4>
                <FearGreedIndexChartData></FearGreedIndexChartData>
            </div>
        </div>
    )
}

const queryClient = new QueryClient();

const WrappedFearGreedIndexChart = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <FearGreedIndexChart/>
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    )

}

const useGetCardData = (options?: any) => {
    return useQuery(`constant-key`, async () => {
        const response = await axios.get("https://api.alternative.me/fng/");
        console.log(`Response from query: ${JSON.stringify(response)}`);
        return response.data;
    }, options);
}



export { WrappedFearGreedIndexChart };