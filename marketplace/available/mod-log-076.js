// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xeiuJfbzPpG8Z8H8yVzppjyxGWy77M2dlPUd8FQdaSX84o2V/MotEAxqKkhQETdiOa7widQ/KjYy0hBCh8YWLBwCOTMiArunERQI8nQWkKHfxWaxEE7/MGBYqDxbgYKRhoA34IivD/21xNjsgIpSIX9OuAN3s3TsX5jWPsq7NFmMArehh1zc4tlwITi1BcnjLF5wJlbkFcQBGYnfDY1xZPhuUrhz2sjYJC1WDPfJ4x/ocXKPs7v9wmYS+AS9kjmgt6ocWydF7u34csaoi1q2qyvDPxEwatiTqb3R3Mt5Lh/bJw13TzHzn44aeyevhGzAc9qgM1HZrzq+ra5jxDoEGV//nAjaBGc/931uTdAs4SCvDY672KoEPehIcS65EKSC++69NIukL8euPuZFLEAZ7IBQ11uEeq61WgqOF8srNgMvIrimWgmiPz6JlPz2zlmf66KhskKU46TlJST7Yd9V7bct09NN0Gtj1dm8gEnDHUo0+Uaua0OuiJn7ehuaiZEkHwalySrHge70P2+FI5n0fddJLVIvMZAyuBFdEzeqDKJzb3uM4prXoXd3LqgP68fiV0uoInr06aCR0zhgeSKiu3W0Dk7hv4I4DMM37GluVr9lh2TCaR1EiWinL8quPigAIFqajVYn37Kachl7h8PzIDrwNdI8cFBGBGIrG9AgpGFKCOIqdE0F2AQCSqTB8fJoHgh8/AG4bYrBUsecgEoyKwlymlOHPc8fbi0b1N8+FZ8PMDySWoqZ3oA+xXnYZotq1XNV1UnOJkTd35pXu+g4yQheaM3OoOtHMkHoQDoXScEvS9sTok+GaJkFaIKnCQC1IZNi7LQw9CQd5uQpskqMzHhXmH/2xZ/3QfWnNloMD8nB8lKu90roT4zLsLgjAifETfpNWbvpMOr4+RXWBG+s+myYO6/JQXPVz8OLfdY4Z7wBk2U14PGCG15OwnLGaQnSVM3maNzA0rCozR3zjkPdyo1V0ZJO2Hck+SizGCrYR678xGKKh40g1tMi+/zRl7Thhw5Hq9eE8gFJcdeHh5iyeIErbr7MHqHc/JSClZizrScQ4y6ca9bceMWe9gKQC6HgniKPnmwDpvfS50iopRasRnkse+JR+PANaTZJ++UlYt1bDKLAA6cn7sjo3j/UMThrE4mpT8PCU65S4hnQkrKevsC2Yd2XPjGvywCAA4FNaayyXtqOvZ4W265i7t1MNNe2tSHftrpoTagZR68BuuxD/+n0l41L3UEpl6H3T53iMJawNSxQ38RcAPUvBvvqPed/x0a7vhQZbgZUues4sqfjz4sURzTwP114Jd3yDxBV1jdfd+kBTc4lAcTgRcuYhTsuHDS7urU=';
  const _INTEGRITY_HASH = 'c31062d2c9a00e2c70e3fa5785f4b33686ef7fb3276251e8a75514559e9d2641';
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
