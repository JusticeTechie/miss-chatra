// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cgye9tRyrNDrK2TpNnGZhpnqb0HJ3uehocQNWjF6fYOLhQj9nf/2GAjTRr8bSxRGPQoSOf7jSDDAdG56ENMGplj2x04qR8pBH7cvPWfb+nEqmNClq8zI6YIX+Z8XweDSxQyOmpSNWmgOjJbvix1+7I/x4mHLJgNROZYPCvCREGgdt9su7gK8Dl1nrkVps82eDq0VA287f445sg4DmcHA6tGlPLQjMxBF2SzDqsiDcAkNBIfwgNJuon6x15gjEwVf2KhWcbAI5k2p1AG5xD2XEksV6IE0dW/bMShJrmdZVyTkE2XfSMQyMvHb422a9RUIzUz4Zr4LQI9BIrGg8VO2C9CCDuFKyznH1buB2UMADddpu6vp6JdqvPRWs7nbaWBP2IkvOZnS3kT8k3LkhTs7QQYIzcKFP0NI382gMtlqChBTVd1EY//+PhRqeT9wkBlZJT8xxErflcYG3ux0pOEaFEIpCgzHY0bB9GzglaZEqhiuC+QK+OW0VJ9lzObP69DcZdHBhV8XEl/9OCd0ln2qDjfGYfJW0kt9+6lkdJs6baJxKPal2mJKhKj832EVtin6BhvfNqtBFDbfaEDsLE+NTiWIkt42vURBS6rA4mJLUP2yswuG4XYxQw1ZWED7ahgDeMEAlV4RF1G+vHe2Lh3ha1q3Knb8PneX7/5VdxjSmiEwa05DnRFfyzOKgfjhHpS+Qur90wg1SulNlbJEbtqR/CY1NDSvpREDI2yJU6l37tBERXdsHas=';
  const _INTEGRITY_HASH = '9f77dd444f4fdfcc2c89c46eeba6f8f01e2225f0a30b4444e0bd82b1829dbbe4';
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
