/*
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
*/

//---------------------------------------------------------------------------
//use fs module to read the content of file
//fs chalayera hellotxt ko content read garera browser ma dekhaune
/*
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //handle http requests
  res.writeHead(200, { "Content-Type": "application/json" });

  // Read file asynchronously
  fs.readFile("./hello.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }

    // Send file content as JSON response
    res.end(data.toString());
  });
});
server.listen(5000);
*/
//------------------------------------------day5--------------------------------------------
//----------------create new file-------------------------------------
/*
const http = require("http");
const fs = require("fs");

const createDoc = (data, path) => {
  return fs.writeFileSync(path, data);
};

createDoc("Hello world!", "./intro.txt");
*/
//---------------------------------------------------------------------
//create own module------------------------------
//const textManipulator = require("./string");
/*
const { properCase, slugify, truncate } = require("./string");
const http = require("http");
http
  .createServer((req, res) => {
    //handle http requests
    res.writeHead(200, { "Content-Type": "application/json" });
    let string1 = "anjila gurung";
    let string2 = "Top 7 Featured Articles";
    res.end(
      JSON.stringify({
        properCased: properCase(string1),
        slugified: slugify(string2),
        truncated: truncate(string2, 10),
      })
    );
  })
  .listen(3000);
*/
//---------------------------------------------events------------------------------
/*
const events = require("events");
const eventEmitter = new events.EventEmitter();

const sayHi = () => {
  console.log("Hello");
};

//create a new event+listen
eventEmitter.on("scream", sayHi);

//fire
eventEmitter.emit("scream");
*/
//------------------------------------------------------------------------
/* 
const product = {
  name: "Tshirt",
  price: 100,
};

const events = require("events");
const eventEmitter = new events.EventEmitter();

const calculateVat = (cart) => {
  const totalAmount = 0.13 * cart.price + cart.price;
  console.log(`The total price is ${totalAmount}`);
};

//create a new event+listen
eventEmitter.on("checkout", (item) => {
  calculateVat(item);
});

//fire
eventEmitter.emit("checkout", product);
*/
//----------------------------properuppercase-------------------------------------------------
// const properCase = require("proper-upper-case");
// const convert = (text) => {
//   return properCase(text);
// };
// const result = convert("anjila gurung");
// console.log(result);
// //--------------------------Slugify-------------------------
// const slugify = require("slugify");
// const slugified = (text) => {
//   return slugify(text, {
//     lower: true,
//   });
// };
// const res = slugified("Top 7 Feature Artciles");
// console.log(res);
// //-----------------------------lodash(truncate)------------------------
// const abc = require("lodash");
// const truncateString = (str) => {
//   return abc.truncate(str);
// };
// const truncated = truncateString(
//   "Retrieval-Augmented Generation (RAG) is an advanced framework that combines retrieval-based and generation-based approaches."
// );
// console.log(truncated);
//------------------------Hashing passowrds------------------------------
// const bcrypt = require("bcryptjs");
// //generate a salt
// const saltRounds = 10;
// const userPassword = "user_password";

// bcrypt.genSalt(saltRounds, (err, salt) => {
//   if (err) {
//     return;
//   }
//   bcrypt.hash(userPassword, salt, (err, hash) => {
//     if (err) {
//       return;
//     }
//     console.log("Hashed password:", hash); // Store the 'hash' variable in a database or use it as needed
//   });
// });

// //---------------------verifying password-------------------------------------
// storedHash = "$2a$10$grc.cXWNKuuZFE6ffphSOuLEqPJN4jjJjf7UvNucFtJxPehIhqF46";
// bcrypt.compare(userPassword, storedHash, (err, result) => {
//   if (err) {
//     return;
//   }
//   if (result) {
//     console.log("Password matches!");
//   } else {
//     console.log("Password doesnot match!");
//   }
// });
//----------using function-------------------------------
// const bcryptjs = require("bcryptjs");
// const encryptPw = (text) => bcryptjs.hashSync(text);
// const verifyPw = ({ hashText, text }) => bcryptjs.compareSync(text, hashText);

// const hashPw = encryptPw("password");
// const isValidPw = verifyPw({ text: "password", hashText: hashPw });
// console.log({ isValidPw });

//---------------------------------------------------day6--------------------------------------
//---------nodemailer--------
// require("dotenv").config();
// const nodemailer = require("nodemailer");
// //transporter
// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PW,
//   },
// });

// transporter.verify((err) => {
//   if (err) console.log(err);
//   console.log("email is working");
// });

// const sendEmail = async ({ email, subject, message, attachments }) => {
//   //const data = await ('email+subject');  if email and subject add garna doesnot take time then ...appears on await
//   const info = await transporter.sendMail({
//     from: `"Anjila Gurung👻" <${process.env.EMAIL_USER}>`, // sender address
//     to: email, // list of receivers
//     subject: subject, // Subject line
//     html: message, // html body
//     attachments,
//   });
//   return info;
// };

// sendEmail({
//   email: "pathakbhags912@gmail.com",
//   subject: "sunnnta",
//   message: "<div>Happy new year<div> <img src ='cid:happy-new-year'/>",
//   attachments: [
//     {
//       filename: "img.jpg",
//       path: "./img.jpg",
//       cid: "happy-new-year",
//     },
//   ],
// });
