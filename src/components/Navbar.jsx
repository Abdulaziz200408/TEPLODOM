import { useEffect, useState } from "react";
import {
  Bars3BottomLeftIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import logo from "../Images/logo.png";
import { IoIosSearch } from "react-icons/io";
import "../App.css";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import axios from "axios";
import { useProduct } from "../Context/Contextprovider";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setuserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setlogin] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { favorite, basket } = useProduct();
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const user_name = localStorage.getItem("name");

    if (user_name) {
      setuserName(user_name);
    }
  });

  useEffect(() => {
    axios.get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom").then((res) => {
      setProducts(res.data);
    });
  });

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <>
      <header className="container_product">
        {/* NAVBAR - Kompyuter uchun */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo va Matn */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Teplodom" className="h-18 w-18" />
              <div>
                <h1
                  style={{
                    fontSize: "18px",
                  }}
                  className="text-orange-500 font-bold"
                >
                  TEPLODOM
                </h1>
                <p
                  style={{
                    fontSize: "10px",
                  }}
                  className="text-gray-500"
                >
                  Onlayn do'kon <br />
                  qurilish materiallari
                </p>
              </div>
            </div>
          </Link>

          {/* Izlash Paneli */}
          <div className="flex flex-col items-center w-1/3 relative">
            {/* Input Container */}
            <div className="relative w-full">
              {/* O'ng tomon Icon */}
              <IoIosSearch
                style={{
                  fontSize: "28px",
                  color: "#C4C4C4",
                  position: "absolute",
                  top: "7px",
                  right: "15px",
                }}
              />
              <input
                style={{ outline: "none", borderRadius: "10px" }}
                type="text"
                placeholder="Qidirish..."
                className="w-full bg-white border border-gray-300 px-4 py-2 shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filtered Products List */}
            {filteredProducts.length > 0 && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 shadow-md mt-14 rounded-lg max-h-[400px] overflow-hidden">
                <div className="overflow-y-auto max-h-[400px] scrollbar-custom">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/details/${product.id}`}
                      onClick={() => setSearchTerm("")}
                    >
                      <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-10 h-10 mr-2 rounded-lg"
                        />
                        <span>{product.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* O‘ng tomon Icon va Profil */}
          <div className="flex items-center space-x-4">
            <Link to="/favorites">
              <div
                style={{
                  position: "relative",
                }}
                className="crcle_menu"
              >
                <HeartIcon className="h-6 w-6 text-gray-600 cursor-pointer " />
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    top: "-2px",
                    right: "-15px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    display: favorite.length > 0 ? "block" : "none",
                    textAlign: "center",
                    padding: "2px",
                    fontSize: "10px",
                  }}
                >
                  {favorite.length}
                </span>
              </div>
            </Link>
            <Link to="/cart">
              <div
                style={{
                  position: "relative",
                }}
                className="crcle_menu "
              >
                <ShoppingBagIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    top: "-2px",
                    right: "-15px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    display: basket.length > 0 ? "block" : "none",
                    textAlign: "center",
                    padding: "2px",
                    fontSize: "10px",
                  }}
                >
                  {basket.length}
                </span>
              </div>
            </Link>
            {userName ? (
              <Link to="/profil">
                <div className="cursor-pointer crcle_menu_user">
                  <UserIcon className="h-6 w-6 text-gray-600" />
                  <span>Profil</span>
                </div>
              </Link>
            ) : (
              <div
                onClick={showModal}
                className="cursor-pointer crcle_menu_user"
              >
                <UserIcon className="h-6 w-6 text-gray-600" />
                <span>Login</span>
              </div>
            )}
          </div>
        </div>

        {/* NAVBAR - Mobil versiya */}
        <div className="md:hidden flex flex-col">
          <div className="flex items-center justify-between">
            {/* Left: Logo va Matn */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Teplodom" className="h-10 w-10" />
              <div>
                <h1 className="text-orange-500 font-bold text-lg">TEPLODOM</h1>
                <p className="text-xs text-gray-500">
                  Интернет магазин строй материалов
                </p>
              </div>
            </div>

            {/* Right: Icon Buttons */}
            <div className="flex space-x-4">
              <div className="crcle_menu">
                <HeartIcon className="h-6 w-6 text-gray-600 cursor-pointer " />
              </div>
              <div className="crcle_menu">
                <ShoppingBagIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
              </div>
              <div className="cursor-pointer  crcle_menu_user">
                <UserIcon className="h-6 w-6 text-gray-600" />
                <span>Профиль</span>
              </div>
            </div>
          </div>

          {/* Menyu ochish va Qidirish */}
          <div className="mt-4 flex items-center space-x-2">
            <Bars3BottomLeftIcon
              className="h-6 w-6 text-gray-600 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)} // Menyu ochish/tog‘irish
            />
            <div
              style={{
                width: "900px",
              }}
              className="flex items-center  relative"
            >
              {/* O'ng tomon Icon */}
              <IoIosSearch
                style={{
                  fontSize: "28px",
                  color: "#C4C4C4",
                  position: "absolute",
                  top: "7px",
                  right: "15px",
                }}
              />
              <input
                style={{ outline: "none", borderRadius: "10px" }}
                type="text"
                placeholder="Поиск..."
                className="w-full bg-white border border-gray-300 px-4 py-2 shadow-md "
              />
            </div>
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-600" />
          </div>

          {/* Menyu ochilganda */}
          {menuOpen && (
            <div
              style={{
                transition: "0.3s ease out all ",
              }}
              className="fixed inset-y-0 left-0 bg-white w-64 p-6 shadow-lg z-50"
            >
              <div className="flex justify-end">
                <XMarkIcon
                  className="h-8 w-8 text-gray-600 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              <ul className="space-y-6 mt-6">
                <li className="text-lg font-semibold cursor-pointer">
                  Товары по акции
                </li>
                <li className="text-lg font-semibold cursor-pointer">
                  Новинки
                </li>
                <li className="text-lg font-semibold cursor-pointer">
                  Поставщикам
                </li>
                <li className="text-lg font-semibold cursor-pointer">
                  Контакты
                </li>
                <li className="text-lg font-semibold cursor-pointer">
                  Возврат товара
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* login modal */}
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          style={{
            padding: "20px",
            marginTop: "-40px",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Регистрация
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-4">
            {login ? "Нет аккаунта" : "Имеет аккаунт?"}
            <a href="#" className="text-blue-600 hover:underline">
              {login ? "Войти" : " Регистрация"}
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Ваше имя
              </label>
              <input
                type="text"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Ваше имя"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Электронная почта или номер телефона
              </label>
              <input
                type="text"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="+998 "
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Пароль
              </label>
              <input
                type="password"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Подтвердить пароль
              </label>
              <input
                type="password"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm sm:text-base text-gray-700"
              >
                Я согласен с Условиями и Политикой конфиденциальности
              </label>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 sm:py-3 rounded-md hover:bg-yellow-600 transition">
              Регистрация
            </button>
          </form>
        </Modal>
      </header>
      <section
        style={{
          marginTop: "-15px",
        }}
        className="container_product"
      >
        <ul className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-32 ">
          <Link to="/acsiya" onClick={() => handleClick(0)}>
            <li className={`About_button ${activeIndex === 0 ? "activ" : ""}`}>
              Товары по акции
            </li>
          </Link>
          <Link to="/new" onClick={() => handleClick(1)}>
            <li className={`About_button ${activeIndex === 1 ? "activ" : ""}`}>
              Новинки
            </li>
          </Link>
          <Link to="/dastavka" onClick={() => handleClick(2)}>
            <li className={`About_button ${activeIndex === 2 ? "activ" : ""}`}>
              Поставщикам
            </li>
          </Link>
          <Link to="/contact" onClick={() => handleClick(3)}>
            <li className={`About_button ${activeIndex === 3 ? "activ" : ""}`}>
              Контакты
            </li>
          </Link>
          <Link to="/vozvrat" onClick={() => handleClick(4)}>
            <li className={`About_button ${activeIndex === 4 ? "activ" : ""}`}>
              Возврат товара
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
}
export default Navbar;
