import React from "react";
import { useShoppingCart } from './ShoppingCartContext';

const Card = ({ platos }) => {
  const { addToCart } = useShoppingCart();

  return (
    <div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {platos.map((plato, index) => (
          <div key={index} className="bg-[#1F1D2B] p-8 rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
            <img src={plato.imagen} className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt={plato.nombre} />
            <p className="text-xl">{plato.nombre}</p>
            <span className="text-gray-400">${plato.precio}</span>
            <p className="text-gray-600">{plato.disponibles} Platos Disponibles</p>
            <button
              onClick={() => addToCart(plato)}
              className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg mt-4"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


