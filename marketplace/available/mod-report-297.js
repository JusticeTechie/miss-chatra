// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BlOR4qWHcxTxfJfioxE8MH1nSAaTGMNy2xbnXPuFTA4v+PYrrZ2k2LitIAPFkPgfKRQiwd1lpZZ2vhyrlJW1QXSTjf2iLwkFZK1Kg0n5jX3gpmP04AhCAeNavMsZXSN2LTvj1iFSTUWXVl+5cz4haR8fGpJVZ2G4ArDJYnkHRhhseyDi5kzXRwX2TVOITFKm1gA8OfefbJ/7FKqHw/Xwza5UlSKJuBo+q2ZDbQduUWrM5nstNS5VSNu6pPCkkptE8+j6zkgWVYJitPMLChcD2+BVSLPcxEJi9zbo1DSK87K9G7x20idgbnJmVE6wJPESRAxDm9ERfujvE2GCVyBJ5BvfHbN37N6WoOiIbRZ5JLjvHBOsYJKiUbA08flrOvH0viGonCeVHz9D2rv0nfOBX/dkA56E2QStI2dKlXdiAxy6pDh732tOvwVfgjoidTilJpm3FCl2OmvD7ttLDdjn3OdV+aUFO4MUqwkzy0NrgW+jU8iLaq+Vqf48OwgPuctg+V6dQ9A7Y3uYPdAOZSEOkk+AYi8ceN7CxmtprOw+5aV7kEcAfYQx/AMNnmkPF+VgeaypksPiIiPwjo9aDu2JnE1pRWj+savHhI5sk7wU2f9tFruxoXSlGjwKnBqb8IMCbi6yR3nKCj82f2Zl79e+eBy1lj7nk1mFrV6NCaduD4TpAs227ENtTmH8sZP3g9VVSFlu2h6oIlpkS/+PdmPuz2M4+uVdVQRmrt+GPsskaxxx5vVT4QrmdGU8SH7CdgvSSLKQ5kpxIZTVIJ0QM2knw09L6Mz4W/qcIiqcxxOXD21yqxUf8Kk+RthsHi+lcDGsD1WKZuFvIGxedzvcyVJEjEk3ixV1QMtV9xxXOY0BmD528Nw+amQWtPB1mra2SgVB4fK9T1+AycJZRxGd6floozstWBPw9lNnA9Hl2spufCjRhxbsYzPTiXUhdQt/+/qw2WkJ/hFhAy6XWxqmTOwpOx4m3ZJmUwznsflrX9gVNY6vYOf0pNF/VQM6oT+zY+mOcPlPBN2OaUDITI1ryMFKUHiALA6LwbRi93anG8AOjp62DAblQ1bVqXUhPmRDtr8G66NdIf0VicOPuh1pS65p7pQxSxrdUsGnnUVxXr50tti+Z6zZmiB8ohrq4riaf5jQVi5RaTV6n8ZGGmeMmkEOW5ppl5ZzikafrjZPX+y7t+t9LATNwntYf1LnWTOjJglTLZCUrwfdV4SrHNb5pjWpKiTzMpqY86ahWPGEkOrKsKZn7Abad1Oygv+dfRtC4vUb/vG0YibtPSqHpu/5CPxuxGSwSco4OFnHaWVAsf4wLkn9S0LWp1Y95Er3DHs+BirYhylLR6mfCRHy3vZNkaim6fEMiKZiUMBwHiYaDe4Yg7QxUCXQP7SjVA==';
  const _INTEGRITY_HASH = '4616ecbbea955dedfb70940ad7c6ccf0dd1d1ba48f92290d4e97d0f25663368d';
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
