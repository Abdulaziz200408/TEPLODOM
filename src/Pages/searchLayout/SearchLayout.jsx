import React, { useState } from "react"; // useState ni to‘g‘ri import qilish
import Search from "./Search";
import "../../App.css";
import { Select, Space, Button } from "antd"; // Tartib bilan import qilish

const { Option } = Select;

function SearchLayout() {
  const [selectedColor, setSelectedColor] = useState("#000");
  const [capacity, setCapacity] = useState("Квм²");

  const countries = [
    { key: "uzb", label: "Узбекистан" },
    { key: "rus", label: "Россия" },
    { key: "kaz", label: "Казахстан" },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="container_product">
      <div className="flex gap-10 items-start">
        <div className="w-[365px] bg-white rounded-lg text-start px-6 py-4  shadow-md">
          <h1 className="font-bold text-2xl">Филтр</h1>

          <h5 className="mt-4">Страна-производитель</h5>
          <Space direction="vertical">
            <Select defaultValue="Узбекистан" className="w-[300px] h-10 mt-2">
              {countries.map((country) => (
                <Option key={country.key} value={country.label}>
                  {country.label}
                </Option>
              ))}
            </Select>
          </Space>

          <h5 className="mt-4">Цена</h5>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="От"
              className="border rounded-md w-[145px] h-10 px-2"
            />
            <input
              type="number"
              placeholder="До"
              className="border rounded-md w-[145px] h-10 px-2"
            />
          </div>

          <h5 className="mt-4">Цвет</h5>
          <div className="flex gap-3 mt-2">
            {["#000000", "#FF0000", "#00FF00", "#0000FF", "#FF00FF"].map(
              (color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer`}
                  style={{
                    backgroundColor: color,
                    borderColor:
                      selectedColor === color ? "black" : "transparent",
                  }}
                  onClick={() => handleColorChange({ hex: color })}
                ></div>
              )
            )}
          </div>

          <h5 className="mt-4">Бренды товары</h5>
          <input
            type="text"
            placeholder="Кнауф"
            className="border rounded-md w-[300px] h-10 px-2 mt-2"
          />

          <h5 className="mt-4">Вместимость</h5>
          <Select
            value={capacity}
            onChange={(value) => setCapacity(value)}
            className="w-[300px] h-10 mt-2"
          >
            <Option value="Квм²">Квм²</Option>
            <Option value="Литр">Литр</Option>
            <Option value="Кг">Кг</Option>
            <Option value="Диаметр">Диаметр</Option>
          </Select>

          <div className="flex justify-between mt-8">
            <Button type="default" className="bg-gray-200">
              Очистить
            </Button>
            <Button type="primary" className="bg-orange-500">
              Найти
            </Button>
          </div>
        </div>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default SearchLayout;
