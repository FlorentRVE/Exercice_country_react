// ============================ Fonction ========================

// ============ API ==========
const API_BASE_URL = "https://restcountries.com/v3.1/all";

// Récupérer tous les pays
export const getData = async () => {
  return await fetch(API_BASE_URL)
  .then((response) => response.json());
};

// ============= TRI ===============
export function sortDataExploit(tri, data) {
  if (tri === "croissant") {
    data.sort((a, b) => a.population - b.population);
  } else if (tri === "decroissant") {
    data.sort((a, b) => b.population - a.population);
  } else if (tri === "alphabetique") {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
}
