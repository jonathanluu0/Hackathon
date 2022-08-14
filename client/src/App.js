import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import Swal from 'sweetalert2';
import Heart from './images/heart.gif';
import Trap from './images/Explode.gif';
import Wizard from './images/Moving_Wizard.gif';
import Blank from './images/Card_Face.png';

export default function App() {
    const wizard = {
        "src": Wizard,
        flipped: false,
        type: "wizard"
    };
    const lives = {
        "src": Heart
    }

    const specialCards = [
        {
            "src": Heart,
            flipped: false,
            type: "potion"
        },
        {
            "src": Trap,
            flipped: false,
            type: "trap"
        },

    ]
    const blankDeck = [
        {
            "src": "BlankCardImg",
            flipped: false,
            type: "blank?"
        },
        {
            "src": "BlankCardImg",
            flipped: false,
            type: "blank?"
        },
        {
            "src": "BlankCardImg",
            flipped: false,
            type: "blank?"
        },
    ]


    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [health, setHealth] = useState(10); //Amount of clicks left
    const [potionEffect, setEffect] = useState("");

    const lost = () => {
        Swal.fire({
            imageUrl: Wizard,
            imageAlt: 'Wizard',
            showConfirmButton: false,
            timer: 4000,
            title: 'Oh no adventurer!',
            html: 'The wizard has bested you this time \n' +
                'Try again next time, and may fortune favor you then\n' +
                'The adventure will rewind shortly...'
        }).then(() => {
            shuffleCards()
        })
    }
    //sets 
    const displayLives = () => {
        const livesLeft = [];
        for(let x = 0; x < health; x++){
            livesLeft.push(lives);
        }

    }
    //shuffle cards when new game button is clicked
    const shuffleCards = () => {
        //randomizes order of cards and gives each card a unique id
        const shuffledCards = [...blankDeck, ...blankDeck, ...blankDeck, ...specialCards, ...specialCards, ...specialCards, wizard]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
        setHealth(10);
        console.log(cards, turns);
    }

    const event = (card) => {
        switch (card.type) {
            case "trap":
                // You just lost some clicks idiot, just be lucky
                Swal.fire({
                    imageUrl: Trap,
                    imageAlt: 'Trap',
                    showConfirmButton: false,
                    timer: 2000,
                    title: 'Whoops!',
                    html: 'The wizard is in another tower!'
                }).then(() => {
                    setHealth(health - 1)
                    if(health === 0){
                        lost()
                    }
                })
                break;
            case "potion":
                // Can either pick to gain extra clicks or remove some cards from the selection
                Swal.fire({
                    imageUrl: Heart,
                    imageAlt: 'Heart',
                    showCancelButton: true,
                    confirmButtonText: 'Drink the potion (add 5 clicks)',
                    cancelButtonColor: 'red',
                    cancelButtonText: 'Destroy ( potion will break and destroy some cards)'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            title: 'Consumed!',
                            html: 'You feel yourself getting healthier (clicks +1)'
                        }).then(() => {
                            setHealth(health + 1)
                        })
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        Swal.fire({
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            title: 'Destroyed!',
                            html: 'You feel some useless cards being removed'
                        })
                    }
                })
                break;
            case "wizard":
                // You found the wizard
                Swal.fire({
                    imageUrl: Wizard,
                    imageAlt: 'Wizard',
                    showConfirmButton: false,
                    timer: 4000,
                    title: 'Congratulations!',
                    html: 'You have found the wizard due to your amazing luck stat \n' +
                        'The adventure will restart shortly...'
                }).then(() => {
                    shuffleCards()
                })
                break;
            default:
                // You hit a blank spot
                Swal.fire({
                    imageUrl: Blank,
                    imageAlt: 'Blank',
                    showConfirmButton: false,
                    timer: 2000,
                    title: 'Nothing Here...',
                    html: 'There didn\'t seem to be anything here...'
                }).then(() => {
                    setHealth(health - 1)
                    if(health === 0){
                        lost()
                    }
                })
                break;

        }
    }


    return (
        <div>
            <div className='App'>
                <h1 className='Title'>Tricky Wizard</h1>
            </div>
            <div>

            </div>
            <div className='button'>
                <button onClick={shuffleCards}>New Game</button>
            </div>

            <div className=' grid grid-cols-4 gap-4 place-items-center'>
                {cards.map(card => {
                    return <SingleCard
                        card={card}
                        key={card.id}
                        clickHandler={event}
                    />
                })}
            </div>
        </div>
    );
}