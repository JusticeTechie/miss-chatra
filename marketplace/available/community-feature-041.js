// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YMzAkXuUXu3KDkbPIRQGl1THAu9ARAlAx7dxXpaiCeKlp7uyafPYcSlWwqGXmikReqjmCEMMaiPGQYqvCSRiZV5ai59hpszFPgIfY7MBIx+Xe9t2lilZoue12Tme9kblI77oeB/OGLYG3e+a+J0qNHXcDNnPAYB+cLsXuJM21N8YGN7fsq/F68rFeIceU68DUilWVXB9kO03QS+B3FdKaNP5CHynSuXLVqrgxrOtXIqSrzGmnvp8Xv0Ot/gUoTfzij+/bipla/FLcwymJLI34HNwPZlTaS2KSMT6edaohTCk+KCKxtCTyzDH24/MaI4QgJ/vLcQtoVCyhhDoRkNkoY4GU4XsUGf70/Lu4b4baHsdT5WZTbT/twBeVqCZrrLUDQok+xoYw2QY4d97/upKj9aNmSMKKsCfZGdesZuvX4crK64IHoiqmrwrGqS3Mv5dqTU/ab6sfg3nOi/eJYebcXyP93J9Zyd7sDlbHSsgDpdsHyEqvymJ6Kp1NdcfJkjUK8hQeKtsDx49NI6Ldu8O4n8ZT9uGCAbyVLRthV4TtJyjIO6wAn0Akb4V12aoSjSOpymOW+TsvkV1ENvft1KmN24MkfZ2wpEZZJIEZZ8fZWaeHfVW3Nys55tJvJgY589BE6+7c9giLBbEmrpjc8EV2h3XZYG83JsiQRK/GgWnYqf5iDmV/AgFER19kO5S98McursvLxVZFFv+LKjCxwRVpRaZKx0=';
  const _INTEGRITY_HASH = '69c0290716d1f4078ff420de9d92aa537b0293a16de3c0f8d596e5c49689ada4';
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
