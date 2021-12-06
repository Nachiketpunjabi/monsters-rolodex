import React from 'react'
import './CardList.css'
import Card from '../card/Card.jsx'

const CardList= (props) => {
    
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => {
               return <Card monster={monster}></Card>
            })}
        </div>
    )
}

export default CardList
