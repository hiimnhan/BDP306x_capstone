
var HDWalletProvider = require("@truffle/hdwallet-provider");
var fs = require("fs");
const MNEMONIC = fs.readFileSync('.secret').toString().trim();
const PRIVATE_KEY = 'https://ropsten.infura.io/v3/02f7439372744d5c8818a12e137a41b2';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: '0.7.0',
    },
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, PRIVATE_KEY);
      },
      network_id: '*',
      gas: 4000000
    }
  },
};