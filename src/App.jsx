import { useState } from "react";
import {
  RiMenu3Line,
  RiUser3Line,
  RiAddLine,
  RiPieChart2Line,
  RiCloseFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Sidebar from "./components/Sidebar";
import Car from "./components/Car";
import Header from "./components/Header";
import Card from "./components/Card";
import { platos } from "./components/Category";
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import Item from "./components/Item";
import Checkout from "./components/Checkout";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const cambiarCategoria = (category) => {
    setCategoriaSeleccionada(category);
  };

  const filtrarPlatos = (category) => {
    if (category === "Todos") {
      return platos;
    } else {
      return platos.filter((plato) => plato.category === category);
    }
  };

  return (
    <ShoppingCartProvider>
      <Router>
        <div className="bg-[#262837] w-full min-h-screen">
          {/* Rutas */}
          <Routes>
            <Route path="/" element={
              <>
                <Sidebar showMenu={showMenu} />
                <Car showOrder={showOrder} setShowOrder={setShowOrder} />
                {/* {Menu Movil } */}
                <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-300 py-4 p-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
                  <button className="p-2">
                    <RiUser3Line />
                  </button>
                  <button className="p-2">
                    <RiAddLine />
                  </button>
                  <button onClick={toggleOrders} className="p-2">
                    <RiPieChart2Line />
                  </button>
                  <button onClick={toggleMenu} className="text-white p-2">
                    {showMenu ? <RiCloseFill /> : <RiMenu3Line />}
                  </button>
                </nav>
                <main className="lg:pl-32 lg:pr-96 pb-20">
                  <div className="md:p-8 p-4">
                    {/* Header */}
                    <Header cambiarCategoria={cambiarCategoria} categoriaSeleccionada={categoriaSeleccionada} />
                    {/* Title Content */}
                    <div className="flex items-center justify-between mb-16">
                      <h1 className="text-xl text-gray-300">Elegir plato</h1>
                      <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                        <RiArrowDownSLine />Cenar en
                      </button>
                    </div>
                    {/* Content */}
                    {/* Card */}
                    <Card platos={filtrarPlatos(categoriaSeleccionada)} />
                  </div>
                </main>
              </>
            } />
            <Route path="/item" element={<Item />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;


