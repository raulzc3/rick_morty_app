import { getData } from "./fetchData";

const getCharacters = async (page) => {
  try {
    if (page) {
      return getData("https://rickandmortyapi.com/api/character?page=" + page);
    }
    return getData("https://rickandmortyapi.com/api/character");
  } catch (error) {
    console.error(error);
  }
};

export { getCharacters };
