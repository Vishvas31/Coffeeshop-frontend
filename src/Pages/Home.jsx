import React from 'react'
import HeroSection from '../component/Home/HeroSection'
import Features from '../component/Features/Features'
import Choose from '../component/WhyChooseUs/Choose'
import SpecialMenu from '../component/MenuPage/SpecialMenu'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <Choose/>
        <SpecialMenu/>
    </div>
  )
}

export default Home