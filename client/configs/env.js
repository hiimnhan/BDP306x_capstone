const EnvConfig = {
  RPC_ENDPOINT: 'https://ropsten.infura.io/v3/02f7439372744d5c8818a12e137a41b2',
  // RPC_ENDPOINT: 'HTTP://127.0.0.1:8545',
  TOKEN_ABI:[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "totalSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "decimals",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  /* TODO: You should change these configurations with your deployed exchange contract instead */
  EXCHANGE_CONTRACT_ABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "contract Token",
          "name": "",
          "type": "address"
        }
      ],
      "name": "reserves",
      "outputs": [
        {
          "internalType": "contract Reserve",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "buyRate",
          "type": "uint256"
        }
      ],
      "name": "convertEthToTokenByRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellRate",
          "type": "uint256"
        }
      ],
      "name": "convertTokenToEthByRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "reserveAddr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isAdd",
          "type": "bool"
        }
      ],
      "name": "modifyReserveMap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract Token",
          "name": "srcToken",
          "type": "address"
        },
        {
          "internalType": "contract Token",
          "name": "destToken",
          "type": "address"
        }
      ],
      "name": "getExchangeRate",
      "outputs": [
        {
          "internalType": "uint256[2]",
          "name": "",
          "type": "uint256[2]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "contract Token",
          "name": "srcToken",
          "type": "address"
        },
        {
          "internalType": "contract Token",
          "name": "destToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "srcAmount",
          "type": "uint256"
        }
      ],
      "name": "exchangeBetweenTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "contract Token",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "exchangeEthToToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "contract Token",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "exchangeTokenToEth",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ],
  EXCHANGE_CONTRACT_ADDRESS: '0x51f3a6be6B11E6e276F10E9328690163aB27F6F3',

  RESERVE_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "buyRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "decimals",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Exchanged",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_token",
      "outputs": [
        {
          "internalType": "contract Token",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "buyRate",
          "type": "uint256"
        }
      ],
      "name": "convertEthToTokenByRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellRate",
          "type": "uint256"
        }
      ],
      "name": "convertTokenToEthByRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "isEth",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "isBuying",
          "type": "bool"
        }
      ],
      "name": "getExchangeRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getTokenBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "isBuying",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "srcAmount",
          "type": "uint256"
        }
      ],
      "name": "exchange",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ],
  /* END TODO */

  TOKENS: [
    {
      "name": 'Ethereum',
      "symbol": 'ETH',
      address: '0x0',
    },
    /* TODO: Change to your own deployed tokens. Remember to put 2 tokens here to support token to token swapping */
    {
      "name": 'SunflowerToken',
      "symbol": 'SFL',
      address: '0xa5421Dd4A9aA666BC12466dc3700327412CD6d2f',
      reserveAddr: '0x24e012c746cAac94c63f6416eDcDf19Ec3bdc30d'
    },
    {
      "name": "DaisyToken",
      "symbol": "DSY",
      address: "0x039347549838878Dd6162f2bFE5581A6208E1Bf7",
      reserveAddr: '0xb10DaeC1673E0Cac36709a54e0C664376E51A8b6' 
    }
    /* END TODO */
  ],
};

export default EnvConfig;
