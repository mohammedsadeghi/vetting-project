export const getCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  return response.json();
};
