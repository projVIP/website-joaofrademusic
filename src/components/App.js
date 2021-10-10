import '../styles/App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './header/Navbar';
import Banner from './homepage/Banner';
import GetDataFunctions from '../scripts/GetDataFunctions';
import { DataContext } from '../scripts/Context';

const fetchData = async () => {
  let dataFetched = await GetDataFunctions.fetchData;
  return dataFetched;
};

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then(response => setData(response));
  });


  if (data !== "") {
    return (
      <DataContext.Provider value={data}>
        <div className="App">
          <Navbar />
          <Banner />
        </div>
      </DataContext.Provider>
    );
  } else {
    return (<div>loading...</div>)
  }

}

export default App;