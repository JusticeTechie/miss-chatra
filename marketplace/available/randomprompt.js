// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eeQbDdx7MitSGDbqItkxjFg0zPSxVj5qmgYR50ByK5vrRKs02jL+kri6x1HUZJGKGl9ROOp0GtCKQx2L+YfQKYHP9S617Ul8mg+RLGt3ytIFfKaWiU/pj4OGpTZV7MlLhNqgh3NOr+4tzxXOPMvkwHgdUWo6wyvuSY+JT0W7HIaHDu1VSDrtq48ckT3sB+Mo/zp2pULgFPojG6x59Na08e+RRJyhObg2lj2sRf2qGInby79XGwBD07f+b6F3Ntl3KFKPwFhI3YOpi0xzdQhMxZ+MW+oSnm5mu4eZN6F25q+Syj2VOIaid+/M0iJu17ZCVfwlZ1AtJQANpQqbd4LvPF9uLvqpBwqDfYEBk2um5dY1WCve6rFqfQkK7R8dyb8QpGsqvgodlwvIPx4RGkGfhzqZYCUG5EdZQa3DMl89b416yb6gpehiYB1AXuaUy+V25/V6Q+E+svO0I1YbJhA1rWo/jp7VacHjMCBAAjwz+9kd9rAxpldpO0Rq9oMlycnczwn6vJe3aYsIWKVXVe2mgqBbYI6OItjqoYoEa0c/quysEvwlnUTgSgkNG9klHMvfHGMBe1wpGhll/F/Hk00jpqFDr0eRKm9vCKB/Zw2ehx++3HjYJUoj1l/fp9Mtngs40znkERLvSGzH1kAv8yL+xMkhDJXy2auDmCWExwS4XM23+IEb1f4HWvvwUYK5S8lNqXQ2iUYa8FLTselHLr/OI/NhDA4F42+Hwav3dy28QJs5Phd/TBGoKFpnUIMw1stFgfFr+LLkmqXZEt+TAzN1Nw3PRu8t2nEMr/EnMdezof9QzwCL452mKoNKHloqOYhQaezAEJcHPzC1lRSEqXLSoGGbdWxWRPAkF55l+sfrWgT6BEboGxzLVp1Rd8n8BVoBzsDP7VqlBD0F4TNG83GIoo23nSv5PeMqzhy7kxoP9EJPPoJXdy6MyfIOyptl6bUptTbjzXyw2uA804AZCDKVYqa0yHmBJHEWfhbSj+BVBv/orNerU0eBu3hqT31FMKykZG92Bvnn7jGeS99ra0kEbD5ejThmbeOfoVTQKIGAHy1QBqOAiem5TXYkhqhUM+KxwxZy4x319aEa++0ctWl+OTFsjQiYdQUCNUW5zAEUJ1+k/oSmWyXa6R4oB+TmtISW6uKcG0XlcaXE8GmMHh9Q89mzMgnI8ywsrsMtD/DXUEICICT0IqF9eUaMZMjHRJTKpi1viGUt2Fh/pg==';
  const _INTEGRITY_HASH = '17eb0e6603efb83e6455e635810b8f0eea1a753a40ec296d1e2f5f37b93a5d61';
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
