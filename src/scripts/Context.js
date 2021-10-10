import React from "react";
import GetDataFunctions from '../scripts/GetDataFunctions';

const fetchData = async () => {
  let dataFetched = await GetDataFunctions.fetchData.then(response => {return response});
  return dataFetched;
};
  
 export const DataContext = React.createContext(
    fetchData
 );