import React from "react";

function SearchForm() {
  return (
    <div>
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm city"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm button-color"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
