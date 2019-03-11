//randomcat.js
const fetch = require('node-fetch');



exports.img = async() => {
  const response = await fetch("http://aws.random.cat/meow")
  const json = await response.json();
   then(json => return json);
  })
};
