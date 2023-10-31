import React from "react";
// import { useState, useEffect } from "react";

const SearchBar = ({ setSearchTerms }) => {

    function getsearch(e) {
        setSearchTerms(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
      <form className="flex flex-col mb-4">
        <input id="inputText" type="text" className="p-2 rounded-lg w-full mb-2" placeholder="Rechercher un pays ..." onChange={getsearch}></input>
      </form>
    </div>
  );
};

export default SearchBar