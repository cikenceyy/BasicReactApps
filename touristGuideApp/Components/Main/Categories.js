import React from 'react'
import "./categories.css"

function Categories({ categories, filterItems, activeCategory }) {
    return (
        <nav>

            {categories.map((category, index) => {
                return (
                    <button
                        className={`${activeCategory === category ? "btn-active" : ""}`}
                        key={index}
                        onClick={() => filterItems(category)}>
                        {category[0].toUpperCase() + category.substring(1)}
                    </button>
                )
            })}

        </nav>
    )
}

export default Categories
