import env from "./../utils/config";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  headers: {
    "x-rapidapi-host": env.host,
    "x-rapidapi-key": env.apiKey,
  },
};
