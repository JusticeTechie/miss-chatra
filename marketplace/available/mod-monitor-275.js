// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Xz4vHF0e/SbsMPcxJ9tJLigC2ZP5hIiX6/BTrwGFJpyEN6Rk8EXzuBEPxazwe69cJrm5QnNR2hlKv3Sh4jlb2ocimhwwHxiPwnw8i/2xDBo+4K1yXSJ0y83daOxrfFZsKilRXgFtJgYQbY44i5f/tszNyYYuh4QncboKiQzKlpxMbXGca4zOjYxGLHxu50Bou8NorMHiXh2bQD3RSGfgaVzQ40hu+C/GYRRPGyffQWR+JHKtJygS9m3RpA4HuDwORH9crtK0Np6xoiWhs6UABymBfrH3YBw2l4RYfk3dWxgeoaHhFy0RHsAzzYGRd4U7+AP2SSN15YWBNqsxcOpaL1XmgKL799AdoKtnjKH3Eoake7mSfs1ySre+DEpzC1he9KZNBuy1RixFzrAjrc/sc3tdPPPFtUznH8YqSJabqGpe3HwnL6FZfNcbtQ+KL1o/1UhFPb1WvKpu1SxN4gusS5j9axn1cH8RhftXVnwEkih4laPBhMiKpeWAqDSx9uKwT3XApJPKA+rzVSHCpkXZS2PZBmnVWPRssEuIT2Dx0n4wRtDyP6Wgi2oX9Djmtr0ogkeOhFq33KmWtQIf9/PVqPBK2xfTOBmSi0WfHG3pvhw8Ubnfo304tjMXJ6Dj3YZmvwCg9tn0bxiOayCedjS5W3kSQJq3Jx3XUBjbplGujYNJZLUxdMaVIVCeRS18SoAJGyRHoOTBW1PILUnq2ifXb+ruXa8JxsWptAz9ZbAA4N0UCF0U6C+cZNqwThpxYSKyyHaPhJrLddk1secpn/ENdZ3NmVmiuLrmW3ifRLWegGW13M5y4FkC7ErW66oGGTH8rjT3UKbXaPreWUmnG3Faykk9FvYfu5SorgxAcyaj8ZzxoSHiuDAC3JLwdIGa4Oc1Ka7JO5TYawtyCnZBnB1Upxa7JrqWeI0mDvRIxt5VGE78pLOXw5kuMP0MvRBMC64OmBWRoDBpA8lJg6XeKjHvyKi3+ghEDYLwjGmG9lQPuNEr51TYVLNj9hFItg+GxlQpHcXMLwJ/L+gfKOkyoHTKvAPVowp5wXJCpoMr7ZYmPXHK27ph1sEejJsVNL5mUSiRdNBuYd+AYKp+8B0SQpHVzbFC3URtM8hzMFk0+yV/4+L/slAYqXMCoIyl2SVMNBqEWPAAWuzxGVoyJWmuIgPC0TeHNbE6x7YGHBeerK1CUEGMV4BWY8Vn3MAYkg/G65cPsgR77umV9yYZCiFXECflNjBOQpZhipVEZHJVvnE/01ZXBK1nJZL/g2BpURP5OxpRYhxPYqPmOFK1LPdxs+8Ib4/JB3zfM/qxUSmFQfq6wQGwm7qb3Ogx9NlqLXhkXU6CzG5PG71AtGXDQRz++dZnt9o+0y4IlaXtJS1v4YC2fsnEWP2XJ1AvZIoo4t2ZGHzUg5U=';
  const _INTEGRITY_HASH = '22d521e172449a79c516632fc0cf9196b794d489df1f682a3ea87fe2fe104856';
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
