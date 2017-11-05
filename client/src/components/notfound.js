import React from 'react'

const NotFound = (props) => (
    <div>
        <div>{props.text ? <h1>{props.text}</h1> : <h1>Page not found</h1>}</div>
        <button onClick={() => window.location.href = '/'}>Go Back</button>
    </div>
)

export default NotFound