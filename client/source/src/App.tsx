import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

//APIから取得したデータの型
export interface Item {
  message: string
}

function App() {

  const [item, setItem] = React.useState<Item>();

  //初期ロード時にAPIからデータを取得
  useEffect(() => {
    axios.get<Item>('http://localhost:8000/test')
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {item ? <p>{item.message}</p> : <p>Loading...</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
