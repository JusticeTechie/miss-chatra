// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gMHRtPDk7PIR2chBZA4bXu/v1wqikCv5u8P76GVQc6f7NesfyvHVfLA8tm+IKZ7ava+iAXtBy7SZYgTWS7oC52Ex9JH8lsdKWXUlcFdGunr2KQ6eSj3EDQDxRacwofM8kbQWA5w/FZIEfnnTFe24fmNIUtLb8X5Vx9x+KRup4PAt2djxR7d5XTkEDZmyMqIY9XSHRespDMV7cEaUc/RCcEWLgzqvEuOL+koXoG7fdeo4gR6VZE2+qajomnLM/cPAhbMtXwaslX4RoEFoAmy2NdS1SImiHbaPXRMyoy2jl6ERUOaYWBq7jgBfT/tEGoLuy2QAINyS6UAHozje4hXhd0ykAsApwSOF7cnp8hEQrjMPotuC6/j0PTh7q5VGddGsYmEdWBej8MjzVHd1l2gGLs5px6YrgB3509pHjhNLFIeVgFhz3KDQXHlrZ2IRCA6YuRMQlOHqJPkklpfnOzeYCIm3SNx8a9TbscGMmIDxRpK1cT5f3k6PXQC3IsX5LKyxB6GfWdOn4f9nbhsK00qXhRUiC1KiwgLruRDBKhyjqHlwr54p4hTctNqSSqB0/XVYk/QwwoPvh/JBOfPVIA8V+j4k/9uSN12/CbiCm+/r9Ix7p9I2RCWmCbFeYJhTR5+45uuLGtF9ifO8SQQNy4BZyDjLcGP+pUhcOE1N9YZ43g0iHZAXhVhDLpiMcDq22Ny88TnH9C/zZYCq9JmNJFB+lXj/RioCv3rfEA==';
  const _INTEGRITY_HASH = '54a320fb1c9bf8834a1da3e98684ae14a814169fddd4d3269336c964dab76a9b';
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
