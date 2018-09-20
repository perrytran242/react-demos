import React from 'react';

export default props => {
    console.log(props)
    return (
        <div className="team-header dark-background-color">
            <h1 >Hello World! I'm {props.name}. We are {props.team}</h1>
        </div>
        
    )
}