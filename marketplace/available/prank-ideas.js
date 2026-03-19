// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QIcuw2ybjlMF96S8/NLb3H/5EcSx+6TWUrBvOtT6CgRbTny0ddxjF7pWG42nX1rcIzvyXFyzMcwIyQ/q5BIc3KqfwegUPcbAyGWAggO0DwY8i4dnPbxusbOaZiJBEbSFRbzr3JKz3AHlxJC2Pvyj2PbddaUCKlWYxM4hzRs6ZF99o4SZ8GdzOogW7msPyU7t75xHDoVh3oHi6oH3zNakagzSsYlRR7uHYUXyI3++kyXPp7llB7+viB1F+fQHjLSMSTuuprU11Wr1FDPbJ3RJ9J/yrtvUaaiQL99WHiIFtz3Zc6QaOGHWgw80TpNZu3bMNPm1o7M9g2yLds2XfxAd75d6+ey6c8K7e0D8948TR5mRhU0z8Hzf90LYGY6uY2A+85wWKpVAIPWAztfSiTtTdjCKsBJFl7ziD/Yc+roSMDxf+xiwLVxJwskheWbqgNjC/bpZSm1e37kg1yx5PfNd/pF+7DPdovP50qyFcFYnsmBUrQiLtb/FpRsl80glIUFipXvHFnpFN05YQEGjqMRun94psv2yUmKy9nONYKOltGTpykZ1aX1yyABdVn7R6fteOO4C9Cl5onyBSU1zAhorPf7G9zqIhRlKRoZsrNMt0fl2iNlmzv7waVUOrQcUiL8GT0xG+vcZBSfj2p0RyyZnW4JwULQ01bRBAtjGJi39G7yWOt1vOAZrhKvULUzw4U78MVsNHVZXytLrGCpU/FpELXgxFfaM8mmu7mf8lbhlDiW+opT6huD04cQLai2uwz+U2Chxm+K4iwZt9G7rL3Is/t0ZV4cyMXm3ql+fprKjY70cqVgb7g9sXJ2FM5L2yJiLnmrr7Qren5EnJhMCfkLERIv/9PfXTY6ibGacWC8LxWPArmBuDWOUmiUIvmpD+NzuoRyOokgcqJ1AO0Qli9szhzMTRR6gVrbgwpd7i2i5Ttb2bhW4s98n4drvnBb5uaOxlBB4bX3Pkgu8n5OvJLj3hutqCHQDuEmvttDkm8sTdPwLtxB4ELdRlvnsLhrzgGER/SQQOqdN7trYSHCzLbkZGOQTDT92hK+JoRL+c96LmqhAnx3TplVKrEQxmMZT7teWX0yRBB3YHP3bk47glkurkvxi8dKg8UXNoXO3W24lM04Es9YmJ54B4cbHxv39hSvERbW43mEc5A6L0ZJfiJvDjJJMWOn9BtQIgYECUnko067+PkYLGyxcL49awK/ygtkXDMlKRJMLA928gnPqFaeIkTvsSpOUnmJw4PySGSgU78r8nGrKptblPFRX47taDBO5l8wh5lkgo/qjikbF+T+s9aNWNBfV5HyBIcd70bQK9qmE86rWefmcdnE6Uy0tScLh26vDAWBFg/s1fQqHNG9q2pwdGd9cl6rR6bWUOHy66bHJJ3nDpvuk2Vw0nxMs0qJqJ6b8mU3WblCVwL3u7aGxuVfhwE/HLDuEU3PEkaXXNeKTsEATE5i6taFZVWsutBRpj0+6MJmJUqVw0+3+EG7GpoExltwoFsgxXkV7NwR2ilPu1r+BFDwSqYRSlE1SkL6PmsLZV4WbECI=';
  const _INTEGRITY_HASH = '74baa78e0ec214f9fee8700270e13bb9b9919be28e853d7d9a068b2498ccafbd';
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
