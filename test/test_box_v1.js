const hre = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await Box.attach("0x8A791620dd6260079BF849Dc5567aDC3F2FdC318");
  const value = (await box.retrieve()).toString();
  console.log(value);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
