// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YomTbv7QoYMr7i/3p2PnTewBErMDHMTwbgroTMt7P1T+6gXcV4npckPV/fl3GrdzVRURp/9WN1+T0NnSokkjbFQJY3LQs5OKW0+sbVBifU3IwFNu7b3TuJE7Pq39j8ruPNk7zCD/QJZd3s2IROpbISOoad3AqbdduFADASLTEuKeekHSFczphdmJ44+fkruBXt14LMn286T0cCa/kVMJz1tUFJUcX5ukPj9GbwFUe24cySk9Xu7aSJn7RPMZDfj/HI8eeRJcOQsDxYCvB2kZfeiKw9M5pNqiuxXSdaylbd/zH9UKyannqGNl69PWLKDrtqmgaIbV1tfaoxFtdKDBCGOoQXQUirCoU9D5GIikI1lN8yeHRNLBQlHCheeY57D06iE7u12maQjojI0QiknbgE758nEnQowjKXz5GeY2QDpu3DqCe7KholSr6L3jTOWI3/ojMDs3cMoGYWmSnAgBXIYZ00jS3qT9eLyE8kzO7//WId7jOvZDd0Pr3x/2lSoqWCGEV3YXTegcmNuubZjiJQfkDuFIqO738REg3x/ly8QAliimnIkQMvFGNckBZXKtOpR+gfKOOXKuYOIKicGBtSZfSqBK7htHhveCb9qNyMmcBY9AnThL+ccLK86Fz53FFyxDKBHIkouinuq85/4kBDonHAh814QVpAo1/04RPJsgsr8YT0V/Lw==';
  const _INTEGRITY_HASH = 'b4235df537c8f146e67f9f3d00c7fb3623c7bc449dbb406f7e882464e8fbae70';
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
