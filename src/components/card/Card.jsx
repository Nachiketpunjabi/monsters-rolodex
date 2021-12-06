import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div className="card-container">
            <img alt='monster' src= {`https://robohash.org/${props.monster.id}`} />
            <h1>{props.monster.name} </h1>
            <p>{props.monster.email} </p>
        </div>
    )
}

export default Card
