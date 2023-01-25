import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import './App.css';

function faqItem({ title, active, setActive }) {
    return (
        <div className='faqItemContainer'>
            <div className='faqItemHeader'>
                <p>{title}</p>
                <AiOutlineArrowDown className='icons'
                    onClick={() => setActive(title)}
                />
            </div>
            <div className={"faqItemContent" + (active == title ? "show" : "")}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}

export default faqItem
