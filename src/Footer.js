import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='find-us'>
                <h5>Find Us:</h5>
                <a 
                href='https://www.google.com/maps/place/Beirut+Lounge+
                Restaurant+%26+Cafe/@25.2473912,55.3415521,17z/data=!4m5
                !3m4!1s0x3e5f5d198c955555:0xf7f2fd6fd42ae5a2!8m2!3d25.2468387!4d55.3415694'
                target='_blank'
                rel='noreferrer'
                >
                    Al Mazroui Building - Garhoud - Dubai
                </a>
            </div>
            <div className='reservation'>
                <h5>Reservation:</h5>
                <div>0097142555330</div>
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
