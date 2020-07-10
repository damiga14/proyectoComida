import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/recetas">Recetas</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}