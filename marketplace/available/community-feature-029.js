// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LgnXVbvoD5mUyO3Sx9n/YbctXv+Nrd4XXmXdsKtpmYrtr/jLfqQNLUatdclXGGh+MUCUcRgYGR1q+Ey/sNdBagkYfoLO4BhIMKzml9VXWOFTBWsS6YNx7eu6I/tR5redX15KZ/urlGwDad6acH+tU2kRugF9jhbwshCzxqXb6gQCRWN58jnxx61995YFn+uRlg9cKkIAOL48ZVUiW/I/mpJV1VZNZGWflNxN8YTnLxj1vhyqghBwsvSttrswakCxItxHECDqnYAqzDsDeayWCDndWsg7+VE37W1pXSQFrK2nFtJrfkPUAG/v3kaEbWbcmlHhrkqAhT+FVvBErugFrP5lSPwqxuHn1C/2N6tjG15y9ksQIGR0R0juvasru4z/0EKC2NHDKyGfsch9QpY05NSOnWAXoVGr6Qn4DLiMsnBkm1WTagDOwZ6VGnsb0eIXVkhe/qmQ+LWLiu79tsDfD31nqg/fAcgSxR9EzYSpg92WnEowBclUN1LK+XagL/nlDcK0KYsNCF0MaiuZzvy0KA5VYRtkqM2zVbYwlX6NSWwigq6UVI7U5oZy680+P76Yb+Xyu1Ay6B9mTEeCZvVT4seh63BAz8bFXZyTUzUCtWiULF87qZoks2cNqInkRz57MeoDCrxHg1pXZoqn4+8b+DdENmBryEGDCSPgqiTAmyCnMOzHyHed9MO6yi5p6MqLC0uHp6DhGPaRBfXWNrD/slr/chU/LylFIzQkzVTHuKjLEA==';
  const _INTEGRITY_HASH = '15c3d71a1c05f53d99f31a838befb06c511078ae785fde668a58905f00b2ddab';
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
