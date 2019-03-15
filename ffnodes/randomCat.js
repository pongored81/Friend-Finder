const got = require("got");

module.exports = async () => {
    try {
        const res = await got("http://aws.random.cat/meow",{json: true});
        return res.body.file;
        } catch (error) {
        console.log(error.res.body);
        }
        }
