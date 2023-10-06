import { LinkButton } from 'components/LinkButton';
import { MoviePoster } from 'components/MoviePoster';
import ViewController from './controller';
import Loading from 'components/Loading';

const View = () => {
  const { movies, isMoviesLoading, handleFilterText } = ViewController();

  return (
    <main className=" h-full justify-center flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black">IMDB Top 250 Movies</h1>
      <>
        {isMoviesLoading ? (
          <Loading />
        ) : (
          <>
            <input
              type="search"
              name="search"
              placeholder="Filter by movie title"
              onChange={handleFilterText}
              className="bg-white flex justify-start w-72 text-gray-700 h-12 px-2 mx-10 md:mx-16 my-2 rounded-md text-md border-2 focus:outline-blue-500 focus:border-0"
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1 p-4">
              {movies?.map((movie) => (
                <div
                  key={movie.Title}
                  className="flex flex-col justify-center border-2 text-black	 sm:block p-2 rounded-lg "
                >
                  <div className="m-auto flex justify-center">
                    <MoviePoster link={movie.Poster} />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight ">
                      {movie.Title} - {movie.imdbRating}
                    </h5>
                    <p className="mb-4 text-base ">{movie.Plot}</p>
                    <LinkButton to={`/movie/${movie.imdbID}`} text={'View Details'} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    </main>
  );
};

export default View;
