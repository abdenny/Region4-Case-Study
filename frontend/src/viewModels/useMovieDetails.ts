import type { MovieDetailsViewModelInterface, Movies } from 'types';
import useFetch from 'hooks/useFetch';

interface Params {
  id: string;
}

const useMovieDetails = ({ id }: Params): MovieDetailsViewModelInterface => {
  //   // TODO: Set up error handling in model
  const {
    state: {
      data: movieData,
      // error: moviesError,
      loading: movieLoading,
    },
  } = useFetch<{ movies: Movies }>(
    `https://mfe3dzr7q0.execute-api.us-east-2.amazonaws.com/dev/movies?imdbID=${id}`
  );

  return {
    movie: movieData?.movies[0],
    isMovieLoading: movieLoading,
  };
};

export default useMovieDetails;
