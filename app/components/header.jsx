import logo from "../../public/logo.png";
import Image from "next/image";

import React from "react";

function Header() {
  return (
    <div className="flex flex-col text-gray-600">
      <Image src={logo} alt="Paragon Logo" className="p-2" />

      <p className="capitalize text-center">-search-</p>
      <input
        type="text"
        placeholder="MOVIE, CITY, THEATER, ZIP"
        className=" mx-auto placeholder-gray-600 p-3 w-2/3 border-gray-500 border-2"
      />
    </div>
  );
}

export default Header;
