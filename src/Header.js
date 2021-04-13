import React from 'react'
export default function Header() {
    setTimeout(() => {
    document.querySelector('.header').classList.add('header-bg-changer')
        
    }, 5000);
    return (
        <>
            <div className='header'>
                <div className='qoute'> 
                 <div>CAFE and RESTAURANT</div>
                Our mission is to provide an unforgetable experience
                </div>
            </div>
            
        </>
    )
}
