//randomcat.js
const fetch = require('node-fetch');

module.exports = async () => {
  const response = await fetch.get("http://aws.random.cat/meow");
  return response.body.file;
}