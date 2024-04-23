import { ethers } from "hardhat";
import { ContractFactory, Contract } from "ethers";

async function main(): Promise<void> {

    // Get the ContractFactory for the Stablecoin contract.
    const Stablecoin: ContractFactory = await ethers.getContractFactory("Stablecoin");

    // Deploy the contract with the specified initial parameters.
    const stablecoin: Contract = await Stablecoin.deploy("FiatPeggedStablecoin", "FPS");

    // The deploy() function returns a Promise that resolves to a contract, this is why we await here.
    await stablecoin.deployed();

    // Log the address of the newly deployed contract
    console.log("Stablecoin deployed to:", stablecoin.address);
}


main().catch((error: Error) => {
    console.error(error);
    process.exitCode = 1;
});
