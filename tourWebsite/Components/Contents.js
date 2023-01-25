import React, { useState, useEffect } from 'react'
import "../styles/contents.css"
import Content from './Content'


function Contents({ tours }) {

    const [pagination, setPagination] = useState([0, 3]);

    useEffect(() => {
        console.log("sdfs")
    }, [pagination]);

    return (
        <main>
            <article>
                {
                    tours.map((tour) =>
                        <Content tourProperty={tour} />
                    )
                }
            </article>
            <div className='pagination'>
                <button>1</button>
                <button>2</button>
            </div>

        </main>
    )
}

export default Contents
