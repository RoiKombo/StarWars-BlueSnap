import React, { useEffect, useState } from 'react';
import './App.css';
import DataList from './components/DataList';

const swApi = 'http://swapi.dev/api/starships/';

export default function App() {
  const [status, setStatus] = useState('idle');
  const [url, setUrl] = useState(swApi);
  const [data, setData] = useState({ results: [] });
  const prevPage = () => {
    setUrl(data.previous);
  };
  const nextPage = () => {
    setUrl(data.next);
  };

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      const dataResponse = await response.json();
      setData(dataResponse);
      setStatus('fetched');
    };

    fetchData();
  }, [url]);
  return (
    <div className="App">
      <DataList results={data.results} />
      <div>
        <button
          type="button"
          onClick={() => prevPage()}
          disabled={!data.previous}
        >
          PREVIOUS
        </button>
        <button type="button" onClick={() => nextPage()} disabled={!data.next}>
          NEXT
        </button>
      </div>
    </div>
  );
}
