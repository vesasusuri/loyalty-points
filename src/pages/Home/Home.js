import React from 'react'
import Navbar from "../../components/shared/Navbar/Navbar"
import Banner from '../../components/pages/banner/Banner'
import WhatWeOffer from '../../components/pages/whatWeOffer/whatWeOffer'

const Home = () => {
    return (
        <div className='home-page'>
         <Navbar/>
         <Banner/>
         <WhatWeOffer/>
        </div>
    )
}

export default Home
