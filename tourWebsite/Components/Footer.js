import React from 'react'
import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9185124462!2d2.347035!3d48.85885484999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1673959758061!5m2!1str!2str"></iframe>
            </div>
            <div className='services'>
                <p>Hizmetlerimiz:</p>
                <ul>
                    <li>Turlar</li>
                    <li>Anlaşmalı Oteller</li>
                    <li>Anlaşmalı saglık sigortası</li>
                    <li>Rehber bulma</li>
                </ul>
            </div>
            <p className='about'>
                Biz 2023 yılından beri her ülkenin başkentine, çeşitli şehirlere turlar düzenleyen veya istenilen hizmetleri bulunmanızı sağlayan bir acente firmasıyız.
            </p>

        </footer>
    )
}

export default Footer
