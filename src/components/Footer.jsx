import { Logo } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { userType } = useSelector((store) => store.auth);

  return (
    <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-gradient-to-r from-purple-200 to-blue-300 text-white mt-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Logo />

          <div className="flex flex-col ml-3 justify-center">
            <h1 className="font-display text-xl md:text-2xl text-yellow-500">Rentify</h1>
            <p className="text-xs md:text-sm text-blue-900">
              Where Renting Meets Simplicity
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 text-blue-900">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="mr-4 hover:underline md:mr-6 text-blue-900">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center text-blue-900">
        2024 |{" "}
        <Link to={`/${userType}`} className="hover:underline text-pink-900">
          Rentify
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
