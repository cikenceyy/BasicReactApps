import React from 'react'
import "./categoryItem.css"

function CategoryItem({ data }) {
    return (
        <main>
            {
                data.map((dataOne) => {
                    const { id, title, img, desc, price } = dataOne
                    return (
                        < article key={id} >
                            <img src={img} alt={title} />
                            <header className='about'>
                                <h3>{title}</h3>
                                <p>{price}$</p>
                            </header>
                            <section>
                                {desc}
                            </section>
                        </article>
                    )
                })
            }
        </main >
    )
}

export default CategoryItem
