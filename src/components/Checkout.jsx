import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true); // Cambiar el estado a 'true' para mostrar el mensaje
  };

  return (
    <div className="p-8 min-h-screen bg-[#262837] text-gray-300">
      <h1 className="text-3xl mb-8">Finalizar la Compra</h1>
      
      {submitted ? (
        <div className="text-center text-green-500 text-2xl">
          ¡Gracias por su compra!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-400 mb-2">Nombre:</label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            />
            {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            />
            {errors.email && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-400 mb-2">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              {...register('telefono', { required: true })}
              className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            />
            {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <button
            type="submit"
            className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg w-full"
          >
            Finalizar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;


