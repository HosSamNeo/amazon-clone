import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* top nav */}

      <div className="flex items-center align-center bg-amazon_blue p-1 flex-grow py-1">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            width={150}
            height={30}
            src="/amazon.png"
            alt="logo"
            className="cursor-pointer p-1"
          />
        </div>

        <div className="cursor-pointer items-center h-10 rounded-md flex-grow hidden sm:flex bg-yellow-400 hover:bg-yellow-500 my-2 mx-2">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer link">
            <p>Hello, Hossam</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div className="cursor-pointer link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black text-center">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav  */}

      <div className="p-1 flex items-center text-white bg-amazon_blue-light space-x-3">
        <p className="flex py-1 cursor-pointer">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <div className="link">Prime video</div>
        <div className="link">Amazon business</div>
        <div className="link">Today deal</div>
        <div className="link hidden lg:inline-flex">Electronics</div>
        <div className="link hidden lg:inline-flex">Food & grocery</div>
        <div className="link hidden lg:inline-flex">Prime</div>
        <div className="link hidden lg:inline-flex">Buy again</div>
        <div className="link hidden lg:inline-flex">Shooper toolkit</div>
        <div className="link hidden lg:inline-flex">Health & personal care</div>
      </div>
    </header>
  );
};

export default Header;
