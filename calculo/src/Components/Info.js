import React from 'react'
import './Info.css'
import Cat from '../img/cat.jpg'

const Info = () => {
    return (
        <aside className='aside'>
            <div className='info'>
                <h2 className='aside-title'>Info mucho muy importante</h2>
                <img
                    className='cat-image'
                    src={Cat}
                    alt='gatito'
                />
                <p className='text-info'> No utilice ésta calculadora en situaciones reales como por ejemplo en su trabajo o en parciales, a menos que desee fracasar miserablemente. Desde la administración no nos hacemos responsables por los daños o perjuicios. </p>
            </div>

        </aside>
    )
}

export { Info }