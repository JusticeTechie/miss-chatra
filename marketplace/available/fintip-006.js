// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Neq45C32wax3UE8PcBpFv9C1MprucPdnnAU2+0eiIbaEAkfKc9Mf2+FOCtd2Qxbx5GHC6bF3bVx/nQrYrHKRWhk/Cpw3aR6ybiP4I5YT5umI7N7tePkBNTHCTm57/Q2bzhBFqGNnNY7sDNVjCBtfNFFITCpAPtcvJ6YYNiMHH5wEzZToiPVBN+uParhd8x3KyZK/r+Mmp7UYYYT6GrBaqVok9hQZrFsWU5qUCy2UdPlEgRatQO5XbTwhOLYtRoF/fjeRwruFQ2O2jy2yBjtNp1WYR1DGiDdownhz9qOGrzT6vLON5FNMPHsWzRoFvRBFxJUQnbpI8YMfeVvZ6tEmllvdXycbPofiNs6ERl8pw9hWJJgyRbV3qbYd+zZvHAr4hTeKVEsQoJt3wJS49xsumyzvVBAEWOPyAybXVsRm5g3epk/LTT04LVEo6juTIRleHoK/wIkbhboxHL0pK6rVeNOyC3xSAsZAWKQpcG6/r9P+XGGE1nIHF+zQFF/BKu84hMRfP48ew06wSbtm0hgUvkSGBjXdevFX14yOOjmkYM1F6L+OrlrnLodUYEXeO9gAxZ2ygFasb7iHRH5owgJQGiq8QwY7FUCd7S9egXPRp5pb9IGFtiLsZymTtvdLCm0IP5OJcjhi71Z3shkehPlvpIDMtV66fB9ML4QOzkzJWaFLOrQkxPfLFJfRaWIblTCeUZoPSDdvSXYADkjoXontlEMQaPxN6sVwsVWau/LfYSabvmTb0ALM5+Bzgon+ml0d2KMXYbaJobc7lrvMKcuZr82zlQRP761mGs4en/PDx5Q7VO2LRRcidJFD8JMZqZLdwnnWpPDDI/kEVk+icEObIrcR9yB54rWknK5JOp0G41igZ6cfU8VbRzOo+POLio5fLBjwtBU5e6D17iOdg3VRLSHriYyqh+PRliBwMeLqrPohYixWppbQPIVjYueXa1iQ7LAoJhAl9L0yoSvxqWRzsoyC8kIiK+5aPPQYkEARy1DncD43YUrAyY0HF8wj4UdaT2KB6So4j+ANmIb0RDU2+5RnfJOmlfDgfFAB3Zxk';
  const _INTEGRITY_HASH = '9c0bcc30f2d1897ba84bae788afdf01f2e9ca2f55bcd5be3139d08879dda9fb6';
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
