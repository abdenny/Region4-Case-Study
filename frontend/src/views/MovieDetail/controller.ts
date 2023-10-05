import type { MovieDetailControllerInterface } from 'types';
import { useParams } from 'react-router-dom';

import useMovies from 'viewModels/useMovies';

const ViewController = (): MovieDetailControllerInterface => {
  const {
    movies,
    // isMoviesLoading
  } = useMovies();
  const params = useParams();
  const { id } = params;
  const movie = movies.find((movie) => movie.imdbID === id);

  return {
    movie,
  };
};

export default ViewController;
