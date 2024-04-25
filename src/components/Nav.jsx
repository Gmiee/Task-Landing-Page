import React from 'react';
import img from "../assets/Rao-Logo.png";

const Nav = () => {
  return (
    <div className="flex justify-start items-center h-24 px-4 md:ml-52">
      <img src={img} alt="Rao Logo" className="max-w-full max-h-full" />
    </div>
  );
};

export default Nav;
