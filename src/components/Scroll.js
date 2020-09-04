import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{color:'white', overflowY: 'scroll',border: '2px solid black', height: '500px' }}>
            <h3>helo</h3>
             {props.children}
        </div>)
};

export default Scroll;