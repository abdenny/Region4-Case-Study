import { Movie, Movies } from 'types';

export interface AllMoviesControllerInterface {
  movies?: Movies;
  isMoviesLoading: boolean;
  handleFilterText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MovieDetailControllerInterface {
  movie?: Movie;
  isMovieLoading: boolean;
}
