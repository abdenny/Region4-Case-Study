import type { MovieDetailControllerInterface } from 'types';
import { useParams } from 'react-router-dom';

import useMovieDetails from 'viewModels/useMovieDetails';

const ViewController = (): MovieDetailControllerInterface => {
  const params = useParams();
  const { id } = params;
  const { movie, isMovieLoading } = useMovieDetails({ id: id ?? '' });

  return {
    movie,
    isMovieLoading,
  };
};

export default ViewController;
