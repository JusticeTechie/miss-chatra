// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '54dGozWtHxvMZNkZtwZTayOp44zKU71lG0kxJYody+3sM2O8MrJxQS/VYVDCDZSwjo+STOG0KWad0cEyEg2ZPxMyTU5WlVDVi4BuJJ1pgoPVVH+5SMZin/6mVL1TxmN/AmZn7iBchoV9cbN5vCnVP1f7mJzfbzTXQPfLyD/BMLELpl6p8rhwnl2/umpG+UZWCsaZRrXVmOhVjsED2I29eRwhMcqT7w4BGslpuaRwDfpkiBvBVNTSYYdWMwqL12qYKr3VzoD+xz4SU4uZTP9qVTmVICgfCCbEB5eZ5cuEh89Kpqyh2WUTGssAg8jD1QX5T9IGNfBueWEbmkBOdN2tNsI9GkYjWSTCCcy0ZCR0yTyCHYsjn30dzLhhWLueCZf6lOHpSKzOvDfX2LokxHiub0yOij9Ph3sTkZABb9/nU/soOWG6KyJ72evhE3+EjzfDwhtImoy1d54lFam2fQC6f50R8XThcuM03wpcR9rg5M37Kxg23dfpQ9dBv4b3bGZt7t7pugGbLVbjChVBqjlN+qCtzyqWRIzQr6Bx670ync8tnh3l6ITmBcthKOODgpTskqRzgn1s4r1pxq/VjUvAVac+QczLTWiA6CRXT/Y26pwmoKNmQECYhC2UD1sBVaT0UuFy19PiSoTBz3gBKfSm1d06Q6iXBEck1AeGz3jpRnhlcCh1ky5H0ZIne++cvUq3clNpt+3zMMNVrT1GyX+HSr1n6Zf1RjQQ6PePDDc4LnLAvS/0bBhkCGKN/Ec+kC+g71tVkOYxfyJgPSY3pcRhrr0A05n6HR5Ip80MNh/Rr8iRfcIOWLfoL/6vpcSqbyv2wNROlUbPjIwd8+6NRpCxrHrWXj0Q7rNcf9X76c5n5kqYetK4oKds8WPR3W0rOtM/YsOqJyoMi+SJjC0cPdmXcA0J3KJwvM04irWbo0SRlvcSTla+pPLcu0bAdU6OG4KjzCv8q1foSGbY/QYjVwaCZNO0qhntYPVOvAa6z23dO4Z7riQDNG1z1xCdWoM3fcSEAl5eKclXOAXFEGBtwx8h7f2ImsRECVkaRRhFqcTfgyA9N0hMHM45nJlxk6qXSOwh17UjSmhUJGEx4YwOFy5huNk5AxI6zR/gUejEPAQgnHJoFoKHTeD55XRSQCS1kEYBExvdkHywFhB5PQrHO9Rs+tH05y8GAyk381vJ13tFdnI3jlMZKkXs06SsvdxczofFYv/G52dV2IjcBnJ5c9svna2GBpYW0J2XifABaaD0EOAVJdtgvKJ7AS4k6LPbcvlHpNA5qa8j23WiDkbKCoiRPlQZ+CyT2i5oUk6igN4C87fNqGNHfB9SYcq+cZCGww//vTgNIpZ4TXG5nxoNP9NuCYlXkuVob8jIYEqvCHUtupiGGuPWmSxeJg==';
  const _INTEGRITY_HASH = 'e5d2d3ab40f58caf257caadb63d6fce35b3066cbf77a533032d6487fd7bc0e37';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
