import type { MoviesViewModelInterface } from 'types';
// import useFetch from 'hooks/useFetch';
import { movies } from '../data/movies';

const useMovies = (): MoviesViewModelInterface => {
  //   // TODO: Set up error handling in model
  //   const {
  //     state: {
  //       data: topCoinsData,
  //       // error: topCoinsError,
  //       loading: topCoinsLoading,
  //     },
  //   } = useFetch<CryptoAssets>(topCryptoAssets());

  return {
    movies,
    isMoviesLoading: false,
  };
};

export default useMovies;
