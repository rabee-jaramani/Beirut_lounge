import React from 'react'
import a from './images/vibes/1.jpg'
import b from './images/vibes/2.jpg'
import c from './images/vibes/3.jpg'
import d from './images/vibes/4.jpg'
import e from './images/vibes/5.jpg'
import f from './images/vibes/6.jpg'
import g from './images/vibes/7.jpg'
import h from './images/vibes/8.jpg'

export default function Vibes() {
    var list=[a,b,c,d,e,f,g,h]
    function mouse_over() {
        list=document.querySelectorAll('.add-movment-vibes')
        list.forEach(element => {
            element.classList.add('pause-anim')
        });
        
    }
    function mouse_out() {
        list=document.querySelectorAll('.add-movment-vibes')
        list.forEach(element => {
            element.classList.remove('pause-anim')
        });
    }
    return (
        <div className='vibes'>
            <div className='vibes-title'>
                <br/>
                Nothing will make us proud more than seeing satisfaction
                from our valued customers at outdoor buffets for institutions, companies and special events.
                <br/>
                لا شيء سيجعلنا فخورين أكثر من رؤية الرضا من زبائننا الكرام في 
                    البوفيهات الخارجية للمؤسسات والشركات والمناسبات الخاصة
            </div>
            <br/>
                <div className='vibes-col' >
                    {
                        list.map((e)=>{
                            return <img className='add-movment-vibes'
                            onMouseOver={mouse_over} onMouseOut={mouse_out}
                            src={e} alt=''/>
                        })
                    }
                        {/* <img className='' src={a} alt=''/>
                        <img className='' src={b} alt=''/>
                        <img className='' src={c} alt=''/>
                        <img className='' src={d} alt=''/>
                        <img className='' src={e} alt=''/>
                        <img className='' src={f} alt=''/>
                        <img className='' src={g} alt=''/>
                        <img className='' src={h} alt=''/> */}
                </div>
       
        </div>
    )
}
