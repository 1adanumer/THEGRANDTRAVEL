import React from 'react'
import Header from '../../components/Header/Header'
import DestinHero from '../../components/DestinHero/DestinHero'
import Destinations from '../../components/Destinations/Destinations'
import UnforgetDestin from '../../components/UnforgetDestin/UnforgetDestin'
import Contact from '../../components/Contact/Contact'

const Destination = () => {
  return (
    
    <div>
        <DestinHero/>
        <Destinations/>
        <UnforgetDestin/>
        <Contact/>
    </div>
  )
}

export default Destination