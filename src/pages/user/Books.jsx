import React from "react";
import SideBar from "../partials/SideBar";
import Navbar from "../partials/Navbar";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <SideBar />
        <div className="w-9/12 bg-white border-l">
        <div className="mx-10 pt-2">
          <p className="font-serif text-xl font-semibold text-gray-500">Your Books</p>
        </div>
        <div className="p-4 text-gray-500 mx-10">
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap">
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <a >
                    <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-48 object-cover object-center sm:mb-0 mb-4" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
                  </a>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">Jak Of The bushveld</h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <a className="bg-blue-400 px-6 rounded-full py-2 text-white" >edit</a>
                    </div>
                  </div>
                </div>
                <Link to="/addbook">
                <div className="flex">
                  <button className="ml-auto mr-20 bg-blue-400 px-6 rounded-full py-2 text-white">Add Book</button>
                </div>
                  </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
};

export default Books;
