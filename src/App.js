import React, {useEffect, useState} from 'react';
import './App.css';
import DataList from './components/DataList';

const swApi = "http://swapi.dev/api/starships/";

export default function App() {

  const prevPage = () => {
    setUrl(data.previous);
    console.log(data.previous)
}
const nextPage = () => {
  setUrl(data.next);
  console.log(data.next)
}

const [status, setStatus] = useState('idle');
const [url,setUrl] = useState(swApi);
const [data, setData] = useState({results:[]});

useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
        setStatus('fetching');
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setStatus('fetched');
    };

    fetchData();
}, [url]);
  console.log(data)
  return (
    <div className="App">
      <DataList results={data.results}/>
    <div>
      <button onClick={() => prevPage()} disabled={!data.previous}>PREVIOUS</button>
      <button onClick={() => nextPage()} disabled={!data.next}>NEXT</button>
    </div>
    </div>
  );
}
