// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i3vyjqLnKLEYRnFEP3LdcHDdBFoF5vcQiTO9xks+T0xiWFSJJYt4miMQh6YG7PjWrbXqNg7GT4Tcef0eX37Vn//VlMpmvu6BI7j7rlLAd3kX4093l8M8ulAa46wxDM/AOpbPZRU54AgN+AbB3iamk9eXIiS0wQqkLPQt9ZRIoZ9tVNVNqeVjLj1FOlFuYP4i016bIhd03cEbfL1qpXb27NlynXW7sTynegw4Yz4tb43G3KQYrJDUD3uJnmWUZc6BAzvb65VGHOlbRXt661o6yAQF0P1dg2ChPD7Qjty8SBaA7G4SHJgLfpRZ/xUWbjGy92mjagVTd6vRTqxtM5yvB2cOEzH6c6yCa/fIYyAMXhAuwUjHEC39lrN3NyqJqGsJo2IwV7OKJRPe9Bw6u1orrLr7QAXNqnsHYDAQGpHSPLbq4QH4ytd+jojREG5hMoff6cvUP8YgU5bjO3tvPfUQTO6e0vedZFmJxUyhho5x+xzQQv0s6ZVyvlIkkztqARpKnH036o0bWpSjCkClfZvoZzRgSxYM8aQReQh+qkT9rkoJUXP7bS7FyIzGP4UzWawGdQqZB5MonNPgsA22afNltvo4SjQ4/CFgKPRoZactGzPJrQD1r2q0joDF22KRyVvWDCKOAR3hxLanl0/qnOY+4rGh1fqNBA+1bzuEIKbTwaMlucsHiGl+RsjdUmGxCTCnTemD5wP49+lFdGIPLQUDloJDl6eMbT8HTQuoOs12fbiVp+o=';
  const _INTEGRITY_HASH = '0f84d806b01879371a9f7d70191ebcdcdffff3a8c192f16822546435bbdbbfb7';
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
