import React from "react";
import { useState } from "react";
import HeaderIcon from "./HeaderIcon";
import { BsLinkedin } from "react-icons/bs";
import { BiSearch, BiMessageDetail } from "react-icons/bi";
import { AiOutlineHome, AiFillBell } from "react-icons/ai";
import { HiUserGroup, HiOutlineShoppingBag } from "react-icons/hi";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Header = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const user = useSelector(selectUser);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="flex items-center justify-evenly bg-gray-900 text-white py-3 sticky top-0 z-10">
      <div className="flex space-x-4 items-center">
        <BsLinkedin size={34} className="text-blue-600" />
        <div className="flex space-x-3 bg-gray-800 rounded-full py-2 px-2">
          <BiSearch size={30} />
          <input
            placeholder="Search"
            className="bg-inherit hidden md:block rounded-full outline-none px-1"
          />
        </div>
      </div>

      <div className="flex space-x-4 text-gray-300">
        <HeaderIcon
          id={1}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          Icon={AiOutlineHome}
          title={"Home"}
        />
        <HeaderIcon
          id={2}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          Icon={HiUserGroup}
          title={"My Network"}
        />
        <HeaderIcon
          id={3}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          Icon={HiOutlineShoppingBag}
          title={"Jobs"}
        />
        <HeaderIcon
          id={4}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          Icon={BiMessageDetail}
          title={"Messages"}
        />
        <HeaderIcon
          id={5}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          Icon={AiFillBell}
          title={"Notifications"}
        />
        {user && (
          <div className="flex flex-col items-center px-2 text-gray-400">
            <div className="flex justify-center">
              <div className="dropdown relative">
                <img
                  src={
                    user.photoUrl
                      ? user.photoUrl
                      : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                  }
                  className="rounded-full w-8 dropdown-toggle cursor-pointer"
                  alt="Avatar"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  referrerPolicy="no-referrer"
                />
                <ul
                  className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      onClick={handleLogout}
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="hidden md:block">Me</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
