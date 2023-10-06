import { LinkButton } from 'components/LinkButton';
import { MoviePoster } from 'components/MoviePoster';
import ViewController from './controller';

const View = () => {
  const { movie } = ViewController();

  return (
    <main className="h-screen flex flex-col items-center">
      <LinkButton to="/" text={'Go Back'} />
      <div className="bg-zinc-300 flex flex-col w-3/4 sm:w-2/3 justify-content border-2 items-center rounded mt-2 p-4">
        <h1 className="text-3xl font-bold ">{movie?.Title}</h1>
        <MoviePoster link={movie?.Poster} />
        <p className="px-6">Plot: {movie?.Plot}</p>
      </div>
      <ul className="bg-zinc-200 flex flex-col flex-grow border-2 rounded w-3/4 sm:w-2/3  p-4">
        <li>Year released: {movie?.Year}</li>
        <li>Rated: {movie?.Rated}</li>
        <li>Released: {movie?.Released}</li>
        <li>Runtime: {movie?.Runtime}</li>
        <li>Genre: {movie?.Genre}</li>
        <li>Director: {movie?.Director}</li>
        <li>Writer: {movie?.Writer}</li>
        <li>Actors: {movie?.Actors}</li>
        <li>Awards: {movie?.Awards}</li>
        <li>BoxOffice: {movie?.BoxOffice}</li>
      </ul>
    </main>
  );
};
export default View;
