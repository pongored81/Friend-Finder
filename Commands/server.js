module.exports = {
  name: 'server',
  description: 'Gives out the info and actions for the morrowind server',
  execute(message, args) {
    switch (args[0]) {
      // ===========================================================
      // --> IP <-- START
      // sends IP of server to message author
      case "ip":
        message.author.send('98.172.253.147');
        break;
        // --> IP <-- END
        // ===========================================================
        // --> todo <-- START
        // sends todo list to message author
      case "todo":
        message.author.send('https://docs.google.com/spreadsheets/d/1PYY1mL4zztBW5Fipr9rK41bVMb2mbLdwFtJ3hCY8pcw/edit?usp=sharing');
        break;
        // --> todo <-- END
        // ===========================================================
        // --> quickstart <-- START
        // sends quickstart guide to message author
      case "qs":
      case "quickstart"
      message.author.send("https://docs.google.com/document/d/1_BPdzoLV1e6YBvVVa_BBpm2Yx08Z-3bPLxm7XEah9j0/edit?usp=sharing");
      break;
    }
  }
};