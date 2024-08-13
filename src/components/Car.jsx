import React from "react";
import { RiCloseFill, RiDeleteBin2Line } from "react-icons/ri";
import { useShoppingCart } from "./ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const Car = ({ showOrder, setShowOrder }) => {
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate();

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Ordenes */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full pb-10">
        <RiCloseFill
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-xl my-4">Orden #151416</h1>
        {/*Botones */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#28cfe7] text-white py-2 px-4 rounded-xl text-sm lg:text-base">
            Cenar en
          </button>
          <button className="text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500 text-sm lg:text-base">
            Ir
          </button>
          <button className="text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500 text-sm lg:text-base">
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          {/* Productos */}
          <div className="overflow-auto max-h-[calc(100vh-280px)] pb-24">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-[#262837]  p-2 lg:p-4 rounded-xl mb-4"
              >
                <div className="grid grid-cols-5  lg:grid-cols-6 mb-2">
                  {/* Descripcion Producto */}
                  <div className="col-span-3 lg:col-span-4 flex items-center gap-3">
                    <img
                      src={item.imagen}
                      className="w-8 h-8 lg:w-10 lg:h-10 object-cover"
                    />
                    <div>
                      <h5 className="text-sm lg:text-sm">{item.nombre}</h5>
                      <p className="text-xs text-gray-500">${item.precio}</p>
                    </div>
                  </div>
                  {/* Cantidad */}
                  <div>
                    <span className="text-xs lg:text-base">
                      {item.quantity}
                    </span>
                  </div>
                  {/* Precio */}
                  <div>
                    <span className="text-xs lg:text-base">
                      ${item.precio * item.quantity}
                    </span>
                  </div>
                </div>
                {/*Nota */}
                <div className="grid grid-cols-5 lg:grid-cols-6 items-center">
                  <form className="col-span-4 lg:col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-1 px-2 lg:py-2 lg:px-4 rounded-lg outline-none text-xs lg:text-sm"
                      placeholder="Nota de pedido..."
                    />
                  </form>
                  <div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="border border-red-500 p-2 rounded-lg"
                    >
                      <RiDeleteBin2Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*Enviar pago*/}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Total</span>
            <span>${calcularTotal()}</span>
          </div>
          <div>
            <button
              className="bg-[#28cfe7] w-full py-2 px-4 rounded-lg"
              onClick={() => navigate("/item")}
            >
              Continue su pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
