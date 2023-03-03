import { getData } from "./fetchData";

const getLocations = async () => {
  try {
    return getData("https://rickandmortyapi.com/api/location");
  } catch (error) {
    console.error(error);
  }
};

export { getLocations };
