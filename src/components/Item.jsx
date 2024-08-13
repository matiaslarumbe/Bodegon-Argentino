// import React from 'react';
// import { useShoppingCart } from './ShoppingCartContext';
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { useNavigate } from 'react-router-dom'; 

// const Item = () => {
//   const { cart, removeFromCart } = useShoppingCart();
//   const navigate = useNavigate(); 

//   const calcularTotal = () => {
//     return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-[#262837] text-gray-300">
//       <h1 className="text-3xl mb-8">Detalle de la Compra</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//         <div className="lg:col-span-2 overflow-y-auto max-h-[70vh]">
//           {cart.map((item, index) => (
//             <div key={index} className="bg-[#1F1D2B] p-6 rounded-xl flex flex-col gap-4">
//               <div className="flex items-center gap-4">
//                 <img src={item.imagen} className="w-24 h-24 object-cover rounded-lg" alt={item.nombre} />
//                 <div>
//                   <h3 className="text-xl">{item.nombre}</h3>
//                   <p className="text-gray-400">${item.precio} x {item.quantity}</p>
//                   <p className="text-gray-400">Total: ${item.precio * item.quantity}</p>
//                 </div>
//                 <button onClick={() => removeFromCart(index)} className="ml-auto text-red-500">
//                   <RiDeleteBin2Line size={24} />
//                 </button>
//               </div>
//               <input
//                 type="text"
//                 className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none text-gray-300"
//                 placeholder="Nota de pedido..."
//               />
//             </div>
//           ))}
//         </div>
//         <div className="lg:sticky lg:top-8 self-start">
//           <div className="mt-8 p-4 bg-[#1F1D2B] rounded-lg max-w-md">
//             <div className="flex justify-between mb-4">
//               <span className="text-gray-400">Descuento:</span>
//               <span>$0</span>
//             </div>
//             <div className="flex justify-between text-xl font-semibold">
//               <span>Total:</span>
//               <span>${calcularTotal()}</span>
//             </div>
//           </div>
//           <div className="mt-8 flex space-x-4">
//             <button
//               onClick={() => navigate('/')} // Redirige al inicio
//               className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg"
//             >
//               Volver al Inicio
//             </button>
//             <button
//               onClick={() => navigate('/checkout')} // Redirige a checkout
//               className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg"
//             >
//               Finalizar Compra
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;

import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; 

const Item = () => {
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate(); 

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className="p-4 lg:p-8 min-h-screen bg-[#262837] text-gray-300">
      <h1 className="text-2xl lg:text-3xl mb-6 lg:mb-8">Detalle de la Compra</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Sección de productos con scroll */}
        <div className="lg:col-span-2 overflow-y-auto max-h-[50vh] lg:max-h-[70vh]">
          {cart.map((item, index) => (
            <div key={index} className="bg-[#1F1D2B] p-4 lg:p-6 rounded-xl flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-4">
                <img src={item.imagen} className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg" alt={item.nombre} />
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl">{item.nombre}</h3>
                  <p className="text-gray-400 text-sm lg:text-base">${item.precio} x {item.quantity}</p>
                  <p className="text-gray-400 text-sm lg:text-base">Total: ${item.precio * item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="ml-auto text-red-500">
                  <RiDeleteBin2Line size={20} lg:size={24} />
                </button>
              </div>
              <input
                type="text"
                className="bg-[#1F1D2B] py-2 px-3 lg:py-2 lg:px-4 rounded-lg outline-none text-gray-300 text-sm lg:text-base"
                placeholder="Nota de pedido..."
              />
            </div>
          ))}
        </div>
        {/* Sección de total y botones que se queda fija */}
        <div className="lg:sticky lg:top-8 self-start">
          <div className="mt-4 lg:mt-8 p-4 bg-[#1F1D2B] rounded-lg max-w-full lg:max-w-md">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400 text-sm lg:text-base">Descuento:</span>
              <span className="text-sm lg:text-base">$0</span>
            </div>
            <div className="flex justify-between text-lg lg:text-xl font-semibold">
              <span>Total:</span>
              <span>${calcularTotal()}</span>
            </div>
          </div>
          <div className="mt-4 lg:mt-8 flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
            <button
              onClick={() => navigate('/')} // Redirige al inicio
              className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg text-sm lg:text-base"
            >
              Volver al Inicio
            </button>
            <button
              onClick={() => navigate('/checkout')} // Redirige a checkout
              className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg text-sm lg:text-base"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
