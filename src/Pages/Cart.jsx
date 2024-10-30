import React, { useState } from "react";
import { useProduct } from "../Context/Contextprovider";
import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Button, Checkbox, Col, Input, Modal, Row } from "antd";

function Cart() {
  const { basket, deleteFromBasket } = useProduct();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleDeleteBasket = (item) => {
    deleteFromBasket(item);
    toast.error("Mahsulot o'chirildi", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "220px",
        height: "30px",
        background: "red",
        color: "white",
      },
      className: "custom-toast",
    });
  };

  return (
    <div>
      {basket?.length === 0 ? (
        <p>Sevimli mahsulotlar yo'q.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {basket.map((item) => (
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
                  onClick={() => showModal(item)}
                  style={{ background: "#FFB12A" }}
                  className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <GrDocumentText />
                  Оформить
                </button>
                <button
                  onClick={() => handleDeleteBasket(item)}
                  style={{ color: "#FFB12A" }}
                  className="border font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        bodyStyle={{ height: "430px" }}
      >
        {isOrderComplete ? (
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
                    onClick={() => setIsOrderComplete(false)}
                  >
                    Главная страница
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3 className="mt-6" style={{ fontSize: "17px" }}>
              Купить {selectedItem?.title}
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
                <label>Введите адрес</label>
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
            <div className="flex justify-between items-center mt-6">
              <Checkbox>
                Я согласен с <a href="#">правилами публичной оферты</a>
              </Checkbox>
              <Button
                style={{
                  background: "#FFB12A",
                  color: "white",
                  marginTop: "25px",
                }}
                onClick={() => setIsOrderComplete(true)}
              >
                Оформление заказа
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Cart;
