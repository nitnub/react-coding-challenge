import React, { useEffect, useState } from 'react';
import Card from './Card';

const API_URL = './feed/sample.json';
const placeholderPoster = '../assets/placeholder.png';
const VIEWS = {
  MAIN: 'Titles',
  MOVIE: 'Movies',
  SERIES: 'Series',
};

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
      <div className="card-field">
        {view === VIEWS.MAIN ? (
          <>
            <Card
              poster={placeholderPoster}
              title={'Popular Series'}
              overlay={'SERIES'}
              onClick={() => setView(VIEWS.SERIES)}
            />
            <Card
              poster={placeholderPoster}
              title={'Popular Movies'}
              overlay={'MOVIES'}
            />
          </>
        ) : (
          dataArray.map((entry) => {
            return (
              <Card
                poster={entry.images['Poster Art'].url || placeholderPoster}
                title={entry.title}
                defaultPoster={placeholderPoster}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContentView;
