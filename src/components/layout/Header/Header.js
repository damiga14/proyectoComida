import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className='btn-primary'><Link className="navbar-brand" to="/">Home</Link></button>
                    </li>
                    <li className="nav-item">
                        <button className='btn-primary'><Link className="navbar-brand" to="/recetas">Recetas</Link></button>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}