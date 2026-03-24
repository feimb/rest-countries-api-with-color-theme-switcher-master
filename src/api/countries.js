import axios from "axios";
// https://restcountries.com/v3.1/all?fields=flags,name,capital,region
const baseUrl = "https://restcountries.com/v3.1";

export const getAllCountry = async () => {
  const res = await axios.get(`${baseUrl}/all`, {
    params: {
      fields: "name,capital,region,flags,population"
    }
  });

  return res.data;
};
export const getCountryByName = async (path) => {
  const res = await axios.get(`${baseUrl}/name${path}`)
  return res.data
}