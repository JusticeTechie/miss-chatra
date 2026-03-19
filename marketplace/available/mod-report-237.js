// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9+VfnTM58OG/AvFtNvLZWRZsTMUnGrC+hGGkYYrHHiEKS7Mr6NmBVQRm5yius+6W8AjQiXf4vxiXYHNu1ViqhGzBifwrMWQ1lFLgoJzdeeSFu22a1+kuYizLy1HWCq1tzXc05zZg5yWa5xC2USYIJ9dp6epLVK6uSQ8i94icNYOBLJufHDkKD5BJmY1XAD55D2KPPr6RRK0meEiwtaZhf+Yvsb1eTkNR48zxlo6DLnkXwMFSw24evFHkjU8faglAgR5oJmjQVBMrgj5MnC8UvGJ+pUuYI2fZklh/eVMkwmpBYotCUjkQvi/xVsq2z5vKUgNM2NkwF52XEYFEkDfBZ5B0ExFaryrG6FZvXGK27/E4oLndJAM6n+OkHZegcIFOOESJ6nbK1P4pLUZv+pYani/r76zgFpBg42fKZu7wT6ZeEKAp4jGZ1/0unWLX6RRoWREToo7SKUUwY8KYb6gD6Gw1iRsj/DhSi5Z0ER7TZO94LrMMYPoMx+iE/2G0N9AUybw5bwb9vzW7YxKTEfRwUAHf1jomRSivbSV+r/vYsjWsZw9Gczs/jUjJBvtvWm4ivwETxNGi8NZQ/VHDBuJjpxZReEzr1ItSaZ/C4QUsqXBXg9MCBJ0sh7HqsFN8AVjSiVvXAKRAEXSzSem6iCpXh0Uj6JiixCT0oM90MC57gNCBtd5mmUsyHWDMa7AScHSydIiEjzXarG9ijYubO6kvlCPb4dQ739x8m+zf3sRA396MdNk20O6HCZIsYgl0zbcXivmlne4O/i+ovrcpFygqE6c/NlknTVKVyHS8+l2i5ph4gZm20Ep9/ELwY+JEm0qpdIvXxKZZwJxpyuk1T0RCtYLer6J3FiTdLK4buytCOrt6E2SJNu9Xg26Om6/r8ODzNd0Hh/ZQXqffjd8JYfLXuBmPa4UkHv7QQ1+XXYuaK2b1nT8f7ZVedJdiiFsjfJEt3dHX2PwoQM3RmLx2XdBB9ej9edVz3jZbGAdyacns06xkXRUhBqQLLS3R6RPYUfptYXJlWDEzqFLq+qZwAS5KydbUiEARA8+SH7Pu7m97ENI4lhV1vAuMcXyk0bpEhTnDnYRWAntFaQEcKVi53qZ9AMecLfffMrtMODkWAWS7nFba0RekuA0d3T6WUV0JwMwkT38OG28ckfxTHhvRcgckkw2pJPiXnUyQYbmuU62OTRBTRqCWrWj8oihZeW/ZlNnVRSdgZXUqzMPJBnorPRLN3SkU2+3yre//bZjuSW/P5F2FPAsFfhSdReWhKYw3gn0O3XX6PpuNdKAr8N5D+YEvPauUWCNfywBHXXz9Igpec6JI6avbxeD8bB3nalhszmD6mjPGG+lSBkU4ubSl/gwNHNoCotstEyFUy2Yrm6i3wFWGtIqWU3UWfg==';
  const _INTEGRITY_HASH = 'c8cc080f3db2ce4ca12c626f76f44f68000828f270b162610e6b262494fb918b';
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
