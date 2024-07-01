const http = require("http");
const os = require("os");
http
  .createServer((req, res) => {
    //handle http requests
    res.writeHead(200, { "Content-Type": "application/json" });
    //calculate your machine ram using os
    const myRam = os.totalmem();
    let actRam = myRam / 1024 / 1024 / 1024;
    res.end(
      JSON.stringify({
        data: `${actRam.toFixed(2)} GB`,
      })
    );
  })
  .listen(3000);

//use fs module to read the content of file
//fs chalayera hellotxt ko content read garera browser ma dekhaune
