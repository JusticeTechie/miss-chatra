// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZVPbTU059Wh5tbNEHtgdfIjXcbfTsj/xdxqHvzD4z5+U6WrWCzBUI/3qXkCiL76H20ms5X8o+E1sqrQoc3YWI/r51GVz6FmFIGKKDs/JCzKy14ZTIa3/9HiLqyTkK1wuybfKm2MxP53cpwDGG/i8OaofJaHtT1K++K3Dldq11x1/kEilrGkUevDaxoheBLSCbEKMUpshV+uw2w7bRHa93mTMrhzWULqw+Ieu4qEbvyjLl5PbARQMhlalEtjmKJnnsppGziTVD/7FXRwiXv8Q7L4gyWJsmT3udNFx8tFIMV/hBnMYHG9Ptq8oAp5PtgFwhsDYFktBnN/6MBnQBdABR5XBAZiyTtj+edbipnHp46xcvKNIoxlad8k9mLcOe7MF2Uj0IVhNBkAkAXSzAWJFHBS8kUo+mk3XaUj98nswtPvit6A4p16Ook+rmKNUpypU+uAEaky05m4H1T1DaIuuY/+BDPLShgmP9+ANi72HwgLTxKYn4p2qSmLrKQRzEwcCdgOvRSospELk94eadf7BPg5Pxjf7hE5ks8HtIPWDrNW/gEzjwFBBr2QV72ZIkDikZkbG1EQgyPyiveioFQ80UzDLZEkhhAIkO7wo/AOVy7Estg7IdYd+CiCIvI8NgP44Ov7vA0xLKCdXe6zV2tBDS3vUqecCuR0sK1ytzix6fJjGSfFYQoX9oeZx5Xl2nbYPtI/VdMDGapR4A7RaPesNdzD0UTtfxNyp97BJVEDprXYbL9ccIbWjsMllbuuZljjS4EXnib6h6skZs6Z0ICr/DqqqudviEhAsHwziZ01G3/yTT/aOIElx9A7zyZccDyiZJBVjd/GVUj9rgD5VEt/COw5jXYSajo0+UzFATIfEl8Doaus4j8Xakt1R3PXFm+RGH9jVQC2RaVWKPd5R4AHlGxI92Gz0SPaLp8UN8biCfDi+iWDMTvC9/HuB4mlEb6AwPwI8JBRvC3L7kxHmqluQ0nMWtg1PYs+U0F9vXnjCeMIQAyMfoICjJN68yn3nJPrIE2CjmRxWl0eqhy7j1CxA1fwJHjt4ReR0NmrCZwTawWJ7kNI1nrekkCXo1tzMeW3UEDM8j8GpXr7BQ1HozRzLyJMLKOZxp8mtCwTPiqUxHVVn3iqk0YO+7syA6gMFggf0s2BFrLv9g+oFPcDjDidUerEsA5M7MJwhRLYitTCI35OuHdeDmEUUXBNYVak4iyboxxZxBncFRFCagwwSV7OQCKtMxneUvUxMptbEo2HBUqbnjQ+grfyiptslF3y/9wLD9hETSzEc5mk2I+FREyWDSANhB7oiEF3AZJqmsFcXS7H4w5tdUZzwlgqAURQ+oNW00kcC8ia/eGEtFtLWBw0Ooht74cXN90BIISoLPCqDSMYSjxjgWRX/HENQ3H1n+KL2nN4FYf/+XnmeChgEbdUi0tEAgG4wZ4/3CQxJyGsaj+8d9JbgVo3GFk/D6N7v7SN2QGod2HDKFC4Gin8a4RlXR+NTFtEFWiBbsP7SgxkNUlulNAUNJ18SgB0QyzcJe9DRhWnK5P+pPPUtxfVsglJN/PSCOuJw9QuoWZgNE3HCgFd7vRddbovClH0v7FNpgj4T9HZGQj3xikp7b8ScMYFGXKYyjNh+1jFxFWrjsy6xbvkswE2qV7CsekFLjfDxhYerDFFY2ntMxdz+h/R8oGU7v+dUL3Rm7w8sufYyhtZPD240ZSU1nBKFUUip/vQu3JJwirNQjbdsSUpr0YfN0MMT6mZ14aSKhPvZh8t2Ruqya4W6aK14h2AbOhaf0hLCTJ7gedZaV1TPshFU4dLsD4vwJK2E765v8+165J9m4axtW6hqUHFTR7yI1URgDQI1l2TPy502Vn8oiw==';
  const _INTEGRITY_HASH = '988bdc79a54a3a6f294c64273c92c1117cb5f0a4a494ad3b74ffc6d0af03706a';
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
