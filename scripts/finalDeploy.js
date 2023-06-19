
const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract =await chai.deploy(); //instace of contract 
  
  await contract.deployed();

  console.log("Address of contract : ",contract.address);
}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
