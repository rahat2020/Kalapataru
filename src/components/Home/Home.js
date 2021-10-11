import React from 'react'
import Amenities from '../Amenities/Amenities'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Locate from '../Locate/Locate'
import Overview from '../Overview/Overview'
import Resources from '../Resources/Resources'

export default function Home() {
    
    return (
        <div>
            <Header/>
            <Features/>
            <Overview/>
            <Gallery/>
            <Amenities/>
            <Resources/>
            <Locate/>
            <Footer/>
        </div>
    )
}
