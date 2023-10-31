import React from "react";

const Range = ({ setRange, range }) => {

      function getRange(e) {
        setRange(e.target.value);
        console.log(e.target.value);
      }

    return (
      <div>
        <form className="flex mb-4 bg-blue-300 p-2">
          <input id="inputRange" type="range" className="w-[80%]" onChange={getRange} />
          <span id="valueRange" className="ml-2 font-bold text-2xl">{range}</span>
        </form>
      </div>
    );
}

export default Range