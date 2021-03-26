import React from 'react'
import Navbar from '../partials/Navbar'

const Confrim=()=>{
    return(
        <>
        <Navbar />
        <section className="text-gray-600 body-font overflow-hidden lg:mt-28 md:mt-40 sm:mt-64 xs:mt-64">
  <div className="container px-5 py-12 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/3 w-10/12 lg:h-auto h-64 object-cover object-center rounded" src="https://res.cloudinary.com/setiyawan/image/upload/v1614186202/plugin/image_12_rvbetu.png" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-500 text-3xl title-font font-medium mb-1">At The Going Down of the Sun</h1>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Marius Oelsching</h2>
        <div className="flex mb-4 mt-2">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest">Borrowing Details</h2>
        </div>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="w-28">Name</td>
              <td>Yunianto</td>
            </tr>
            <tr>
              <td className="w-28">Date End</td>
              <td>21 March 2021</td>
            </tr>
            <tr>
              <td className="w-28">Note</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At urna nec </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start mt-4">
          <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded-full text-lg">Accept</button>
          <button className="ml-4 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded-full text-lg">Reject</button>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Confrim