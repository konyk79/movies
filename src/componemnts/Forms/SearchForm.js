import { useRef } from "react";
import "./SearchForm.css";
const SearchForm = (props) => {
  const title = useRef();
  const type = useRef();
  const year = useRef();
  const onChangeHandler = () => {
    const newData = {
      year: year.current.value,
      type: type.current.value,
      title: title.current.value,
    };
    props.onFormDataChange(newData);
  };
  return (
    <form className="form-horizontal w-75 mx-auto">
      <div className="row g-3 align-items-center w-50 mx-auto mb-2">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label " htmlFor="title">
            Movie Title
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <input
            className="form-control "
            type="text"
            name="title"
            id="title"
            ref={title}
            value={props.query.title}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="row g-3 align-items-center w-50 mx-auto mb-2">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label" htmlFor="type">
            Movie Type
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <select
            ref={type}
            // defaultValue={"movie"}
            value={props.query.type}
            className="form-control "
            name="type"
            id="type"
            onChange={onChangeHandler}
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
      </div>
      <div className="row g-3 align-items-center w-50 mx-auto mb-5">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label" htmlFor="year">
            Movie Year
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <select
            // defaultValue={"2022"}
            value={props.query.year}
            className="form-control"
            name="year"
            id="year"
            ref={year}
            onChange={onChangeHandler}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
