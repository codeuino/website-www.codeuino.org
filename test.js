const axios = require('axios');

const mediumURL = "https://medium.com/feed/codeuino";

axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
  })
  
  axios.interceptors.response.use(response => {
    console.log('Response:', response)
    return response
  })

axios
    .get(`${mediumURL}`)
    .then(res => {
        // console.dir(res);
    })