import axios from "axios";
// https://restcountries.com/v3.1/all?fields=flags,name,capital,region
const baseUrl = "https://restcountries.com/v3.1";

export const getAllCountry = async () => {
  const res = await axios.get(`${baseUrl}/all`, {
    params: {
      fields: "name,capital,region,flags,population,cca2"
    }
  });

  return res.data;
};
export const getCountryByCode = async (path) => {
  try {
    const res = await axios.get(`${baseUrl}/alpha/${path}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching country:", error);
    return null;
  }

}