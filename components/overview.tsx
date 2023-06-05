import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';



const DashboardOverview = () => {
    Chart.register(...registerables);
  const [averageRating, setAverageRating] = useState(0);
  const [productCounts, setProductCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data.products;

        // Calculate average rating
        const ratings = data.map((product) => product.rating);
        const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
        const avgRating = totalRating / ratings.length;
        setAverageRating(avgRating);

        // Calculate product counts by category
        const categoryCounts = {};
        data.forEach((product) => {
          const { category } = product;
          if (categoryCounts[category]) {
            categoryCounts[category] += 1;
          } else {
            categoryCounts[category] = 1;
          }
        });
        setProductCounts(categoryCounts);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(productCounts,"pc");

  // Chart configuration
  const chartData = {
    labels: Object.keys(productCounts),
    datasets: [
      {
        label: "Product Count",
        data: Object.values(productCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p>Average Rating of all Products: {averageRating.toFixed(2)}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Product Count by Category</h3>
             <div className="w-full max-w-2xl">
               <Bar
                data={chartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      precision: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardOverview;
