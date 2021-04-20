import React from 'react'
import Story from './Story'
import Food from './Food'
import Header from './Header'
import Navbar from './Navbar'
import Vibes from './Vibes'
import Footer from './Footer'
import TheMenu from './The_menu'


export default function Website() {

 
    return (
            <div className='website hide' id='home'>
                <Navbar/>
                <Header/>
                <Story/>
                <Food/>
                <Vibes/>
                <TheMenu/>
                <Footer/>
      
               
            </div>
    )
}
