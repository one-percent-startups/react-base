import {
  ArrowRightOnRectangleIcon,
  BoltIcon,
  CheckIcon,
  CheckCircleIcon,
  PowerIcon,
  PaperAirplaneIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  WrenchIcon,
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
  CogIcon,
  PrinterIcon,
  PauseIcon,
  RocketLaunchIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CircleStackIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

import { Menu, Transition, Dialog } from "@headlessui/react";
import React, { useState, useEffect, Fragment } from "react";
import NavBar from "../components/navigation";
import avatar from "../assets/images/avatar4.jpeg";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";
import Chart from "line-chart-react";
import "line-chart-react/dist/index.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [uploadfiles, setUploadFiles] = useState(false);
  function CustomAxis({ x, y, payload }) {
    return (
      <g
        transform={`translate(${x},${y})`}
        className="text-sm text-gray-500 dark:text-gray-400"
      >
        <text x={0} y={0} dy={25} textAnchor="middle" fill="currentColor">
          {payload.value}
        </text>
      </g>
    );
  }
  const data = [
    { label: " 0", "Expected Point": 23, "Obtain Point": 122 },
    { label: " 1", "Expected Point": 3, "Obtain Point": 73 },
    { label: " 2", "Expected Point": 15, "Obtain Point": 32 },
    { label: " 3", "Expected Point": 35, "Obtain Point": 23 },
    { label: " 4", "Expected Point": 45, "Obtain Point": 20 },
  ];

  return (
    <div className="flex flex-row">
      <div className="hidden xs:hidden lg:block md:block">
        <NavBar />
      </div>

      <div className="p-4 pt-6 xs:ml-[0em] md:ml-[3.3em] w-full ">
        <div className="flex justify-center">
          <div className="w-6/12 text-start flex">
            <button className="mr-4 bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
              <PowerIcon className="w-5 h-5 text-black " />
            </button>
            <form className="w-full">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative w-100">
                <div className="w-12/12  inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-3 text-sm text-gray-900 border rounded-lg bg-gray-50  dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search Code"
                  required
                />
                <button
                  type="submit"
                  className="flex text-gray-500 absolute right-0 bottom-[1px]  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <PaperAirplaneIcon className="w-5 text-black mr-1" />
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-6/12 text-end flex justify-end">
            <button
              type="button"
              onClick={() => setUploadFiles(true)}
              className="flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <CloudArrowUpIcon className="w-5 mr-2" />
              Upload & Start
            </button>
            <button
              type="button"
              style={{ backgroundColor: "#FFA200" }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Emergency stop
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-10 ">
          <div className="rounded-lg border  w-4/12 shadow-md">
            <div className="flex justify-between px-3 pb-0 pt-3 font-semibold">
              <p className="flex ">
                <InformationCircleIcon className="w-5" /> Status
              </p>
              <p className="">
                Mode :<span className="font-light">fff</span>
              </p>
            </div>
            <hr className="mt-3 "></hr>
            <div className="flex justify-between mt-3 p-3">
              <p className="flex text-gray-600 text-sm">Total Position</p>
              <p className="text-sm text-gray-600">X.00</p>
              <p className="text-sm text-gray-600">Y.00</p>
              <p className="text-sm text-gray-600">Z.00</p>
            </div>
            <hr className="mt-3"></hr>
            <div className="flex justify-between mt-3 px-3">
              <p className="flex text-gray-600 text-sm">Extruder Drives</p>
              <p className="text-sm text-gray-600">
                Drive 0<br></br>0.0
              </p>
              <p className="text-sm text-gray-600">
                Drive 1<br></br>0.0
              </p>
            </div>
            <hr className="mt-3"></hr>
            <div className="flex justify-between mt-3 px-3 mb-3">
              <p className="flex text-gray-600 text-sm">Speeds</p>
              <p className="text-sm text-gray-600 text-end">
                Requested speed 0.0 mm/s <br></br>Top Speed 0.0 mm/s
              </p>
            </div>
            <div className="flex justify-end p-3 bg-gray-200">
              <button
                type="button"
                className="flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <ArrowPathIcon className="w-5 mr-2" />
                Refresh
              </button>
            </div>
          </div>

          <div className="w-[37%] rounded-lg border shadow-md">
            <div className="relative overflow-x-auto  sm:rounded-lg">
              <h2 className="flex p-3 font-semibold">
                <WrenchIcon className="w-5 mr-2 " />
                Tools + Extra
              </h2>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      <li className="text-yellow-500 ">Tool</li>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <li className="text-red-500 ">Heater</li>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      <li className="text-green-500 ">Current</li>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <li className="text-blue-500">Active</li>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <li className="text-yellow-700 ">Standby</li>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 text-center"
                    >
                      Tool 0 <br></br>
                      <span className="font-light">T0</span>
                    </th>
                    <td className="px-6 py-4 text-red-500">Heater 1</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      N/A
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 text-center"
                    >
                      Tool 0 <br></br>
                      <span className="font-light">T0</span>
                    </th>
                    <td className="px-6 py-4 text-green-500">Heater 2</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      N/A
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 text-center"
                    >
                      Bed
                    </th>
                    <td className="px-6 py-4 text-blue-500">Heater 0</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      N/A
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        0
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              0
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-3/12 border rounded-lg pb-3 shadow-md">
            <h2 className="flex p-3 font-semibold">
              <ArrowTrendingUpIcon className="w-5 mr-2 " />
              Temperature chart
            </h2>
            <p className="text-gray-400 text-xs text-start pl-4 mb-5  font-light">
              Track your printer temperature chart.
            </p>
            <LineChart
              className="pl-5"
              width={250}
              height={250}
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="liquidity-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3A63E0" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3A63E0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type={"monotone"}
                dataKey="Expected Point"
                stroke="#3A63E0"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 5,
                  r: 10,
                }}
              />
              <Line
                type={"monotone"}
                dataKey="Expected Point"
                stroke="#3A63E0"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 2,
                  r: 21,
                }}
              />
              <Line
                type={"monotone"}
                dataKey="Obtain Point"
                stroke="green"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 5,
                  r: 10,
                }}
              />
              <XAxis
                dataKey="label"
                tick={<CustomAxis />}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
              //   content={<></>}
              //   cursor={{
              //     strokeWidth: 50,
              //     stroke: 'rgb(237, 239, 243)',
              //   }}
              //   wrapperStyle={{
              //     boxShadow: '0 0 1px 0px 4px 50px rgba(73, 93, 112, 0.08)',
              //     background: 'red',
              //   }}
              />
              <CartesianGrid
                vertical={false}
                strokeDasharray="10 5"
                stroke={"#E5E7EB"}
              />
            </LineChart>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className=" w-8/12 border  rounded-lg shadow-md p-3">
            <div className="flex justify-between w-full items-center">
              <div className="w-6/12">
                <h1 className="text-start font-semibold">Machine movement</h1>
              </div>
              <div className=" flex">
                <button
                  type="button"
                  className="flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <CloudArrowUpIcon className="w-5 mr-2" />
                  Home all
                </button>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Compensation & Calibration
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              test
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <hr className="mt-3"></hr>
            <div className="flex justify-between mt-3">
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "#FFA200" }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Home X
              </button>
            </div>
            <hr className="mt-3"></hr>
            <div className="flex justify-between mt-3">
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "#FFA200" }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Home Y
              </button>
            </div>
            <hr className="mt-3"></hr>
            <div className="flex justify-between mt-3">
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>
              <div className="flex justify-between border rounded-lg py-2 px-3 w-4/12">
                <p>X + 50</p>
                <p>X + 10</p>
                <p>X + 1</p>
                <p>X + 0.1</p>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "#FFA200" }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Home Z
              </button>
            </div>
          </div>

          <div className="w-[30%] border rounded-lg pb-3 shadow-md">
            <h2 className="flex p-3 font-semibold">
              <CircleStackIcon className="w-5 mr-2 " />
              Layer Chart
            </h2>
            <p className="text-gray-400 text-xs text-start pl-4 mb-5  font-light">
              Track your printer temperature chart.
            </p>
            <LineChart
              className="pl-1"
              width={350}
              height={150}
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="liquidity-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3A63E0" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3A63E0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type={"monotone"}
                dataKey="Expected Point"
                stroke="#3A63E0"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 5,
                  r: 10,
                }}
              />
              <Line
                type={"monotone"}
                dataKey="Expected Point"
                stroke="blue"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 2,
                  r: 21,
                }}
              />
              <Line
                type={"monotone"}
                dataKey="Obtain Point"
                stroke="red"
                strokeWidth={4}
                fill="url(#liquidity-gradient)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 5,
                  r: 10,
                }}
              />

              <Tooltip
              //   content={<></>}
              //   cursor={{
              //     strokeWidth: 50,
              //     stroke: 'rgb(237, 239, 243)',
              //   }}
              //   wrapperStyle={{
              //     boxShadow: '0 0 1px 0px 4px 50px rgba(73, 93, 112, 0.08)',
              //     background: 'red',
              //   }}
              />
              <CartesianGrid
                vertical={false}
                strokeDasharray="10 5"
                stroke={"#E5E7EB"}
              />
              <YAxis />
            </LineChart>
          </div>
        </div>

        <div className="flex mt-10 justify-between items-start ">
          <div className="border rounded-lg p-3 w-8/12 shadow-md">
            <h1 className="text-start font-semibold w-full">
              Extrusion Control
            </h1>
            <hr className="my-3"></hr>
            <div className="flex w-12/12 justify-between items-end">
              <div className="w-5/12 ">
                <p className="font-light text-start text-sm mb-2">
                  Feed amount in mm
                </p>
                <div className="flex border rounded-lg ">
                  <p className="border-r p-2">100</p>
                  <p className="border-r p-2">50</p>
                  <p className="border-r p-2">20</p>
                  <p className="border-r p-2">10</p>
                  <p className="border-r py-2 px-3">5</p>
                  <p className=" py-2 px-3">1</p>
                  <p className=""></p>
                </div>
              </div>
              <div className="w-5/12 pl-4">
                <p className="font-light text-start text-sm mb-2">
                  Feed rate in mm/s
                </p>
                <div className="flex border rounded-lg w-9/12 ">
                  <p className="border-r p-2">50</p>
                  <p className="border-r p-2">10</p>
                  <p className="border-r p-2">5</p>
                  <p className="border-r py-2 px-3">2</p>
                  <p className=" py-2 px-3">1</p>
                  <p className=""></p>
                </div>
              </div>
              <button
                type="button"
                className="flex mr-3 py-3 px-3 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <ArrowSmallUpIcon className="w-5 mr-2" />
                Retract
              </button>
              <button
                type="button"
                className="flex mr-3 py-3 px-3 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <ArrowSmallUpIcon className="w-5 mr-2" />
                Extrude
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-3 w-3.5/12 shadow-md">
            <h1 className="text-start font-semibold w-full flex">
              <CogIcon className="w-5" />
              Fan Control
            </h1>
            <hr className="my-3"></hr>

            <p className="text-start text-sm font-light">Fan Selection</p>
            <div className=" mt-3 ml-auto flex justify-between">
              <button
                type="button"
                className=" flex mr-3 py-2 px-3 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Fan
              </button>
              <div className="flex items-center border rounded-xl">
                <button
                  type="button"
                  className=" flex  py-2 px-3 rounded-tl-2xl rounded-bl-2xl text-sm  text-gray-900 focus:outline-none bg-white border-r rounded-tl border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  -
                </button>
                <input
                  className="w-10/12 "
                  type="number"
                  placeholder=" Input speed"
                />
                <button
                  type="button"
                  className=" flex  py-2 px-3   text-sm  text-gray-900 focus:outline-none bg-white  border-l rounded-br-2xl rounded-tr-2xl border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-between items-start">
          <div className="border rounded-lg p-3 w-3/12 shadow-md">
            <h1 className="text-start font-semibold w-full flex">
              <PrinterIcon className="w-5" />
              Job Control
            </h1>
            <hr className="my-3"></hr>
            <button
              type="button"
              className="my-2 mx-auto w-full flex justify-center font-md items-center flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <PauseIcon className="w-5" />
              Pause Print
            </button>
          </div>

          <div className="border rounded-lg p-3 w-3/12 shadow-md">
            <h1 className="text-start font-semibold w-full flex">
              <RocketLaunchIcon className="w-5" />Z Babystepping
            </h1>
            <p className="text-xs text-gray-400 text-start mt-1">
              Current offset 0.00mm
            </p>

            <div className="flex jutsify-between items-center">
              <button
                type="button"
                className="mx-auto w-5/12 flex justify-center font-md items-center mt-3 flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <ArrowTrendingDownIcon className="w-5 " />
                -0.05mm
              </button>
              <button
                type="button"
                className="mx-auto w-5/12 flex justify-center font-md items-center mt-3 flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <ArrowTrendingUpIcon className="w-5" />
                +0.05mm
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-3 w-5/12 shadow-md">
            <h1 className="text-start font-semibold w-full flex">
              <InformationCircleIcon className="w-5" />
              Collected data
            </h1>
            <hr className=""></hr>
            <div className="flex justify-between items-center my-4">
              <p className=" text-sm text-start">
                Warm-up time<br></br>
                <span className="text-gray-400 font-light text-xs">N/A</span>
              </p>
              <p className=" text-sm text-start">
                Current layer time<br></br>
                <span className="text-gray-400 font-light text-xs">N/A</span>
              </p>
              <p className=" text-sm text-start">
                Last layer time<br></br>
                <span className="text-gray-400 font-light text-xs">N/A</span>
              </p>
              <p className=" text-sm text-start">
                Job duration<br></br>
                <span className="text-gray-400 font-light text-xs">N/A</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-between items-start">
          <div className="rounded-lg border  w-3/12 mr-5 shadow-md">
            <div className="flex justify-between px-3 pb-0 pt-3 font-semibold">
              <p className="flex ">
                <InformationCircleIcon className="w-5" /> Job information
              </p>
            </div>
            <hr className="mt-3 "></hr>
            <div className="flex  mt-1 p-3">
              Height <span className=" ml-4 text-gray-400 font-light">N/A</span>
            </div>
            <hr className="mt-2"></hr>
            <div className="flex  mt-1 p-3">
              Layer Height{" "}
              <span className=" ml-4 text-gray-400 font-light">N/A</span>
            </div>
            <hr className="mt-2"></hr>
            <div className="flex  mt-1 p-3">
              Filament Usage{" "}
              <span className=" ml-4 text-gray-400 font-light">N/A</span>
            </div>
            <hr className="mt-2"></hr>
            <div className="flex  mt-1 p-3">
              Generated by{" "}
              <span className=" ml-4 text-gray-400 font-light">N/A</span>
            </div>
          </div>

          <div className="rounded-lg border  w-5/12 mr-5 shadow-md">
            <div className="flex justify-between px-3 pb-0 pt-3 font-semibold">
              <p className="flex ">
                <WrenchIcon className="w-5" /> Extrusion factors
              </p>
            </div>
            <hr className="mt-3 "></hr>

            <div className="p-3 mt-3">
              <p className="text-start text-sm mb-3">Extruder 0</p>
              <div className="flex items-center ">
                <button
                  type="button"
                  className=" flex  py-2 px-3 border rounded-lg text-sm  text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  -
                </button>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-700">
                  <div
                    className=" h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "45%", backgroundColor: "#FFA200" }}
                  ></div>
                </div>
                <button
                  type="button"
                  className=" flex  py-2 px-3  text-sm  text-gray-900 focus:outline-none bg-white  border rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>
            <div className="p-3 mt-4 mb-5">
              <p className="text-start text-sm mb-3">Extruder 0</p>
              <div className="flex items-center ">
                <button
                  type="button"
                  className=" flex  py-2 px-3 border rounded-lg text-sm  text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  -
                </button>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-700">
                  <div
                    className=" h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "45%", backgroundColor: "#FFA200" }}
                  ></div>
                </div>
                <button
                  type="button"
                  className=" flex  py-2 px-3  text-sm  text-gray-900 focus:outline-none bg-white  border rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className=" w-4/12">
            <div className="border rounded-lg p-3">
              <h1 className="text-start font-semibold w-full flex">
                <InformationCircleIcon className="w-5" />
                Estimations based on
              </h1>
              <hr className=""></hr>
              <div className="flex  items-center my-4">
                <p className=" text-sm text-start mr-4">
                  Filament Usage<br></br>
                  <span className="text-gray-400 font-light text-xs">N/A</span>
                </p>
                <p className=" text-sm text-start">
                  File Progress<br></br>
                  <span className="text-gray-400 font-light text-xs">N/A</span>
                </p>
              </div>
            </div>

            <div className="rounded-lg border mt-3  w-12/12  shadow-md">
              <div className="flex justify-between px-3 pb-0 pt-3 font-semibold">
                <p className="flex ">
                  <ClockIcon className="w-5" /> Speed factors
                </p>
              </div>
              <hr className="mt-3 "></hr>

              <div className="p-3 mt-2">
                <p className="text-start text-sm mb-3">Extruder 0</p>
                <div className="flex items-center ">
                  <button
                    type="button"
                    className=" flex  py-2 px-3 border rounded-lg text-sm  text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-700">
                    <div
                      className=" h-2.5 rounded-full dark:bg-blue-500"
                      style={{ width: "45%", backgroundColor: "#FFA200" }}
                    ></div>
                  </div>
                  <button
                    type="button"
                    className=" flex  py-2 px-3  text-sm  text-gray-900 focus:outline-none bg-white  border rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border mt-10  w-12/12  shadow-md">
          <div className="flex justify-between px-3 pb-0 pt-3 font-semibold">
            <p className="flex ">
              <ClockIcon className="w-5" /> Fans
            </p>
          </div>
          <hr className="mt-3 "></hr>

          <div className="p-3 mt-2">
            <p className="text-start text-sm mb-3">Fan 0</p>
            <div className="flex items-center ">
              <button
                type="button"
                className=" flex  py-2 px-3 border rounded-lg text-sm  text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                -
              </button>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-700">
                <div
                  className=" h-2.5 rounded-full dark:bg-blue-500"
                  style={{ width: "45%", backgroundColor: "#FFA200" }}
                ></div>
              </div>
              <button
                type="button"
                className=" flex  py-2 px-3  text-sm  text-gray-900 focus:outline-none bg-white  border rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Modals */}
        <Transition.Root show={uploadfiles} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setUploadFiles}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <ArrowUpTrayIcon
                          className="h-6 w-6 "
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Upload File
                        </Dialog.Title>

                        <div class="mb-3 mt-5">
                          <input
                            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <p
                          class=" text-start text-sm text-gray-500 dark:text-gray-300"
                          id="file_input_help"
                        >
                          file type : Gcode (MAX. 1024MB).
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setUploadFiles(false)}
                      >
                        Upload
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default Dashboard;
