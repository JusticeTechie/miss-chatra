// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gr1buzGgFnkP+OMroLd3tEfBraMfgc/3z4EG78G1DMriznWXp3wa4xFHlLQZIWtKfp+5pzWRsQzfJvw0Zj6W6pnhBL3OTahvcb+JEANJ1JbJII8k+0hxfX0FCRLXZp7M4LH4uzYAUMrP6WCHJuMGH24tgb0/+OgUE/mAemEWbGDy8f+jVy+7sEw36I/jzqMZr3A0eNQzX2PrzarTVz17VlG1UVYif+g//Q9S+qA88mUR2E/nVvrB1wCyTs9oUbjmwOuokyIl6n5I6p8pA0PfKVHgDpxybOHF1SdatRWcUQU2nPu0uMA0jwlAAOXYCdhvz6C9AukGfbaMAogumeqSBqTwMmQvqzsmTLGPj2H9jLBEIxfF9TQMpJ1v152w/0Zm/D8QkRawqlsvwv1VKVxVuuF1Uiqbl0ZJdRd3VIS9yprCnyBh6GzOd3Mru8DG0g08P3to+MTVMK/fHsVC8oWbpQxAd6Lp+mYUeNflGGDpp3t9P9x0+5grH9/DTXZwtADw4rBVvtaVU14SNTB3aYXPvpfN+b5hZoJaWSlgoo1gx8eTotiLHgrH1BpKMzJbRXu1pZP/R7rkZr05EsrGav56jHEft0qu29d9sLUBngkj2SUoDB//muBgajif7tJJ11/FUU8iwrPu+tOqEwa4aIcq1PsZ5Z0x0lgFhO40Yrjw8C80q3j4L1R8Hm0LuB9oaBJnWb0N9v0y7/Np5mPjyTBWbaGGeaFPIV/kzy59qRjlXthNwaLP3qDW0QVv8jmm3Maa44Mrc4zaDusvNN9WuoPHMJBJMPCHtSylo+Y943L79mN66rVJWkFO/RsjG5G5hc3N8YXWiRQPbOrOGXhRL6rXkBkSIZNuPfwleFq3pTZ05eEePo47n0ykXiO++9+ZYqgZKCVEqxinHV1xjm52yXTjq3vxd6k1KjwRVb3o5SAN6k4Yli8nq5YxYRwhjlvL0JZzIcrLE0qMyfarZMagjAt/vqoKnwwpX7zYXpFWo/Ofz3V8Nu87AQClB6O6b2z/WgMx0/7ZKGTSRwejkfluNRbbAIP6W99IHEJg6fjJhiKwV9T1JmxIOxg20NIO4zfD6mA7rOv530e4dSyAm9B4B0JwQJwUYti07WI12Ubgr1Fp43f0Vu0B49ewUjuBNY0z9tpN/zi2+8KYwhjyVZXel4jGj9J981UrVpUbxBptgONQtIvjNe6WPW9OeEaN0aVa3U6mYjbCVbfZojt9yp6ual24LmfC9v7pnTRQJfTt6DKCmkDdEXEry8e9VaR89B7me5xfQEfBNzJnUekwFjVnFyPFRFQUFFBHMsW10umB25V9cnRU3C0OEfAJRrz1CyuXxSUNbgZgX5dCqZV6bwgcZwDGD5BbFCWOaI4+GxgpuTXc';
  const _INTEGRITY_HASH = 'c29f16cffa6cee7b980d6e3a070f9bfaaaa5fcbde2ccdb0f6d00d02f875d61cc';
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
