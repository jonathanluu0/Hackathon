import './SingleCard.css';
import React, { useEffect, useState } from 'react';
import cardBack from '../images/Card_Back.png';
import cardFront from '../images/Card_Face.png';

export default function SingleCard({ card }) {
    const [flip, setFlip] = useState(false);

    return (
        <div className='w-1/5' onClick={() => setFlip(!flip)}>
            {flip ?
                <div className='front'>
                    <img src={cardFront} alt='card front' />
                </div>
                : <div className='back'>
                    <img src={cardBack} alt='card back' />
                </div>}
        </div>

    )
};