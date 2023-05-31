import React from "react";
import { NavBar } from "../components/navbar";
import asset1 from "../assets/images/Group12.png";
import asset2 from "../assets/images/Group19.png";
import asset3 from "../assets/images/Group20.png";
import asset4 from "../assets/images/Group21.png";
import asset5 from "../assets/images/Group22.png";
import { Footer } from "../components/footer";


const LandingPage = () => {
  return (
    <div className="">
    
      <NavBar />
      <div className="max-w-[1280px] mx-auto">
        <div className=" flex justify-between items-center">
          <div className="w-5/12">
            <span className=" text-sm bg-mustad font-semibold px-4 py-2 rounded-md">
              Launching in September 2023
            </span>
            <h1
              className="text-6xl font-bold  mt-5"
              style={{ lineHeight: "65px" }}
            >
              On-demand home <br></br>services are just <br></br> 24 hours away!
            </h1>
            <p className="text-lg mt-5 text-light_black">
              Enjoy quick, reliable solutions when you need them most<br></br>{" "}
              with our on-demand services
            </p>

            <form className="mt-10 mb-5">
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Enter your email address..."
                  required
                />
                <button
                  type="submit"
                  class="px-8 text-white absolute right-0 bottom-0 bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-l text-sm h-full "
                >
                  Get notified
                </button>
              </div>
            </form>
            <span className=" text-sm border border-purple text-purple font-semibold px-2 py-1 rounded-md">
              Get notified when app launches
            </span>
          </div>
          <div className="w-6/12 text-center ">
            <img src={asset1} className="w-[90%] mx-auto" />
          </div>
        </div>

        <div className="mt-32 ">
          <h1 className="text-4xl font-bold text-center">
            Everyday life made easier
          </h1>
          <p className="text-center text-light_gray mt-5">
            When life gets busy, you don’t have to tackle it alone. Get time
            back for what<br></br> you love without breaking the bank.
          </p>
          <div className="flex justify-between items-center mt-16">
            <div className="w-6/12">
              <img src={asset2} className="text-start " />
            </div>
            <div className="w-5/12">
              <span className=" text-sm bg-light_purple mb-4 font-semibold px-3 py-1 rounded-md">
                freedom from laundry
              </span>
              <h2 className="text-3xl my-5">
                <span className="font-bold">On-demand</span> service designed{" "}
                <br></br>for you
              </h2>
              <p className="text-light_gray">
                Make sure you select the perfect Tasker for your job by<br></br>
                researching their reviews, expertise, and cost. Find a match
                that <br></br>boasts all three of these criteria to ensure a
                successful outcome!
              </p>
              <button className="bg-transparent border-none text-purple mt-5 p-0 font-semibold">
                see how it works
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-32">
          <div className="w-5/12 lg:pl-16">
            <span className=" text-sm bg-light_purple mb-4 font-semibold px-3 py-1 rounded-md">
              24h turnaround time
            </span>
            <h2 className="text-3xl my-5">
              <span className="font-bold">Schedule when it works</span> for
              <br></br> you - as early as today
            </h2>
            <p className="text-light_gray">
              Now is the time to find a schedule that firs your lifestyle!
              <br></br> Get started today and make sure you stay on track
            </p>
            <button className="bg-transparent border-none text-purple mt-5 p-0 font-semibold">
              see how it works
            </button>
          </div>
          <div className="w-6/12">
            <img src={asset3} className="text-start" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-32">
          <div className="w-6/12">
            <img src={asset4} className="text-start" />
          </div>
          <div className="w-5/12">
            <span className=" text-sm bg-light_green mb-4 font-semibold px-3 py-1 rounded-md">
              24/7 customer support
            </span>
            <h2 className="text-3xl my-5">
              Let us be a{" "}
              <span className="font-bold">
                comforting<br></br> presence
              </span>{" "}
              for your journey <br></br>ahead!
            </h2>
            <p className="text-light_gray">
              Our online customer support team is on hand to help you out -
              whatever the issue, day or night, We’re here to make sure your
              delivery arrives promptly and that any bumps in the road are
              smoothed out quickly!
            </p>
            <button className="bg-transparent border-none text-purple mt-5 p-0 font-semibold">
              see how it works
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-48">
          <div className="w-6/12">
            <img src={asset5} className="w-[90%] text-start" />
          </div>
          <div className="w-5/12">
            <h2 className="text-4xl my-5">
              Having a reliable team of
              <span className="font-bold"> professionals</span>{" "}
            </h2>
            <p className="text-light_black">
              Build your team of local, background-checked Taskers to help with
              and for life. Whatever you need, they’ve got it covered.
            </p>
            <div className="inline-flex mt-6">
              <h3 className="font-bold">
                Compare Tasker reviews, ratings, and prices
              </h3>
              {/* <CheckCircleIcon/> */}
            </div>
            <div className="inline-flex mt-2">
              <h3 className="font-bold">
                Compare Tasker reviews, ratings, and prices
              </h3>
              {/* <CheckCircleIcon/> */}
            </div>
            <div className="inline-flex mt-2">
              <h3 className="font-bold">
                Compare Tasker reviews, ratings, and prices
              </h3>
              {/* <CheckCircleIcon/> */}
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
