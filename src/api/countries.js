import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";

export const getAllCountry = async () => {
  const res = await axios.get(`${baseUrl}/all`, {
    params: {
      fields: "name,capital,currencies"
    }
  });

  return res.data;
};