import React from "react";
import SideBar from "../partials/SideBar";
import Navbar from "../partials/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
      <SideBar />
      <div className="w-9/12 bg-white border-l">
        <div className="p-4 text-gray-500">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img className="lg:w-24 md:w-24 w-24 object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/zada/image/upload/v1614357120/avatar_y6a0zh.png" />
              <div className="lg:w-4/5 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="AliBaTa" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="alibata@gmail.com" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" id="pass" name="password" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="apahayi" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
};
export default Profile;
