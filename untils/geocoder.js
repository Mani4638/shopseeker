const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  //fetch: customFetchImplementation,
  httpAdapter:'http',
  apiKey: process.env.GEOCODER_API_KEY, 
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports=geocoder;