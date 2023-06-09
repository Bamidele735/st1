import React from "react";
import "flowbite";
import Image from "next/image";
import Logo from "../public/media/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-transparent dark:bg-white  w-full z-20 top-0 left-0 border-transparent border-transparent dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://home.greatdaneai.com/" className="flex items-center">
          <Image
            src={Logo}
            className="pt-0"
            alt="Grate Logo"
            width={30}
            height={30}
          />
          <span className="nav_logo_name pl-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Great Flowers Staking
          </span>
        </Link>
        <div className="flex md:order-2">
          <ConnectButton />

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="ml-4 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li> */}
            <li>
              <Link
                href="https://flower.greatdaneai.com/"
                target="_blank"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Mint
              </Link>
            </li>
            <li>
              <Link
                href="/stake"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Stake
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
