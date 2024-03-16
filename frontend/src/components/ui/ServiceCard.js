import React from 'react'

const ServiceCard = () => {
    return (
        <>
          <div className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md">
            <div className="pt-4 firstrow flex flex-row justify-between">
              <div>
                <p className="text-xl font-bold md:text-2xl lg:text-3xl">Service Name</p>
                <p className="text-sm font-medium md:text-base lg:text-lg">Category</p>
              </div>
              
              <div className="mr-6 deletebutton rounded-full bg-black w-7 h-7 md:w-9 md:h-9"></div>
            </div>

            <p className="pt-2 pr-6 pb-2 text-justify md:text-lg lg:text-xl"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <p className="pt-2 pr-6 pb-2 text-sm text-justify md:text-base lg:text-lg">Ratings (average stars for this service)</p>
          </div>
        </>
      );
}

export default ServiceCard
