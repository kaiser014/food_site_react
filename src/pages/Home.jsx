import React from 'react'
import HeroSection from '../component/HeroSection/HeroSection'
import ServiceSection from '../component/ServiceSection/ServiceSection'
import AboutSection from '../component/AboutSection/AboutSection'
import FeaturedProduct from '../component/FeaturedProduct/FeaturedProduct'
import OfferProduct from '../component/OfferProduct/OfferProduct'
import Explanation from '../component/Explanation/Explanation'
import FoodWeek from '../component/FoodWeek/FoodWeek'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <FeaturedProduct />
        <OfferProduct />
        <Explanation />
        <FoodWeek />
    </div>
  )
}

export default Home