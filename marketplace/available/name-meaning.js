// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sTC9TMEeHpIJsIoRDag7oAfP7qivs1kCueqwxrCT2TQ9Pth1zSNVkcX1BoB7YIh/AexctUxjEShQb3cSIzEi81gzREgNQ/VIsDjsad5auEZ8e2F38F3eXuT/wy9junzwHKbOWeAA7BFr5zCbYBmhtIHK/AcxDWLy2oykgdCT655pZEJHgc7mEi1oQjIeRwOW2leBcfJ4En/taeryUkOHFy+3fbfhBzwLO/2NvKI5DhpP4Mk2az9fOtKXyuBk12gXjiZVMbq/p0zvHoI34Jl2PhSTAh9H25qkLvOvH8xdD9tXY6yWW9VDnxmzcyO3NYNqKLWeoLb9Qe5UTjMlA+MmV9FRB1i1e530yDMgZT4CjBFdH7Ob6MNQT5LChzr37FBVAaPocwaXmmiW8SiaYBE4XUY/Taa6dvUzeGaQBVsFb44rvkRC9WalMxyEqsetOLPKWyptE7aYUnrjOGH5YbbA4Zy9ZvsTfGZ2F5r8EOjZwrHrMOH6gUsMRjP6789TFM8mnTpFP+BaLN7elgVsGH61nKMVyQr0ecjx7as+oVkaLSzlCqtX/JI6lkl4p8HcfzDdqSHHx//VHAB2B3qurqYgkRWWgRm0XagrrFaIzlpC4ihOWnds/Y/NnJN0xPDXtOjxrZGyhv9RZvADssD8cR0QGqJ8wbR0CBIxFGaST6iTF2rXu7XFkpDcc/iyBLl3yoUWyNjq5PvPmzGxy8+oevFYxUlPJKN59m5cUGSnMh3avms5fvm7hWNIrmHBtkTAQa1hQbRTu6VcNs5TStN1L3KmBtt2hhXnqgq6C0AId/vna8fnAaf/iW3/FM2E6CvZk6A1ucWKWcc87CaN++bruxD/bllK89tGKT3F60fVHbc8gdQJ9MDkkugGWJID82bPmF4GUFxm/i4EWXRdWuH3VDv0pMlwHf4HG+rGdQ6Ccke8jKLlkMvK5y7vBpe5gL0CGmPxewASCHKG3hJ1cq19YbwyBjCUkypIkMGx+i2InFbcpybP9rkBz1FHJH4kDgVB+NArSZ2n44z6oeXklV61PsP0/CGpLwpp1SBtufRZXsLItvQDuXRNhSBBwe3s82NxnpDy8E6vT46yAGxY8Sp/ttgfVwMM0xIdUMETorIZqndoxSOiCQjPolGnn/ooGbxzXusB5OAXu8fGYZWxFbEFis1taWRxmIZNxzwlbD6mzsXEZTMNDNVVdKUxc0Jc6mWAt/OCPHQLazsLzZ99cRI+Q4wmHnY9s1r3VK+54OckwuHzHWlooLpszQmPnVXCwpVbF0cB6CFY0fKn2wr3BxpUmMHMIG19XOEYAAqbeoLE0MgZULrujvzwQ8iaYZCqxByfnr6pGNkd46r0tU6DJrm5ywMXChz1s5Eui2/njBLRya8MJ18ZhPfkgG/MVHKgozqeW/UoTRF+wkdwPDCwygc1m3uZg8J2lg/enUli7r8QMB5yjLWlinaj/gY3/PALnsla5FsE4rJmTeMxus0/i5uJibpeNbWh3Uj3G1ZMHUpVFea5tX3a7qFN5NyR1jzatbsNGB06ZJoGuS7dfw7zxK8u8aExvGSylWEtdMqyUq0//xDVAbChkoxOJl4cEuwcmnmFVJ7U7BTAE0HI4dudakeXxiOcgF0NA3vu06aTIJMZPl3V6GrwMRZvq4rfHBtH4XQBXeE2K4eUNlNqJXLwgrCjX4Q9LVwKlxYTmRCoUuBqh9NfS1usJfeS7DqzhU1//CPgPhTaHlfg7Tt1XA6CMM4lc+hwqAuPN5JYC6nvgy5q0qDU9ecP1qvceNigk2XnnlzBiq0Etl45/h0edyi/5lXfEHKAaoSr9GJ2BrRqGwARqepdi+Jg/BH0ISfcm99bt0cYgOLY4jQmHur9CiWE9rLqEKSbpCI8iAZurUWf+EMAqI3Iu+WanJsXNLnAJOkhrV95xBaENawhoLKzGsX7ZXtoqhyX0zB/2mkhRyo4';
  const _INTEGRITY_HASH = 'a9a5c557fa690abdb4f83b8fdfa611e855882b3449f45962e752a1ad366f86d1';
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
