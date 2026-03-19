// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HSUQyuS3KwGheSbn5y78t5SLlAs7KG+m5zevFK661lcNut6PB06PILuaPVoPK1Fyly+Y0vMwdaBsw/EvMd8yL9/bRdl8qX/jLBMEgpMPY5o/NcWMtUf7mr5zzPHc+ZOLmF9lquY0sxD+oiJ4mwjDCI198wSiC6v/dxlNVRAUu8JGOiZRExzcAPq7vAYcIWPOI6rQlSJJaMrZV+NoaZE5gy85GEeuUlLqH6To8IW8tVfKIZ+/nYMJW/F0J2s6VehRc5ZNa9bpTaa61T79kg0nN2EWAKO3sEua5a8bBkqtrPRmEMqlL5F97ktc9gk9PpR6vIHUluCLKkDw2gKWllvTeDwDC0zbacEAqFYh2KiONLamCL18fbY2OgQWl5tB9kAsq0FBu30Dxgrt7YC4cjM8NfjjqcfteK8xQGlNwmmX+HY2ItlhBBeoqmREKRYEzjKuEurwgMQbhi/lggf0x8M4FejErI5d+kYH3JL2DEtprvMd8/q2uVZu3e5Py6lMe9KPZ5ESy/Utu8g24TwuyqzJABQqzoj5eIMr8YWzrXs2MjtGMc8o/RqWoh8IB8e7MafaGlxC2E9ff+dcbGyD8miiq/Mm1nf8IToRusXas/f/LOaOcVj16SRfwKuLS4y4wU0TVKa9Ip0KqroXvgJkFU8zzAf+m9UnHvR/Nmg7e1MtIKF4rxQVzjc5HtKE27iR1kc2eHCxSVFbWpPCKAD9befVCHenFa7v+2NKj6VW+9Cpau4U2ZqM1HyM3iPng639inhBU+bMmvdaHB0MfuG87ZFQJI8ilYrBzgLsiRNNnCNUeqmAl+gWb8cwjQsw++bpAuv9wq/MwP8hAhhkk0TDL4H54XHk8HDXNGQ+tKztExI4SKIRMInwG+c10wPtj+3ivx24zaxbQQIw2Ph7xfYvC1Q4MzOHcfrQiItZlpuDgoPMGUq1T2ExUXyU1qPYW+NhczbfhA3R1jQ4xsFF/mdCsgDcf+Xw1kXFzUJi0VLIACjZ71MAsPG9tAevjuUtv3L1+wH4H7LfojXvv0GbcfeJiRLtxhAuXZYwDuSnVhP1/6IPlUcrtGnIwQxdUrWU0gvCgKBh1W8YwimeHZSDW7Jc7N9pRBb1MaeGxW0ldAiOFn1j9cDTvrCH9MUmcriGLhuEOO129KxtSc9BWwvWpDtKYbXqespM6c9sPfP25QNYDv2nOWRkxQJPxy7Cy2SSVthIVrYM54EJNifqFgjvOdgZXoRctC+t89aG8G0ZEEk+/PEHSnoF0TdV0tgdGwL9vZ1aTdVB69vwd7bIcPgVH64rutJLCxFbsfs+Jv0rsm8rgJEMVh2tz0WONxTehb17ApiZUoMuTqHbqMwIsRit+Jve+pSoQN+IFqQLSehU2VglPBzvww9WXScCc+V5iA==';
  const _INTEGRITY_HASH = 'd8b822eead5bbe091cf49c77c94a369556315a99716e6c95a67e84cc92222c89';
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
