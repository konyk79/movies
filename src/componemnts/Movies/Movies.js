import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Movie from "./Movie";
import SearchForm from "../Forms/SearchForm";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState({
    type: "movie",
    year: "2022",
    title: "Star",
  });
  const queryString = `?type=${query.type}&title=${query.title}&year=${query.year}`;
  const readDataProcess = (data) => {
    if (data.Response === "False") {
      setMovies([]);
      throw new Error(`Fetching data error: ${data.Error} !`);
    }
    setMovies(data.Search);
  };
  const [error, isLoading, request] = useFetchData();
  const FormDataChangeHandler = (query) => setQuery(query);
  useEffect(() => {
    request(
      {
        url: `http://localhost:3001/movies${queryString}`,
        method: "GET",
      },
      readDataProcess
    );
  }, [request, queryString]);
  const content =
    error !== "" ? (
      <div className="text-danger text-center display-3">{error}</div>
    ) : (
      movies.map((movie) => {
        return <Movie key={movie.imdbID} movie={movie} />;
      })
    );
  return (
    <>
      <SearchForm onFormDataChange={FormDataChangeHandler} query={query} />
      <ul>
        {isLoading ? (
          <div className="text-center display-3 text-info">
            Data is fetching...
          </div>
        ) : (
          content
        )}
      </ul>
    </>
  );
};
export default Movies;
