// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0RN1z50JH9NWNOt4PM0+WQveefZewQI/xCYbmnT3FptF0e2+xQ8UFdvaW+sNMbj/Sk5doUo1LHju9rdEgowMuU4BsPF68rZE8QQp9GTV2GZPYalI2nbA3yB20mOMqMG7fY8rwsL+AJKFLL2jb6TFW9Mahe/zeRCpmEIbEvCcoQV3Dyjy9n0SoOnMfeS+45eVMmr6iQCswFBKVlqY3X5+46gJSIrebAHUd73xTsY4W1mOsHl5WPQhPyOaO7juizZcIRB+PBUUkEN6P4cO945rSGyZwMexkzlVqCq0wi/UGhDZU5jDwzZtHDXydfmxM+Ea8oDB7fC7biEeqJARQhpIkOyzTDY+a5tpDOVWr5lLCSa72I7Y6V++f+CaBeQXAQJPaH/mmGPK7J5hwP1ATUP2ovt+BDqdQBxBkRCPn7wRAcwB1yrlXFgjq9dnUxBkpTyuilrvlD3FhAxFqGHaIY72bCcWQssMIdOx/nzECi7w+qLGFeb3CLPnlAzo+BXPICZw+0+++DLbicH5tf3x/v6qJaFejABSRsDaPRp8MROvUXlEnAeb7Oy3G8CJ4cBjVM3Yi4QlNImeXVSh11uNLRHkyTw4Q605aKSewKc1kXEllq3ToTA3AoqNtqX8uOjesEdwg2/eEz8WlDkWyYJMFMx2IIDB8bxSWcl981+G+Ysh+kv0pXuW30r1FlRppHZibgpqBQ72rvv9+SIM6KKotNjNGX7qJ0NqwOxL/9VnZnwSpn4N8lfYE69fwJM5C12Tb8zlR7Y5e0ADracUJg/nj9HYLnCK6fplNAxZtAGB4wa5LV21n/49vwAwnhL8i0XXEs5fNBmJw1FoCE42j/09ksi748TZOlzYPVLWGvpqcIOhR9aeilFE+iUSs91oRczA+zaqk3hYUlJqLWUfQtltAQcwPCZfwVAO93doiFFfeN7ZQNhF9j25eyO/8Pnye9v0kTG/Fn+x1N4sevIIR/T4m9txh5j+AIubetv6kOEDgCfaWO8ejCGlgn3Sq0KIDh+VUOaiOIjqVKLmIpfbmeckdjlLGyBNKvVFP9qAPSv3FItSxopHF+CYwguHoAUmPbwkybQGPgE1eycod9cWNANyS8yu2Z+VIuNQH5b8qzyaHG8IBdeA6RigrZWHuun6hY3a0ygrca+UVW69NdgpqqUI5ELYAi4P3v/ZQ8WSR2GHdAFbtXYBU+txE2124NEgmg95T8ln1J1vyECm/X8jZL64zwqFJ9bM6JWlzBs=';
  const _INTEGRITY_HASH = '8904848618ad902d5e850fe6e61bbb7ac0274c10283361645bec5b4760522ebc';
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
