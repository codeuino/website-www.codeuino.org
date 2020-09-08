const TwitterAxios = require("../src/helpers/twitterAxios");

exports.handler = async () => {
  try {
    const likedTweetsResponse = await TwitterAxios.get(
      "/favorites/list.json?count=50&screen_name=codeuino"
    );

    return ({
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(likedTweetsResponse.data)
    });
  } catch (err) {
    console.log(err);
  }
};
