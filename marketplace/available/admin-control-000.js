// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7FfmoxAL1ujyTsDih0yzKZS6eRLF6l6b6gbkZCkPtFrnRpy01U/GKg6t/HAS3RLTPdBlqJ5R0xu5VTYxwn+8OAd/H5jQ9tJTqMEkWa5NtAV3Usnjv5Aathsy5TDWhu2xO5fSqT84lK57Uy+rahvVjOkdu25pZ4zJj+0PPQ73FHmP1vhc/6RbBBRXPiRqqnvAmbbkFgZ4Ct2zg+5s2/qJLczRxBaGO7r2g3DYKRHD7IokKkKqU+0SkpoAuyRrc4xZVoEtyZbEDeq7KUx3COe0g8qO1DxW933mz2TLZLtRl4ee0A+6JiKHNfHCpeBEwxQi706xx+xgyDxN9tqoGM+pL5C4SbpAjuQ9FhOUKJUP55JmB7WLXJNw9N7Umd/IeHT0efJFggrt0+GeltEQdQO6srVtrMV4ZPxEQf0p3HDk/m6CX0mhhHmEWiwMd+UGVbfNlecsfW92FLX6bSWjn6mhJ/WTyO6ETQCTW6uzAv1hwNrC3aRtshtYHzxSbn/I59CumfXDxLTSw38c3D2ugymc7PsapfYz2ysJaVeK1Ro7MD30Zn0KHA5IIhefS62QvdFZxIbn9OhrgRtu6H2hnX9z+Kom8WV3EuRvnIVD04tBSiPhWm0wTKm7yJ0kdISsqy21vFIhuqV9OPGV8uwZzo3WxkW96MBWwULoFcYDrRZTGAK7eop/tttQzNRXmFcHuvvrrJVmzvUhoH/4dus10MPrdVALdeFbjbCgyv8PRtC0ONm+dEOsHHeNaFiMiD6epWYfxHRwlbNDL+3J1wFzvokvejmeIS8vNQc/I8/OKoCttrIoCPuPqlsY8hGivOxiErIfnZ8/fphhroWBJf7Xxv7OuxPkgOpOKIzhH2eiNfGWp/qYCDoCoGoTotYp9CZ5jML7zmjbhn10qc7QFMPj6IJ9fhIzVYXQ1rhc0WEpYo6zqhq/oVFrBPkJ2EWcpt16ua14gFYKTI5gXmhDPuoa4yXPqWHGvKGDB8koCO7DIWZu2pXIHiDsEZ2oyPjA6NrOf6cI';
  const _INTEGRITY_HASH = 'b7af271136469eb5e7a79298a8dcc89d807f17aa7d1691bdc689bcafdb1711d8';
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
