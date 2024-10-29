import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { toast } from "react-toastify";
import { useProduct } from "../Context/Contextprovider";

function Selectcategory() {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  const { addToBasket, addToFavorite } = useProduct();

  const handleBasket = (item) => {
    addToBasket(item);
    toast.success("Mahsulot qo'shildi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "220px",
        height: "30px",
        background: "white",
        color: "black",
      },
      className: "custom-toast",
    });
  };

  const handlefavorite = (item) => {
    addToFavorite(item);
    toast.success("Mahsulot qo'shildi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "220px",
        height: "30px",
        background: "white",
        color: "black",
      },
      className: "custom-toast",
    });
  };

  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom")
      .then((res) => {
        const filteredCategory = res.data.filter(
          (item) => item.category === categoryName
        );
        setCategoryData(filteredCategory);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div className="container_product">
      <h1 className="text-2xl font-bold text-start mb-4">
        {categoryName} Kategoriyasi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-lg p-4 bg-white"
            style={{ width: "280px", margin: "0 auto" }}
          >
            <Link to={`/details/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
            </Link>

            <h2 className="text-md font-semibold mb-1">{item.title}</h2>
            <p className="text-lg font-bold mb-4">{item.price} сум</p>
            <div className="flex justify-between items-center space-x-2">
              <button
                onClick={() => handleBasket(item)}
                style={{ background: "#FFB12A" }}
                className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m-5 5a1 1 0 110 2 1 1 0 010-2z"
                  />
                </svg>
                В корзину
              </button>
              <button
                onClick={() => handlefavorite(item)}
                style={{ background: "#FFB12A", color: "white" }}
                className="border font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.28 0 4.26 1.68 4.5 4.09C12.74 4.68 14.72 3 17 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selectcategory;
