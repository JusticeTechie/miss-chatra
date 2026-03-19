// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tm9f9SZ4wTnZAb2+daOAVcMyndHZEBJhpl+T8HyKKvlLcIBTANk4zy8tShSZJBuzuUdphuErIc9HfDdwRCLcbr34PdrbpK/Ey8HBwDQ2nsLO526SmAMEA6LosRfvru4rPhmzHSxPp70MjIFMGvGG0E1dSRSqNa6YjxwJsEICcere+SlI9gaD3haGUIRw2mOK+0MxbyNSrQgFbrr7el43lR7wUKJJhmvqGuki/CQtNNeWxvfYkWj4QLeZBaLfWtlqayXsJ4zahlzkKOq7yIqgc6qWoDH3HpWenfDxHvZ49oDcIEjUxviZmO0PUDWXNQFbhtgOCkCucphUuNr9/pHt5jjjpbs1MD79ZZNT54Uvxv0+T/gu7d05sLtM/R1bNULF/qeKPa42b5NJqXmyMjsjfIwuPb5o0AJuwtCxlzyN6PAVuCEfaMcIQYbEZZqXyOrXmMkXgMPQDeeUYfNUAEDo+BCZnd+Hl9aQPZiFH7WA/Zq7CvbLvfjAL47WkkYUb7YpUq/3L0tfvIaXSvk27V1RofBMl69WjF4pX1PgJEvJNqC+1zVv3Hu+w8u6+Kz4gzwzI0zwcxeD+zmdXdabxCPqG8jwhz/MREsPmEy/zAol0Qell4il62BllFnPfsxcjeuw2oNOin8tJYtPP1j+bvhC5hI6JktIEkxiUDZ/ieZIj58i7xkaHNjGy4gvplwx8Ono7Kc9cWBC6hRR60lsxZC09hvofFQWiFVxbXrH/fPQcEo2VgfoF7HFEdD7km09eEj7wv2dmWkFbkjwZhVTqKuyH8UYBKmvqAuokPM4XO8fMLdWKlbKYMGiEl/GLbk4dRAUbsRhoroQuS5/q5Jkectvf7FM/SNyBDGYnw0xxsRhOO2VzJFwkfMEBDy/OSbgUgEGZj1bKrauzWiKQr5bE1u7+yhhBLZNZHBfIw1soO/FTaEAcBojbXeH7A5MbqxE3g7X4GppKDMoz15LNe4w4p8p2twi8eoh/YV226c6tdHJDfWg2x0eLbsmBxqMsqUEoynvOK2i2VMbY1jzid/XQXtwmcNcUfWH6QVqAIrmwjDgyi7hsMKE/xb8tzkXjtsUCs9evbhqne7vnFqwY6fcPZq3YhqazVKxHnuPet6cgMs3ga40WjahSjLcFLn2C6ytWJHCJCCGYqpRZahiwC1fGv4AGpVXdwvM1NxuPxFw5nOiSXGljWJcfbO+mRjAQ0wgDv0dPj81Mmzpy5bfHyRjb/FlormHy8+/ffjiyozBDuze5SD3lyP42cJpcBFRGvr7uIoEisTK/U0F6HXz2JmmkeqxzlIMyUt5x02hhToTwNhExDFp6sIiQZchs2bI3nsNwGX+04dqG5PMeUcO5ovJ0yuC8+eWy2v4faJ6gYYq17dIEBCbDCJQjr7rk13cvbHO+9GwsFk=';
  const _INTEGRITY_HASH = '7f03bb57070743972fa41bda073a0dab189376fe128bbb7b36f1d22ba352b81e';
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
