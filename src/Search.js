import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form>
        <input
          className="find-your-city-search w-50 p-3"
          type="text"
          name="city"
          required
          placeholder="Type your city here"
          autoComplete="off"
          autoFocus="on"
        />
        <input
          type="submit"
          className="btn btn-primary btn-lg search-city-button"
          data-bs-toggle="button"
          autoComplete="off"
          value="Search"
        />
      </form>
    </div>
  );
}
