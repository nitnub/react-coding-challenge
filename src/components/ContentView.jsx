import React, { useEffect, useState } from 'react';
import Card from './Card'

const API_URL = './feed/sample.json';
const VIEWS = {
  MAIN: 'Titles',
  MOVIE: 'Movies',
  SERIES: 'Series',
}




const ContentView = () => {
  const [dataArray, setDataArray] = useState([]);
  const [view, setView] = useState(VIEWS.MAIN);



  useEffect(() => {
    const getEntryList = async () => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setDataArray(json.entries);
          console.log(typeof json.entries);
          const cleanedArray = json.entries.filter(
            (entry) => entry.releaseYear >= 2010
          );
          cleanedArray.sort((a, b) => (a.title > b.title ? 1 : -1));
          setDataArray(cleanedArray.slice(0, 21));
          // console.log(cleanedArray)
        });
    };
    getEntryList();
  }, []);

  return (
    <div className="content-container">

<div>Popular {view}</div>

      {view === VIEWS.MAIN ? 
        <>
        <Card 
        </>  : null
    }

      {view === VIEWS. && dataArray.map((entry) => {
        return (
          
         <Card entry={entry} type={view}/>
        );
      })}


    </div>
  );
};

export default ContentView;
