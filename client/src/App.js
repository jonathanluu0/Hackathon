import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import Swal from 'sweetalert2';
import Heart from './images/heart.gif';
import Trap from './images/Explode.gif';

export default function App() {
    const wizard = {
        "src": "wizardImg",
        flipped: false,
        type: "wizard"
    };

    
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
    const [health, setHealth] = useState(50); //Amount of clicks left
    const [potionEffect, setEffect] = useState("");

    const populate = () =>{
        for (let step = 0; step < specialCards.size(); step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log('Walking east one step');
        }
    }

    //shuffle cards when new game button is clicked
    const shuffleCards = () => {
        //randomizes order of cards and gives each card a unique id
        const shuffledCards= [...blankDeck, ...blankDeck, ...blankDeck, ...specialCards, ...specialCards, ...specialCards, wizard]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
        setHealth(50);
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
                    timer: 1100,
                    title: 'Whoops!',
                    html: 'The wizard is in another tower!'
                }).then(()=>{
                    setHealth(health - 5)
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
                            html: 'You feel yourself getting healthier (clicks +5)'
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
            default:
            // probably win because you hit a wizard
        }
    }


    return (
        <div>
            <div className='App'>
                <h1 className='Title'>Tricky Wizard</h1>
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