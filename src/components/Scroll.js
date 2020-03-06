import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid white', padding: '30px', height: '71vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll;