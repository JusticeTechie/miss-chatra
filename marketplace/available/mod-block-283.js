// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mzdb7cXxTwKm/X9GboroacsBIyoM22wt6HbqTUFnzZoA1C3IA+b3f9a8dJvWBPNFPyDrsQu3YUaiJiUNoMDnnL2hcCQC5wxtidxGOBKX3v9BoChRK97vyVWZR8Ya5QiFa7QXDzIhJoh41V1aB+Ux9BVNYZaZ5mzZHAyvChrSjQlr8JGxMX9lQR3repzpYsg4Axe6E+TP3gGn7kCdhhFkOCYELuemEWa+662+zfnGH4EdVUcWJwwpc33BxizJJJd3cPkJGNGSrolWSV/9xgJxHszimTv5ZVla2PD9k6NlEfscssGrdu7d20lz0CDFC8AyBYx9hot6RwgpRUHMTMjN/1RV/dL8cmiSCI/zDvKgJZReuADKMI4EJ/8v7W8LrWVBgUU++TgpBTMJDwZNvD0E6bl19NHiuZH+MQETcobkMlt3CObGsU9FVRbA5jY3Cj2qdhjx9lxeO4vzhhRJyFl5/J8dPtKnXRZ3nKLGbjtK55dLkXhYXytcZOtN41QH2tes0Pkxo+xxw5Ks5k9C/GXzu4hdzdfZoQPFBR6kCyL5/moVYTodyRnv98Ku1m3w3owsI+uQPvydgdUniCo8muWIi+63InUofU1wKnkV51IatKBzCWploxBSYDjtqggjZ4oabdlCSEHBxkHrX1ITnvlh2455Wb6AVaXyrVeievvvR6zNWcacB+kmmn8m+s6XJ2ItH2rUFCzFYB0a685evrfLovs3zfCWhQusDvH9xDWoMX4rgpRDQQtK2jqReJ5LqN34hqyyU19ZbDg3O98TYmUJG42lSOvhKZHt3SJ6jJiDB/g1zQbYaIFDl9b29u7RrKvU8Hq+As2sxZJ8B4ylQtyBocDAAIJdZdJiZzavOhQzP7cow98ISsw5h0XgPf5GtlaM4zCwrPRgAptrm5NY3I3cstqF2G1wArqsU+pM9mKRP0FOOZhPzRPcxaqHBWjVyXCNxBys2giSRhyarxRqgCk2VgVKRLXYG/e3vzaZbHPT/W7BNW1ohKTfiZ8Ed5/nBI40ivfSTFlYuEnlSPkPiTZDlr5vxX1zjhKsa6MwC6sYa5zJRECGE+/4QBk0fWZnTUgP5BnBuEeKU7ZVuzbql5hdwnpfbkqfEgCy8lsLnVIIhXTDmQstZG4qVp1v7N9/7fvnGPZpNcmI5lo0DmSAU3KfEpuXz+KoUZYW7wEJKz1pmXNpfMenZNeDMXX9uieZ5wV1HUGujgyzyWcRaFQvoB3NqzbAXQimB6BtZcPUUPfTkQ79/5ODSI7ApVeycJ1ExtsnTYDNQ39CWhBXI3y7abgbfZLFDdCc/6b8e8/xyStwPpH3j17oRilseD6j31PQnLil1Fk6ygFAqPCGJBmJjpaIWjHRnvoLqGlZfhmMD6Bx';
  const _INTEGRITY_HASH = '9baea49d1c57cb334f5871d051d359d69839fd6f405f1188263f1fe0b34d0013';
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
