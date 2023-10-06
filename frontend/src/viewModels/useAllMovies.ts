import type { AllMoviesViewModelInterface, Movies } from 'types';
import useFetch from 'hooks/useFetch';

const useAllMovies = (): AllMoviesViewModelInterface => {
  //   // TODO: Set up error handling in model
  const {
    state: {
      data: moviesData,
      // error: moviesError,
      loading: moviesLoading,
    },
  } = useFetch<{ movies: Movies }>(
    'https://mfe3dzr7q0.execute-api.us-east-2.amazonaws.com/dev/movies?allMovies=true'
  );

  return {
    movies: moviesData?.movies,
    isMoviesLoading: moviesLoading,
  };
};

export default useAllMovies;
