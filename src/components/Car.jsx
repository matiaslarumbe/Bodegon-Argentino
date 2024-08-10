// import React from 'react'
// import {RiCloseFill, RiDeleteBin2Line} from "react-icons/ri";
// const Car = (props) => {
//     const {showOrder,setShowOrder } = props
//   return (
//     <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
//           {/* Ordenes */}
//           <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full pb">
//           <RiCloseFill onClick={() => setShowOrder(false)} className=" lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
//           <h1 className="text-xl my-4">Orden #151416</h1>
//           {/*Botones */}
//           <div className="flex items-center gap-4 flex-wrap mb-8">
//             <button className="bg-[#28cfe7] text-white py-2 px-4 rounded-xl">Cenar en</button>
//             <button className=" text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500">Ir</button>
//             <button className=" text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
//           </div>
//           {/* Car */}
//           <div>
//               <div className="grid grid-cols-6 mb-4 p-4">
//                 <h5 className="col-span-4">Elemento</h5>
//                 <h5 className="text-left">Cantidad</h5>
//                 <h5 className="text-right pl-8">Precio</h5>
//               </div>
//               {/* Productos */}
//               <div className="h-[400px] md:h-[700px] lg-[540px] overflow-scroll">
//                  {/* Producto */}
//               <div className="bg-[#262837] p-4 rounded-xl mb-4">
//                 <div className="grid grid-cols-6 mb-2">
//                     {/* Descripcion Producto */}
//                   <div className="col-span-4 flex items-center gap-3">
//                     <img src="milanesa-con-papas.jpg" className="w-10 h-10 object-cover"/>
//                     <div>
//                       <h5 className="text-sm">Milanesa de carne...</h5>
//                       <p className="text-xs text-gray-500">$3500</p>
//                     </div>
//                   </div>
//                   {/* Cantidad */}
//                   <div>
//                     <span>2</span>
//                   </div>
//                   {/* Precio */}
//                   <div>
//                     <span>$7000</span>
//                   </div>
//                 </div>
//                 {/*Nota */}
//                 <div className="grid grid-cols-6 items-center">
//                   <form className="col-span-5">
//                     <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Nota de pedido..."/>
//                   </form>
//                   <div>
//                     <button className="border border-red-500 p-2 rounded-lg">
//                       <RiDeleteBin2Line className="text-red-500"/>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-[#262837] p-4 rounded-xl mb-4">
//                 <div className="grid grid-cols-6 mb-2">
//                     {/* Descripcion Producto */}
//                   <div className="col-span-4 flex items-center gap-3">
//                     <img src="matambre-pizza.jpg" className="w-10 h-10 object-cover"/>
//                     <div>
//                       <h5 className="text-sm">Matambre a la...</h5>
//                       <p className="text-xs text-gray-500">$5000</p>
//                     </div>
//                   </div>
//                   {/* Cantidad */}
//                   <div>
//                     <span>1</span>
//                   </div>
//                   {/* Precio */}
//                   <div>
//                     <span>$5000</span>
//                   </div>
//                 </div>
//                 {/*Nota */}
//                 <div className="grid grid-cols-6 items-center">
//                   <form className="col-span-5">
//                     <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Nota de pedido..."/>
//                   </form>
//                   <div>
//                     <button className="border border-red-500 p-2 rounded-lg">
//                       <RiDeleteBin2Line className="text-red-500"/>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-[#262837] p-4 rounded-xl mb-4">
//                 <div className="grid grid-cols-6 mb-2">
//                     {/* Descripcion Producto */}
//                   <div className="col-span-4 flex items-center gap-3">
//                     <img src="fideos-con-bolognesa.jpg" className="w-10 h-10 object-cover"/>
//                     <div>
//                       <h5 className="text-sm">Fideos caseros a la...</h5>
//                       <p className="text-xs text-gray-500">$3500</p>
//                     </div>
//                   </div>
//                   {/* Cantidad */}
//                   <div>
//                     <span>2</span>
//                   </div>
//                   {/* Precio */}
//                   <div>
//                     <span>$7000</span>
//                   </div>
//                 </div>
//                 {/*Nota */}
//                 <div className="grid grid-cols-6 items-center">
//                   <form className="col-span-5">
//                     <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Nota de pedido..."/>
//                   </form>
//                   <div>
//                     <button className="border border-red-500 p-2 rounded-lg">
//                       <RiDeleteBin2Line className="text-red-500"/>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               </div>

//           </div>
//           {/*Enviar pago*/}
//           <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
//             <div className="flex items-center justify-between mb-4">
//               <span className="text-gray-400">Descuento</span>
//               <span>$0</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-400">Total</span>
//               <span>$19000</span>
//             </div>
//             <div>
//               <button className="bg-[#28cfe7] w-full py-2 px-4 rounded-lg">
//                 Continue su pago
//               </button>
//             </div>
//           </div>
//           </div>
//         </div>
//   )
// }

// export default Car


import React from 'react';
import { RiCloseFill, RiDeleteBin2Line } from "react-icons/ri";
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Car = ({ showOrder, setShowOrder }) => {
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate(); // Usa useNavigate para manejar la navegación

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
      {/* Ordenes */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full pb-10">
        <RiCloseFill onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
        <h1 className="text-xl my-4">Orden #151416</h1>
        {/*Botones */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#28cfe7] text-white py-2 px-4 rounded-xl">Cenar en</button>
          <button className="text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500">Ir</button>
          <button className="text-[#28cfe7] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
        </div>
        {/* Car */}
        <div>
          {/* Productos */}
          <div className="overflow-auto max-h-[calc(100vh-250px)] pb-24">
            {cart.map((item, index) => (
              <div key={index} className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-2">
                  {/* Descripcion Producto */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src={item.imagen} className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">{item.nombre}</h5>
                      <p className="text-xs text-gray-500">${item.precio}</p>
                    </div>
                  </div>
                  {/* Cantidad */}
                  <div>
                    <span>{item.quantity}</span>
                  </div>
                  {/* Precio */}
                  <div>
                    <span>${item.precio * item.quantity}</span>
                  </div>
                </div>
                {/*Nota */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Nota de pedido..." />
                  </form>
                  <div>
                    <button onClick={() => removeFromCart(index)} className="border border-red-500 p-2 rounded-lg">
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
              onClick={() => navigate('/item')} // Redirige a /item al hacer clic
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

