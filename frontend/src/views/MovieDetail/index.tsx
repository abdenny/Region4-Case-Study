import { LinkButton } from 'components/LinkButton';
import { MoviePoster } from 'components/MoviePoster';
import ViewController from './controller';

const View = () => {
  const { movie } = ViewController();

  return (
    <div className="bg-zinc-900 h-screen flex flex-col items-center">
      <LinkButton to="/" text={'Go Back'} />
      <div className="bg-zinc-300 flex flex-col w-2/3 justify-content items-center mt-2 p-4">
        <h1 className="text-3xl font-bold ">{movie?.Title}</h1>
        <MoviePoster link={movie?.Poster} />
        <p className="px-6">Plot: {movie?.Plot}</p>
      </div>
      <ul className="bg-zinc-200 flex flex-col flex-grow w-2/3 p-4">
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
    </div>
  );
};
export default View;
