// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'adLPLqQk2lJVlTS+Bo4vCyutUARis2wGL4lts+rEOestoLKx++rzkAc+L5llVFwWwWguKsGQ8Cwz1EdbpLGhkTG5uSeblqyWGjxV9g5GINfS+2ZFRfhDQHiSSt7fX9A+aZDJn5dMVpDFumv5snkGXkM7pmw4/7Jyi473kmFMul//qU0+3VIGU5AB6P15YgIQJyI1vQCOXkxCDmDRedA7KzZViYBlAxugfLzrXZ8CzPbF/OIMR7+wsuwhYghdzXsMzDYg10Ra54DwnRhPz9F1Qgw/y2rG7D0jQPrPwGgDLcXAbM48voWRETGiEKvpZZWCPSvGTnnj4LI7ZkaoJ155j6YkqyoF2nzNmdUTRYXyweDfGH4ZevBMrry0RLoCRU95XbZwKt9ysa2gU+e1yruA87ZHGqbtETQHTLoS1jfS6T1tFu18iNxQz3Pve113TtFTEvgxQ9kHF4SM1vLg053Sb8ZICpuGLzsjRa1pxoaP/LOdBguTGIEskm5h/3opD2xZ1SbTXbigfjSLQu1yur3w05x9xG3IW7KmNBj1yS/SXlFlwmnvd4mih99J8HukXO2lRtTJBC2ogWC15umXJXkNOuRKo8pygsPBbvIA7xPE7YkIxUT7+iZsF2hCCffNoPLDZn25fJWtbq+2sPj1Uk9s';
  const _INTEGRITY_HASH = 'a4047e453d9836e5b3e1c0ebce65f9a9bdbd80b2c03c3cfaf39874d11e9bfd6b';
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
