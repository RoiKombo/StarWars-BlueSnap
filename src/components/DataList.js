import React, {useState, useEffect} from 'react';
import ListStyle from '../styles/ListStyle.css';
import Item from './Item';

export default function DataList({results}) {  
    
            if(!results){
                return(
                    <div>no data</div>
                )
            }
            return (
            <div className="DataList">
                <div className="listHeader">
                    <div>Model</div>
                    <div>Light Speed</div>
                    <div>Size</div>
                    <div>Galactic Credit std</div>
                </div>

                    {results.map((shipDetail, i) => {
                    return (
                        <Item 
                        name={shipDetail.name}  
                        cost={shipDetail.cost_in_credits} 
                        length={shipDetail.length} 
                        speed={shipDetail.max_atmosphering_speed} 
                        key={i}>  
                        </Item>)
                    })}
                <div>
                </div>
            </div>
        )
    }   







   