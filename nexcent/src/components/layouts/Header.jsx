import React, { useState } from "react";
import nextcent from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import SignUpComponent from "./SignUpComponent";

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="flex justify-between items-center max-lg:px-3 xl:px-32 max-xl:px-12 py-6 bg-tertiary max-lg:fixed max-lg:w-full">
      <div className="max-lg:pl-3">
        <img src={nextcent} alt="nextcent-logo" />
      </div>

      <div
        className={`w-[70%] max-xl:w-[73%]  max-lg:bg-white flex lg:justify-between lg:items-center max-lg:flex-col text-secondary font-normal max-lg:fixed max-lg:top-18 max-lg:h-96 max-lg:w-full max-lg:px-4 ${
          toggle ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <nav>
          <ul className="flex gap-x-8 max-lg:gap-y-4 max-lg:flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="">Feature</Link>
            </li>
            <li>
              <Link to="">Product</Link>
            </li>
            <li>
              <Link to="">Testimoial</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex gap-x-8 max-lg:gap-y-4 max-lg:flex-col lg:items-center max-lg:mt-4">
            <li>
              <Link to="/" className="text-secondary">
                Login
              </Link>
            </li>
            <li>
              <SignUpComponent layoutDisplay="block" text="Sign up" />
            </li>
          </ul>
        </nav>
      </div>

      <button
        className="inline-block cursor-pointer lg:hidden max-lg:pr-3"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Menu />
      </button>
    </header>
  );
};

export default Header;
