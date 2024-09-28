const hre = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await BoxV2.attach("0x8A791620dd6260079BF849Dc5567aDC3F2FdC318");
  await box.increment();
  await box.increment();
  const value = (await box.retrieve()).toString();
  console.log(value);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
