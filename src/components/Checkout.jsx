import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');
  const { clearCart } = useShoppingCart();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log({ ...data, paymentMethod, deliveryOption });
    setSubmitted(true);
    clearCart();
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
                title="Visa"
              >
                <RiVisaFill size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('Mastercard')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'Mastercard' ? 'bg-[#1F1D2B]' : ''}`}
                title="Mastercard"
              >
                <FaCcMastercard size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('Efectivo')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'Efectivo' ? 'bg-[#1F1D2B]' : ''}`}
                title="Efectivo"
              >
                <FaMoneyBillAlt size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('MercadoPago')}
                className={`p-3 lg:p-4 rounded-lg ${paymentMethod === 'MercadoPago' ? 'bg-[#1F1D2B]' : ''}`}
                title="MercadoPago"
              >
                <SiMercadopago size={28} lg={36} />
              </button>
            </div>
            {paymentMethod === '' && <span className="text-red-500 text-xs lg:text-sm">Seleccione un método de pago</span>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2 text-sm lg:text-base">Opción de Entrega:</label>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setDeliveryOption('Comer en el lugar')}
                className={`p-3 lg:p-4 rounded-lg ${deliveryOption === 'Comer en el lugar' ? 'bg-[#1F1D2B]' : ''}`}
                title="Comer en el lugar"
              >
                <GiMeal size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setDeliveryOption('Retirar en el local')}
                className={`p-3 lg:p-4 rounded-lg ${deliveryOption === 'Retirar en el local' ? 'bg-[#1F1D2B]' : ''}`}
                title="Retirar en el local"
              >
                <BsShopWindow size={28} lg={36} />
              </button>
              <button
                type="button"
                onClick={() => setDeliveryOption('Envío a domicilio')}
                className={`p-3 lg:p-4 rounded-lg ${deliveryOption === 'Envío a domicilio' ? 'bg-[#1F1D2B]' : ''}`}
                title="Envío a domicilio"
              >
                <MdOutlineDeliveryDining size={28} lg={36} />
              </button>
            </div>
          </div>

          {deliveryOption === 'Envío a domicilio' && (
            <div className="mb-4">
              <div className="mb-4">
                <label htmlFor="direccion" className="block text-gray-400 mb-2 text-sm lg:text-base">Dirección:</label>
                <input
                  type="text"
                  id="direccion"
                  {...register('direccion', { required: deliveryOption === 'Envío a domicilio' })}
                  className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
                />
                {errors.direccion && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="localidad" className="block text-gray-400 mb-2 text-sm lg:text-base">Localidad:</label>
                <input
                  type="text"
                  id="localidad"
                  {...register('localidad', { required: deliveryOption === 'Envío a domicilio' })}
                  className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
                />
                {errors.localidad && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="Descripcion" className="block text-gray-400 mb-2 text-sm lg:text-base">Descripcion:</label>
                <input
                  type="text"
                  id="descripcion"
                  {...register('descripcion', { required: deliveryOption === 'Envío a domicilio' })}
                  className="w-full p-2 bg-[#1F1D2B] rounded-lg outline-none text-sm lg:text-base"
                />
                {errors.localidad && <span className="text-red-500 text-xs lg:text-sm">Este campo es requerido</span>}
              </div>
            </div>
          )}

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
