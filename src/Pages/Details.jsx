import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CiHeart, CiWallet } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { GiShoppingBag } from "react-icons/gi";
import "../App.css";
import Card from "./Menu/Card";
import { Button, Checkbox, Col, Form, Input, Modal, Row, Upload } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);

  const showModals = () => {
    setIsModalOpens(true);
  };

  const handleOks = () => {
    setIsModalOpens(false);
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

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
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
                onClick={() => handleClick(0)}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 0 ? "acfr" : ""
                }`}
              >
                <CiWallet onClick={showModal} className="text-2xl" />
              </button>
              <button
                onClick={() => handleClick(1)}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 1 ? "acfr" : ""
                }`}
              >
                <LuCalendarClock onClick={showModals} className="text-2xl" />
              </button>
              <button
                onClick={() => handleClick(2)}
                className={`p-3 detals rounded-lg flex items-center ${
                  activeIndex === 2 ? "acfr" : ""
                }`}
              >
                <GiShoppingBag className="text-2xl" />
              </button>
              <button
                onClick={() => handleClick(3)}
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
        title={
          <h1 style={{ fontSize: "28px", fontWeight: "500px" }}>
            Оформление заказа
          </h1>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{
              background: "#FFB12A",
              color: "white",
              marginTop: "100px",
            }}
            key="submit"
            onClick={handleOk}
          >
            Оформление заказа
          </Button>,
        ]}
        width={800}
        bodyStyle={{ height: "300px" }}
      >
        <h3
          style={{
            fontSize: "17px",
          }}
          className=" mt-6 "
        >
          {" "}
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
        <Checkbox style={{ marginTop: "15px" }}>
          Я согласен с <a href="#">правилами публичной оферты</a>
        </Checkbox>
      </Modal>

      {/* Личные данные */}
      <Modal
        title={
          <h1 style={{ fontSize: "28px", fontWeight: "500px" }}>
            Личные данные
          </h1>
        }
        open={isModalOpens}
        onOk={handleOks}
        onCancel={handleCancels}
        footer={[
          <Button
            style={{
              background: "#FFB12A",
              color: "white",
              marginTop: "40px",
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
            key="submit"
            onClick={handleOk}
          >
            Следующий <MdKeyboardArrowRight />
          </Button>,
        ]}
        width={900}
        style={{
          marginTop: "-50px",
        }}
        bodyStyle={{ height: "500px" }}
      >
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
        </Row>
      </Modal>
    </div>
  );
}

export default Details;
