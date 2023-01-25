import React from 'react'
import "./App.css"

function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="Non" />
            <div className='cardBody'>
                <div className='cardTitle'>{props.title}</div>
                <div className='cardDescription'>{props.description}</div>
            </div>
        </div>
    )
}

export default Card
