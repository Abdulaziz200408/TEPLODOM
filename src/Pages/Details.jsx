import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CiHeart, CiWallet } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { GiShoppingBag } from "react-icons/gi";
import "../App.css";
import Card from "./Menu/Card";
import { Button, Checkbox, Col, Form, Input, Modal, Row, Upload } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useProduct } from "../Context/Contextprovider";
import { toast } from "react-toastify";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);

  const { addToBasket, addToFavorite } = useProduct();

  const showModals = () => {
    setIsModalOpens(true);
  };

  const handleOks = () => {
    setIsModalOpens(false);
  };

  const hendleNext = () => {
    setmodal((prev) => !prev);
  };
  const handleCancels = () => {
    setIsModalOpens(false);
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
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    axios
      .get(`https://0c7d0caa3768a5b0.mokky.dev/Teplodom/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  const handleBasket = (item) => {
    addToBasket(item);
    handleClick(2);
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
    handleClick(3);

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

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleactiv = () => {
    handleClick(0);
    showModal();
  };

  const handleactiv1 = () => {
    handleClick(1);
    showModals();
  };
  const handlenext = () => {
    setmodal2((prev) => !prev);
  };

  return (
    <div className="container_product mt-10">
      <div className="p-6 bg-white shadow rounded-lg flex w-[100%] gap-10 items-center">
        <div className="w-1/2 justify-center flex">
          <img
            className="w-[400px] h-auto rounded-lg object-cover"
            src={item.img}
            alt={item.title}
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-6">{item.desc}</p>
          {/* O'lcham */}
          <p className="flex items-center text-sm text-gray-500 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5m9.75-9v6m-3-3h6"
              />
            </svg>
            (1.185 x 0.585) (20mm)
          </p>
          <div className="flex items-center mb-6">
            <span className="text-red-600 text-3xl font-bold">
              {item.price} so'm
            </span>
            <span className="text-gray-400 line-through ml-4 text-xl">
              {item.oldPrice} so'm
            </span>
          </div>
          <div className="flex gap-6 items-center mb-6">
            <div className="flex space-x-4">
              <button
                onClick={handleactiv}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 0 ? "acfr" : ""
                }`}
              >
                <CiWallet className="text-2xl" />
              </button>
              <button
                onClick={handleactiv1}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 1 ? "acfr" : ""
                }`}
              >
                <LuCalendarClock className="text-2xl" />
              </button>
              <button
                onClick={() => handleBasket(item)}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 2 ? "acfr" : ""
                }`}
              >
                <GiShoppingBag className="text-2xl" />
              </button>
              <button
                onClick={() => handlefavorite(item)}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 3 ? "acfr" : ""
                }`}
              >
                <CiHeart className="text-2xl" />
              </button>
            </div>

            <div className="flex items-center ms-6">
              <button
                className="bg-gray-300 p-3 rounded  w-[40px]"
                onClick={decreaseCount}
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                className="bg-gray-300 p-3 rounded w-[40px]"
                onClick={increaseCount}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <Card />
      {/* Оформление заказа */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
        bodyStyle={{ height: "400px" }}
      >
        {modal ? (
          <div>
            <div className=" flex justify-center text-center items-center">
              <div className=" mt-40">
                <h1 className=" text-4xl">Спасиба за покупка !</h1>
                <p>Ваш номер заказ №127836</p>
                <Link to="/">
                  <Button
                    style={{
                      background: "#FFB12A",
                      color: "white",
                      marginTop: "10px",
                    }}
                    key="submit"
                    onClick={hendleNext}
                  >
                    Главная страница
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3
              style={{
                fontSize: "17px",
              }}
              className=" mt-6 "
            >
              Купить{item.title}
            </h3>
            <Row gutter={[16, 16]} className="mt-6">
              <Col span={12}>
                <label>Введите Штук</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Введите имя</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Введите город / район</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Введите адресс</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Введите номер телефона</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Введите область</label>
                <Input className="mt-2" />
              </Col>
              <Col span={24}>
                <label>Введите населённый пункт</label>
                <Input className="mt-2" />
              </Col>
            </Row>
            <div className=" flex justify-between items-center">
              <Checkbox style={{ marginTop: "15px" }}>
                Я согласен с <a href="#">правилами публичной оферты</a>
              </Checkbox>
              <Button
                style={{
                  background: "#FFB12A",
                  color: "white",
                  marginTop: "25px",
                }}
                key="submit"
                onClick={hendleNext}
              >
                Оформление заказа
              </Button>
            </div>
          </>
        )}
      </Modal>

      {/* Личные данные */}
      <Modal
        open={isModalOpens}
        onOk={handleOks}
        onCancel={handleCancels}
        footer={null}
        width={900}
        style={{
          marginTop: "-70px",
        }}
        bodyStyle={{ height: "550px" }}
      >
        {modal2 ? (
          <>
            <div>
              <div className=" flex justify-center text-center items-center">
                <div className=" mt-52">
                  <h1 className=" text-4xl">Спасиба за покупка !</h1>
                  <p>Ваш номер заказ №127836</p>
                  <Link to="/">
                    <Button
                      style={{
                        background: "#FFB12A",
                        color: "white",
                        marginTop: "10px",
                      }}
                      key="submit"
                      onClick={hendleNext}
                    >
                      Главная страница
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="mt-6" style={{ fontSize: "17px" }}>
              ПИНФЛ* Что это?
            </h3>
            <Row gutter={[16, 16]} className="mt-6">
              <Col span={24}>
                <label>ПИНФЛ*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={4}>
                <label>Серия*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={10}>
                <label>Номер паспорта*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={10}>
                <label>Дата рождения*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Имя*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Фамилия*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Очество*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Номер телефона</label>
                <Input className="mt-2" />
              </Col>
              <Col span={12}>
                <label>Дополнительный номер</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Область*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Город*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Адрес*</label>
                <Input className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Фото паспорта с первой страницы</label>
                <Input type="file" className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Загрузите фото прописки паспорта</label>
                <Input type="file" title="" className="mt-2" />
              </Col>
              <Col span={8}>
                <label>Загрузите фото лица на фоне паспорта</label>
                <Input type="file" className="mt-2" />
              </Col>
              <Button
                style={{
                  background: "#FFB12A",
                  color: "white",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
                key="submit"
                onClick={handlenext}
              >
                Следующий <MdKeyboardArrowRight />
              </Button>
            </Row>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Details;
