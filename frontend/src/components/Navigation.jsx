import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "About us", icon: "person-outline", dis: "translate-x-16" },
    { name: "Timeline", icon: "alarm-outline", dis: "translate-x-32" },
    { name: "Members", icon: "people-outline", dis: "translate-x-48" },
    { name: "Contact Us", icon: "chatbubble-outline", dis: "translate-x-64" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-80" },
  ];
  const [active, setActive] = useState(0);
  //bg-[#f7f7f7]
  return (
    <motion.div
      className="rounded-xl shadow-[24px 24px 46px #aaaaaa, -24px -24px 46px #ffffff] bg-[#00df9a] max-h-[4.4rem] px-6 rounded-t-xl mt-4 "
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
    >
      {/* Your navigation content */}
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navigation;
