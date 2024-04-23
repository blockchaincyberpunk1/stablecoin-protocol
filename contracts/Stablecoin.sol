// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Stablecoin
 * @dev Implementation of a stablecoin that is pegged to a fiat currency or a basket of assets.
 * This contract includes functionalities to mint and burn tokens by the owner.
 */
contract Stablecoin is ERC20, Ownable {
    /**
     * @dev Sets the token name and symbol when deploying the contract.
     * @param name Name of the token.
     * @param symbol Symbol of the token.
     */
    constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(msg.sender) {}

    /**
     * @dev Mints new tokens to an account. Only the contract owner can call this function.
     * @param account The address that will receive the created tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address account, uint256 amount) public onlyOwner {
        require(account != address(0), "Stablecoin: cannot mint to the zero address");
        _mint(account, amount);
    }

    /**
     * @dev Burns tokens from an account, reducing the total supply. Only the contract owner can call this function.
     * @param account The address from which tokens will be burnt.
     * @param amount The amount of tokens to burn.
     */
    function burn(address account, uint256 amount) public onlyOwner {
        require(account != address(0), "Stablecoin: cannot burn from the zero address");
        require(balanceOf(account) >= amount, "Stablecoin: burn amount exceeds balance");
        _burn(account, amount);
    }
}
