import React from "react";
import {
  RiHome6Line,
  RiDiscountPercentLine,
  RiPieChart2Line,
  RiMailLine,
  RiNotification4Line,
  RiSettings5Line,
  RiLoginCircleLine,
} from "react-icons/ri";

const Sidebar = (props) => {
    const {showMenu} = props;

  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center- my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#28cfe7] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiDiscountPercentLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiPieChart2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiNotification4Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiSettings5Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#28cfe7] p-4 flex justify-center rounded-xl text-[#28cfe7] group-hover:text-white transition-colors"
            >
              <RiLoginCircleLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;