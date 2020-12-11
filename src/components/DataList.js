import React, {useState, useEffect} from 'react';
import ListStyle from '../styles/ListStyle.css';
import Item from './Item';
import Filters from './Filters'

export default function DataList({results}) { 
    
    // const [list, setList] = useState(results);  
    const [sortKey, setSortKey] = useState('');  
    // useEffect(()=>{

    //     setList(list.sort((a, b) => (a[sortKey] > b[sortKey]) ? 1 : -1))
    // },[list,sortKey])
    if(!results){
        return(
            <div>no data</div>
        )
    }
    const sortResults = (list, key)=> {
        const newList = list.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
        return newList;
    }

    const onSelectSort = (e) => {
        setSortKey(e.target.value)
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







   