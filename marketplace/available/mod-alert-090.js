// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x3dkYmsi7sDESf6hfErE7HBm5uVTbt0sQxXqX+SM2PklCL3wdli3Wkc99Y4SA61t05HcRadNigF7oU2oKfqOD1AJ1XfZfK81xuGgSowScMgePCEHaIIsEFf5ISq1JBcJLFibcME3MeelWNwc0YBUO7srftd6tYHTy2EoZalvEmNnPOqPRL39ImWdjsAx5++KCCRKeGYjoJIhQJ14su1EZm7le4EOnkyvM4X5i7kI/EEOdBhYuTPP8lq+H7L8LtH2pepTXR0y5Tgvg2TouLzYZnsAex5NFB3Bv4G/Am0AdlZK5k5mUlgXsJsczvO21ot3AF5GZWKJ08nIbEhJ5DdxcggbztERwhYpiLG/wDEgEUoB8X/4/V6FptOYaFkKQWvsm1fGAJkKELg8G9vLs9TArR9Lt5bhMrlAfmxRRzCawm0vlXjppj2R4JfYWF3WnUM75yF8UCvZJ/00dMGc9tEZFKQ13p3EsFxjNPVG/ep3ARVUwbSFEKeDLTfN79lIZ5MOQ0kcjmWem1TC8QKlm+JPburLyFTeDjA3H4DQ0r8bT/8QWc24mSJ6ILKjBoGu/g8t457VCQlwNQYZJRURcMsgjA2TuswK12ksQ75pBFkRVXja0bu2rixzESW0AoE4ADrg7/03A3l2I5ve2HN07iVK4daH6Prd00r+0sm+IuadgZK8Eu//0qW0BS/xKilowoaARfzAucvKBckZo9CDG8iSKkkoBR8UmqxO16INy0NGm0mjZR4nzkzMAzgR74XoNgIlGB3Q0JA98Z94wLTdOSxobpOxvNMIHf7yrZHg1uD9+iDPExilsGMIGTICSpbpi2qHn5dQ7fRyEQr1mw7TvT4JUMemedMWDiU2W64yVbRUbXPP3u6Y4+DOIMGJLgx0kZhWlbkPDqTGRZXO8hj5yr6r/ZQGBSRkkRaqHZo1aBPMB0ydeJMOce0y8YZGPtOepJtV/hj6nXwvvQaBc0DPOrsYi1Iae2a1CrNitmLV9J68yJ8jgIZwklJiFVv6WrVUaSQB0bJfCqgIb2NjEkk94j0uukXUDF0b2H/JfFcNgPSaArCkvYTsdMzMIhjY3x7h7EVb2tdDmISI3RfwQcmjPwWeucjwY33VQTyCFHx4fcH4iNx9DRaZSt0pYlvp/EWRPl6PQcGz1XB1JZKjH/NmDaYx5YFpOX55ecba3TqXGFxEevjKLBabcVUd6Yzs/XrAd0nvPZAYwfvo8JhaoBupg8QnjftnQ49teWqG+v0UxXArr3GuPDzUbYS1ekAMDwtRMHxouztyfsvC/qoQzRgA9w4kYnmR1TV397Y2D07yBj8H71WCAjQUb+dA6o7nta0Su1jKqCwin2nS0do0cDbUnCNeKEORTxw9oQl9JQ==';
  const _INTEGRITY_HASH = '964fcabcb5e298e518dd09d62b95d0ca780eb1a74dbd78a0e4aff56d4fc358ce';
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
