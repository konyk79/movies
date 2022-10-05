import Movie from "./Movie";

const Movies = () => {
  const mocMovies = [
    {
      Title: "The Red Jasmine",
      Year: "2022",
      imdbID: "tt11112060",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2QyNDEwODctMDA2Yi00MDRkLTkwN2UtM2VkMjA0NzhmN2MzXkEyXkFqcGdeQXVyNjM0NDc4NTE@._V1_SX300.jpg",
    },
    {
      Title: "Jasmine",
      Year: "2022",
      imdbID: "tt15352110",
      Type: "movie",
      Poster: "N/A",
    },
  ];
  const content = mocMovies.map((movie) => {
    return (
      <div className="card my-2 ">
        <Movie movie={movie} key={movie.imdbID} />
      </div>
    );
  });
  return <>{content}</>;
};
export default Movies;
