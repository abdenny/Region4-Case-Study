import { LinkButton } from 'components/LinkButton';
import { MoviePoster } from 'components/MoviePoster';
import ViewController from './controller';

const View = () => {
  const { movies } = ViewController();
  return (
    <div className="bg-zinc-900 h-full justify-center flex flex-col items-center">
      <h1
        className="
      text-2xl font-bold text-gray-100
      "
      >
        IMBD Top 250
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1 p-4">
        {movies.map((movie) => (
          <div
            key={movie.Title}
            className="block p-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <MoviePoster link={movie.Poster} />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {movie.Title} - {movie.imdbRating}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{movie.Plot}</p>
              <LinkButton to={`/movie/${movie.imdbID}`} text={'View Details'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
