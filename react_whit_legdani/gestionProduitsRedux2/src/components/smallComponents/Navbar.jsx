import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation()
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"} href="#" className={`${location.pathname == "/"?"text-blue-500":"text-white"} hover:te`}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/allProduct"} href="#" className={`${location.pathname === "/allProduct"?"text-blue-500":"text-white"}`}>
                Produits
              </Link>
            </li>
            <li>
              <Link to={"/"} href="#" className={`${location.pathname=="/clients"?"text-blue-500":"text-white"}`}>
                Clients
              </Link>
            </li>
            <li>
              <Link to={"/"} href="#" className={`${location.pathname=="/contact"?"text-blue-500":"text-white"}`}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
