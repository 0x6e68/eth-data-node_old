export const DATA_NODE_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "data",
        "type": "bytes"
      },
      {
        "name": "metaData",
        "type": "string"
      }
    ],
    "name": "postDataTransaction",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "metaData",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "dataByteLength",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "usedIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      }
    ],
    "name": "DataAdded",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNextIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
