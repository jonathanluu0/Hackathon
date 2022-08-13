import React, { useEffect, useState } from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

const cardImages = [
    { "src": "wizardImg" },
    { "src": "potionImg" },
    { "src": "trapImg" },
    { "src": "cardBackImg" },
    { "src": "BlankCardImg" }
];


export default function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    //shuffle cards when new game button is clicked
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            //if Math.random < 0, order of 2 cards stay the same
            //if Math.random > 0, order of 2 cards are randomized
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
        console.log(cards, turns);
    }

    return (
        <div>
            <div className='App'>
                <h1>Magic Match</h1>
            </div>
            <div className='button'>
                <button onClick={shuffleCards}>New Game</button>
            </div>
            <div className='board'>
                {cards.map(card => (
                    
                ))}
            </div>
        </div>
    );
}