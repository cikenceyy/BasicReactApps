import React from 'react'
import "../styles/header.css"

function Header() {
    return (
        <header>

            <img src='https://tourapp.io/wp-content/themes/understrap/files/tour-logo.png' />

            <nav>
                <ul>
                    <li><a>Anasayfa</a></li>
                    <li><a>Keşfet</a></li>
                    <li><a>Profile</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
