// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T1mVp7T7Fi/IIAJBSJ11gj+7uUSVkFJn4zgDgUBRaywTPo497uQBv0pA6UITu0k+5O9MmngHkrDYp83o27VAkkBNiCPehg4im8W/zV5q7E7HumCrWUC3RG6Y5r7XBaKO0wThEFQiPqcmSjocFBMLPD/CaUzwt1E/j7BNGMf9dFAewur/obTd5pX3aTLBVTsOXuRnJNAoRmo4hVAmv7pGIrUJkeMyyXLpn7bpWvxcTQys3uCNNQrpuzoJKeS3hVS7ARI15Yq069VJDAHyBGvmnkI588WBLKcqvKwwYQiTsRjnuljfNi9olR57QUNQgiO/bfb8R6+W+CGEl03Jcy3pjLIJO0CQnIYvvZU47iJJX2KH39Y/ZZdi7xzuqDygwNcuzfQHkq73oqDtWQse1BezIcsZQUAoJk8whQi3VLJWl5aAcOO4MfVDEU+cMxmNzj40AMk722i4RD5OhOVkdcJLBIYjwAeKFtUHFzUy7itSbWX59tDLg2RlVVg7WDWhxv0CZr5mU5dcVTCd+k4hDI9G2UgNE21ryCJ5v1uv+dqDGHxOcKIYIr5o2daHLACLEdx3NRfFrVpEM0JwKMYfmBqZt2buQ73ktBjBhrz5i0aBVOMlPYWf845cjnfQCXJMaoGj/FlcP2u8Jm67BLwq5fkZmftFc3t98b/yHjYuwrZ42Jmgg5yTAPxij80k8jOJMvxQ1MqxbHVTU5uwYGInxArm5mSpebBZwDVzIn2q4LD05ymxN3Bw/KokSE4iF5zGqs6TTniaK2s/rWWI6/8zzUgfd8doBciz0+rFsxBXMbl9KaFw9Ogct42Kx6gvPWB4k656SFNhT4kcmS8VS3aqOBK2fyTX9COs+7ZwK0Of+x4R7fKkA+8yV2Ou54gyrK1Ux2U673BBTtftTg9VzcfbxUxkXUqh8dhHQ/rhqI98iT+b47cSr95YbgemSgBiZ+OIQWtTYrHrLlayedkAxJT3sc9ipWPm5uijUCFcKcSPZGcUKYusmcP2X0A9I3sAz+z17Th5UFZCWBCJX+U=';
  const _INTEGRITY_HASH = '86366e8468d544061499396c95ab6c8b34cc72a7a6e6a984418f05710a3e7a7a';
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
