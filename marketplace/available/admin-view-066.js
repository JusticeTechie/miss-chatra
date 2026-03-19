// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Jsa0WtH0Nlbl5Q7WXjeIhgQztiM5EBpnJwYrhPMm9RFtNDfDJKr9R+ITEqXN14CRwY6MY6r/T4v5QdJEAMGMitV0Beg67C+DY+qJ0PPmzvTWi5dkOxwxaEwVvwS1BdTx2avZGiTLObCsmcCsl3+Sn7f7RXv0DC1SLks+TNO2sN8//n819DqkbY4GYKQuLR4o1bloU/KvlDka07I+EdxD/Wl3vapWOxT9LkgLuyR7yxa6c7VBo87Clcyz1JKUliyjERPpjwMbsleun3yAbkUS5tyWmN0W/EZ/bNSLzpXg+jqhbPQSRfgwBw4P+OQGXJE6NgEuBmmP6KwOfF5RhhltX98kUQQHO6zIC38FNfm5DOvqwVEZmAkkvp52JZU+HirJ1Tmi71jCxaVfY2QHwnn4d6y20I9IhJl924HKPrF+dgCsfGtkMd/u3li2ab8Heh2glqrZrN1UBmTS0wxm2tG3kZ6RC0YkNccsrggN5X/MKDGM1+HMhDSpQFxdOfyaO84cZTenOrl6SiYVMHRnsjDsq9sGf66TpwhZ9chPHk+BqmM73wycMBDGX3lwJNZSC2+JXRLLmoDcj2+K/DslzEFl7M9yf3rGTdDL/iGn8AUg52LwND2fkyAtT/kxfa0+lOFTcEJ36nfnv3vLl52KBw6V0putcKwNKBBN03Jl5DaBVlQw/Az81cTdI13LkynqV8SE96vk4ZVYsYIyxCM4migx0vjh6KAF0z3+MAdKHd8vKpa4lz1j9ZNxDgepPXKw5B+fB5kr8Rmh3LoNJaFq5YJdkd+JHeXEH40TGuoQUSTNT8QvX4p0xALJtU4reRyQkwymY+MFX6GD905XfB4+4P8VUPb4naBdhwQSJVeAASIzlsyRNVrQBp4VDiyVcNAyyypaoZBTvbMyb+gDv7Nlbrt67yfki01j0qBPUex3tBwp9A9/slLOsS7Am4GrSvV9qmCRbYvjnX7AfQ/k4jfR+orrXaqHC6zzeKTm9DjwQVSh+Q==';
  const _INTEGRITY_HASH = '8e1ffd77d3e3c37e217f795ec72c028553da2ae2614609897231107e482340c9';
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
