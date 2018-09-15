import React from 'react';

export default props => {
    console.log('Props:', props)
    console.log('props.time:', props.time)
    return (
        <span>{props.time.toLocaleTimeString()}</span>
    )
}