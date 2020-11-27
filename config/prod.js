// module.exports={
//   MONGOURI:process.env.MOGOURI,
//   JWT_SECRET:process.env.JWT_SEC,
//   SENDGRID_API:process.env.SENDGRID_API,
//   EMAIL:process.env.EMAIL
// }


import dotenv from 'dotenv';

dotenv.config();

// const mongoUri = process.env.URL;
const config = {
  mongoUri: process.env.URL,
  jwt_secret: process.env.SECRECT_KEY,
};

export default config;
