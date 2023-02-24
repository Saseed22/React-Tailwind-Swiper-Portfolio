import React, { useState } from "react";
import { navigation } from "../data";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  // framer-motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const UlVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div onClick={() => setOpen(true)} className="cursor-pointer text-white">
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={UlVariants}
        initial="hidden"
        animate={open ? "visible" : ""}
        className={`${
          open ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 flex flex-col w-full justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setOpen(false)}
          className=" cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>

        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8 cursor-pointer">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl capitalize"
              >
                {item.name}{" "}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
