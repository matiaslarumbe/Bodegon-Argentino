import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Item = () => {
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate(); // Usa useNavigate para manejar la navegación

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className="p-8 min-h-screen bg-[#262837] text-gray-300">
      <h1 className="text-3xl mb-8">Detalle de la Compra</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {cart.map((item, index) => (
          <div key={index} className="bg-[#1F1D2B] p-6 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={item.imagen} className="w-24 h-24 object-cover rounded-lg" alt={item.nombre} />
              <div>
                <h3 className="text-xl">{item.nombre}</h3>
                <p className="text-gray-400">${item.precio} x {item.quantity}</p>
                <p className="text-gray-400">Total: ${item.precio * item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="ml-auto text-red-500">
                <RiDeleteBin2Line size={24} />
              </button>
            </div>
            <input
              type="text"
              className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none text-gray-300"
              placeholder="Nota de pedido..."
            />
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-[#1F1D2B] rounded-lg max-w-md">
        <div className="flex justify-between mb-4">
          <span className="text-gray-400">Descuento:</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between text-xl font-semibold">
          <span>Total:</span>
          <span>${calcularTotal()}</span>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => navigate('/')} // Redirige al inicio
          className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg"
        >
          Volver al Inicio
        </button>
        <button
          onClick={() => navigate('/checkout')} // Redirige a checkout
          className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Item;
