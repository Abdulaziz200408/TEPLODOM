import React from "react";
import { CiFacebook, CiGlobe } from "react-icons/ci";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import imglogo from "../Images/Footer_logo.png";

function Footer() {
  return (
    <footer className="bg-[#2F2C47] text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Address */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3">
            <img src={imglogo} alt="Teplodom" className="h-18 w-16" />
            <div>
              <h1
                style={{
                  fontSize: "18px",
                }}
                className="text-white font-bold"
              >
                TEPLODOM
              </h1>
              <p
                style={{
                  fontSize: "10px",
                }}
                className=" text-white"
              >
                Onlayn do'kon <br />
                qurilish materiallari
              </p>
            </div>
          </div>
          <p className=" mt-4">Интернет магазин строй материалов</p>
          <p className="mt-2">
            {" "}
            <LuMapPin />
            ул. Уста Ширин, рынок Джамий, дом 134
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="mb-4">Быстрые ссылки</h4>
          <a href="#" className="hover:underline">
            Мастерам
          </a>
          <a href="#" className="hover:underline">
            Оформление заказа
          </a>
          <a href="#" className="hover:underline">
            Пользовательское соглашение
          </a>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col">
          <h4 className="mb-4">Полезное</h4>
          <a href="#" className="hover:underline">
            О нас
          </a>
          <a href="#" className="hover:underline">
            Поставщикам
          </a>
          <a href="#" className="hover:underline">
            Возврат товара
          </a>
        </div>

        {/* Contacts */}
        <div className="flex flex-col">
          <h4 className="mb-4">Контакты</h4>
          <p>
            <a href="tel:+998977616251" className="hover:underline">
              +998 97 761 62 51
            </a>
          </p>
          <p>
            <a href="tel:+998935569131" className="hover:underline">
              +998 93 556 91 31
            </a>
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#">
              <RiTelegramLine />
            </a>
            <a href="#">
              <FaInstagram />{" "}
            </a>
            <a href="#">
              <CiFacebook />
            </a>
            <a href="#">
              <CiGlobe />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-6 border-t border-gray-500 pt-4 text-center">
        <p>© 2021 Teplodom. Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
