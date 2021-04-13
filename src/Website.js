import React from 'react'
import Story from './Story'
import Food from './Food'
import Header from './Header'
import Navbar from './Navbar'
import Vibes from './Vibes'


export default function Website() {

 
    return (
            <div className='website hide'>
                <Navbar/>
                <Header/>
                <Story/>
                <Food/>
                <Vibes/>
                
      
               
            </div>
    )
}
