import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import about1 from "../assets/images/about1.svg";
import about2 from "../assets/images/about2.svg";
import { Link } from "react-router-dom";

const AboutPageComponent = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-3/4 mb-12">
      <h2 className="font-heading font-bold mt-8 uppercase">About</h2>
      <div className="">
        <div className="mt-6">
          <p>
          Welcome to Rentify, your go-to platform for all things related to renting properties.
           Whether you're a property owner looking to list your property or a tenant searching
            for your dream home, Rentify is here to simplify the renting process for you.

          </p>
        </div>
        <div className="flex mt-6 justify-center flex-col md:flex-row">
          <div className="md:w-1/2">
            <h4 className="font-bold">Property Owner</h4>
            <div>
              <p>
              As a property owner, Rentify provides you with various tools and features to manage your property effectively. From posting and managing your property listings to creating rental contracts and managing tenants, Rentify streamlines the entire rental process for you.

              </p>
            </div>
          </div>
          <div>
            <img src={about1} alt="" />
          </div>
        </div>
        <div className="flex mt-6 justify-center flex-col md:flex-row">
          <div className="hidden md:block">
            <img src={about2} alt="" className="max-w-sm" />
          </div>
          <div className="md:w-1/2">
            <h4 className="font-bold">Tenant</h4>
            <div>
              <p>
              If you're a tenant, Rentify makes it easy for you to find available properties and connect with property owners for rental inquiries. You can save properties, view property details, sign rental contracts, and manage payments conveniently through Rentify's user-friendly interface.

              </p>
            </div>
          </div>
          <div className="md:hidden">
            <img src={about2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div>
        <header className="flex m-1 shadow-sm">
          <Logo />
          <div className="flex flex-col justify-center ml-2">
            <h5 className="font-display">Rentify</h5>
            <p className="hidden text-xs md:block md:text-sm">
              Where Renting Meets Simplicity
            </p>
          </div>
        </header>
        <AboutPageComponent />
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
          <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8 text-blue-900" />
          <span className="block text-sm  sm:text-center ">
            2024 |{" "}
            <Link to="/" className="hover:underline text-pink-900">
              Rentify
            </Link>
          </span>
        </footer>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <AboutPageComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;
