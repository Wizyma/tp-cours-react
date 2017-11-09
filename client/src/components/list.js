import React from 'react'
import { Link } from 'react-router-dom'

const followLink = (url) => {
    window.location.href = url;
}

const ListItems = (props) => {
    const elems = props.data;
    if(elems.length === 0){
        return  <h1>Pas de données trouvé pour ces dates</h1>
    }
    return(
        <div>
            {elems.map((elem, i) => {
                return (
                    <div style={{padding: "20px"}} className="data-fetched" key={i}> 
                        <h2>Pont Fermé le <strong>: {elem.date}</strong></h2>

                        <Link style={{textDecoration: 'none', color: 'red'}} to={`/single/${elem.id}`}>En savoir plus</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ListItems;
