"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardOverview from "./overview";
import { Type } from "typescript";
import { log } from "console";
type DataType = {
  // Define the properties and their types for your data structure
  // Example:
  id: number;
  name: string;
  // ...
};
const Dashboard = () => {
  const [tableData, setTableData] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

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

  function filterData(name:string, value:any) {
    if (value) {
      if (name === "CategoryFilter") {
        const categoryData = tableData?.filter(
          (item:any) => item.category.toLowerCase().includes(value.toLowerCase()) 
        );
        setFilteredData(categoryData);
      } else if (name == "BrandFilter") {
        const brandData = tableData?.filter((item:any) => item.brand.toLowerCase().includes(value.toLowerCase));
        setFilteredData(brandData);
      }
      else {
      
        const anyData = tableData.filter(item => {
          // Get an array of values from the object properties
          const values = Object.values(item);
          console.log(values,"values");
          
          
          // Check if any value matches the specified value (case-insensitive)
          return values.some(val => {
            if (typeof val === 'string') {
              return val.toLowerCase().includes(value.toLowerCase());
            } else if (typeof val === 'number') {
              return val === Number(value);
            }
            return false;
          });
        });
        
        
        setFilteredData(anyData);
     
         
      }
    } else {
      setFilteredData(tableData);
    }
  }
  console.log(filteredData, categoryFilter, "filtered");

  return (
    <div className="mx-auto container">
      
      <DashboardOverview />
      <div className="flex justify-between py-6">
        <div>
        <h1 className="pb-2 font-bold">Filter by category:</h1>
          <input
          className="p-2 rounded-md focus:outline-none "
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
          <h1 className="pb-2 font-bold">Filter by brand:</h1>
          <input
         className="p-2 rounded-md focus:outline-none"
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
        <h1 className="pb-2 font-bold">Filter by any value:</h1>
          <input
           className="p-2 rounded-md focus:outline-none"
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
            {filteredData?.map((item:any, index) => {
              return (
                <tr key={index}>
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
