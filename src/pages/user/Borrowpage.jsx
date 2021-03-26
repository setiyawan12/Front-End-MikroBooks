import React from 'react'
import Navbar from '../partials/Navbar'

const Borrowpage =()=>{
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
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span></div>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="w-28">Publisher</td>
              <td>Gramedia Pustaka Utama</td>
            </tr>
            <tr>
              <td className="w-28">ISBN</td>
              <td>9786020385914</td>
            </tr>
            <tr>
              <td className="w-28">Pages</td>
              <td>376 hlm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font overflow-hidden mb-40">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/3 flex flex-col items-start">
        <span className="inline-block font-semibold text-xl text-gray-700  pb-4">Choose Date</span>
        <div x-data="app()" x-init="[initDate(), getNoOfDays()]" x-cloak>
          <div className="container mx-auto px-4 py-2 md:py-10">
            <div className="mb-5 w-64">
              <label htmlFor="datepicker" className="font-bold mb-1 text-gray-700 block">Select Date</label>
              <div className="relative pb-28">
                <input type="hidden" name="date" x-ref="date" />
                <input type="text" readOnly x-model="datepickerValue"  className="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="Select date" />
                <div className="absolute top-0 right-0 px-3 py-2">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0" style={{width: '17rem'}} >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span x-text="MONTH_NAMES[month]" className="text-lg font-bold text-gray-800" />
                      <span x-text="year" className="ml-1 text-lg text-gray-600 font-normal" />
                    </div>
                    <div>
                      <button type="button" className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" >
                        <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>  
                      </button>
                      <button type="button" className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" >
                        <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>									  
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-3 -mx-1">
                    <template x-for="(day, index) in DAYS"  />
                  </div>
                  <div className="flex flex-wrap -mx-1">
                    <template x-for="blankday in blankdays" />	
                    <template x-for="(date, dateIndex) in no_of_days"/>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 md:w-2/3 flex flex-col items-start">
        <span className="inline-block font-semibold text-xl text-gray-700 ml-10 lg:ml-10 md:ml-12 sm:ml-8 pb-4">Discussion</span>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-4 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end -mt-10">
            <div className="relative flex-grow w-full">
              <input type="email" id="email" name="email" className="w-full h-16 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-white bg-plugin py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )

}

export default Borrowpage