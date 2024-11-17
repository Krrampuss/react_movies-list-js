/* eslint-disable max-len */

import './App.scss';
import movies from './api/movies.json';
import { MovieCard } from './components/MovieCard/MovieCard';

export const App = () => (
  <>
    <div className="page">
      <div className="page-content">
        <div className="movies">
          <div className="card" data-cy="Movie">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.imdbId} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </>
);
