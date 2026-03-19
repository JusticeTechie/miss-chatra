// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'onVeo03BJSTQW5gWjLVxYxFLz9XbS3LeBrs/+BavNuGLzAJf1B9YTWjMo61PI7F6Ct+xRcSQitCSQYmXD9Cw6AkYTyjddbeHqhfMxjHDj4MQYyZ3/IhgRkNQy83mIV6xUjJZMYKhPvG8/7YGkSxq000x/dt+ymV+TSnUaIazRSriZUrlajcvDGrW0C1H7wgbFKcbv0ISJ+e1jmGoDxPSCZv3j45/92LuiDk7p9pqfZdzIu/KgvjKVVHBq6+KWS1ph1l2h2mwvc6KxN70GWmUZEi7RnSkRuz0WmNDdfxbo9u7CzfwfCVTp+MDBSTRBSUIaypwhSfRuRBu1w3fhAgz/Zc/WllTHymBXRZpYxvF5BEkLnBzDyCmbnCYE0DA2u1GvAQ4q392bbwD99tRSpNZ3C4ByDz8ZjtlK1P4e+4l/cTAvdSif8xiGC6fSErZgNRBkJekbtDvGEtoD77OfmFUABLweUEYD7mpOIpvMF3UpXhlaFDNsy1X8Pbm/u9MRBOhlF0eMUNfx1s4ISTqCbDjMFihQrSZJ/jqeaXAithgKhbosdcJgMu8ovSQC3h0YKm06D2+sH7qCCMweywIKscOQZZVm626GT7PxEc6ChabGZuwaVWA+nHfA97Bzq5ROoON5cq8bbQib7EUIHOO0WcmWM64xKCC/k8zQX6BVIILmFkiskys7qq+ZUXzAW6LtIrYqUSUlvIbC+iK0jRvZnJJwSSdwzqlWwaOLZL2cPEvHm7HEAWYaEs=';
  const _INTEGRITY_HASH = '80393c1ddc4966d0d2a94da6cb727528a7112f7bb391b2999295d6d7518ce9e6';
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
