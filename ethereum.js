const EthereumTx = require('ethereumjs-tx');
const keythereum = require('keythereum');
const Web3 = require('web3');

const myAddress = '';
const GOPAX_ADDRESS = '0xc5d10767fde17a3f993546b3c2cd2f21aa702fd5';

const keyObject = keythereum.importFromFile(myAddress, './');
const privateKey = keythereum.recover('wheethereum', keyObject);

const txParams = {
  nonce: '0x00',
  gasPrice: 10,
  gasLimit: 21000,
  from: myAddress,
  to: GOPAX_ADDRESS,
  value: 0.005,
  // EIP 155 chainId - mainnet: 1, ropsten: 3
  chainId: 3
}

const tx = new EthereumTx(txParams)
tx.sign(privateKey)
const serializedTx = tx.serialize();

console.log(serializedTx.toString('hex'));

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.sendSignedTransaction(serializedTx.toString('hex'), function(err, hash) {
  if (err) throw err;
  console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
});
