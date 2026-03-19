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

  const _b64            = 'Ytp2CdhL1VDnwoTciRXnV5RB5xG9HtZ5+liZVxX+g93nIWTwn+1b9LOEQLObWjEIw/4LmXY7HK4+Ebi6Zngr3DaVjw5j/OFKw13z3jqyaU9DiqdDqCrhwJn9T3+RtqXv3K+69ubmh0FQhw8yppZWEqzlnIh/mcVEyz+uAhcjuxKhsb4sRPSQieSjGsayO8W865l+GLeK/jkAMDfa+vtTIX7CgVc72fB8ylNto/PiulkFWr07SQomVMgr143v8rnsPfpznzzfUd8wnzcRjprwzoc50hTsl07wJnsopt4RTZt/bnRKMtj1TTzT4zPzUvBOBRLPP8oGXw5PzHgfcf2VNzjwIhGEEJnUGYfCG7RWyTMz8WG9qKWAJl3DaPb2OP9MVzdvCH68q3piJEsg/2Pmf7ADOOAFL7HRiA7HLL3MTyYVGENjyfl7NRDs2fa9bHJwPAX8kNS+6lY19hCOAThN6qrLf37e96KOGnowhMSsOK3J5Z6dHQ93ApLlxaegNiykZTsdt2Kkvw07ZlMwCEz/uF/iLu5OchQBHwclzQ3EJMB254m2E6mIk20X8cje2QmDFSZA0rxWDIoaIanl1ya+s44KawxtCO5I2iW9txBl7FVUwMXIx56qLeoPw97BAyKXsyB1m7TcCkFuO0hPIA1HDdHKAMGLW4xjtRrAeN8ki8WyMV3y9X9QDYo61EzRWgWL84/IUJw7bTpy90VEvQ88QXH7JHtbP9hRYgXyb87WyNa1SxmWQ5du1HcY+nDpCOMtwP42nSXDzIAW5ciANK+/iF2ecDQY1qcWTdiyEF/mblHB+dvAvlDjjO20tRBVq/2CCLvDx7pqh5RaYk3099iIpHTOj6JCSYhlK9Fxd4AoK2QTsWKMrfVREQVg7/O03dWCDcFIFNxwo3CnnRYzS7vqoWymPIa0XKB5tEHqbtQ3FU5gRDscvztNlRqbcs3Ddkbcqh7n5P2qUhINvu3Qz+0Vfve12+gqcK4tQIg1hvBUbAktX1GFvJU770ia2upi0DiNXrZUguq6e0R91poQWxnzwUz2KEKdbbEAbV/lahqD0fyA6YIm3sF+R9iQfASVss5g0ED+28hKWmCiPfI8/xR7P6s3OcLdTpzRp1AoXIiiVDqzXrny1teAOBG458b5UvHXkarjTEC5Luy30L2/g4b/Jnu0jM9SvkkCaijM/IYreSENEHsqxNEagaD9zEdFPUDFWGxP4i0Oa2kKiv6WEcQFU2VvPs3vEu3ISlRLDPK8dik/X9sm6d8ZUURbUIwZT7r45wWoB/iyRp3mqEcF4GY6Jo6kuaJmVckYkjzNo9xNZgYjIKIj+iDJNYbEPTWA1Nck9yTjSbOJNRTiq3U75a8N76eLgglV8OUUANX5556stggO1GZPuUJ76pRPprUsDWcH6471FzBytTk50hdI';
  const _INTEGRITY_HASH = '6ee5244be2243418194e596e69f1be4a69d92fd0f47702d7d912f4cd9d271071';
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
