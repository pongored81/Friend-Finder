//randomcat.js
const fetch = require('node-fetch');

exports.img = async function cat(){
  var data = await fetch('http://aws.random.cat/meow');
  var json = await data.json();
  return json.file;
}
