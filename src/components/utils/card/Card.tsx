import card from './Card.module.scss';

const Card = ({ text, icon }) => {
    return (
        <div className={card.container} >
            <img src={icon} alt={text} />
            <p>{text}</p>
        </div>
    )
}

export default Card
