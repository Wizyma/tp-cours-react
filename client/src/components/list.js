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
                        <span><strong>Date : {elem.date}</strong></span>
                        <div>
                            <span>Horaire de debut : <strong>{elem.start}</strong></span> / 
                            <span> Horaire de fin : <strong>{elem.end}</strong></span>
                        </div>
                        <div>
                            <strong>Raison : {elem.reason}</strong>
                        </div>
                        <Link to={`/single/${elem.id}`}>More...</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ListItems;
