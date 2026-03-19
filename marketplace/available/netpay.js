// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VccJeDvXRya8Q3WmsOqny9MyzLO8FPCwlOqpoP635EC1uLqO2H8cKPeixIYxampg1d+QKZ6G8OFChv0ReOlAEvorwjrURwO2f1waJK7jq4cRZz2xSUqVoLPUmJfGuOo/0Q1Ac0gt+/mR+jWxpmvn3YLtnS8TWtV4u9hxmu2NiyWUhR2+1Nij5v7XGATkZXZEEVfV3euEeo48IwtgUPBspDgK1WqCS6t4gXkrtUbR8wJGlAKcdpfmSf+/39I6E7GSnlPQVRf0m2LgOcVCzJ6Ec2rUlybgPSg9P28zKRFNo5ob/HAsluZajj7gon6XzCY/J92cbbJdarQXiG2Nj09+1GZTtFV6ADrbQZUlxuqOR6w0ZfNrqaceT0wtdVJbN3qrMscFGbJdhpWS+2fH3XC/JsaQXuUmx5dNoQ/oSakX0u3sEf85ziEzdzDNuVkfpfZEnMmuio2AoVvWRPf+fcb5wRsCani+EVzqolGC3G9DXWnImOqV41tpw3iC81rc2JAuZE4Hh5rY4/r7TxnsHR5naw04/qAHKbZB4iSpLIHQzejMeEdj2bCVJ5kos8BSKXDAdM+kZxW+rHrz0x45oiBmzOiZAvajl8M2b9/amFwhWsf+sCT/ng5DwKXgQqd4s8gOINVD9x9tcs/zDBpW6dSj4dsHHLfp+r7gelcGAxC0IMFO8cCH4L3U+i6jrfXf4PSWSX5YDog3Yhc58w219L94IIRvOaacgu1n+T42JjOTeQBXeF9zYTd18KtWDhe2s7a59efiC1FDwoq9NcEZyG+G7TSUR1wC6dDMV8dKsvOMMqmiadj04m9YSCXQytHzFZBO51q07vkeYh6ZrgNY0ocHbXV1H/4j8mxAj69TBEY+/KBOOFMY4zuIoG7g9ur3VvFpb3Vn5Q93pNkQ7quQ72ng4NSDzOuILFoYrCS/568f8ekxQrKMnpBCGeTh4IvgLkYXaF6jZF1Fiu3lsupktEZIIx8rHpiyO0qeaEBljCwSHp6mDn2KTfGcrxe/Z0G6ZJrzByqlMKET6yr0tXNipOGIdg5pmvoCweKQrkczebjvcoIlTr2aQyA3DwSv9ODJRjRD83q4YL8SbKTxWzxoXXCwL61Z68xP2jGbm8uSFaRp5D1b7iUYIGfKYahAc+0toQzKiEjLXCyoMj/6wVGPNdlFtgCgxbgyZ6xziKg9IZWcx2zz2wssRp16d2dL7cpwkKQ=';
  const _INTEGRITY_HASH = 'd674ae9796b8cdec257431e8b9095b2799f495fcb758fb04e997e144b265737c';
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
