const cryptoJS = require("crypto-js");
const SECRET_KEY = process.env.CRYPTO_SECRET;

function encrypt(value) {
    return cryptoJS.AES.encrypt(value, SECRET_KEY).toString();
}

function decrypt(value) {
   const bytes = cryptoJS.AES.decrypt(value, SECRET_KEY);
   return bytes.toString(cryptoJS.enc.Utf8);
}

module.exports = {
    encrypt,
    decrypt
};