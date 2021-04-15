import React from 'react'
import main from './images/main.jpg'
// import gsap from 'gsap'



export default class Story extends React.Component {
    // constructor(){
    //     super()
    // }
//     componentDidMount(){
// }
render(){
    return (
        <div className='story' id='story'>
            <div className='story-msg'>
                    ...قصتنا <br/>
                    حضارة بيروت عبارة عن مزيج من الحضارات المتنوعة التي مرت بها على مر الزمان …
                    اليوم نقدم لكم من ذلك الوحي مطعم ومقهى بيروت لاونج , الذي يعكس التطور التاريخي والحضاري لتلك المدينة العريقة التي أحببنا أن نخلق لكم أجوائها في دبي
                    من خلال تجربتنا الفريدة من نوعها نسعى في بيروت لاونج أن نحافظ على روح الكرم والضيافة اللبنانية , فندعوكم إلى رحلة من المذاق الرائع 
                    <div>  
                        Our Story...<br/>
                                          Beirut civilization is a mixture of the diverse civilizations that have passed through it over time ...
                        Today we present to you from that revelation the Beirut Lounge and Restaurant, which reflects the historical and cultural development of that ancient city that we loved to create for you its atmosphere in Dubai
                        Through our unique experience, Beirut Lounge seeks to preserve the spirit of generosity and Lebanese hospitality. We invite you to a journey of great taste.
                    </div>

            </div>
            <img className='story-img' src={main} alt='logo'/>
            <div className='line'></div>
        </div>
    )
}
}
