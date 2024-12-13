import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Destinations from '../../components/Destinations/Destinations'
import Banner from '../../components/Banner/Banner'
import Packages from '../../components/Packages/Packages'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Ticker from '../../components/Ticker/Ticker'
import PremPackages from '../../components/premPackages/PremPackages'
import SecNav from '../../components/SecNav/SecNav'
import HeroSecVersion from '../../components/HeroSecVersion/HeroSecVersion'

const Home = () => {
  return (
    <div>
      <HeroSecVersion/>
      <Ticker/>
      <Destinations/>
      <Banner/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home