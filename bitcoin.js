const bitcoin = require('bitcoinjs-lib');

const keyPair = bitcoin.ECPair.fromWIF('');
const myAddress = keyPair.getAddress();

const GOPAX_ADDRESS = '1AViiehHHh1sgLAnJmaxbidQB2Xq5AXUTu';

const txb = new bitcoin.TransactionBuilder();
txb.addInput('8a7b486d33ddcf6f0b379f577573f4f1e286d2f851479db8cf56e4db16094b1f', 1); // GOPAX_ADDRESS -> myAddress 0.0001 BTC
txb.addOutput(GOPAX_ADDRESS, 5000); //5000 satoshi = 0.00005 BTC
txb.sign(0, keyPair);

console.log(txb.build().toHex());
