// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r0SJ6yZdmQP25w6fU9KB6KWirpnIcGnfJXoRT8rZh2jKbC1G50EIJDG3fYEHr0+alI3jFItdRTn+J7PeQ+2MqsYpZK8BZsuhDwABmNIChVRklO2yoW31wsccFsmugatW4yIPVD4L0RXVzBJmIY+vS+O6+kXcWyyjT3b6ipS/1kwU88s8BMXFYkIVIs64w6EhTgUV3upvMgrUd+++7Nlqkn8XAaZbusQO8/JSpyQ0r5XcT5MMfGVfrKLAXVuZenJdr2xAp9u2n9DbqRy+YHZNoWsWTJPz546ZxfRnoFbD7Gh8mu8pEcXrH1TLY/X0b93/Prv+miw17USMSxv5HlTRKLA4JwAKPvnfU2WM5CqcG3IeMarG54Lv+vfYPC82JtZBlHcN437vuA7bLl9sMfp+MHC1y+mOkMAOlh1QRQbrrrLD5U0uBNNs32XQcBHyG5iA+IdN9Yq9+/yIoyNoEPR5S3AlrmBL0FWofiI4ZrtjzRRfIZZVs0MdndtVQo448sc0HM8ekd9IycmOJzy0+FVeDVXHXxotTVGP0ccbnBy9eQqP1rhK0Vm368b0c7EbmPFRMVo1AYjOO3PhgpNnP/UKGo0/xBknapZGTIymnbkbKm11HJ3poDkU/On1+yX8V90oPdA6HKylbLiC5VBIIo2EnCPczS7Rezb08bvRuz8MI3olPYEZkgDOZxUoDm7HR3+Gp5F14rGgvggMVuflbZBtGKdut8TntcZJOW2RvBn7Dti9y95j7t8=';
  const _INTEGRITY_HASH = '36abc6ccc45f9df12465f299ee8e57cf76e0064c1041fc134354a14d82ba54ca';
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
