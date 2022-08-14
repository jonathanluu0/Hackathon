import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

export default function App() {
   
    const cardSet = [
        {
            "src": "wizardImg",
            cover: "cardCover",
            flipped: false,
        },
        {
            "src": "potionImg",
            cover: "cardCover",
            flipped: false
        },
        {
            "src": "trapImg",
            cover: "cardCover",
            flipped: false
        },
        {
            "src": "BlankCardImg",
            cover: "cardCover",
            flipped: false
        }
    ]


    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    //shuffle cards when new game button is clicked
    const shuffleCards = () => {
        const shuffledCards = [...cardSet, ...cardSet, ...cardSet]
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
            <div className='grid grid-cols-4 gap-1'>
            {cards.map(card => {
                return <SingleCard card={card} key={card.id} />
            })}
        </div>
        </div>
    );
}