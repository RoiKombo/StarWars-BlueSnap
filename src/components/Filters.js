import React from 'react'

export default function Filters({onSortSelect}) {
    
    
    return (
        <div>
            <select onChange={(e)=> onSortSelect(e)} >
                <option value="model">Model</option>
                <option value="light_speed">Light Speed</option>
                <option value="size">Size</option>
                <option value="cost">Galactic Credit std</option>
            </select>
        </div>
    )
}

