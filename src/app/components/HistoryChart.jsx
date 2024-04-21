"use client"

import { useRouter } from "next/router";
import useAxios from "../hooks/useAxios";
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Skeleton from "../trade/Skeleton";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const HistoryChart = () => {
  const router = useRouter();
  const { id } = router.query;
  const { response, error, isLoading } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

  if (isLoading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }

  if (error || !response || !response.prices) {
    return (
      <div className="">Error loading data</div>
    )
  }

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

  const options = {
    responsive: true
  };

  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart
