import React from "react";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

const CountryDisplay = ({ searchTerms, range, tri }) => {
  const [data, setData] = useState([]); // Création du state data qui va accueillir nos données.

    // ===== Récupération des données avec getData() =========
    useEffect(() => {
        api.getData().then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getData.
        });
    }, []);

    //   ========= TRI ===========  
    api.sortDataExploit(tri, data);

    // ========== FILTER ==========
    let dataFiltered = data.filter((country) => {
        const { name } = country;

        const inputValue = searchTerms.toLowerCase();
        const commonName = name.common.toLowerCase();

        return commonName.includes(inputValue);
    });

  // ========== SLICE ==========
    let slicedData = dataFiltered.slice(0, range);

  // Puis on utilise .map() pour parcourir et manipuler les données.

  return (
    <div className="bg-slate-200 my-10 rounded-2xl p-4 flex flex-wrap gap-5 justify-center">
      {slicedData.map((item) => (
        <div className="flex flex-col justify-center items-center bg-slate-800 text-white text-center rounded-2xl p-4 w-[352px]">
          <img
            src={item.flags.png}
            alt=""
            className="h-[213px] w-[320px]"
          ></img>
          <h1 className="font-bold text-2xl">{item.name.common}</h1>
          <p className="font-bold text-yellow-600">{item.capital}</p>
          <p>Population :{item.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryDisplay;