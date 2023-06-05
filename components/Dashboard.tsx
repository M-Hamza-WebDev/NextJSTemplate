"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardOverview from "./overview";
const Dashboard = () => {
  const [tableData, setTableData] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data;
        setTableData(data.products);
        setFilteredData(data.products);

        console.log(data);
        // Handle the data or perform any further operations here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function filterData(name, value) {
    if (value) {
      if (name === "CategoryFilter") {
        const categoryData = tableData.filter(
          (item) => item.category === value
        );
        setFilteredData(categoryData);
      } else if (name == "BrandFilter") {
        const brandData = tableData.filter((item) => item.brand == value);
        setFilteredData(brandData);
      }
      else {
        // const anyData = tableData.filter((item) => item == value);
        // setFilteredData(anyData);

     
          setFilteredData(filteredProducts);
      }
    } else {
      setFilteredData(tableData);
    }
  }
  console.log(filteredData, categoryFilter, "filtered");

  return (
    <div className="mx-auto container">
      <DashboardOverview />
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            placeholder="Category"
            value={categoryFilter}
            name="CategoryFilter"
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              filterData("CategoryFilter", e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Brand"
            name="BrandFilter"
            value={brandFilter}
            onChange={(e) => {
              setBrandFilter(e.target.value);
              filterData("BrandFilter", e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            name="SearchQuery"
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value)
            filterData("SearchQuery", e.target.value)
            }
        
        }
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full divide-y divide-gray-200 rounded-md">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-6 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                Thumbnail
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData?.map((item, index) => {
              return (
                <tr>
                  <td className="px-6 py-4 ">{item.title}</td>
                  <td className="px-6 py-4 ">{item.description}</td>
                  <td className="px-6 py-4 ">{item.price}</td>
                  <td className="px-6 py-4 ">{item.category}</td>
                  <td className="px-6 py-4 ">{item.brand}</td>
                  <td className="px-6 py-4 ">{item.stock}</td>
                  <td className="px-6 py-4 ">
                    <img
                      src={item.thumbnail}
                      alt="Thumbnail"
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
