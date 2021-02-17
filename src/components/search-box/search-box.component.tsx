import React from 'react';
import { SearchBoxProps } from '../../interfaces/search-box.props';
import './search-box.styles.css';

export const SearchBox=(props:SearchBoxProps)=>{
    return (
        <div className="search-box-parent">
            <input className="search-box" onChange={props.onChange} placeholder="Search your robot 😄" type="search" />
        </div>
    )
}