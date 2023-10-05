import type { AllMoviesControllerInterface } from 'types';

import useMovies from 'viewModels/useMovies';

const ViewController = (): AllMoviesControllerInterface => {
  const { movies, isMoviesLoading } = useMovies();

  return {
    movies,
    isMoviesLoading,
  };
};

export default ViewController;
