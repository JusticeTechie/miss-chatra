// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cW2KBRxhAFsrcmhKPilGl/RUjIHAUtAe6f+Zx+pdTR84P+WiHrkGTl5B5hDMz/UOUyOPCEMtQODMw8xaGaMX1m5Rl6htQ5v8ujbzzthc9GuXtukJ1G4WZnxP56A23mefegEjTaoiQVQpIP9zzqBHv3NB7lfsYhg1T4nqAcC1pflFXjM4liVGsy9wuVhq5pGeMzq0grULS93vQsUk1kFx++ohwE/bUSfmolh5ylJdS7lk7uFQZyk7rq8jRReXNbXWkl65w0ol6ZYBn7SpvKmz9K4XqslcVAEccXJ42edaYbaJUkN8NBS5x7DnaaUcmboDLgfG5EW2PksOYQQpL9ti4B/qpAEnFKnnIzElhXUMd4iF+mLTTMui+pjgg8pz6Xe+FUHJLtl2Wmo5r5jldgNLZpEdmFkBFAiRUeMVFOHUcest14e3Qmza8t5AaPu9tcV+wt4oi47lnY3l47Px+FiVduMd7hf0Yp4DqclfSRQniv7uvKlTlZ2iiQtmydjIhMZ+fwsfWuLVg9DF9ivbzBQYl50uA8Nomf5mTz9d5JSTufgvK72xOeuZvLIpxr2/Rytxz43X6IiS+YgWqv4RpeW4tM7y0BGJ0G4MUbVQ09c6/eyH+3bWyFDoO/j5YfR8y83+jGZpcvv6vFJL4zi9Tz43ExZQoE3PsFczkzAJc04EX/AnKqjnTmoo1dfACHSvZumpDdEolL4MDM9AQpPYnGbFamA3g0NbRtlBnsGYW+GlAHFym1KhjGEWRPR/';
  const _INTEGRITY_HASH = 'a1a2d1c5c4c409016cd0dae3dfe21287392ccbb258db50aab49e5121c6f76283';
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
