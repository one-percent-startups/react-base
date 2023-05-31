import React from "react";
import logo from "../../assets/images/LogoBlack.png";
export const AppNavbar = ({onClick}) => {
  return (
    <div className="flex justify-center bg-[#DFE7FF] px-5 md:px-0">
      <div className="  max-w-[1280px] w-full flex items-center justify-between mx-auto h-[95px]">
        <div className="flex justify-between w-full p">
          <div>
            <img src={logo} className="w-48" />
          </div>
          <div className="w-6/12 flex justify-end ">
            {/* <button
            type="button"
            className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-900 mr-3"
          >
            Our App
          </button> */}
            <button
              onClick={onClick}
              type="button"
              className="rounded-3xl bg-primary_blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
