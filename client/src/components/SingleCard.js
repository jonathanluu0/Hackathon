import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = ()=>{
        console.log("Before card state:" + flipped);
        handleChoice(this.card.state);
        console.log("After card state: " + flipped);
    }

    return (
        <div className='card'>
            <div className = {flipped ? "flipped" : ""}>
                {/* Image of the front of the card */}
                <img 
                    className='front' 
                    src={card.src} 
                    alt='card front' 
                />

                {/* Image of the back of the card and what happens when it is clicked */}
                <img 
                    className='back' 
                    src='cardBack' 
                    onClick={handleClick}
                    alt='card back' 
                />
            </div>
        </div>
    )
};