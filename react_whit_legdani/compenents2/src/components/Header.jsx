import HeaderButton from "./HeaderButton";
import Search from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faEnvelope,faBell } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className="flex h-[12%] justify-between px-5 p-6 items-center shadow-md w-full">
      <Search />
      <div className="flex gap-2 items-center">
        <HeaderButton icon={{ type: "fa-solid", icon: "fa-bars" }} number="2" />
        <HeaderButton
          icon={{ type: "fa-regular", icon: "fa-bell" }}
          number="7"
        />
        <HeaderButton
          icon={{ type: "fa-regular", icon: "fa-envelope" }}
          number="5"
        />

        <img
          className="h-[50px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 relative top-[-5px] mx-4"
          src="./assets/image.png"
          alt="profile picture"
        />
      </div>
    </header>
  );
}

export default Header;