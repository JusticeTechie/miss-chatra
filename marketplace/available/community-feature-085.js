// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z3wT6LA35Lcs3I7h6g2lWBSRZnbWn5Vs772mxLcKuSKV/Uz9FgL5++oG/R4Dt9zqDs19sXb++CMysfuo/li6U47OLogG2/gMkjXbC4uxglVsweJWgEKYxqaSe3aIxLMo5aAL4z1NyI0v4pf39XTAYrqmaixE2J7iwCOocP543MhM5ViJlfVFk51tLRdS5+1he7Z76DhMs+2EsZVwppGmOZGq78MWmjS3h7PaHzNbAIyjtu5tbEiaw0HWnV1FNC41cWBAoecMOB54GjY3Jpw7nb/76Y+WznYP1Ko3ksj60G9yxvkoq0JlkNLXNKQBQez4IIrZlgyLIuLJOGCfNkBoHyANp7w/WtxnNUCkh09QtLeoSnNonwCnxF4FD0UCZNfV2lvRavfJQOsiOpaWdX1wM5zeszth0Uu4KvoeaB1EKAbYVH5pJuRmbgQKuieQkn+cb06aYZ+kqjEvK+2fw9Tl+iahPjaXIUPApblZjCldM94fMJIW5f+gGkry7zHjkAbMY6QYHiy8imbAk/QJnmxNDQW0lxry2619L4ucC86MaNkXNtM6eBnbeDLiReWp+OZsnUSpo42NXXjQSe9ej8CXKkxpCUFA0GLhh/V8e/z7QC+lrMzSPlx+EqEyBnh2F9FujVKyRi8fm6e7o1vFG0fccSIJEllBqSuZb+/ge3g132wUX+CaJRjXko1a9E8SR4Jec9s1slOWSNptHMSLteOmFJY6eTCqrSrqGhwPadLahoDLVHNj4FA=';
  const _INTEGRITY_HASH = '85eadfa53687b926c96cb506b694dfb9ff37096f218dde57f802905b1e6ad7bd';
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
