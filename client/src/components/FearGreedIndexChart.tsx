import { QueryClient, QueryClientProvider, useQuery} from 'react-query';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query-devtools';
import '../assets/styles/fear-greed-index-chart.css';
import { FearGreedIndexChartData } from './FearGreedIndexChartData';

const FearGreedIndexChart = () => {
    console.log(`[FearGreedIndexChart]`);
    const { data, isLoading } = useGetCardData();
    console.log(data, isLoading);

    return (
        <div className="fear-greed-card">
            <div className="fear-greed-top-data">
                <h4 className="fear-greed-title">Fear & Greed Index</h4>
                <span>Today's FGI: </span>
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