import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
            .map((card) => ({ ...card, id: Math.random(), state: false }));

        setCards(shuffledCards);
        setTurns(0);
        console.log(cards, turns);
    }

    //handles the flipping of the card, and the choice the user has made
    const handleChoice = (card) => {
        //Suppose to flip the card, and fade the card to opacity 0, after which the property will then be disabled.
        //If not cover.png (clicked on the position of invisible card) then do nothing.
        card = true;
        console.log("After card state: " + card);
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
                {/* Maps each individual card from the cards array
                    making them a single card component that handles each individual card
                    Code for each card component can be found in SingleCard.js
                */}
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice = {handleChoice}
                        flipped = {card.state}
                    />
                ))}
            </div>
        </div>
    );
}