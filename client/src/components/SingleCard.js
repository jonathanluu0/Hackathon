import './SingleCard.css';
import React, { useEffect, useState } from 'react';
import cardBack from '../images/Card_Back.png';
import cardFront from '../images/Card_Face.png';

export default function SingleCard({ card, clickHandler }) {
    const [flip, setFlip] = useState(false);

    const check = () => {
        clickHandler(card)
    }

    return (
        <div className='w-1/3' onClick={() => setFlip(!flip)}>
            {flip ?
                <div className='front'>
                    <img src={cardFront} alt='card front' />
                </div>
                : <div className='back'>
                    <img src={cardBack} onClick={check} alt='card back' />
                </div>}
        </div>

    )
};