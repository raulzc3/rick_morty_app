const getData = async (link) => {
  try {
    const response = await fetch(link);
    const json = await response.json();

    return json.results;
  } catch (error) {
    console.error(error);
  }
};

export { getData };
