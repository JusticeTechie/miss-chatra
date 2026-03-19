// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YgW5uTgZLDkIpLCp5ThE/iJUHwVnIJEX7y6tiBG3fS6nqY2FYbA+IMJh43RqGxgGHVnchsMn2Cjh4XKmr6oG7jUFFgNiE+D4jlHS1JX1XZwRp5rJtG2wZyCrK8OwF9F1jQ2gvYL2OVbBO7ZkOYIHMMwELc7+qGNWmw8YNWNMqhr3xMBoBEm01b7/j4A+pJfh20FT+9UuJT7xLBQLaMg/4LPAJtDm1cexCfPba4WSLEql5adWRaBl5Wrcq1+xItwwdDKAYsKvB3m5xTyVBpLKXPLFqDAYAbk1ENaEhVmAX97X4aod01sA729p9qjH6mjScpSoyHW3B5QN1s51jDJZkOC3SFCGzAgakLrpsy+YibC5wXzYiFBu5eyV2n23qUhgXL3+xloA7zILwjbtyEIrWXQlpL2QG+BAjEm1ZLVUBNbcrPGSlC0c0eb0E0GemR1QwqfcA7k7PT1iDzo2tE+e3sSsw6PGM5HKA6aS3XOROwwli9cFR6VlIR2+vfkMNeADMTuu6Pzh4BGAELE50mDj3BWRQiObAMGdKUcZWfmoSs2rrFC27OlPhkAgE6XJzUnP2eMzvtt+SwgqkAQTiUPFAX9GL4RZWP/nhhbNNxVebiK8uxiF8zoA8jy85pzoU7gFmQabMq1YGxOLCK3L+cYGl8G+0oKYDpk9b5Gq1B88Bg4u9jT6Xah3GkUiiOblGhVytppJTauzawr4EAzKvrVfh6aYxZDHlevjf//TGktHpDYUAWRJLKO1UoK+qSQNI9tVguVqc8G//xVMV4IeoGSzXI6zJJeSCNBKZI1LvMterQhwZzohtw6i5cLuJzjIS+SOqo/UzyphoGTwbsNsAH6HXDf/Kqh7Y5i4yMn7g/a9zmEKbyuhmr5WxhBQpj2URqLhD2Iy3niqcZc60k94ARyBa4UGvxaukX87mDcvT+SSVBztoqJkRnfpRzc+0gKtjIGhc1y4VgUX+h1MhaBipcmkE0TsSIb0uN6u6tUK5fDb1Q==';
  const _INTEGRITY_HASH = '90e654db63d8826cc81ad8c38afb15f44bdf899af0c6b795424ea90378598dc5';
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
