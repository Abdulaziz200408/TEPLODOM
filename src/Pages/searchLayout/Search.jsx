import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { useProduct } from "./../../Context/Contextprovider";
import { toast, ToastContainer } from "react-toastify";

function Search() {
  const { filteredProducts, setSearchTerm } = useProduct();
  const { addToBasket, addToFavorite } = useProduct();

  const handleBasket = (item) => {
    const isAdded = addToBasket(item);
    if (isAdded) {
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
    }
  };

  const handlefavorite = (item) => {
    const isAdded = addToFavorite(item);
    if (isAdded) {
      toast.success("Mahsulot faqat qo'shildi!", {
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
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className=" flex justify-between items-center w-[1000px]">
        <h1 className=" text-3xl font-semibold">
          Товары по поиску ({filteredProducts.length})
        </h1>
        <Link
          style={{
            color: "blue",
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
          to="vsesearchProduct"
        >
          Смотреть все
          <MdOutlineChevronRight />
        </Link>
      </div>
      <div className="absolute w-[1010px] mt-2  max-h-[510px] overflow-hidden rounded-lg">
        <div className="overflow-y-auto max-h-[700px] h-[900px] scrollbar-custom p-4 rounded-lg">
          {filteredProducts.map((product) => (
            <div className=" w-full rounded-lg p-3 bg-white h-[130px] mb-3 flex gap-10 relative">
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                onClick={() => setSearchTerm("")}
              >
                <img
                  style={{
                    border: "1px solid grey",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={product.img}
                ></img>
              </Link>
              <div className=" relative">
                <h2
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {product.title}
                </h2>
                <h5 className=" absolute bottom-2 font-semibold text-2xl">
                  {product.price}
                </h5>
              </div>
              <div className=" absolute right-6">
                <div className=" relative">
                  <button
                    onClick={() => handleBasket(product)}
                    style={{ background: "#FFB12A" }}
                    className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 "
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
                  </button>
                  <button
                    onClick={() => handlefavorite(product)}
                    style={{ background: "#FFB12A", color: "white" }}
                    className="border font-semibold px-4 py-2  mt-8 rounded-lg flex items-center justify-center gap-2"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
