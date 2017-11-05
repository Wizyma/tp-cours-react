import React from 'react'

const followLink = (url) => {
    window.location.href = url;
}

const ListItems = (props) => {
    const elems = props.data;
        if(Array.isArray(elems)){
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
                                <button style={{marginTop: '20px'}} onClick={followLink.bind(null, elem.link)}>Plus ...</button>
                            </div>
                        )
                    })}
                </div>
            )
        }else if(elems) {
            return (
                <div style={{padding: "20px"}} className="data-fetched"> 
                    <span><strong>Date : {elems.date}</strong></span>
                    <div>
                        <span>Horaire de debut : <strong>{elems.start}</strong></span> / 
                        <span> Horaire de fin : <strong>{elems.end}</strong></span>
                    </div>
                    <div>
                        <strong>Raison : {elems.reason}</strong>
                    </div>
                    <button style={{marginTop: '20px'}} onClick={followLink.bind(null, elems.link)}>Plus ...</button>
                </div>
            )
        }
}

export default ListItems;
