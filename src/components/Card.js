import React from 'react';
import './Card.css';

export const Card = (props) => {

    return (
            
            <div class="card" style="width: 18rem;">
                <img className='card-image-top' src={props.img} alt={props.title} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Gender: {props.gender}</p>
                    <p class="card-text">Status: {props.status}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        
    );
};