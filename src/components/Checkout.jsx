import React, { useState } from 'react';

const Checkout = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ nombre, email, telefono });
  };

  return (
    <div className="p-8 min-h-screen bg-[#262837] text-gray-300">
      <h1 className="text-3xl mb-8">Finalizar la Compra</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-400 mb-2">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-400 mb-2">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#28cfe7] text-white py-2 px-4 rounded-lg w-full"
        >
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
