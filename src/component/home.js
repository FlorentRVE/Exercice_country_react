import React, { useState } from "react";
import CountryDisplay from "./countrydisplay";
import SearchBar from "./searchbar";
import Range from "./range";
import TriButton from "./tributton";

const Home = () => {

    const [ searchTerms, setSearchTerms ] = useState(" "); 
    const [ range, setRange ] = useState(); 
    const [ tri, setTri ] = useState(); 

    return (
      <div className="bg-slate-200">
        <h1 class="text-center text-5xl font-bold mb-5 text-slate-800 uppercase">
          Country React Edition
        </h1>
        <SearchBar setSearchTerms={setSearchTerms} />,
        <Range setRange={setRange} range={range} />,
        <TriButton setTri={setTri} />,
        <CountryDisplay searchTerms={searchTerms} range={range} tri={tri} />
      </div>
    );
};

export default Home