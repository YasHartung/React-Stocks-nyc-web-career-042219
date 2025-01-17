import React from 'react';

const SearchBar = (props) => {
  console.log("searchbar props", props)
  return (
    
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={() => props.changeSortType("alpha")}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null}  onChange={() => props.changeSortType("price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilterType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
