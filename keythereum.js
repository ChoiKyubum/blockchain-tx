const keythereum = require("keythereum");

const params = { keyBytes: 32, ivBytes: 16 };
const dk = keythereum.create(params);
const password = "wheethereum";

// Note: if options is unspecified, the values in keythereum.constants are used.
const options = {
  kdf: "pbkdf2",
  cipher: "aes-128-ctr",
  kdfparams: {
    c: 262144,
    dklen: 32,
    prf: "hmac-sha256"
  }
};

// synchronous
const keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);

keythereum.exportToFile(keyObject);

console.log(keyObject);
