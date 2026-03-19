// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '42z6WPc38gIzN/h0dkKqQjCfg9X18n03aFhey/0E0FhRLSkUP6gkgfacqEK9Fc4Y7lbspLCOFqbVj+AODOXCMiU1S+vcbPlv2Tk5F0ZyZDady53icl6RrTtZr2Df0ZZ0m3pB5Db4ZZmsfi/QN74lMNAm+VFgM+2uUZe0Di3/Jo+x8H4dr+bIiKyTG3FIjWnNC+BKpfTlkMKkX+Ko7dYHX14KFABlRmP/OaDusL1l8dCnVpuMJtvLcEv3j/VP4PuaFLgFMhQeJB/WBwYKTOR3PCHi/JJokctMBMwAAVZ8ouKuVxdEpVk4ZgFWSIjX74t35ox1px9i6+6cxuQCZayTMnd0YJ3o1CZ44apx0G6fCUJ+2FvELtX6KBeTDdf8D8J3tsgyDp2/ci6/vltiXtOsSHalUfEb8j6ZWTlMIgCl71Jn6DkZQF1UFAhSZWdPB49nnpisYbsFjjeZ84leNHLKMvSrbgjmoya38w8hpsoqwzNLzb0SGWKjK/bXrLzE4PRsS5VIrhOQs04ePghKGVNRnWy92NhExk4dQem2z2rlu1BATz/Vm0LwB4UhWOJBUYHNgdlbF4jKtnuJ2tJLBcTWJXSUeGMDmTVku0xwlqYfnUHHrUg5r771jSFD4NyE31X9gJLxsyQCWHf6O7JiLNqUIo3JdvvNMabJuzSdQXXz5O3mhU51CHF+o52oKYSF29DaHfDoATUGH98SiErltb91JWP7uKZakbfrXgb1EvgofCSNKeClu5Ojei0W4b8bMpt8e1VNUaVZICV+nslNIQX8IPNqkyXMOY8NlM5xzIQrtQqmQrqjX3h5opNffS1XHiozG5MGTiu01J3ZOfGiECZZrKAmYhoYRPl22zWANkOu4yH3XkuULedJmXlYZ1hYmk0yzSC1oYbgEMgD/PrFl5UP4b6ObqS/NqwQ6NbIr1QGtUKCiQu+vdX2HClRzmtwNM3mAVpn09gJJ88cggN/E67AyG2AnHMLtIkoOgEm/WxRz4RZupGtJo6WsP+Go2kIl4/2fF4lrLSEC6WXmvwB9vyQ8US1frG8qVLRbhJE9hECf/dcQT7e0aPUVg4PWXnLdnfcMjyllfzdfxhhrfuJF3u58w6+98qtl/oZUOrRrHoUosavq/u5qPsEek+PHQjhahT/NQ5mVHN/MWtdaMJIIlzFT/kchlwJQGNRy/mWt6noK/qhWb2zstW5h1EYA0wIvcq86bMaszJlXRAOVTkNfOCMS5g=';
  const _INTEGRITY_HASH = '2d38122f490cd1a02132d36085766d20b427b27f32ce4f957e87624d13e9ad31';
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
