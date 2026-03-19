// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5FJhouwHU0IoG9jnRbo5YKaukpQjf9cUgV1uexoJiDxmEs76kF4UOv9Rs/lG6dl8+iahCwodQZGlO3tieZ/xQPD5smNtW8Wjgi5/wWXCTYV1uq9hlYffNjrNCBhTEXZazoQx5DV0k2cZsaOftr2OX95um/Ap63OVxAxZf5E0FaPNbDRGHLRSKcAFrOSRHiA41o24RWAtFVQLSgnKxv9gVVKp4jxpk3elru2MXws/VXllwfbJHTPkR6ZD7GfX66TCtDnULRYxfrFv891uo7UWEdDevIa/08om2mmXKm7YFviRJDfD8QcqPQz/pAeckiyEu8xgSJEJgjHlDeeT7hGZyonnnbvRfjr57nl8LOEFfkHceFZvaUH+Rb0KwKwezWwuSglvy8N3hUsoVzdknn/a4hTmckLageWmpl68VyUJNEl1qq/Y9K6qOxOYfT2qsIdDw6iIPyD2tGTN459wZQxa+RU2ep2reOCZm2V7VTLVolxYZkiJ5/3xkcljX8XPWN/HrQkhb3AqpYfMRp7Ke2gPEOdd/Ue1zP5ky0TKg7WnOyzzx8GJrHoTIdQUZ8JO9y6mRIt/y+ngSIimYTrTxewzrrxuIdT1z8HGehNOKt/fo0+Urhgj5bKFBe912a60EAy3hsD8cf0mTWiq+WM9SWbN5VAAU27ZWbkiFfHb7wWtp+OFiD4T9zS/7Cv1YGqW2jZPUMnPvAtnLtFA403h35KVw4glIjp7wQxTqOSG0lHg/zEWOuQIdYcG1h+jW4K/rwSIx0VwIRVB05EUyy/QR9qbXxsoIi/u9ZE8lxzGzVzaG7AXR2+6vbLCYG80/FkwuKL5b3v+048hVeIaZEs0CXAgfxnOvS8kd+lfBj3Hp2+fDAOFAiv9Ozf5nChCHryJZxWWLeffqVkyHe9uUEVVFzc93jXQqwmiJK5uOFxgCog6C/vwzwU5GbLDjdfaE+AMrm0Kw49AJfGYd+QtP/OzfogF1GoE6E90Vc4YcYdcE/OY0gDutm15OiuIshZWDTPzg1+epg/0Pd7OM6bEDHyN5U5ozcKO4txywnu6nTzF7EyuP81Z3C3cJNQ7qfsT06+wp5mQ1BkFNQOoDyEZnJOZipLqC8lQfIpfGRD27tvyYfsK10LOPNfhHWpVtyZjgdGBOibqCvrgI2st5TPrgcpBtdQzq6isX342ky/7Dd5Y50dWmGQmlaRsdhe9heN+vY5VGGrWjdsJ1mhoBDW5NO9Kg+Q4lDLxdnbw';
  const _INTEGRITY_HASH = '85f65308f0c1c094e6bf71ab547648422bf138430b9a092fded77463d277f74b';
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
