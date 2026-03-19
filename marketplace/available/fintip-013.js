// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5TuvvUur+vcmiZWZcuAtQwOTb/CJKqkzZsvXwzvdnqYUsGJQkgsMWPWUs9NSbRho87on8mncGBjZwxt1Ddn0MLDdXjtwtSpZd8u7liEl8MJHRpRF4JsDD7jIPPV9OfeKy8vwHp2kMs7OVUgWmhY2de6UDU0dlh6R3GNsfay6ngkgVmKTGyBBIQn5kSbI8IA7TD8077x9psmhZOqAJVVb6VV6T7wQ21fAGYfmOmeOGo64NnOGu5lqvwuDoJRTyg2td5qx1sv6wJZI+1kyJaLuzE4Y6LyZmzqzsjieF8rydUdAiv6pDXa72EuhbXk6UQTuEwqbdnB3a9QHfinYNkFQJ6epBhxbUu+tN2gtqshicWZghKqW9Oy7Cle5opsr8ANyRkt2MpsZfjRdp1GlyzmTQB2yO9K8J2LxKZ/8GxE85IuphKEHb5ShE/Marv6sYachvP7Ljah06ILHos91FDrHQ34cO9qMPEkIg7RiZlPgwwBds9YXrhMSWFbi21sOV5HfMswARPWbWVCz7JYzV36t9djN4Z2tE5sH1Zo+qYTxf98dqKhN1veDx8HY3SegSK0x4q7yYmrZHN0S0RfQgpKPGSJC7V36LGAYVgBGODN6TUK8x0KTat2uzs1jqZUBB3eyviedHwQd6DJEAoOdPpiqMQUgriaCI01kzDt/DS+lFKwI6T9Vj6Y+QqxNotPqO5l8OUXZ4jP9X5GOAUWIT2Z27DAHspYR25JeDVf4hLtI0L7ReAX2RRS9qlVtjuu3/do22YCNCs3Alg5RQwH9sqA1YHSaqt/T3ufE5LwTgRdGTa3NJBWQpRDBsEFS43I0PrJwNqPS3IDIEN1FLjCPy0N7WUHCNGd7nOOnP1TyFTXxdGOO7WnToJxfcy9kvHz5FCADCR1TNeBfFNvyQkEqp7LmABWReZZAUoIB6JpgNP6kbzFs6E9DzOj0+KKpHhrnhmpyZGt3G4WaDXQvkqkUO67xX8W237CZeLe4SYFtahiatydsfXUATgNKBxMNo21g1f2oCFlUT5RWtW+0t5XlhCcEq0G50qP4TlKlegB14kwEW9DCZw==';
  const _INTEGRITY_HASH = '683e96bfdff923fad631a1c2d64dd7b0147c1872fc660f8c1f9a9e2e2d92a274';
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
