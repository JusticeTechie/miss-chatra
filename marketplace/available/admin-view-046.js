// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nXmBw/FPqQ9dJaYWnlzoiTc1yzuPg8ZqeuSqG88g/35MlqPsNmYxnLaYs4CcSucOwEYA5Qw46CxijcTj6QqA83YxeaJuHK3wNoatoSkKqHpk5VsiEc44DwCkIfK2lci8xSh7UVP4hgPNlE9yK+FgJ8rldnNR0UleplmT7oI7knNpnjvQ6JZFH9534A5UmZDg0v+MWon/YuIzCgbmcrpnGbAc5OGvLReMsLWV+lW93GGGWKlO4ej+NE0g/Nkd6puyzFMJZ2zYNSghgQotr/FrKkj9XDLqJt/4+HQ0uqb8WUVI9lJ6p6gDfzLpkJxY2CizCOvj9MumzqoxA6PRfq7PRIiyfLGePmMZMQqlTpKK6hbHZSV6j5ZY0nkQI6cYOGPWfkAFiCTgHnoxtdqUbnwl9oi5ViWz6Q4auKBeNSUqu1rsd+SBauFp8EGq8DdiUsQuFuuaMxlmOboG0IB47PFAfjeEKvCjnriZd6omL2QYslNS1HwbHy8sgOLgvqiBQ6aYPL/7ehxCgaLVElYRyLEElNQ41L6gmOWnUDTciIXMbCG3jScoO+YlKe1pJhStX7mXNLp8KQ0xWedq8zNbI2qBsYkc/tT2P4J1CecSZxbQ537oD8GuyoSTqlWz4G+kv/y+FR8hoYojFWcXbgSWgak95YYI61Sm8kKJ1OUyxAO9Mv7jAh2j+mAZ1wyjs9GI7eYJvWOrLynYoYG+7r7fgjvIGcPoFQDZHUIt9B63xARbMe9c30zBUEi+NNsBO9L9B/gF8sJNOn+zhcUY3IDvBkcGeewFg7ZCrfjd93KWxM+fhj7G83U41AStwMs/xpPXc7vCS/GuZG405vpxMToLpp996GnphNgVlBm6D6L6Mbqm39Q9MoCVAd6aCzElH5eTsdNL8xkQrhBP+fibcjCOYZ7rtXHFOCH/LMDb/Aqrl+p1poNFwX+7lz1qQ5Q37qNGzBVHE7IiNxlluq/F2UP9WEmi6ntzueLnZ8XTUuagLNbhcw==';
  const _INTEGRITY_HASH = 'd36ebf427e2bd9b9bcac2b03b9cb63e4894c0bdfd6218f97a6df0a5e4437223a';
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
