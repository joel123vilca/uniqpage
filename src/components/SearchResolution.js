import React from 'react';
 const Search = (props) => (
   (
      <form  className="Search"
      onSubmit={props.handleSubmit}>
      <input
      ref={props.setRef}
      className="Search-input"
      placeholder="busca "
      type="text"
      name="search"
      onChange={props.handleChange}
      value={props.value}/>
      </form>
   )
 )
export default Search;