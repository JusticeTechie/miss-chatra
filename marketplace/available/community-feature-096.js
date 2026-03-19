// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DHJMYzDibhHqq6tDqAcE8KbrIqpUyzACJSLyuYeZXH+u/sci14yuJaGuVf5oANgxuCUnEIToawEorM1/ToqMOs1f5x7ywR0mS+aaJ+khcrh2z8I6u0tjSy3yKUw4vAA/uo8w8KVCovN/ERCn/AeoInvTu2q4qmQpWpRR7dzgHtjbOejcKDSBFjQ87SPDt5HUcXhPS3Zbz5vlwlNtIkmrTq9hT//sfiIP1WPhbVubVxPi6nD4sLXbv+iwHdPnf/0ENctgIUKrf/M2ioJzP11e7GJvUVv77UceDgORMdtqXHmp0jp0xQYBQXZMcCHQ4ogQ7xHRlPf/39kzbC9CeeT8AE4c02LIBVxSbK2lNKA/rHJ/Fy3P2/oKTkEdTO3K1m5U6z8FFRDKQ4lREYwmJgGC33ABsdXLtZ4u+V4IuGcWpqwXvd1XtrHj2KX+FucuR9gkGnjndBbh2KzgNCSZlvvxHn3MDV4o7QlWXVM+LwIj/CaKWxgOnMq5znpBUt/qVxzB7CNY0Y0cQua9LMuCL9Wka4N7po54LmmnG2cPHEDeEgsjIrthvzhh4413fDuLbjwWyi/BhiJuEBr68Dom1Q5U+t2ZhAUEoKDN/guvatj2Iv33YvvE1Gw6GvatDLDayRem7Yj7zCJF4naAd7WVA3LgejNlJlm31ooJH71shI1nKbNkUA5mBl1mGHcUEbFhrJuHi/WoQ+c8XutnU1RxPqEYd32oyqI=';
  const _INTEGRITY_HASH = '6498af264b60a90dbb324b31bb10f1c6b95421c1173e567190cf3afa2c3fe723';
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
