import { Movie, Movies } from 'types';

export interface AllMoviesControllerInterface {
  movies: Movies;
  isMoviesLoading: boolean;
}

export interface MovieDetailControllerInterface {
  movie: Movie | undefined;
}
