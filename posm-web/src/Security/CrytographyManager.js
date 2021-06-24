import Utf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';


// [08.06.2021] : We can use an AES key, e.g. 'NdRgUjXnH3tShx/A?D(G+KbPeShVmYp3', or directly use a secret phrase.
function CrytographyManager() {
    function encrypt(plainText, keyOrSecretPhrase) {
        return AES.encrypt(plainText, keyOrSecretPhrase).toString();
    }

    function decrypt(encryptedText, keyOrSecretPhrase) {
        return AES.decrypt(encryptedText, keyOrSecretPhrase).toString(Utf8);
    }

    function encryptObj(obj, keyOrSecretPhrase) {
        return encrypt(JSON.stringify(obj), keyOrSecretPhrase);
    }

    function decryptObj(encryptedObj, keyOrSecretPhrase) {
        return JSON.parse(decrypt(encryptObj, keyOrSecretPhrase));
    }


    return {
        encrypt: encrypt,
        decrypt: decrypt,
        encryptObj: encryptObj,
        decryptObj: decryptObj
    }
}


export default CrytographyManager();
