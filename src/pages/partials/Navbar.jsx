import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    console.log(window.location.pathname);
  }
  render() {
    return (
      <div>
        <header className="text-gray-600 body-font shadow-lg mb-8 fixed top-0 w-full z-10 bg-white">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <div>
                <div className="bg-white flex items-center rounded-full border border-gray-700">
                  <input
                    className="rounded-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none"
                    id="search"
                    type="text"
                    placeholder="Search"
                  />
                  <div className="p-2">
                    <Link
                      to="Search"
                      className=" text-gray-700 rounded-full p-2 focus:outline-none w-5 h-5 flex items-center justify-center"
                    >
                      <i className="fa fa-search" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <Link
              to="/"
              className="flex order-first lg:order-none lg:w-1/5 font-medium items-center lg:justify-center mb-4 md:mb-0"
            >
              <img
                src="https://res.cloudinary.com/setiyawan/image/upload/v1614352484/plugin/Logo_vuzih9.png"
                alt=""
              />
            </Link>
            <div
              className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"
              to="/login"
            >
              <Link to="/login"
                type="button"
                className="focus:outline-dark text-gray-500 text-md py-2.5 px-5 rounded-full py-6 px-12 border border-gray-400 hover:bg-blue-800 hover:text-white"
              >
                <p className="">Login</p>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
