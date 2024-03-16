import React from 'react'

const RateCard = () => {
    return (
        <>
          <div className="pl-4 w-5/6 border rounded-xl mx-auto mb-8 border-1-[#A0A0A0] shadow-lg bg-[#e9e9e9] font-poppin hover:bg-[#fff] hover:shadow-md">
            <div className="pt-4 firstrow flex flex-col justify-between md:flex-row">
              <div>
                <p className="text-lg font-bold md:text-xl lg:text-2xl">Customer Name</p>
                <p className="text-sm pb-2 font-medium md:text-base lg:text-lg">City</p>
              </div>
              
              <div className="mr-6 mb-2 bg-white w-40">Stars</div>
            </div>
          </div>
        </>
      );
}

export default RateCard
