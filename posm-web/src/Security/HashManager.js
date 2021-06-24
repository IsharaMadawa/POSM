import SHA256 from 'crypto-js/sha256';
import SHA512 from 'crypto-js/sha512';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import HmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


// [17.05.2021]:  Hmac hash is better than traditional SHA, but SHA can still be used as a good hash algorithm.
function HashManager() {
    function sha256(plainText) {
        return Base64.stringify(SHA256(plainText));
    }

    function compareSHA256(hashedText, plainText) {
        return sha256(plainText) === hashedText;
    }

    function sha512(plainText) {
        return Base64.stringify(SHA512(plainText));
    }

    function compareSHA512(hashedText, plainText) {
        return sha512(plainText) === hashedText;
    }


    // [17.05.2021]: key can be any secret string.
    function hmacSHA256(plainText, key) {
        let keyBytes = Base64.parse(key);
        return Base64.stringify(HmacSHA256(plainText, keyBytes));
    }

    function compareHmacSHA256(hashedText, plainText, key) {
        return hmacSHA256(plainText, key) === hashedText;
    }

    function hmacSHA512(plainText, key) {
        let keyBytes = Base64.parse(key);
        return Base64.stringify(HmacSHA512(plainText, keyBytes));
    }

    function compareHmacSHA512(hashedText, plainText, key) {
        return hmacSHA512(plainText, key) === hashedText;
    }


    return {
        sha256: sha256,
        compareSHA256: compareSHA256,
        sha512: sha512,
        compareSHA512: compareSHA512,
        hmacSHA256: hmacSHA256,
        compareHmacSHA256: compareHmacSHA256,
        hmacSHA512: hmacSHA512,
        compareHmacSHA512: compareHmacSHA512
    }
}

export default HashManager();