import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

function AllCategory() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom")
      .then((res) => {
        const filteredData = res.data
          .map((item) => ({
            categoryName: item.category,
            categoryImg: item.categoryImg,
          }))
          .filter((item) => item.categoryName && item.categoryImg);

        setdata(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container_product">
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold text-3xl">Категории</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {data.map((item, index) => (
          <div
            style={{
              width: "200px",
              height: "220px",
              cursor: "pointer",
            }}
            key={index}
            className="bg-white  rounded-lg shadow-md overflow-hidden  p-5"
          >
            <img
              src={item.categoryImg}
              alt={item.categoryName}
              className="object-cover"
              style={{
                width: "100%",
                height: "130px",
              }}
            />
            <h3 className="text-lg text-center mt-2 font-semibold">
              {item.categoryName}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategory;
