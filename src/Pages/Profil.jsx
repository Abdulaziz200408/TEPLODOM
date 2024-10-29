import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../App.css";
import { toast } from "react-toastify";

function Profil() {
  const user_name = localStorage.getItem("name");
  const user_email = localStorage.getItem("emailOrPhone");
  const [user_password, setUserPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [newPassword, setNewPassword] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSavePassword = () => {
    if (newPassword.length > 0) {
      localStorage.setItem("password", newPassword);
      setUserPassword(newPassword);
      setNewPassword("");
      setIsEditMode(false);
      toast.success("Parol muvaffaqiyatli o'zgartirildi!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          width: "320px",
          height: "30px",
          background: "white",
          color: "black",
        },
        className: "custom-toast",
      });
    } else {
      toast.error("Parol bo'sh bo'lishi  mumkin emas", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          width: "320px",
          height: "30px",
          background: "white",
          color: "black",
        },
        className: "custom-toast",
      });
    }
  };

  const handleEdit = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="container_product">
      <h1 className="text-3xl font-semibold">Личные информация</h1>
      <form className="w-[500px]">
        {/* Tahrirlash yoki oddiy ko‘rinish */}
        {isEditMode ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ваше имя
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                value={user_name}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Электронная почта или номер телефона
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="email"
                value={user_email}
                readOnly
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Текущий пароль
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type={showPassword ? "text" : "password"}
                value={user_password}
                readOnly
              />
              <div
                className="absolute right-3 top-10 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </div>
            </div>

            <div className="relative mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Новый пароль
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Введите новый пароль"
              />
              <div
                className="absolute right-3 top-10 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSavePassword}
              style={{ backgroundColor: "#FFB12A" }}
              className="w-[100px] text-white py-2 sm:py-3 rounded-md"
            >
              Сохранить
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ваше имя
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                value={user_name}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Электронная почта или номер телефона
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="email"
                value={user_email}
                readOnly
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Текущий пароль
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type={showPassword ? "text" : "password"}
                value={user_password}
                readOnly
              />
              <div
                className="absolute right-3 top-10 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleEdit}
              style={{ backgroundColor: "#FFB12A" }}
              className="w-[100px] text-white py-2 sm:py-3 rounded-md"
            >
              Изменить
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Profil;
