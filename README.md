# Stablecoin Smart Contract

  [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/MIT)


## Table Of Content

- [Stablecoin Smart Contract](#stablecoin-smart-contract)
  - [Table Of Content](#table-of-content)
  - [Description](#description)
  - [Smart Contract Details](#smart-contract-details)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Deployment](#deployment)
  - [Contribution](#contribution)
  - [Contact](#contact)
  - [License](#license)


## Description

The `Stablecoin` smart contract is designed for creating a cryptocurrency that is pegged to a fiat currency or a basket of assets. It includes functionality to mint and burn tokens, ensuring that the supply can be managed by the owner of the contract. This contract aims to provide stability in value, which is crucial for businesses and consumers who need predictable pricing.

Stablecoin deployed to: 0x3ca001908C1c9297C02F2D4a63AC5Ab7e38978d7


## Smart Contract Details

- **Contract Name**: Stablecoin
- **Compiler Used**: Solidity ^0.8.19
- **Networks Configured**: Ethereum and others supported by Hardhat
- **Primary Functions**:
  - `mint(address account, uint256 amount)`: Mints new tokens to a specified account.
  - `burn(address account, uint256 amount)`: Burns tokens from a specified account.

## Setup and Installation

### Prerequisites

- Node.js and npm
- Hardhat
- An Ethereum wallet with testnet ETH for deployments

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blockchaincyberpunk1/stablecoin-protocol.git
   ```
2. **Install dependencies**:
    ```
    npm install
    ```
3. **Create a .env file**:
Populate the .env file with your Infura API key and your wallet's private key:
    ```
    INFURA_API_KEY=your_infura_api_key
    PRIVATE_KEY=your_private_key
    REPORT_GAS=true
    GAS_REPORT_FILE=./gas-report.txt
    COINMARKETCAP_API_KEY=your_coinmarketcap_api_key_here

    ```

## Deployment
 
To deploy the Stablecoin smart contract, you can use the provided deployment script:

```
    npx hardhat run scripts/deploy.ts --network your_network_choice


```
Make sure your .env file is properly set up with a funded Ethereum wallet to handle the gas fees.



## Contribution
 
Contributions are welcome. Please fork the repository, create a new branch for your contributions, and submit a pull request.


## Contact

Feel free to reach out to me on my email:
thepolyglot8@gmail.com


## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)

