import React from 'react'
import RateCard from '../components/ui/RateCard'

const RatingPage = () => {
  return (
    <div>
      <p className="mt-2 mb-4 font-bold text-2xl text-center md:text-3xl text-[#1170B0]">Rating: </p>
      <div>
        <RateCard />
        <RateCard />
      </div>
    </div>
  )
}

export default RatingPage
