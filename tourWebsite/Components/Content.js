import React, { useState } from 'react'
import "../styles/content.css"

function Content({ tourProperty }) {

    const [readMore, setReadMore] = useState(false);

    return (
        <div className='item'>
            <img src={tourProperty.image} />
            <h3>{tourProperty.name}</h3>
            <p>{readMore ? tourProperty.info : `${tourProperty.info.substring(0, 200)}...`}</p>
            <button onClick={() => setReadMore(!readMore)}>{readMore ? "Daha az" : "Daha fazla"}</button>
        </div>
    )
}

export default Content
