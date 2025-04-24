import { Characters } from "../interfaces";


const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharactersByPage = (page: number = 1, name?: string): Promise<Characters> => {
  return fetch(`${baseUrl}?page=${page}${name ? `&name=${name}` : ""}`)
    .then((response) => response.json())
    .then((data) => data);
};

