import React from "react";
import SideBar from "../partials/SideBar";
import Navbar from "../partials/Navbar";

const Addbooks = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <SideBar />
        <div className="w-9/12 bg-white border-l">
  <div className="p-4 text-gray-500">
    <section className="text-gray-600 body-font">
      <span className="inline-block font-semibold text-2xl text-gray-700 ml-12 lg:ml-12 md:ml-12 sm:ml-8 pb-2 mt-3">Add Books</span>
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <div className="lg:w-4/5 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Tittle</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="Kamen Raider Ryuki" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Creator</label>
            <input type="text" id="email" name="creator" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="Ryuki-san" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Publisher</label>
            <input type="text" id="pass" name="password" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="Gramedia Pustaka Utama" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="pass" className="leading-7 text-sm text-gray-600">ISBN</label>
            <input type="text" id="pass" name="isbn" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={9786020385914} />
          </div>
          <div className="relative mb-4">
            <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Pages</label>
            <input type="text" id="pass" name="page" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="135 Page" />
          </div>
          <div className="relative mb-4">
            <div className="mb-2"> <span>Upload Gamar</span>
              <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                <div className="absolute">
                  <div className="flex flex-col items-center "> <i className="fas fa-cloud-upload-alt fa-5x" /> <span className="block text-gray-400 font-normal">Drag &amp; Drop File Here</span> </div>
                </div> <input type="file" className="h-full w-full opacity-0" name />
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="ml-auto mr-20 bg-blue-400 px-6 rounded-full py-2 text-white">Add Book</button>
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

export default Addbooks;
