import React, {useState} from 'react'
import axios from 'axios'

import './Home.css'
import Header from '../../layout/Header/Header.js'
import Card from '../../Cards/Cards.js'


export default function Home(){
    var [comoBuscar, setcomoBuscar] = useState('')
    var [busqueda, setBusqueda] = useState([])
    var [recetas, setRecetas] = useState([])
    var [results, setResults] = useState('')

    function llamadaAPI(){
        let url = 'http://www.recipepuppy.com/api/?'

        if(comoBuscar == 'receta')
        {
            url += `&q=${busqueda}`
        }
        else if(comoBuscar == 'ingredientes')
        {
            busqueda = busqueda.replace(' ', ',')

            url += `&i=${busqueda}`
        }
        else
        {
            window.alert('No has seleccionado!')
        }

        if(busqueda == '')
        {
            window.alert('Especifica tu busqueda')
        }
        else
        {
            axios.get(url)
            .then((response)=>{
                if(response.data.results.length == 0)
                {
                    setResults(<Card resultado='no'/>)
                    setRecetas([])
                }
                else
                {
                    setRecetas(response.data.results)
                    setResults('')
                }
            })
            .catch((error)=>{console.log(error)})
        }
    }

    function BTNingredientes(){
        setcomoBuscar('ingredientes')
    }

    function BTNreceta(){
        setcomoBuscar('receta')
    }

    return(
        <>
        <Header/>

        <div id='contenido'>
            <h1>Busca tus recetas</h1><br/><br/>

            <div id='buttons'>
                <button onClick={BTNingredientes}>Por ingredientes</button>
                <button onClick={BTNreceta}>Por receta</button>
            </div>

            <br/><br/>

            <input placeholder='Busqueda' onChange={(e)=>{setBusqueda(e.target.value)}}></input><br/><br/>
            <button onClick={llamadaAPI}>Tengo hambre!</button><br/><br/>
        </div>

        <div id='cards'>
            {
                recetas.map((item, i)=>{
                    return <Card title={item.title} ingredients={item.ingredients} href={item.href} img={item.thumbnail} key={i}/>
                })
            }
        </div>

        <div id='centrado'>
            {results}
        </div>
        </>
    )
}