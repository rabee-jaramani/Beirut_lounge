import React from 'react'
import logo_sm from './images/logo_sm.png'

export default function Navbar() {

    function show_mobile_menu() {
        document.querySelector('.navlinks').classList.toggle('show-mobile-menu')  
        }
    return (
   
              <div className='navbar'>
                <div className='logo add-anim-for-logo-sm'><img src={logo_sm} alt=''/></div>
                <div className='navlinks' onClick={show_mobile_menu}>
                    <a className='nav-link add-anim-for-homeLink' href='#home'>Home</a>
                    <a className='nav-link add-anim-for-homeLink' href='#story'>Story</a>
                    <a className='nav-link add-anim-for-foodLink'href='#food' >Food</a>
                    <a className='nav-link add-anim-for-vibesLink' href='#vibes'>Vibes</a>
                    <a className='nav-link add-anim-for-theMenuLink' href='#menu'>The menu</a>
                    <a className='nav-link add-anim-for-footer' href='#footer'>Contact Us</a>
                </div>
                <i onClick={show_mobile_menu} class="fas fa-utensils mobile-menu-icon"></i>

            </div>
    )
}
