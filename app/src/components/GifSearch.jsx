/**
 * This component is meant to contain a controlled form (a form whose input values) are controlled by a piece of React state (with useState). However, the final submitted value(s) of the form needs to be shared with the GifContainer so be careful about where you define your final submitted state!
 *
 * TODO:
 * - Convert this form into a controlled form
 * - Handle form submissions by setting a searchTerm state value that can be shared with the GifContainer component
 *
 * @format
 */

import { useState } from 'react';

function GifSearch({ setInput }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

export default GifSearch;
