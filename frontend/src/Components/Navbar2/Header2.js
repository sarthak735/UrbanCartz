import React, { useState } from "react";
import UC_logo from "../../assets/UC_logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Header2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () =>{
    setShowMenu(preve => !preve)
  }
  return (
    <header className=" py-4 shadow-md w-full px-12 md:px-10">
      <div className="flex  items-center h-full justify-between">
        <Link to={""}>
          <div className="  h-12 flex flex-row items-center w-full space-x-7">
            <div>
              <img src={UC_logo} className=" h-20" />
            </div>
            <div className="h-10 hover:border hover:border-black rounded-full overflow-hidden">
              <input
                className=" w-72 h-11 border bg-[#EDECEC] pl-4 rounded-l-full outline-none"
                type="text"
                placeholder="Search..."
              />
              <button className=" w-20 border-gray-600 py-1 rounded-r-full h-full text-white bg-violet-600 hover:bg-black hover:text-white px-7">
                <CiSearch size="18" />
              </button>
            </div>
            <img src="" alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-9">
          <div onClick={handleShowMenu}>
            <div className=" flex items-center gap-4 text-base cursor-pointer">
              <FaUserCircle size="30" />
              
            </div>

            {showMenu && (
              <div className="absolute  bg-white py-2 px-2 shadow drop-shadow-md">
                <p className=" whitespace-nowrap cursor-pointer">New product</p>
                <p className=" whitespace-nowrap cursor-pointer"><Link to={"login"}>Log In</Link></p>
              </div>
            )}
          </div>
          <div className="">
            <IoMdHeartEmpty size="30" />
          </div>
          <div className=" relative">
            <BsCart2 size="30" />
            <div className=" absolute -top-1 -right-1 bg-red-600 text-white h-4 w-4 rounded-full m-0 text-sm text-center">
              0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
