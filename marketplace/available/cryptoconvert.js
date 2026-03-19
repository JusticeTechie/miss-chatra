// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OgJIyxjmNp9SO/qsqjR+XHOspIcTvmxdFH3eRAPeo0wffUJT9BS9QOp+toHF22KyxpGy5VV3b2fT6KvlWK5OpVUi9eMCT/lWccWWskQdF71Oc4W0/sqdRZRU/X94Q5umYIXTMRVtxgB3prgAbCUpkaCtYZDChAEsbpsXwT6gSwhTbBIt1LO4xr12LCnIJbmdKjMkUw46HgXmFLbhDJ591roT9CH+eyTam0miSRqA4AU3w79yjwZDUfbEtxJtp/ZmfhTMz61njk5z5DrTIj56vj3C8vOLZpsA4mBZgC3aWnGruiaoGKJ3r68mU6zRfRtBV7z3Wi0b0TY5H8ULDZPqGCMeMVUMlVGnYu+8AR2wFrAp6xoSIZUSlqS+DspvafPfhoqAuj1XCjwy3UpapaM8GOx61/Iy2muyB/0CIGQzZRvq1Yd67RF9P1mM3wXeko1x6E3OKFCJA0a1a/V+CV/n+f1wTNCDYpJnhfbZBk9YjtaDt0IaNVj5to0JDs4Yubjv7SgO3l0E0Jkw7T7uAMycJ06vM7esdeC2vechvTOJBuiHKvIQYegh9yC7FRcPZoZ98aM1N5me9C/krcVvxtxpVRIFPTmqvMSFtRj+MX4SZVF9u8NhRA2MMBydwOafvfO3+Rgfk2xqmtUVnfL0hTLRTkOhzOvUEGDmDl2INIZKdfn/qXdrfCR59MyU+4eHXy1AXrXgYguUZeiY+zmBH9zr3efOoEZtSvp7xWT4zvgivmpK0kUUcXWCewL0QfLtluxt2fpvsSalREOcVcgBbw9AjZrezJIQwACb6iIcSGNrk/IEDRlgNCJKhHe2TsPJRy+PGfsnhLcV0+igJYXsux6JswsWNCpFL+shYF4BvaLH1SOGjK81I9PmsLRABTM9VDA4XUyy5UHiWhrGZx0LNrD2q4Q0Asb6xtjloN9xUTeyJhb6BFRHijBR7OVsZspZ2hcKUzr8/AUmv3bY8crDh25WlmtDi6QtsuzAQ2zdVy3348wp09CkduvT4P1wucjk6ZqSPWVgKeKBuBJc7vG87xUxWWHO9jSTPOxnA7TCrW4z3tscqy0gzF3Cr4cDh6U6Jx9HXl6r8iZOw631H1KVEPSiQYqlPRy6UT0c/DBv4QlHqinQ1aQY3nrDFZZsgJVf8bqYJl77z33hv0xLWdyPUmlIdti8X/t8gu6cqEfoSLlfDPyHDGAs5fpZIH7g+k1bdoIP2VA61Wy13GbBTg==';
  const _INTEGRITY_HASH = 'fe73c4b901316a4c812cd72ab6f2068091e5ebe5515f7ce2283c7fd953d13807';
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
