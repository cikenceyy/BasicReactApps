import React from 'react'

function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="img" />
                <div className="title">{props.title}</div>
                <p className="description">{props.description}</p>
            </div>
        </>
    )
}

export default Card
