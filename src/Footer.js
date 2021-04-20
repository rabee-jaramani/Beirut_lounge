import React from 'react'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='find-us'>
                <h5>Find Us:</h5>
                <a 
                href='https://maps.google.com/?q=Beirut Lounge  Restaurant & Cafe'
                target='_blank'
                rel='noreferrer'
                >
                    Al Mazroui Building - Garhoud - Dubai
                </a>
            </div>
            <div className='reservation'>
                <h5>Reservation:</h5>
                <a href="tel:0097142555330">042555330</a>
            </div>
            <div className='open-hours'>
                <h5>Open Hours:</h5>
                <div>Every day from 9 AM to 2 AM</div>
            </div>
            <div className='social-media'>
            <h5>Follow Us:</h5>
            <a href='https://www.instagram.com/beirut_lounge/'
            target='_blank'
            rel='noreferrer'
            >
                <i class="fab fa-instagram-square" ></i>
            </a>
            <a 
            href='https://www.facebook.com/BeirutLoungeDubai'
             target='_blank'
             rel='noreferrer'>
                <i class="fab fa-facebook-square"></i>
            </a>
            </div>
        </div>
    )
}
