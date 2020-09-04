import React from 'react';
import './card.css';
const Card = ({ name , email, id, username }) =>{
  
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5 card'>
            <img alt='ropot' src={`https://robohash.org/${id}?200x200`}/>
            <div className='textInfo'>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>
                   {email}
                </p>
            </div>
        </div>
    );
}

export default Card;