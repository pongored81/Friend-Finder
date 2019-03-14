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
