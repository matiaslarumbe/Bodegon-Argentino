import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Header = ({ cambiarCategoria, categoriaSeleccionada, setBusqueda }) => {
  const categorias = ['Todos', 'Carnes', 'Pastas', 'Verduras y ensaladas', 'Bebidas'];

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <header>
      <div className="flex flex-col md:flex-row md:justify-between md:item-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Bodegon Argentino</h1>
          <p className="text-gray-500">16 abril 2024</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Busqueda"
              onChange={manejarBusqueda} // Captura el evento onChange
            />
          </div>
        </form>
      </div>
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => cambiarCategoria(categoria)}
            className={`relative py-2 pr-4 before:w-full before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px] ${
              categoriaSeleccionada === categoria
                ? 'text-[#28cfe7] before:bg-[#28cfe7] font-bold'
                : 'text-gray-300 before:bg-transparent'
            }`}
          >
            {categoria}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;


