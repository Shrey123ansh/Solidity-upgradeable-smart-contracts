const hre = require("hardhat");

async function main() {
  const UnsafeV2 = await ethers.getContractFactory("UnsafeV2");
  const unsafeV2 = await UnsafeV2.attach(
    "0x0B306BF915C4d645ff596e518fAf3F9669b97016"
  );
  const value = (await unsafeV2.safeNewStateVar()).toString();
  console.log(value);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
