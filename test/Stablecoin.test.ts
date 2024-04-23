import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, ContractFactory, Signer } from "ethers";

describe("Stablecoin", function () {
    let Stablecoin: ContractFactory;
    let stablecoin: Contract;
    let owner: Signer;
    let addr1: Signer;
    let addr2: Signer;
    let addrs: Signer[];

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        Stablecoin = await ethers.getContractFactory("Stablecoin");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        // Deploy a new Stablecoin contract before each test.
        stablecoin = await Stablecoin.deploy("FiatPeggedStablecoin", "FPS");
        await stablecoin.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await stablecoin.owner()).to.equal(await owner.getAddress());
        });

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await stablecoin.balanceOf(await owner.getAddress());
            expect(await stablecoin.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should mint tokens when called by the owner", async function () {
            await stablecoin.mint(await addr1.getAddress(), 100);
            const addr1Balance = await stablecoin.balanceOf(await addr1.getAddress());
            expect(addr1Balance).to.equal(100);
        });

        it("Should fail if mint is called by a non-owner", async function () {
            await expect(stablecoin.connect(addr1).mint(await addr2.getAddress(), 100))
                .to.be.revertedWith("OwnableUnauthorizedAccount");
        });

        it("Should burn tokens when called by the owner", async function () {
            await stablecoin.mint(await addr1.getAddress(), 100);
            await stablecoin.burn(await addr1.getAddress(), 50);
            const addr1Balance = await stablecoin.balanceOf(await addr1.getAddress());
            expect(addr1Balance).to.equal(50);
        });

        it("Should fail if burn is called by a non-owner", async function () {
            await stablecoin.mint(await addr1.getAddress(), 100);
            await expect(stablecoin.connect(addr1).burn(await addr1.getAddress(), 50))
                .to.be.revertedWith("OwnableUnauthorizedAccount");
        });

        it("Should fail to burn more tokens than a holder possesses", async function () {
            await stablecoin.mint(await addr1.getAddress(), 100);
            await expect(stablecoin.burn(await addr1.getAddress(), 150))
                .to.be.revertedWith("Stablecoin: burn amount exceeds balance");
        });
    });
});
