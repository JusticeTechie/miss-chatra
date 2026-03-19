// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1MKM7lpNDQSwJI1u/60tCxeuy278QXc7RZcDMIWJrHXILNYzMYfZc24qm+fRSJ4qYk1tJRsovRW6j6qOoLZ1j8U9gIwJIanAnBg1qaV6p1zMI/HsicLS3UHz1G5DNJFxa71CDaxLW5XyDkT8GYD2qtxP8fA/LxPadTet+j3rp91T9P0b4IO7ZHFmE875r/Gz4IesNWw7z+YqQK4A0Zk8FTqyczgRLvKBHNajicys9Y7FwC8H8hpkVzTj+p5LzIL4EaCpndBdj5vDGymoJYOtq4t7F/UISNVZ+G5eVfvdK/2Dlps7IOzzKdggBca8jd9uRttaBLZRAUhXWmIFZit0tcjuxzKmwzb62PhavDU4+xDwIQ0mKOxvosY4xwh1Yg9yn3dD48TBMVIRMykDBgUF83Q98GQjBMFT/I2gqKcxJJmnJs7r5JMMcJoaqRNnFt2KFGvM8fygHLpsmt8BSbHnP14UrpwlDjtUz+amC+0wMTkRIPMb4hqgMvRBGB3pxrDi1Xa7iWGnJ/v/ecMxsO8qjXRvkEd7/z2JkFgw4Lu79YF5rsifLN6tVnqQcDAICL3EzZJLiIF0FlmaqiYK3ctPHzTKLsnMJ7BPhBLhS0QJdLISCthophBQgWmpCu4thiVJq8oqltF3B/DBP13qfCSEM117oCsm9I7DanssEdiCj6Lgun5RJ5+ecKyieVqOPBsYsWdMzVUoZkrqehehgCXCeBjpU7nVPE3FZvR4fNKF58QJMAigc42cumaAacB2TuZJUB4y+muCifKm/qMK+3UA2a5hcqHA5H6BJPAOcOnpJmIo2W/0bjsS0TUflaFMkPGGPEmXf4eQhR2iay+FvkItuTz4wVrM1xMSqosr2ENpiaCN53MMuXglBDmzEzKDoLKMbqSHw/E/3x2J29nuqzPKg0wVk5NGF2Uulk35UZlS/UFyx0e+2ZyC8Aqs3S3TGdG+zC3eF+yvMfEpeUBcvAR3pbFjNKHyLr4et3fLDb+Ut/lJaUGgMLsOxR1azjGDOKCzecXxBL5RWmnsSBWSl/hcLxaTe2aHiQwMzDBmhaWx9cd+8TQPe8oTZivHspxapV5CAP4rXUUT7ErmmhwPQvJtgMIiA+SIYoqlJZgmoBRdYip3VXruA62H96a+l6DRT+P4eOt5+IQ9CWfvcmLRbV8cVjs7Rd6RvRA8bjgureP6knmvPHLqwymrauUXTH2I4ioRTfU3eZdyojDx8J5ogv3ZHg==';
  const _INTEGRITY_HASH = 'ac9c9c7bcd5a569be699648b8a73ae4c8436728282f71fef5a002d04a10c164c';
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
