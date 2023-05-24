import React from "react";

export const NavBar = () => {
  return (
    <div className="border-b ">
    <div className="max-w-[1280px] w-full flex items-center justify-between mx-auto h-[95px] ">
      <h1 className="text-3xl font-bold w-6/12 ">Dabbler</h1>
      <button
        type="button"
        className="rounded-lg hidden md:block rounded-md bg-purple px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
      >
        Get Notified
      </button>
    </div>
    </div>
  );
};
