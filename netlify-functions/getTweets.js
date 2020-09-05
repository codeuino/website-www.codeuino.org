const TwitterAxios = require("../src/helpers/twitterAxios");

exports.handler = async (event, context, callback) => {
  try {
    const allTweetsResponse = await TwitterAxios.get(
      "/statuses/user_timeline.json?screen_name=codeuino&count=100"
    );

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(allTweetsResponse.data)
    });
  } catch (err) {
    console.log(err);
  }
};
