import React from "react";

function SearchForm() {
  return (
    <form className="search-form" id="search-form">
      <div class="row">
        <div class="col-sm-6">
          <input
            type="search"
            placeholder="Type a city.."
            autofocus="on"
            autocomplete="off"
            id="city-input"
            class="form-control shadow-sm city"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="submit"
            value="Search"
            class="form-control btn btn-primary shadow-sm button-color"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
