import React, {useState} from 'react'

import './Cards.css'

export default function Card(props){
    var [image] = useState('')

    if(props.img == '')
    {
        image = 'https://www.clipartmax.com/png/middle/328-3287876_recipe-icon-clipart-recipe-cooking-chef-pinch-of-salt-icon.png'
    }
    else
    {
        image = props.img
    }

    if(props.resultado == 'no')
    {
        return(
            <>
            <div className="card bg-danger" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">No hay resultados</h5>
                </div>
            </div>
            </>
        ) 
    }
    else
    {
        return(
            <>
            <div className="card bg-info" style={{width: '18rem'}}>
                <img className="card-img-top" id='imagen' src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.ingredients}</p>
                    <a href={props.href} className="btn btn-primary">View Recipe</a>
                </div>
            </div>
            </>
        ) 
    }
}