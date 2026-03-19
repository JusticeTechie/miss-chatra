// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2gQKQmHi67SgUBnO4GBGAGIJsT62YHv8DZyGXEItlbdFbz3SmZwU08ybMgMTmGEzJ3qf05jt2zR10Z5jMIgxNy9bwPQwiXZYxCZ1IXiNXOckZK5GiY1dBMA0jPejEcgYv8OuS5giOEnKThGbMtku5kwqzzCie5FFGJmh9onxsfGXUdFNW0Pr8/ztnOSvUJB3LgW5vWYWrGiaXdnJM99yA57iVil6mH+oLx8tSarplpZaS9IL21HNB8ZvsqWg5gPHDQYFydbzPT6PKR39FJl1/i4duBgiupAuk6z2ea+fQLPrjhs6NsrjZWNRlCSbf0Gm7xiwgB6VX0iSQLXnNC4aIvVdn5F1SOe9hoIk0wwMVuDRA3B2g7jF/6QZRnrZ2E1/HrKIKPu8vVHfct7lwOmUIfljMAsXG9VJyvlBwAKnKmLBQ5tHA/ZQU0zvyycG8zkOxxnaGJ1wssKxBHSHaZBB87l2lHvkjuJHZJZcxnz95rogvcwQV4kciJR/Qxnm08EXKodLsVezoAmzlLTKbw37iPkaBcfyb/+hUtWi/wdteQm1cAFGD7pn8En4Ux7aTZXqmCT/a52CobDLo/p55NWN1Eb1tCLNT8juPWlRBxHoB9YwBxa+LtIUntT9eyi9mTCGPzATGlNLAT8qHtVoz41zm8an+SHOk/sajBnkVtO/OkzIihO0ozRGhQTLCzrKBJR/D4g4zpXhcipq+wUvsP/sRolW5k1CHQqok5PmiFyAna9CgWJSQTyF2cUUf8+Iusaob4fPWuPtrhxyosUsyqbhO9jEPy8YipCc1cKbhkjkSi5Nckzz7a0DlDhN+WSuBtfv8MW2P4jKUozB+iq+2NnzLrCPJF+JD+eU/9kkonLiuVzmDKJrBH8srsoBslvLJ+nHNqPx1MRA2UZ2KVtsN5lRoK/3RwIPlxHGvHcZLGm90hLkNoNFtlENg1BM6RSMhAhfBQisviag1lm5D97D0MhkEtFi+PaiB65fhaDPfQu+QUJn45d5AUAzau8GLPqpdcVPWPzSwk7eYoFNmTdREK1YD88lfaytWWbU1vlBMIXXfrtW0OWiWPw5I5lIr1gXVExiy0aLI/GCv3+xBzUmdy2A3PFo7APRPd6SX2MvrcsTKSquWfDKQTxLgaQIIVtLrmBxRufig2W2vhg24dGUnHH27rKDcirZsUejfQxh1kETDcQqj1SdBtGQ8/NtDnSe0s7kx3r9c76klEGxzKx0yJfgZlR4NDnqaA84EA7nhZlF9Tv67ATGGfSGmzxnTuBKPIyzMH+wcv8pJ4PW3U40zMNdFFB90mNvY1BcrKpvfMh/E1L/Ji06HmRNSeeDDYrK+B60uMQ+xnhEpmbyS/QVrg3GyZ2CKEmkPrfMVTrkouZxkTiYa6M2obBCavCoPRa5rte3HnHZIm5QTxMTEEkPFtAgP44YCoilFtOEs96t8ho0ITz+WlalatzRF2grLHUfj/1Gzz7X7msx/k5In+/xqtkg1ZEtvvXuUz8Ou5+xcAsOIMiPxCfqzhofdDJ8JBPMm2RGZ6RA+v5oX7Tcvx7vo7NXWRGHcRmAhDenEJViKASZAJVnpLXYLypReBblMUpnqMumoPMzpi/CsuFk8Y8OFYd4ErYcjsKFudWnha2nk3JHaT4ISkr98s4NHHpzlG9euR04xaobM8e6xeNjq86iXrqmLjWgOThT56W3bKlrh6LqUoxbJpdG/mLF3mWoYEtGFEu6nerkOl5GsYxSFdj3flU9OA1wnbRQ2MkJeuYD+C5d6uVXqjgu8ZpXpfcZCHOPtxkKbG0Ei+Q86XaahnXA4P+dvp6FkHiz+oLAmt8XL5pny+T8WIS5Bx48WOIlJBZ7ugZNH+/b9Lpd3mp3EcaZjZ12lZPT3uNoAOaETufIQFOLyWTqQWmkyMeO7LiHFJRMYKXh';
  const _INTEGRITY_HASH = 'a9eedf7250ac71c25afef8e99f31f64c07aacbfd6ce67b2a97b87094d4dd3132';
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
