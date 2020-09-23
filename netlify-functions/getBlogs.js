const axios = require("axios");
const xml2js = require("xml2js");

exports.handler = async () => {
  const mediumURL = "https://medium.com/feed/codeuino";
  try {
    const response = await axios.get(`${mediumURL}`);
    const data = response.data;
    xml2js.parseString(data, (err, result) => {
      const sendthis = result.rss.channel[0].item.slice(0, 3);
      return ( {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(sendthis)
      });
    });
  } catch (err) {
    console.log(err);
  }
};
