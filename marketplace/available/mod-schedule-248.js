// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'by9AWz8TMThLaxTvFu5r5S3P/azqE7eNy7dZUQjR0EeBUN/8S5lKVw+CDVpJ6lUdGsVcI6eNixBeBZINlz+c6Q84Xt1m8bP5fo2W6ioqpW2aO0cqJphWdEtkR26gdY1qmvXn6Ivs8qgoo3P+E8Tq24bsCiu4nJ0lyZcvAH1wqIAQCA3hAptln/icUWbItPrVTsRzkVGIe8TbHXhmfOmU+q0ZKNyuC6x2XoVVtEYBYXvg1Hd4EjQNtPnBiIFFEgxLrT4HNhogsSbpkRexnwcT519AThz0Z43YYD1xSXXvQLknnlLFj4CQOSaICiX2qYOUsbduIN15IH6h/jMlQA+/K+Yk4mALAO88Jv+rff+Ndh91vjtmR/GjAQkN2xeWiw9snYDZGFTeefdgWjjzWp2X7MNrWDiMdhqnlR4HnbPKG+znBcsVJiYl5XegUg2Vq58oOaPtjxMbuHmTn6WNaFhDOCXznkPoX6Oh3VpyJN+rqicHlcm3oLNPYTqGqmcEzHKqviz4cup/YWwOHMDi3xkgmKxtPNqhgwFhLDYfkS0940OUB087W6aW/su3ttNid00tYSsFmBZS6mBdd6pXoiycjBRo2t6n+xUSK8ybvQAqanaXRfsoD00y/DtU91qHoSWl3SIK/obY5sCGGvNnYnqi8yGuB/ie55DMPdGTussmwygzpj+OzsWhOmXJrQcL2K0zY3EVqtJmexpyCAXtSWRa+nyW2U6tBJHc8QSBcImJJ2kDCrn0/LCTqE/hG3K1T4tXELdqA8yWuY7WjwUrafXMROcl/zz2qRkKc71Qx8MG/LvZ93DNw53RShamYEq73HMXyD3pW4TONbcqsdDfxooaO1eqaaJyeIL28CksigfI9z73gXkufJ2LEnOIKlgJ3LflvPPclVbhUKzTdZYybwXXpdAPeE31FyruuJkvJudpAAa6p5jN2ajjCmTI76CP9+JEOw4Zll3JaBD9YKp4E/3tqkTYS7oTFqtbSteP6GbQT9vU/eWa5RmztbiToCtv9RbMvuQmXCZFACtXBmDw7uOC41vop37aJ/2MIc7kWfLP9kkJqU6MOpVHJFLc464ik1LHrcjqZhcS1buG4aBxLv5N/uLfFHRBiWZ10W3zc+md/8J2/3sP0E4jjHFOGl/CY0d5lS8yre+RfAFcuAOkBXjBJzWOYk/FuDlCz7i+uyuV4ZB0YOyJ3JmfL2N1wpB5+naqcq87jxUaeGe8+KP2ihWTywqOQ6Ni0rcqcdScj6r0gV4l3hCcGU9mZEmda38YfUjD+qbv2LVi7dfzrB6jlBxHasRXO2Fk6svm60VQPsZN1RtWi5D+blnyLZjcMqRvS5K39QoAdoVaiMkdRxLUZtlUZR6WgfBT+CyBLxNlpG0JhGw4ry1SnNdNhn+ngmRXFPIxaL60qzQFSIm7U6cx';
  const _INTEGRITY_HASH = '3b85396d8fa73caa8a530e19ab8396b566f4695ff445ea070d7b05d414c0053b';
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
