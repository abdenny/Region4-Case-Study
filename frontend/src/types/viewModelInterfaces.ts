import { Movies, Movie } from 'types';

export interface AllMoviesViewModelInterface {
  movies?: Movies;
  isMoviesLoading: boolean;
}
export interface MovieDetailsViewModelInterface {
  movie?: Movie;
  isMovieLoading: boolean;
}
