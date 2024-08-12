// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { RiVisaFill } from "react-icons/ri";
// import { FaCcMastercard } from "react-icons/fa6";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { SiMercadopago } from "react-icons/si";

// const Checkout = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [submitted, setSubmitted] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const onSubmit = (data) => {
//     console.log({ ...data, paymentMethod });
//     setSubmitted(true);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-[#262837] text-gray-300">
//       <h1 className="text-3xl mb-8">Finalizar la Compra</h1>
      
//       {submitted ? (
//         <div className="text-center text-green-500 text-2xl">
//           ¡Gracias por su compra!
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
//           <div className="mb-4">
//             <label htmlFor="nombre" className="block text-gray-400 mb-2">Nombre:</label>
//             <input
//               type="text"
//               id="nombre"
//               {...register('nombre', { required: true })}
//               className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
//             />
//             {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
//             <input
//               type="email"
//               id="email"
//               {...register('email', { required: true })}
//               className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
//             />
//             {errors.email && <span className="text-red-500">Este campo es requerido</span>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="telefono" className="block text-gray-400 mb-2">Teléfono:</label>
//             <input
//               type="tel"
//               id="telefono"
//               {...register('telefono', { required: true })}
//               className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
//             />
//             {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-400 mb-2">Método de Pago:</label>
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod('Visa')}
//                 className={`p-4 rounded-lg ${paymentMethod === 'Visa' ? 'bg-[#1F1D2B]' : ''}`}
//               >
//                 <RiVisaFill size={36} />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod('Mastercard')}
//                 className={`p-4 rounded-lg ${paymentMethod === 'Mastercard' ? 'bg-[#1F1D2B]' : ''}`}
//               >
//                 <FaCcMastercard size={36} />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod('Efectivo')}
//                 className={`p-4 rounded-lg ${paymentMethod === 'Efectivo' ? 'bg-[#1F1D2B]' : ''}`}
//               >
//                  <FaMoneyBillAlt size={36} />
                
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod('MercadoPago')}
//                 className={`p-4 rounded-lg ${paymentMethod === 'MercadoPago' ? 'bg-[#1F1D2B]' : ''}`}
//               >
//                <SiMercadopago size={36} />
//               </button>
//             </div>
//             {paymentMethod === '' && <span className="text-red-500">Seleccione un método de pago</span>}
//           </div>

//           <button
//             type="submit"
//             className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg w-full"
//           >
//             Finalizar Compra
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate(); // Usa useNavigate para manejar la navegación

  const onSubmit = (data) => {
    console.log({ ...data, paymentMethod });
    setSubmitted(true);
  };

  return (
    <div className="p-4 lg:p-8 min-h-screen bg-[#262837] text-gray-300">
      <h1 className="text-2xl lg:text-3xl mb-6 lg:mb-8">Finalizar la Compra</h1>
      
      {submitted ? (
        <div className="flex flex-col items-center text-center text-green-500 text-xl lg:text-2xl">
        ¡Gracias por su compra!
        <button
          onClick={() => navigate('/')} 
          className="mt-4 bg-[#28cfe7] text-white py-2 px-4 rounded-lg"
        >
          Volver al Inicio
        </button>
      </div>
      
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xs lg:max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-400 mb-2 text-sm lg:text-base">Nombre:</label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
            />
            {errors.nombre && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2 text-sm lg:text-base">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
            />
            {errors.email && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-400 mb-2 text-sm lg:text-base">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              {...register('telefono', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
            />
            {errors.telefono && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2 text-sm lg:text-base">Método de Pago:</label>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('Visa')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'Visa' ? 'bg-[#1F1D2B]' : ''}`}
              >
                <RiVisaFill size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('Mastercard')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'Mastercard' ? 'bg-[#1F1D2B]' : ''}`}
              >
                <FaCcMastercard size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('Efectivo')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'Efectivo' ? 'bg-[#1F1D2B]' : ''}`}
              >
                <FaMoneyBillAlt size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('MercadoPago')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'MercadoPago' ? 'bg-[#1F1D2B]' : ''}`}
              >
                <SiMercadopago size={28} lg={36} />
              </button>
            </div>
            {paymentMethod === '' && <span className="text-red-500 text-xs lg:text-sm">Seleccione un método de pago</span>}
          </div>

          <button
            type="submit"
            className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg w-full text-sm lg:text-base"
          >
            Finalizar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;


