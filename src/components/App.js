import '../styles/App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './header/Navbar';
import Banner from './homepage/Banner';
import GetDataFunctions from '../scripts/GetDataFunctions';
import { DataContext } from '../scripts/Context';
import About from './homepage/About';
import Discografia from './homepage/Discografia';
import Events from './homepage/Events';
import PressKits from './homepage/PressKits';
import Projects from './homepage/Projects';
import Quotes from './homepage/Quotes';
import Contacts from './homepage/Contacts';

const fetchData = async () => {
  let dataFetched = await GetDataFunctions.fetchData;
  return dataFetched;
};

const navOnClick = (e) => {
  e.preventDefault();

  let clickedItem = e.target.href.split('#')[1];
  document.getElementById(clickedItem).scrollIntoView({ behavior: 'smooth', block: 'start'});;
}

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then(response => setData(response));
  });


  if (data !== "") {
    return (
      <DataContext.Provider value={data}>
        <div className="App">
          <Navbar linkOnClick={navOnClick} />
          <Banner />
          <About />
          <Discografia />
          <Events />
          <PressKits />
          <Projects />
          <Quotes />
          <Contacts />
        </div>
      </DataContext.Provider>
    );
  } else {
    return (<div>loading...</div>)
  }

}

export default App;