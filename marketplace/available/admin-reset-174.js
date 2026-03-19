// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hlJY7Tvn4FiuXrLFmZCIRF8M6UQOtMzZZfARSka1wLqbHNdChRS/I1l5VogiFz5N+Lt9LMnskaWFrZz5SSbx33fEr3k5IWK4S9VrjJ4sDcfVRob6mfRIQBiJ8STt543xB+2nKIFDLl3N5oLtCxXnEHxWEdo5kcgmWNZW8UzCNYxx0zghh8jTUYmQjJ1lE7aYW2Z952RWr1fcQZZBaumHIJbZqORWERmiOq4msXYWzXtl2D+humY+G/tpMR/TGo8N2fct0ghVNDTZ/dP3xQ6m0djtrTZHy8N//wu7z85Ot9LiluFHSf0LGBOrL4R6kmhppYaXhl2wNmF+u4dHk5qGekh6nd4Xsw+IenA9BruxVdHUIWdPB9qT+PeODtE2vyFr+nRY/YeH+9ePUsVVSiEm+nO2C7cIilKJHlImSbT4IIQft6632JWUHgztdc29HHO42yLfvaC2Eg7uDiWx1YBlcHYmRV7F7LprF5kjQGQawnX1khyTEWmdgEhktRyW1za6W3HHmS9zD4epVAi9NiG6bTmsNiK14PfSMCzQlCI7BoYiNEmIqFVjRPkQGc54vZ3etoIpbrX+9WiDBPjCDSkYQAHQShASVveNFkTkUBYvhoumBJsf6R2XCNsCQYFpa/vBZRSggvevu9g/wm2RoAao8iBnvHdnDZwPHJW/Z5+S8W+Hr13cNsTI/i3GvD4Dhsighj5D44Jur3/x1UB6t2dKQUAr5CMPXRscp7WHIXV0S3Cr3esazoPEQV5yf+CTF8M9nIxFPe+p72VsfORS54mUU6PjKL9+W+PBN/bnz6nDa33fGNVejJdP9opYEEejpnZeuoE0CYjTBVHqJJGFutrUx9s8PHq4X7fODa4jp95fvjaK8pE7xiU9YdN2LQ7XwH5iNBmvuDTVzGktfMD1noKJxdQ50YRY60Rz0RaUZXgSUnlbln1BYoFuWi14IvFvpb9J85MZCtyhViK2ijlqRFwSkGsTOwa5Z7jcQfQeTAdef2TTlkxwtu6IWBrA';
  const _INTEGRITY_HASH = '7d5bea9fa611827ca42dc2c57c8e258464b2390fee2bf17dcfacea815d52affc';
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
