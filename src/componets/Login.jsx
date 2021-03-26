import React from 'react';
import { Link } from "react-router-dom";
const LoginComponents=()=>{
    return(
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign in</title>
        <link rel="stylesheet"/>
        <section className="text-gray-600 body-font relative">
          <div className="mx-auto flex sm:flex-nowrap flex-wrap h-screen">
            <div className="lg:w-2/5 md:w-1/2 bg-blue-600 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative flex-col text-white">
              <img src="https://res.cloudinary.com/setiyawan/image/upload/v1614352484/plugin/Logo_vuzih9.png" alt="Logo" srcSet className="mt-16 mx-auto" />
              <h3 className="mx-auto text-center lg:text-4xl md:text-2xl sm:text-xl font-bold lg:mt-16 md:mt-10 sm:mt-8">Hello, Pluginers</h3>
              <p className="lg:text-xl md:text-lg lg:mt-16 md:mt-8 sm:text-base sm:mt-6 px-14 text-center">Enter your personal details
                and start journey with us</p>
              <p className="mx-auto px-16 lg:mt-20 md:mt-12 sm:mt-6 text-white bg-login py-2 focus:outline-none hover:bg-blue-800 border-solid rounded-3xl text-lg border border-white hover:border-transparent">Sign Up</p>
            </div>
            <div className="lg:w-3/5 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-plugins text-3xl mb-14 mt-16 font-bold mx-auto">Login to Plugin Books</h2>
              <div className="flex mb-6 justify-center lg:mt-12 md:mt-8 sm:mt-4">
                <input placeholder="Email" type="email" id="name" name="email" className="bg-white w-9/12 rounded-full border border-plugin focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 pl-9 leading-8 transition-colors duration-200 ease-in-out placeholder-plugin" />
              </div>
              <div className="flex mb-6 justify-center">
                <input placeholder="Password" type="password" id="name" name="email" className="bg-white w-9/12 rounded-full border border-plugin focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 pl-9 leading-8 transition-colors duration-200 ease-in-out placeholder-plugin" />
              </div>
              <button className="mx-auto px-16 lg:mt-24 md:mt-12 sm:mt-6 text-white py-2 focus:outline-none hover:bg-blue-800 bg-blue-800 border-solid rounded-3xl text-lg border border-white hover:border-transparent">
                <Link to="/home">
                Login
                </Link>
                </button>
            </div>
          </div>
        </section>
      </div>
    );
};
export default LoginComponents;