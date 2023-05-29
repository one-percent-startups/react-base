import React from "react";
import { AppNavbar } from "../components/navbar/AppNav";
import asset1 from "../assets/images/Group 82.png";
import asset2 from "../assets/images/double-right.png";
import asset3 from "../assets/images/Group 81.png";
import asset4 from "../assets/images/Rectangle.png";
import asset5 from "../assets/images/asset5.png";
import asset6 from "../assets/images/Group 83.png";
import asset7 from "../assets/images/Group 84.png";
import asset8 from "../assets/images/Group 66.png";
import asset9 from "../assets/images/asset9.png";
import asset10 from "../assets/images/Group 75.png";
import lightLogo from "../assets/images/Logo White.png";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsApple,
  BsFillPlayFill,
} from "react-icons/bs";
// import {CheckIcon} from "@heroicons/react/20"
import { CheckIcon } from "@heroicons/react/20/solid";
export const AppLanding = () => {
  return (
    <>
      <div className="bg-[#DFE7FF] ">
        <AppNavbar />

        <div className="max-w-[1280px] mx-auto">
          <div className="mt-20 text-center pb-20">
            <h4 className="text-primary_blue text-normal  font-bold capitalize">
              LAUNCHING IN SEPTEMBER 2023
            </h4>
            <h1 className="mt-4 text-black lg:text-8xl md:text-6xl font-semibold inline-flex items-baseline ">
              Grow your home service
              {/* <img src={asset1} className="w-32 h-14 mx-4" /> */}
            </h1>
            <h1 className="text-black lg:text-8xl md:text-6xl  font-semibold inline-flex items-center ">
              {" "}
              business by 10x <img src={asset2} className="w-32 mx-4" />
              <button
                type="button"
                className="rounded-[50px] bg-primary_blue px-8 py-5 mx-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Us
              </button>
            </h1>
            {/* <h1 className="text-black lg:text-8xl md:text-6xl  font-semibold inline-flex items-center ">
              {" "}
              at your app
            </h1> */}
            <div className="flex items-center justify-center mt-10">
              <img src={asset3} className="w-8/12 " />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark_blue flex flex-col justify-center items-center py-32">
        <h1 className="text-6xl text-center text-white">
          <span className="text-primary_blue">Manage</span> all your needs from{" "}
          <br></br>
          our App
        </h1>
        <img src={asset4} className="w-3/12" />
        <p className="text-xl lg:w-4/12 text-[#9C9EB1] text-center">
          One app for all your home management needs. <br></br>Say goodbye to
          all of the headache with managing multiple apps, service providers,
          and arrivals times.
        </p>
        <button
          type="button"
          className="rounded-[50px] bg-primary_blue px-8 py-3 mt-10 mx-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join Us Now
        </button>
      </div>

      <div className="relative text-6xl max-w-[1280px] mx-auto flex justify-end z-1">
        <div className="absolute top-[8.5rem] left-0 lg:w-6/12">
          <h1 className="mt-4 text-black lg:text-8xl md:text-7xl font-semibold inline-flex items-end ">
            Why <img src={asset5} className="w-36 mx-4" />
          </h1>
          <h1 className="mt-4 text-black lg:text-8xl md:text-7xl font-semibold inline-flex items-baseline ">
            Do it all?
          </h1>
        </div>
        <div className="lg:w-12/12 h-[550px]  flex flex-col items-end overflow-y-auto my-32 z-10">
          <div className="lg:w-5/12 rounded-[55px] bg-[#F6F5F8] p-12">
            <h1 className=" text-7xl text-primary_blue">*</h1>
            <p className="text-3xl font-semibold">
              Our services save your time and reduce stress, allowing you to
              focus on what’s important.
            </p>
          </div>

          <div className=" lg:w-5/12 rounded-[55px] bg-[#E0F3FF] px-12 py-16 mt-5">
            <img src={asset6} className="w-8/12 mx-auto" />
            <h2 className="text-3xl  mt-5 text-center font-semibold">
              Amazing earnings
            </h2>
            <p className="text-base text-[#666] text-center mt-3 ">
              We pay $26+ per hour (excluding tips)<br></br>Top partners earn
              more than<br></br> $1500 a week
            </p>
          </div>
          <div className="lg:w-5/12 rounded-[55px] bg-[#F3EDFF] px-12 py-16 mt-5">
            <img src={asset7} className="w-8/12 mx-auto" />
            <h2 className="text-3xl  mt-5 text-center font-semibold">
              Be your own boss
            </h2>
            <p className="text-base text-[#666] text-center mt-3 ">
              You tell us where & when<br></br>We’ll fill up your time with
              bookings.
            </p>
          </div>
          <div className=" lg:w-5/12 rounded-[55px] bg-[#FFF3E1] px-12 py-16 mt-5">
            <img src={asset8} className="w-8/12 mx-auto" />
            <h2 className="text-3xl  mt-5 text-center font-semibold">
              Best support
            </h2>
            <p className="text-base text-[#666] text-center mt-3 ">
              We will fix any problem within<br></br>24 hours or provide a
              refund.
            </p>
          </div>
          <div className="lg:w-5/12 rounded-[55px] bg-[#1E1E2E] p-12 mt-5">
            <h1 className=" text-7xl text-primary_blue">*</h1>
            <p className="text-3xl text-white font-semibold">
              At Do It All we are focused on making home what it should be - a
              place you truly enjoy coming home
            </p>
          </div>
          <div className=" lg:w-5/12 rounded-[55px] bg-[#F6F5F8] px-12 py-16 mt-5">
            <img src={asset9} className="w-8/12 mx-auto" />
            <h2 className="text-3xl  mt-5 text-center font-semibold">
              All-in-one
            </h2>
            <p className="text-base text-[#666] text-center mt-3 ">
              Everything you need - in one app. Visit<br></br>the App Store or
              Google Play.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark_blue pt-32 pb-56">
        <div className="max-w-[1280px] mx-auto text-center">
          <h3 className="text-primary_blue">Get started</h3>
          <h1 className="text-7xl font-bold text-white mt-5">
            Start earning in<br></br>{" "}
            <span className="text-primary_blue"> 4 simple steps</span>
          </h1>

          <div className="flex justify-between item-center mt-24 ">
            <div className="w-3/12 mr-10">
              <div className="flex items-center justify-between">
                <div className="w-16 p-5 bg-white rounded-full font-bold text-xl">
                  1
                </div>
                <div className="w-8/12 h-[1px] bg-white"></div>
              </div>
              <h3 className="text-white text-start mt-10">
                Application & phone screen
              </h3>
              <p className="text-[#A0A1B1] text-start leading-8 mt-3">
                Complete our brief online <br></br> application, and we’ll call
                you in 24- 48 hours.
              </p>
            </div>

            <div className="w-3/12 mr-10">
              <div className="flex items-center justify-between ">
                <div className="w-16 p-5 bg-white rounded-full font-bold text-xl">
                  2
                </div>
                <div className="w-8/12 h-[1px] bg-white"></div>
              </div>
              <h3 className="text-white text-start mt-10">
                Interview at our office
              </h3>
              <p className="text-[#A0A1B1] text-start leading-8 mt-3">
                Visit our office to meet the team and tell us why you want to be
                a cleaner with us!
              </p>
            </div>

            <div className="w-3/12 mr-10">
              <div className="flex items-center justify-between mr-16">
                <div className="w-16 p-5 bg-white rounded-full font-bold text-xl">
                  3
                </div>
                <div className="w-8/12 h-[1px] bg-white"></div>
              </div>
              <h3 className="text-white text-start mt-10">Safety Audit</h3>
              <p className="text-[#A0A1B1] text-start leading-8 mt-3">
                Our quality expert will accompany you on real customer jobs to
                familiarize you with the cleaning job and suggest equipment for
                you to procure to deliver a high quality service
              </p>
            </div>

            <div className="w-3/12">
              <div className="flex items-center justify-between mr-16">
                <div className="w-16 p-5 bg-green-600 rounded-full font-bold text-xl">
                  <CheckIcon className="w-6 font-bold" />
                </div>
                <div className="w-8/12 h-[1px] bg-white"></div>
              </div>
              <h3 className="text-white text-start mt-10">Start working</h3>
              <p className="text-[#A0A1B1] text-start leading-8 mt-3">
                You’ll get jobs as soon as you complete your audit jobs, procure
                equipment and input your availability into the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark_blue pt-20">
        <div className="bg-primary_blue pt-32">
          <div className="max-w-[1280px] mx-auto flex justify-center items-center">
            <div className="w-3/12">
              <h1 className="text-white text-7xl leading-[90px]">
                Join<br></br>us now
              </h1>
              <p className="text-white lg:w-12/12 text-lg mt-5">
                Partner with us and gain access to a network of reliable
                customers
              </p>
              <button
                type="button"
                className="mt-8 text-xl rounded-[50px] bg-white px-5 py-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us now
              </button>
            </div>
            <div className="w-8/12 ">
              <img src={asset10} className="w-[40rem] ml-auto -mt-56" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark_blue pt-20">
        <div className="max-w-[1280px] mx-auto ">
          <div className="flex justify-between items-start">
            <div className="lg:w-4/12 mb-10">
              <img src={lightLogo} className="w-64" />
              {/* <div className="lg:w-5/12 flex justify-between text-white text-[24px] mt-10">
                <BsTwitter />
                <BsFacebook />
                <BsLinkedin />
              </div>
              <div className="lg:w-10/12 flex justify-between text-white text-[24px] mt-10">
                <button
                  type="button"
                  className="flex items-center rounded-[50px] bg-primary_blue px-5 py-4 text-lg  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <BsApple className="mr-3" />
                  App Store
                </button>
                <button
                  type="button"
                  className="flex items-center rounded-[50px] bg-primary_blue px-5 py-4 text-lg  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <BsFillPlayFill className="mr-3" />
                  Google Play
                </button>
              </div> */}
            </div>
            <div className="lg:w-7/12 flex justify-between items-start">
            <button
                type="button"
                className="ml-auto text-xl rounded-[50px] bg-white px-5 py-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us now
              </button>
              {/* <div className="w-3/12">
                <p className="font-semibold text-white">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
              </div>
              <div className="w-3/12">
                <p className="font-semibold text-white">Services</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
                <p className="font-semibold text-[#A0A1B1] mt-3">Company</p>
              </div>
              <div className="w-4/12">
                <p className="font-semibold text-white">Newsletter</p>
                <div className="flex justify-between"></div>
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-dark_blue block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-inner  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Email"
                    aria-describedby="email-optional"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <hr className="border-[#262737]" />
          <div className="py-5 flex items-center justify-between text-white">
            <div>
              {" "}
              <p>© 2023, Do It All</p>
            </div>
            <div className="inline-flex">
              {" "}
              <p className="mr-4">Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppLanding;
