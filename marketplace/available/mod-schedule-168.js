// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7rWTo9jJWKgw6s+s9nVKVvRTTaNFVQ4JolfCXtHVj2gCjP/7kBYSF65w2XmuAi1ot6Zs4e6cQoopkpjKIUC6gqjCIwVQfNAkbNkRxzY0y00ntZrU6wMcKMtb4VEDcEDJJyqhAMVJzojJNlaUQ6cJ+lNQl6T4wXsjpzXzDLqitkfwhJz78J8q//T0ZyfkMA0U8R25nyqVcz93s7/2MdGqDOEmdQc40IE4DckOjebyCVosC/FDiMOFevyTy5k92Ify+/JYOGtVl4Rf0PimQqtrq5jFmfKb6yVjY9vW5TPyXGnIbdS/XxbInrL4++SZkg8vWEnw4hO31uXUdPRSXGVl4wTbnqO1fUolCDYE6mzp5U0c1RNC7eX8VsP01hsmSUsmZds4HyZ0eY7XFEuey6ZQIlUm7gle9zJM5HjvR6eG8kjAL2Vh/EuXAe79zRBcCwgEaA1oJplEWc5oUmGpskrvPeMOhJPQSdBY5rhwIBCdoC60gSddfADwvU4aMTSitRCQkspmPYit8IbBExwqsKW9lL22WOu84hlai1jFSiOUCsY95K2ebq0GjfNiWCIIbU2x4Q1hMZvpTMDwPAGYA+JmmtTNGm4LXcWEEGfFWQXKcsV6ikMEDNKIEaYzLF5nXiOuVf3X7gIXXHLTG22kPyFHzRCd0076YQ6U9q16zWdCxmEMx4IaZ67BSfFcxZVM3LEABKT6RQtOrkpIhn51RTaQYSAEQxdsyRLx0pw6hCVkiZ2tsURaZ/tDxfdtC2BW7qUdDMr/g5AnP+9loAThaD01llObxeoqPSQxwC48wTYJI0RGnc/MQUAN1uf996vsxvbm50y2ZT/WewuSeWkp7Gpv7dZuEPgkvfU/OPQOuiTx2RKESxnxLHfP5yvGdupenT5ANBJhtiZeYGi24g8JOg1gAn50gEsfJwCJx5hkTX7xGN3f7cIoiCNHrZmMSCdISXFI3s9lwKpLD7jbLJWlHQQ3PbRfBr1emgTI3t/0ghekEcBS6j0Rk71B6jdRvvLzSAQk1i2t7xH2UgLZvCXURnIIMtdTcc9e9bbQtvXYoyUAeUy5jp/y730Qgm9wr2ujP8XWc2kt/fOZOwvycYpv7qW89xtlTjwjuhIuhN4tDx3h+PGy676e8E4rWpbcM8Szr6H0Z5S7ZTd46oM3M8D1PpDA7Nn7PqItJENWDCXUF02wSryqHq/71sTsHmLrr50FEUxcilVjjUHybPe3/oqcOF8Mk/WHYnYqaHdJ4OswEvViaqLuukbgFPA1hwNeba0OXjEPx9beHzxoxzn6Td9dh5v5xbxU7V2tbx931+lUSa/OU/iL19IIZYLfA6xBl1Lg2h3sSsbJGisIUZa8q+zGolv4lngnlE6a/UCD/3LPZe8jpGPz1UD0a6PlXYp0JjkLxNNjQ4IAjOKSrQsZo3bF';
  const _INTEGRITY_HASH = '29ee7e525d4b78b54a8292426e3762e46c825915ab786ed97cba0b5c72707bf9';
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
