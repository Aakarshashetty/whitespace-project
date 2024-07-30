import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between  items-center bg-primary-color-one py-[16px] px-[220px]">
      <img src="/images/logo.jpg" alt="logo" width={191} />
      <div className="flex justify-between">
        <div className="px-5">Products</div>
        <div className="px-5">Solutions</div>
        <div className="px-5">Resources</div>
        <div className="px-5">Pricing</div>
      </div>
      <div className="flex gap-5">
        <button className="px-5 bg-[#FFE492] text-primary-color-one rounded-md text-sm">
          Login
        </button>

        <button className="bg-primary-color-two rounded-md p-2 text-sm">
          Try Whitespace free
        </button>
      </div>
    </div>
  );
};

export default Header;
