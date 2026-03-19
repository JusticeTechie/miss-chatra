// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0E142Gc6yVJH0x0tEWxpY2zS1sPcNrIWy5zd/YmD+KIO1juRvK9FgINGOqpiEZmolnuV6yPlTK50WFAHcosqLs47FJiPUm1snH+1/WWyKSXWal7q0044JcTY1RbeKMtwS/UI8PAuzYMNEbWZt3y/w8Urqo8v/UPekoHBX1rD4YlNd8JSSmhDSivcqFkPyrgPbTjmoSdsrdFHJmlNzaVfGo+MpP+V+p8yzLwZiAiJaZoLKFOqYkbkZYfzHsPxUMj65iFZCyCVrxyd8Vd88jM1I1SyNdIsGSIXLKgLTteSNdyMUtPSfk1A+pp0Bro1i9sSutHNO/XEAQ6/jgAebSAMch+E98I5vaQGzvNKUehc7ZoJb9rQky88KwdzVovRWhcDxqCitgzPgSW5cWAEX5ywvLl1u5Shsggd/Bcafz2Laa9NFpRV5FmZJJMH+SB/xTIAYp4JEkt14La9nB8eMn8H2VTnq75EgcCnS/DMOKpk9EeccD1I/ksXovA1T8rCfW6UPzicx3spIfJBdCZjvkQRNSfnT3SAQbLJGoq1Fazm05QZv59hTySmXgfG0eJPhb50yl/F7PKp/jEsTjH/VzCGLlW0j8CTDxg1K9OSkG1s70xLyO7wSnShvyQ6QSMVkgpZ7+tQNngq48Rg3qB5mRf53n4JtrSCVQLpLTC5N1rqdp3nn2XVlbYyRWzcz1gvtRDanttJ8PzOvQoEPz9p5Y/blPG9YhUxsr3ry8vj4+/rZuzCM9u2hn2nULBfz5TtYQLxd/sePbAnG6AOefrfmAJsv1PqL+T+rxa2m8BXf74iYU8kqO9JkyCKGtwM31LiFa/S3a4csmb+Tnv2HZyXTvpOQ/6jBJ9Lw0UBn28n4srFh1uOKeOcZtMxacDyxepkVmuzmz+zIVlb92AeI1EhUfL+m8ixedC8XTGGC2KcdZqwzl+LkgIiwWEjmo6LYhVfkfhyF8K7bHzVr1rjH5+eXpjK5TjLUsjeg+6K7QFtV6KUbmtK0QwYJglzcXmN9M1UcKKMKfwSB6CUjbSCcpwKJJOEFNNyjFcI+Hq2kTx/rkbti/ypFXITQsBP9Z/PKpk+oQZpUUcK17NGqrS+LsZ/E2UhQ5DUKDAmti6xBTuZZ2qESfyqNUTNrZHXNTZQR29GuUhvH0O68tDRRWEWnvp0rx0cYSSkhqm5p1XgTYRxZp8Rt/hWub/5mPpaixK2s60Faxs802RPQcr5YrtQPg4FpYTM6wYVHleTRikw9NC1FhivTX0AKWaUzX2hq13Q5NHpk8YUxh1Blj+C5pzSd4t6s52aXF78/4vAXTRW4Xec1FZ7KKTAZlSX7bxU5ngq0K3waxs58BDv6+2L+HPsVdkyJp4fbCWvcth+1BovQpY0Dzaw';
  const _INTEGRITY_HASH = '5fa4e37c1219821cca40d278721f08899670e63b7b6c5a8e0b1e48a8c0895f0c';
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
