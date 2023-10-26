import React from 'react';

const Card = ({ title, url, img }) => {
    return (
        <a className='card' href={url}>
            <img className='image' src={img[0].url} alt='broken.img'></img>
            <h5 className='title'>{title}</h5>
        </a>
    )
}

export default Card;