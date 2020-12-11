import React from 'react';
import ItemStyle from '../styles/ItemStyle.css'

export default function Item(props) {
    return (
        <div className="singleRow">
            <div>
                {props.name}
            </div>
            <div>           
                {props.length}
            </div>
            <div>
                {props.cost}
            </div>
            <div>
                {props.speed}
            </div>       
        </div>
    )
}
