<<<<<<< HEAD
const got = URL => require("got")(URL, {json:true});

var img = 0;

async function cat(){
  const res = await got('http://aws.random.cat/meow');
  const file = res.body.file;
  callback(file);
};

function callback(response){
  var img = response;
};

cat();
console.log(img);
=======
const got = require("got");

module.exports = async () => {
    try {
        const res = await got("http://aws.random.cat/meow",{json: true});
        return res.body.file;
        } catch (error) {
        console.log(error.res.body);
        }
        }
>>>>>>> 0ff00495d9cf7a6b4ac6e6d430250e109810a161
