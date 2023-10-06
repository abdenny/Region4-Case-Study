import type { AllMoviesControllerInterface } from 'types';

import { useState, useEffect } from 'react';
import useMovies from 'viewModels/useAllMovies';
import useDebounce from 'hooks/useDebounce';

const ViewController = (): AllMoviesControllerInterface => {
  const { movies, isMoviesLoading } = useMovies();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filterText, setFilterText] = useState('');

  const debouncedFilterText = useDebounce(filterText, 200);

  useEffect(() => {
    if (movies) {
      const filteredMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(debouncedFilterText.toLowerCase())
      );
      setFilteredMovies(filteredMovies);
    }
  }, [movies, debouncedFilterText]);

  const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterText(e.target.value);
  };

  return {
    movies: filteredMovies,
    isMoviesLoading,
    handleFilterText,
  };
};

export default ViewController;
