import React from 'react'

export default function The_menu() {
    function change_img_R(){
        var s =document.querySelector('.img').classList
        if(s.contains('img1'))
        {
            s.remove('img1')
            s.add('img2')
            return ''
        }
        if(s.contains('img2'))
        {
            s.remove('img2')
            s.add('img3')
            return ''
        }
        if(s.contains('img3'))
        {
            s.remove('img3')
            s.add('img4')
            return ''
        }
        if(s.contains('img4'))
        {
            s.remove('img4')
            s.add('img5')
            return ''
        }
        
    }
    function change_img_L(){
        var s =document.querySelector('.img').classList
        if(s.contains('img5'))
        {
            s.remove('img5')
            s.add('img4')
            return ''
        }
        else if(s.contains('img4'))
        {
            s.remove('img4')
            s.add('img3')
            return ''
        }
        else if(s.contains('img3'))
        {
            s.remove('img3')
            s.add('img2')
            return ''
        }
        else if(s.contains('img2'))
        {
            s.remove('img2')
            s.add('img1')
            return ''
        }
        
    }
    return (
        <div className='the-menu' id='menu'>
            <div className='title'>Our Menu</div>
            <div className='img img1'></div>
            <i class="fas fa-arrow-circle-right " onClick={change_img_R}></i>
            <i class="fas fa-arrow-circle-left"  onClick={change_img_L}></i>
        </div>
    )
}
