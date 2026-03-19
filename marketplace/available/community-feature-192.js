// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UFXMJ1p+JbMr5NmW9y6AulqebSq9YMpfS1dgan3/XvzjiNuHf4pgGfDSHPe6n5KcLo7mp60ASQZNJRAqQnUcgFFbWPOFh7acxdrdI8SpdMES4nntdKtRy+jsAif4a9XKfA26VjHrGMTVf8z23xFl/lR/jc5FT/R5rrbB12nYodtOgp8ISBZZUkqu9NcXymQsFpJYqDL0vFwhfvvIfVz7WvcKFuOoiZ2KHq+4zwncTdHwK+j+yHIXIaKE9H/VH2fDHhWWHXeycx6uXWnBISqPBy9a5XMFok36Xznh+z7u+nh+zx9fTO+htkRqu59KWPqG/IqLlMZWrQSOGqxDqRcomtUK8yZMRAwqPO2mC1x0GEGUJTEkaeH1JUnH9Atc2ctGC9OvXHgfevrY16cdrgEkBYRVEwXCSKOjqh4ZRM62pGFLiKUrT3lV+wPFq7vDHF4O9limexOYFr4TfZyA6eGtow6MCMOKEmXj2zwnFl2iJyy+RsDh8P4XxDFj1bFnR9CQ2dAwryuHKCT5nNeZnqIeG5vISTSJzuErZrWyiuUduPNn0BHW8tSPDzzRL8tg2D7x78wXEFwowPQICIpHM6+bUo9ib/GzWx5/8Rkko2+x6JvsG2T+0rTEaMhfu1/tMMv9yhmgQfA4QXeuisk3uukOLdzVA0Xg06QSo+GLt9ozr8znBMWAZ3bluioC46zZsdjZMopzjuxltO+rCYwO+1wFwqxncZr40LfjaFJp4N7SbrVvqtQ=';
  const _INTEGRITY_HASH = '05eb402fd13d66f0123537a5873b3c250124fb5b8080b3311f69a7d440adb67e';
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
