import React, {useEffect, useState} from 'react';
import './App.css';
import DataList from './components/DataList';

const swApi = "http://swapi.dev/api/starships/";

export default function App() {


  const useFetch = (endPoint) =>{
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState({});

    useEffect(() => {
        if (!endPoint) return;
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(endPoint);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };
        fetchData();
        
    }, [endPoint]);
    return {status, data};
}

  const { status, data } = useFetch(swApi);
  console.log(status, data)

  return (
    <div className="App">
      <DataList results={data.results}/>
    </div>
  );
}

