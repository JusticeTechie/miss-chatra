// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U0BKCIckqtWkcj9GxNT6li/nbH4oVQXPbGjAWV3T69miGJS8nMROTSVIeNx8vjuMFWjAmK5tMjPUMivkfKT278rDiPFD9evb/RXy8E5OgPY/mMMdKXe5tQRj0v/6RDPwtHRq5k3glHA0TAeZglXImGpVaPGi/b0hT26ufs+GnqgfjtrUrqwp6l8W+by8f/rH72x3qpS7S028Fq/ilLTvpvvyhwnt+vBhAIBFAG4QZebTz4wJG90xfUHh2/jYk8KCespphrN0jdLS3b4Ui/N0rY27xjKl+ntxbT+29r0QVEriIcJ+R9P0DTiEXggbzcc/pM2P2B0Pvhw/7rkin4VVboKNSDEVz6GTq6McI3WnJH/7sOCJRMPIcpdVTW0+M4CpHVtFS/1ZDa4yc1m8yvCtUBlV3qeFlQ+4eNpTupeC/vr+x3ZPrEZlsuzzBcBtFZ+XjQq8dWQEMLOIsLuGF+WfkQJODSkRZXMs1WA5inZDkx2PnozrO+7m31Zjx3E8ps0nDlPB32e6gLkpbkLowBinMgAMztddZn0ahTvYWaWdgKmyOh1ipfkzBEjmNe7Ls5gfNey8S5+gMkHUEyQmnHlzN67t5iOEg9OUGCGPopfjccwSVd5ghxAxqKElArB1ctgOaEVlmKhzrZArjP3VJsXoR8S3aAObIGrSe0nlareanWH1vZryt+jj97AMxLnd930fhdAYXx+RMMSUCB4KQp+qhBgseKmr5Ggmths+N6VJZQ==';
  const _INTEGRITY_HASH = 'b25df88c74cc5d13615d2bba01e1df9f29a42c934157ba0cdbb31642e6670e34';
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
