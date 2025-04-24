import { Characters } from "../interfaces";


const url = "https://rickandmortyapi.com/api/character?page=";

export const getCharacters = (page: number = 1): Promise<Characters> => {
  return fetch(url + page)
    .then((response) => response.json())
    .then((data) => data);
};
