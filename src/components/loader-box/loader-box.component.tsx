import React from 'react';
import { Loader } from '../loader/loader.component';
import './loader-box.styles.css';

export const LoaderBox=()=>{
    return (
        <div className="loader-box">
            <Loader />
        </div>
    )
}