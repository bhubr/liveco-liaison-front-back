import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

const sampleMovies = [
  {
    id: 1,
    title: 'Mort a 2020',
    picture: 'http://example.com/morta2020.jpg',
  },
  {
    id: 2,
    title: 'Vive 2021',
    picture: 'http://2021.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <MovieList movies={sampleMovies} />
    </div>
  );
}

export default App;
