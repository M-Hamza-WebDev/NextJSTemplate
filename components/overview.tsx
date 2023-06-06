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
        const ratings = data.map((product:any) => product.rating);
        const totalRating = ratings.reduce((sum:any, rating:any) => sum + rating, 0);
        const avgRating = totalRating / ratings.length;
        setAverageRating(avgRating);

        // Calculate product counts by category
        const categoryCounts:any = {};
        data.forEach((product:any) => {
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
    <div className="">
      {isLoading ? (
        <p className="md:text-4xl text-2xl font-bold text-center mb-16">Loading Dashboard Overview...</p>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="md:text-4xl text-2xl font-bold text-center">Dashboard Overview</h2>
            <p className="text-xl pt-8 text-center font-medium">Average Rating of all Products: <span className="text-gray-600 font-black">{averageRating.toFixed(2)}</span></p>
          </div>
           <div className="mb-4 md:mt-16 mt-10 mx-auto">
            <h3 className="md:text-2xl text-lg font-bold text-center mb-6">Product Count by Category</h3>
             <div className="w-full lg:max-w-2xl mx-auto ">
               <Bar
                data={chartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      // precision: 0,
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
