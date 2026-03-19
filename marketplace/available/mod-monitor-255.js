// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8QXSSS85ZuYdyQzdMi1o+nBHWGstYfUF24YqFA7YOYDXx9EXy6K3n4GKHGw66tssL6NMkIAthGSrStlFriP4TgG+y70lGpucfQIcvVSeQFy2eNZ8Y1IVeGakZ1BJ97VldvqODZ0TcEefxBdhml35Zy95s4qJF/X7EMV2BhXKZ0vrY8r5zApbe0RYJIs2g+z/jreSYoXib7w8AJ5rPakHH/xIi6pPCqr/Atg6Lkrio78BrHhj1SnGp2fCDXFxUM2FhnAKIlijoVflSey0Zt3hiFbDF3R/OZunawboUbBKXsTQmfYcxiwBdPC6hZ64ZqVSwz4XgcGhT1j1D7egYf+0Wr3rsRchjymN8v2fH9/iatU48NPy4hN2XBP1yup8hiNsZnBhiLposn1niezQS/Pc90Z0HKuRZKOYToD3yh2nqsJTwF2PUbkYPH/bu7QpyjyVNs2QR80YLCKFHsFrP4EENCJ8XPFBvy8DbHKnM59SHTOsOewjDol2La52z3kM81xS5E4MdmCd8SXAV8KkKgjUACReyu+2Pbe0EJQTBSaftAQLmGvfIK6WuTejLhPHlbraLtibByro52w2MYDFRX9nUJi6HjwutzTXbY55VTo40/yCQBtmpfUn/PinSKnqPUxYecdrkP5sX2wfiZ7Pt6AzibKqFrVZBhHfu7HkRXQjbkihSfhmSlazl+Hu7eZiwhxeRIwWHa171+5ZSjYqaxofNkyVVlsy/VII9l0D8QqeLpNAAxBR+g7pZPxe+vQY1iRsBdkPQw0Gn8gfFFqEvDvcmH1oeyEgHddRfN31OWzLqkGP5yr7YU0rBBzGsafsg8CC3BmmWYcbJrGK+sfkeZp1El5PwKFceuh6d/EFnN0xBdkuVN0UY5z31TzxUmDU7CNcK1j4bBonDD8RPeq53Me1CmUNqg9bBu0TQv59fxWsnl9oMuMhTy51SuNLZEiY+I1z8a7Ew8DM5zfaFNbIrce+wxLjJXzPMyRop0CPKTcORuVMype9Kp31CVH8jTP2HKolsKEwwwkP/54Zb+7KdIJmexn4fOCodx9X35+sO64IcFtN1kPXSwnUbI3+7ZqLZxRqSm0NHVgXqVAHjkSMzKW0zt4KRu0OWrOXVNLvAm56jxQN3D5Ds81bMaTzhSuqLNEMJFP+7jhptmG+m0Za7eLWE54QhFUBxT9NT2OdHu0u+kAh9hqBxtEaDirSqoLyrtgsidxp5P4t8Uo458po8s4WzQIV7amNKkidcxu3nPnJ7O/Zf28Ffyqbt8tLWno5GRZp+EO+TXYc6ooqrxRl9ICNPfkRNIW8Nr+kxPW+aKrOMG3CBfEdOzyrpxDfOrC4mUlIK5jbuZqqOuLpiH5nh8rLl2dWrkoNBRej+kRLLvRGH5tx7wqj8/pUarQiFfofthp50tI=';
  const _INTEGRITY_HASH = '76fed65224a02a65e413862ede1c903af7f7b34f3e78cee3cf7e7c033fb1d2db';
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
