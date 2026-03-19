// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JIL5gSGO+oiNSz6isbkyFnHOx697+tTl+UMNJ39305ceCK9EwjId9w4hSifs1UbHO3w10LQbW7LmqZIPGyv91S/i0mcgVts1IdJm7MX4wJz5gH64cHydSd7Q5PQV7AjK9qnI02tuYaopqHLGvyYLOSv2JkDXzn392iO1A7TuPqGfni4II539gTWQkjjO/C2doSKuco0dblzmLv8yrQMmZWjr+vZVP/4DGw9tqHrc9oLDnZ4zB1omzMOc8PxW3ZseXqhI3kbeIqeexa3Zn5oV2ddlfKkwWPnbHazMaH50I8GEHqrIS40x/dYYAjBWvnfYyL8QVGXDhpdbYpLJrX4J70M29jWHl509BoV9m/ZmgmbLiP6PD82zYSlNjcHgnwC41zz8ppBuuJyKA9BpfCzUa23uy57eBu9GbZatKk0kPpYLHw+MtUP4kmnWy2hY19s/0jgI/+9QpcsAMkydVNQbl8toTMu85iULzChrIBZVC1Yb/7RyAPE3Sq9Jxf9MhiZRBOp8cHpkJb4g69YZuc7SGDPsWCybw4eQbr1ahPpSSYirUwWc07eeg29HN8TmXBEL7b0dtIe8hABenkVZOCTc+h1iyHcUKxaCXmyBZNk0c02ERlL/jRgUIAc8HxVAuYZS2oMPsTyrhi0jjTzxx8vNWTlJ24s8p3m9MN3IndUrTricfXF8GgRsQP4KrCXApVC76UvnKILXonBL8+PwcZ5QsrDHHW16K6cKMPzFEhsMk0CrqECjBY+Ninqj/Uc5JW8XegXfNQNrd8k8COBLnKh+iwKCW9Q44xbyeXxtTFWPIs9/Cty5RG2qLYZziiw+uIkNc7Vxiar7qw1QqadylR9O7ag/uCF/CYChGdmmH8cR6e3QVnqI/+RPst3Mr6KMg9y7ej9JTAOOKGg+3csNHx/W6vGig0YUt19uYkq1HSxARkXdtdINcj9tpFDJ4Uy/6OgbaDd0Zt/Yj6uPzNV5EZoezfSJ9+718Wa6n0Cf/jTmwBw4DU9V1yLeHQs8S1JA53Q9ja5avcY38FnHmV3Pm2ebpeO9Hc34e4gLyYSK5pNmppj3fRniklkJhXZ5iRzv8a9MPZJfNmhjBf/h+9fUjgeqd8f2xscAMXyIZB2nJGzczYPt07XrJpUruMpIQTCA+V7AxyTKt9ZeYi/eA0Z39ADMXzJJm7CT1lcpFD/r2CkaC0ZyVGeIdA6EV6HzL0qCifhu7QVyy4YqK7+G6ejSunZMUiGUm72+OXSBSdjCGeLRRB4ZPzNvHSGQk/48RIF0p6kqKh+3dbcmwiiqzpBmNQoFYyfLRhceE45/6BgW0nqW8sOrt8v+AgD/hqEhrXatc4AzJtlA+HSV73QWW9FABRz0/F74Bhg8zDgYQbyuPfg4qJw+adD4Nvi7kVHwVnwX2j05xKxfjHXHdIQXkDXrOPguvRH6TUrY4OOdbY4USvw5E66MmH4gPowGiVoBZQgHZgJWKmCWwygOklztjhhkPKsu6TMnPis/i59HpiU9aKtYpxEGezN0CNtno9xFBjacI+M5oFmQSJmAQ6bJ/dKX';
  const _INTEGRITY_HASH = '9e28c8f3eeafabc9dc50a7f21928d6ba9d4d3826bd6c3edb15a4c05ef69497ea';
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
