import "./SearchForm.css";
const SearchForm = () => {
  return (
    <form className="form-horizontal w-75 mx-auto">
      <div className="row g-3 align-items-center w-50 mx-auto mb-2">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label " for="title">
            Movie Title
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <input
            className="form-control "
            type="text"
            name="title"
            id="title"
          />
        </div>
      </div>
      <div className="row g-3 align-items-center w-50 mx-auto mb-2">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label" for="type">
            Movie Type
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <select className="form-control " name="type" id="type">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
      </div>
      <div className="row g-3 align-items-center w-50 mx-auto mb-5">
        <div className="col-lg-4 col-sm-12">
          <label className="col-form-label" for="year">
            Movie Year
          </label>
        </div>
        <div className="col-lg-8 col-sm-12">
          <select className="form-control" name="year" id="year">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022" selected>
              2022
            </option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
