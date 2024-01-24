import React from 'react'

function CarouselItem({item}) {
    return (
        <div className='carousel-item'>
            <div></div>
            <img className='carousel-img' src={item.icon}></img>
            <div className='carousel-desc'> {item.description}</div>
        </div>
    )
}

export { CarouselItem }