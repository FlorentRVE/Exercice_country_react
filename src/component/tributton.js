import React from "react";

const TriButton = ({ setTri}) => {

  function getTri(e) {
    setTri(e.target.id);
    console.log(e.target.id);
  }


    return (
      <div className="flex gap-3 justify-center">
        <button
          id="croissant"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getTri}
        >
          Tri croissant
        </button>
        <button
          id="decroissant"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getTri}
        >
          Tri décroissant
        </button>
        <button
          id="alphabetique"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getTri}
        >
          Tri alphabétique
        </button>
      </div>
    );
}

export default TriButton;