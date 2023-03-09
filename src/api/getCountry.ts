export const getCountry = async (name: String) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  return response.json();
};
