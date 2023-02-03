import React from 'react'
import './Info.css'
import Cat from '../img/cat.jpg'

const Info = () => {
    return (
        <aside className='aside'>
            <div className='info'>
                <h2 className='aside-title'>Un titulo</h2>
                <img 
                    className='cat-image'
                    src={Cat}
                    alt='gatito'
                />
                <p className='text-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
            </div>

        </aside>
    )
}

export { Info }