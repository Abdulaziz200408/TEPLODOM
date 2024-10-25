import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import "../App.css";
import "../App.css";

function Allcard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container_product">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">все продукты</h1>
        </div>
      </div>

      <div className="mini_card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
        {currentCards.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-lg p-4 bg-white"
            style={{ width: "280px", margin: "0 auto" }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-md font-semibold mb-1">{item.title}</h2>
            <p className="text-lg font-bold mb-4">{item.price} сум</p>
            <div className="flex justify-between items-center space-x-2">
              <button
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
                    d="M18 21.35l-1.45-1.32C5.4 15.36 2 18.28 2 8.5 2 5.42 4.42 3 7.5 3c2.28 0 4.26 1.68 4.5 4.09C18.74 4.68 14.72 3 17 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L18 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button
          className=" text-black"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdOutlineChevronLeft size={24} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1  rounded ${
              currentPage === index + 1 ? " text-orange-400 " : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className=" text-black"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Allcard;
