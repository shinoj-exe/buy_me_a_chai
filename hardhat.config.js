require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();

const POLYGON_URL=process.env.POLYGON_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon_mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
