import React from "react";
import assets1 from "../../assets/images/appstore.png";
import assets2 from "../../assets/images/appstore1.png";
export const Footer = () => {
  return (
    <div className="bg-purple">
      <div className="text-white text-center pt-20">
        <h2 className="text-3xl">
          <span className="font-bold">Get more </span>done on the go
        </h2>
        <p className="mt-3">
          Need something done fast? Download the app to book your Tasker,
          message them quickly <br></br>and even send photos with ease - make it
          happen now
        </p>
        <div className="flex justify-center mt-10">
          <img src={assets1} className="w-40 mr-5" />
          <img src={assets2} className="w-40" />
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="md:w-3/12">
            <h1 className="text-3xl font-bold">Dabbler</h1>
          </div>
          <div className="md:w-4/12 flex justify-between">
            <a href="# ">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Support</a>
          </div>
          <div className="md:w-[3/12] flex justify-between items-center"></div>
        </div>
      </div>
      <hr className="bg-white lg:w-10/12 mx-auto mt-5"></hr>
      <div className="flex justify-between items-center text-white lg:w-10/12 mx-auto py-5">
        <div className="5/12">
          <p>© Copyright 2023, All Rights Reserved</p>
        </div>
        <div className="w-5/12 text-end">
          <a href="#">Privacy Policy</a>
          <a href="#" className="ml-5">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};
