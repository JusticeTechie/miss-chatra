// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pET/HNxK/ofE1CME7h9aPs/obyQ2HjQ3PQKiY+jRE1eou0sBiDHHg0LpiQXbBBUq3EwY9E9HhAQwqSqEaknz1xViJj0e8yS6B+/SwXomcBSvi76JRZ1BJBYIM+dDlKZn33z8BspJwOVyR5TRG8lGrLRQcGg6Na0eRI6NzIwf91VyKo0ljQggSUU5FRd0Y8eiLUlTpQB7VAl/SX2LTcGg2a8V2sKYVbOD9a+nRi1aP5Dn6KvCLAC6QFNjCJPjqnSktIMaU9YFj+GudaExEPeqsxidh3WF5M7JzLIlxAbnWITIbBr1FANBR+HX65wEaJfU3HYqeD+Eq2EiMSkdDCWMTtBYXHhhXj22LXItJBfb61G8xpUH8YMFIDxfsTYHyQx1n+gCmWPNKTXTwNtRqphbHaIjrPX5caAw7GVZjAtakI95Psh0/9MX4LAiuzAD/TBY6EBmGiyh+FAxUZXT75YZJ9m7unMBnasAJX118FUcT1sDtHlPjuCtLFUIQUaK+t5HoZgIxt6DNRekIJqv1GcjS1Hab/AJM4vhCH3kYKte6HT6XXbERVaKMohDAY3ZYHpmVopjiOX5efFc9jUK5V7V8YGkE9+fKvkUWsFNnwBumiJ8zteJ66v58dlMn6SlPbxyf3mr5fBpxE8S/7Wyu2xoGVmO3OWNCzcFjuFrmAMYrD8sl6M65F/WYXRcxg2xFKDPvEjdKlBYnf6H+LYj+++K9PTSSWo=';
  const _INTEGRITY_HASH = '08a1b8052122cd2a11699c9ffc313fce8fddb1c057110c1edd313771cab49a8f';
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
