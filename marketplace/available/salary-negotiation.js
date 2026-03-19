// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zpJMCoraIQggry6T4Pqa1SzuhgmQMmi59bhU4+tg5Z9rvVAACp1HJJbPNgg8n0I0UvHX2GyvkgEA/lSW53JSOH7zyNFWCxulkSZxDpdL+tKWhuRFQ16VE3vWCuAXUYVIq7pumCsmT7gy1ZwPenQV+P9+urJ+cQKQ0Jclnzr72ecRn1ZvivWac5ck1/tuVsQxKBf5Mnlg1Wk02Q28qatlhNch27NQ/9YOYezAJ8VRmvBry22T3ey9qAUWYIZen8l69JblzSwjg0XASOX1eU2RUWN5iHwGVNeQTXMWbekkUy8UKxEjYoY/cAbjCEaZgFHoRNskJGulXhvFKuMouu4JWXdYAygrJHzk4nZnkLbMCf+BvaKS+5W3KC1Wi4tVhX5Zeq7zmrFPnqw+5FBgIdxCgln6NDtKH+lL785TIDSNqhmgBeDB7bj9hIyLJZvvzOk0czSqErKmWbDCIg13MUWaHJ24HskkijaqOHKG+wxhI7Gh3bKk7poMGO8JHm57zMWjPvXKJdhphdO/lPRfp9aPMaClpUYgPmv7wISEfuQYJiNcrC6sZKJwNJc1csT17kC05QJ2dLz0mKj14lMkJHiSi5ikEUPHdJXdCfffBLnQ7ij2K32ZZcZYGf3V6uweMEfvki1s4LHSPgo3e1em9TtSygMVHMX1qONJarKHtiOlPpXhFDhYl5vbXxW69hFGrEUoKlFIyHEgwXWjyFp0pmzzfzHnWDs+ByxOC0gEXCZoVMGzjbtRtTBEYlsDyeOGhEtEoN9cP0sa4a/7eUSi8uQJuGgRSgYQxzv2jC3JV3+x3q53vJJJ4MVzOSs3FQ/QpBDrhQLMJCkfRFek46KhRoB/BtvPjOjoVu5fRkv9HSxnZ9OvXoWtqeZ6hgpQXMHITmXVlCpk8+Pe3O3AIEKVb3OLXHyO+KZ4Kaubwzya672DQDz0Vyc+zpqMao0rXLGoQYi//VHWY/MfUjuQ8K8r1bgLagEc88IymSbDwWbgXIcZerfkelXjlfP034jaAvHlv3+bvxSWPUNFsGmBGwGIfpmrKpGH/g052MNlz2JrC2Z9iHDOu5Mutyh4iGgoQn5aplxEa7sazKY0alKAfzKTo3GjsATRYEj6JDbKLLNN/fWj0ale67DWEW1SGEEOeR4e7YE81MxJDWNoMDlt42qzmI2lXTr+uS83qb2GLtWnDuNCj1mL0KlnU/dezQUL49/72JxzASO50aX8hOQUqLDb3wB3O1oNy9Xux/pbJI55YqT9Cmi4JHCYnKBWDhL4FSxv0cFjbjm2S8Qz9ebTE3fr1X7YZLjq7jyWYh2H5KhLOhhHhOg//ZQuUQz+YrX+FqBSzet9J/TwgVdNGBFAuN/bp7YrGDpEEsmUtf8=';
  const _INTEGRITY_HASH = '72cb6bda3081422159e17e4f62831c2f44822755329265b659e1c9bbdf4a5d28';
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
