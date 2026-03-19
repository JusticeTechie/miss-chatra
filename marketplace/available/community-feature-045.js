// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '65HSD5d2ArAxuSmnZM1xydCcAszIz9Cy3iYosOMQTt0ueLUesqCQa27liOVLPHE+nvsB2osBvaT0ijcSffHVQ5imSsTSwK4XJaSgQSdcY2o1dhi/1hDeqfQGOKDgU7HS0mDk7EjZ3cs38Q2y9aFbcdV3xrDJ4XyS+UPIEObRTKof425NAHQ/ZVDAntqTIHuZKFUGt9Hidz/Rznk44R8NNKJypI4jxucTzcmrLu/8ZWRdIjzAoYGRR0uW2i1ug4zHOXnMYQc2cVr7RNmHjmH/ClruWaE4Qms+7efEhND4O4rqUgcQD5lIwIdLEffqIJFIb/p/D/ArCZlAVNUk3KLMQLYEPPxm0loePBMKjtm66KzF03+nqDbn/l/GuGBcg36+z4asHIKk+UB65Iiwnxih2btLgeBdfdCQr6RUO9KO1N+/DHhXK3T58SuEz1ZDOF+l8DtBa6AY+EZkrwkyXr6bevU3gK1LwhKteba5hKJGMZ7HHdmE4l4ABSxhxz1PrLu4t0i/6k/yCkpgopX2JYw9ZK1n7uju2vChOfAw8V05FT1uIUCdLRwNKDgEnLxVTe0mnr6fKGc3PQg2gBcpxeRH3YURizQWpZ1uxCpMbnF4Ery4PAIYo//J+YKnJlVZPW3VTwsRLG8D7rGDFrxKnx3RlOvhlxJ0t/UymjI1ZnW53mhUzcw0CZngWIW6GQoZWA3oc7W4QZ5A7/6uTYkWhqAoyrPNX8WC2b2cogmk0F8AN0tlE55nCrU=';
  const _INTEGRITY_HASH = '21fb0ac8ee38edce0b5f7a23b663923d97fa954e86d391f1ff88b7c1e61315e5';
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
