import React from 'react'
// import gsap from 'gsap'
import a from './images/food/a.jpg'
import b from './images/food/b.jpg'
import c from './images/food/c.jpg'
import d from './images/food/d.jpg'
// import { ScrollTrigger } from 'gsap/all'


export default class Food extends React.Component {

    images=[a,b,c,d,a,b,c,d,a,b]
mouse_over(){
    var list=document.querySelectorAll('.add-movment')
    list.forEach(element => {
        element.classList.add('pause-anim')
    });
}
mouse_out(){
    var list=document.querySelectorAll('.add-movment')
    list.forEach(element => {
        element.classList.remove('pause-anim')
    });
}
    render(){
    return (
        <div className='food' id='food'>
            <div className='food-title'>
            !بيروت لاونج <br/>
                    بكل بساطة لأنو دافعنا الأول هو رضاكم , بيروت لاونج بيقدم أشهى الأطباق اللبنانية والمشاوي بالاضافة لسهرات يومية مميزة من الطرب والأجواء البيروتية الحلوة

                    ورح نرافقكم بكل لحظاتكم بخدمة البوفيهات الخارجية اللي رح تلبي كافة المناسبات الخاصة والفعاليات التجارية
                <br/>
                <br/>
                <div>
                Beirut Lounge!<br/>
                Simply because our first motivation is your satisfaction, Beirut Lounge offers the most delicious Lebanese dishes and grills in addition to special daily evenings of joy and the sweet Beiruti atmosphere, and we will accompany you with all your
                moments with the service of outdoor buffets that will cater to all special occasions and commercial events
                </div>
            </div>
            <div className='food-row'>
                {
                    this.images.map((e)=>{
                        return <img className='add-movment' src={e} alt=''
                         onMouseOver={this.mouse_over}
                         onMouseOut={this.mouse_out}
                         />
                    })
                }
                {/* <img className='a add-movment' src={a} alt=''/>
                <img className='b add-movment' src={b} alt=''/>
                <img className='c add-movment' src={c} alt=''/>
                <img className='d add-movment' src={d} alt=''/>
                <img className='a add-movment' src={a} alt=''/>
                <img className='b add-movment' src={b} alt=''/>
                <img className='c add-movment' src={c} alt=''/>
                <img className='d add-movment' src={d} alt=''/>
                <img className='a add-movment' src={a} alt=''/>
                <img className='b add-movment' src={b} alt=''/> */}

            </div>
           
        </div>
    )
}
}