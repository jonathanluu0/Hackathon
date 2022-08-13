import 

export default function SingleCard() {
    return (
        <div className='card' key={card.id}>
            <div>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src='cardBack' alt='card back' />
            </div>
        </div>
    )
}