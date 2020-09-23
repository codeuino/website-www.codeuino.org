const axios = require("axios");

const TwitterAxios = axios.create({
  baseURL: "https://api.twitter.com/1.1",
  headers: {
    Authorization:
      `Bearer ${process.env.TWITTER_API_KEY}`
  }
});

module.exports = TwitterAxios;
