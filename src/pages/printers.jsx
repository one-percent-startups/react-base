import React, { useEffect, useState, Fragment } from "react";
import NavBar from "../components/navigation";
import {
  CloudArrowUpIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  PowerIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addPrinterform } from "../schema";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import app_api from "../config/config";
import Cookies from "js-cookie";
import { Menu, Transition, Dialog } from "@headlessui/react";

const Printers = () => {
  const initialValues = {
    name: "",
  };
  let user;
  const isLoggedIn = !!Cookies.get("shaping3DKey");

  if (isLoggedIn) {
    user = JSON.parse(Cookies.get("shaping3DKey"));
    console.log("User: " + user);
  }

  const onSubmit = (values) => {
    console.log(values);
  };

  const [printers, setPrinters] = useState([]);
  const [addprinter, setAddPrinter] = useState(false);

  useEffect(() => {
    app_api.get("printer").then((res) => {
      setPrinters(res.data);
      // console.log(res.data);
    });
  },[addprinter]);

  const registerPrinter = (values) => {
    app_api.post("printer/register", values).then((res) => {
  
      setAddPrinter(false);
    });
  };

  const onSubmitt = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-row">
      <div className="hidden xs:hidden lg:block md:block">
        <NavBar />
      </div>

      <div className="p-4 pt-6 xs:ml-[0em] md:ml-[3.3em] w-full ">
        <div className="flex ">
          <div className="w-6/12 text-start flex">
            <form className="w-full">
              <label
                htmlFor="default-search"
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
                  placeholder="Search Printer"
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
              onClick={() => setAddPrinter(true)}
              className="flex mr-3 py-2 px-5 mr-2  text-sm  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <PlusCircleIcon className="w-5 mr-2" />
              Add Printer
            </button>
          </div>
        </div>

        <div className="w-100 flex mt-10 ">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
          >
            {printers.map((printer, index) => (
              <li
                key={index}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-md"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 "
                    src={"#"}
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {printer.id}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500"></dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span
                        className={`${
                          printer.isWorking
                            ? "bg-green-400 ring-green-600/20"
                            : "s"
                        } inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset "`}
                      >
                        {printer.isWorking ? "Online" : "Offline"}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={""}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        Remove
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`/printers/${printer.id}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover                                                                "
                      >
                        Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Modals */}
        <Transition.Root show={addprinter} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setAddPrinter}>
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
                        <PlusCircleIcon
                          className="h-6 w-6 "
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-semibold leading-6 text-gray-900"
                        >
                          Add Printer
                        </Dialog.Title>
                      </div>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={registerPrinter}
                      // validate={addPrinterform}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div>
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="mt-6 ml-2 w-100 px-3 py-2 border"
                            />
                          </div>

                          <div className="mt-5 sm:mt-6">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              // onClick={() => setAddPrinter(false)}
                            >
                              Add Printer
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
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
export default Printers;
