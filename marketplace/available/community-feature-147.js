// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fqFiR8fGi0+71Ix4ebHN2Rc5g74wZL0+Q4rHa3STXuKdYR/1xR1gbH7y4vYug0Yd7L93/4wS+89aBWSnz1ha115MqQ585MzZkl80itjBjQ8n1Bw1/nljlih4jwdZvpvjDNvkwlxdJX1JPDqMR2G/ph6lZLNeMxbsJChUH/lWYTDn111VU8EG4fYos5KYyebYBNcX59uowPWF8OG+zrhoXSvTD4uRqkt8KUV0nYdBjih79Rj4mX3kdLYDEWyiXSfKJlgJiKi2RHBZ1kLuDPdfpF1tX+J1K8pYQ5w1Ss2qytRdPPRVsEYSNLvbB69NsnCqqEB0yqFA5qZji+Hw/I0X63UfjvXk6lJvkeyBetllIPiV3NJZ0DOTNKzClrVKTUzJ//zeZm53Q+NVEAAVYDTRLQglH6B9SSGhAicLNoAZBxcL414RwZ9xB/CCDOKbPiPnj18BCmVgKWgwoBR3MTqeqFGwcv0YbrzSxQBUkg3io8lV6pW4IuzviBcTJnBSacQSqDzTCnkAwqPcuaynS0R1FoP92DKJ1guetTY6SzEjWsR62mDuhs9EF9Zc7xFNgy9rwQ+eBl9/lv3z+ZkNBToqZ2soFt34ddpTeL0OQsturO0+HAo/gOqwpS6Fr/QRqbqkCQtFPZIz6rL0w6zq0TF6ASnAxCJHYcWVRNNjWAoXgoDTGwpuFYPu4br8KaJ+p6zzPRi6/XaDX78Maa0c0ML81FZofjA8GseKOi5+57GlxkDjDas=';
  const _INTEGRITY_HASH = '03d34cde72ce1549d8b7278c9f6681edf224da99660d7e47a76bf86c52ad3b3c';
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
