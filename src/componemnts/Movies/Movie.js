import "./Movie.css";
const Movie = (props) => (
  <li>
    <div className="card my-2 ">
      <div className="card bg-secondary py-2">
        <div className={" row align-items-center  text-center"}>
          <div className={" col-lg-3 col-sm-6"}>
            <b>ID:</b> {props.movie.imdbID}
          </div>
          <div className={" col-lg-3 col-sm-6"}>
            <b>Title:</b> {props.movie.Title}
          </div>
          <div className={" col-lg-2 col-sm-4"}>
            <b>Year:</b> {props.movie.Year}
          </div>
          <div className={" col-lg-2 col-sm-4"}>
            <b>Type:</b> {props.movie.Type}
          </div>
          {
            <div className="col-lg-2 col-sm-4">
              <img className="poster" src={props.movie.Poster} alt="N/A" />
            </div>
          }
        </div>
      </div>
    </div>
  </li>
);

export default Movie;
