import dotenv from 'dotenv';

dotenv.config();

// // const mongoUri = process.env.URL;
// const config = {
//   mongoUri: process.env.URL,
//   jwt_secret: process.env.SECRECT_KEY,
// };

// export default config;

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
