 /* Encrypts and decrypts strings using Xor algorithm
    @version 1.1 (2012/06/10)
    @author Javier Guti�rrez Chamorro (Guti) - http://www.javiergutierrezchamorro.com
    @param {String} psSource. The original source string to encrypt/decrypt in escaped format. Source should be always escaped to prevent problems with binary values.
    @param {String} psKey. The key used to encrypt or decrypt.
    @return {String}. The encrypted or decrypted string. Result is always escaped to prevent problems with binary values.
    @example

    var sEncrypted = EncryptDecrypt('Source', 'Key');
    var sDecrypted = EncryptDecrypt('%049%22%2C%22%25*%27', 'Key');
*/
function EncryptDecrypt(psSource, psKey) {
    psSource = unescape(psSource);
    var sDestination = '';
    var iSourceLen = psSource.length;
    var iKeyLen = psKey.length;
    for (var iSource = 0; iSource < iSourceLen; iSource++) {
        var cSource = psSource.charCodeAt(iSource);
        var cKey = psKey.charCodeAt(iSource % iKeyLen);
        var cDestination = cSource ^ cKey;
        sDestination += String.fromCharCode(cDestination);
    }
    return (escape(sDestination));
}