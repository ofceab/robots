import React from 'react';
import { CardProps } from '../../interfaces/card.props';
import './card.styles.css';

export const Card =(props:CardProps)=>{
    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.title} className="card-image" />
            <div className="card-content">
            <h4>{props.data.title.substring(0,24)}</h4>
            <p>{props.data.body}</p>
            </div>
        </div>
    )
}
