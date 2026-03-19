// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'j956w9cvNKesGudoCuylgyfLgqkPf9+PfbpMJ3YOg2KuueFY6o6o1jCN2Wa4Mv+YBdK+Z9QPYU66tRvfQeCCEIj/lobyCBI5zt4y4wbKGMz8JE6lcCEUymsbcvqtdyuePG4ydwAYcR7egmfq8ozuWkf6TN4Ap6nh/3bRNpN5uxTFX4MnUEUWSl7JuLZen+/yGNABQx3F8OzmX1mZ/6PceYDJXGRzQoFZLQdlsVQjJkd0lfYFdBRMJnZbA052Bc0fQ2+BWIoXgM0ULY3flFPvoxk6UnDG754d5og7rlAtr1MF5wHCyQj1E1ay1O13A3/Do6vH0an9LXpmQg635Qc7qWiClQN0x4FNOcuTwVmyFk75GpPD36GPG4m6J1Oe1mtF9OOhlSJejDnmBsRB+EYLwUB/luta5tAoUeVF6Pq0iPn5fgiyJdButbu5ekVzNIrgGv13WLxz/rLh4kZnDtomSeoC7bhOZrnu0hjJ4Iu5BINxmIbIbxSKsObwoawvZk7LgRoc7HgxlkXSSylEiV5pOpxh0Rvz8clJNOzqlyJqLzRMRQryMRGlEhWr+gK+sEAK72GKRc4aHmAiO1IK+XsqxFuOLxSfyV1z/LsJNexkgROg+wfF/ny6Ylt/jyrX+cc=';
  const _INTEGRITY_HASH = '4cf8e2d553dcf8c678b73093a2047f11a6fa616eaebd81a969a87ed45a00350c';
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
