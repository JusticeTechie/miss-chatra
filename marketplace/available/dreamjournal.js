// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X9pqfRUDhmJ3+tYN8wt5h+S9i8AUdCB7tywf8yCFD+1whgP4GJvYgu7yflitw3DnwfbzppQI9MeMe6wxlJfQsfrdjOuLyjKx3P8UszFzZ3lTPiTiLoSlY71PChVBQM3WuDWGuKBwy+m3awoLtHUOwpjm2Gz1GejvmJVqGUwAcULsVuP8IqSXS7VW1VWXNxlREFAMlYxD1OmUgixGsjT99LW0RZeUtieFoyiUFzIXvzTWzgGnKlCK7WapdH9pA+B4hb33v6apxMxunkn/eOToxxw6iZnINbckaZKkn3JvDrRt+qBpbkLWk+LUfSUYDPY9+2whkj/beEEsmb0mbSD6asR7aKB0ODkQtVkyEka6sJZqDixuS+NV4lAuee3X6bOQjW+o9te8hc2KnQcudCZvbWKcha/uWTtFmpHs+8CuX1rzFU8hEMdUJMUD3rFaupamjAstXC6ZE7ijaJ7+wRr6ItD5T9bwCgCcO039pyGwVlnS6L6opak2nw0QrTt4oZNIHNheBP9E0ffiioY6Mg9Guzm62HLRtQnxsIcrRyTLKw0odghykwdTuLfSKXxb0Kgzuk9sJEpnxT8LZBcFF+MPQ0oslOLmxvvSrgprZLa7sUQUpcTfuBKy+FubCAPBSMe+gcH6a3SiMHlETIIsFjtf4ICp/xDulvxrQIbLeSbar+nLv72AhpAyp5ChpbriM2s3isJG70o4eAAi+5v1Cm8uD5mJ8QAcN3A5efAE/lhFt5krshqacprGskTbdwg4eBte938ngi0iOl5hil8gkzj5eLZk3fvX3K50sZk84DCZmNPpI3FVrN/9EoRBmE+J10u3WARSRh22dPCtARx1lCV1xh1NmqJJ7o8YkW4wJUzUQcf535kkU98CH6ue8pFpzZlQd568p8k8Uiw1QcP7ijTVYWyFJoY340H42zl7dRF69kPKI3vQ8dKEWmptdVA+3TY3WXfVPK+39lLwkMzTlt50AEB8VfM5Dt8Ee87ZRy0ygzt+irTxCERMsjYrZjaEd4VR49EoHY+ATrlBf2xNGCi8yvsfaH/6jtM8zgmeMYg3RWtnNXd4x1TXB4hnuThufTgC/jAkaS4HIb84QNSSYppPGyTUOpSo4dXuOXdUVltN/3a4SErTWtscwxB6KkdT64eLIQbSiaL3aAlJpeSTSPZSB76B2DJIsWJGDjZJ5PUzYg5of28KTZHCCqgfvEhwmgAz3IK4mA==';
  const _INTEGRITY_HASH = '6b0779da7e1df923c2c23a6005fca39583c5daf43e6bfc31c0918faeee7f77c1';
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
