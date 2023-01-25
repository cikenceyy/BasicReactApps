import React from 'react'
import styles from "./header.module.css"

function Header({ title, description }) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Header
