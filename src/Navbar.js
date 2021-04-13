import React from 'react'
import logo_sm from './images/logo_sm.png'
export default function Navbar() {
    
    function show_mobile_menu() {
        document.querySelector('.navlinks').classList.toggle('show-mobile-menu')  
        }
    return (
   
              <div className='navbar'>
                <div className='logo add-anim-for-logo-sm'><img src={logo_sm} alt=''/></div>
                <div className='navlinks'>
                    <div className='nav-link add-anim-for-homeLink'>Home</div>
                    <div className='nav-link add-anim-for-foodLink'>Food</div>
                    <div className='nav-link add-anim-for-vibesLink'>Vibes</div>
                    <div className='nav-link add-anim-for-theMenuLink'>The Menu</div>
                </div>
                <i onClick={show_mobile_menu} class="fas fa-utensils mobile-menu-icon"></i>

            </div>
    )
}
