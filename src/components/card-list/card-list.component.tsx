import React from 'react';
import { CardListProps } from '../../interfaces/card-list.props';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList=(props:CardListProps)=>{
    return (
        <div className="card-list">
            {
                props.itemsList.map((item)=><Card data={item} />)
            }
        </div>
    )
}