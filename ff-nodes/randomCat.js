//randomcat.js
const fetch = require('node-fetch');

function cat(){
  fetch("http://aws.random.cat/meow")
  .then(res => res.json())
}

cat();
