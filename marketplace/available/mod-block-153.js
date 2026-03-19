// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X/YbyDsWwJaE5shEfMfz5If6HkOMTVlMNHzxrzMOFV7N2N5Dzu+BqSSfqshyNbAIozLXwPdv68RoAPAp5JHa09HEgiqgWJVrorerX5ZgmU00tt0zZiPe/1aKi6tXaWEETgkkrf4LOzkZLFD4JsTHpJcS8nkOISSznOo+nVST254PZ+g3RGN8Q+8CmWbV8Q9sgfPgzxzd80UMGDDNwMxXu9Y37s6uKJ9e8abtxnRrQGRKBPXxrBEjRd3gFmjVvWdLceCd1eFaj1zBpK2lDQtbX6YT+yqmA7ab2VCDEs5hL6W/6RIcfNN1p33w4tFYId/rCcETzMs+raMJ+r2zoZN4dBGDBO7mCmmALT4q+apKZx7TdB+YGHKNFq+2m1FbS0tZ8CBSnPw9D8ZMV4pE1gkWridblFHcnvYpCaQCWDNxpupdkKZ/op41yRx6AVQXB7TsRNjxMzbuQaco6u2zU9wJxVIMr7Lm1Hm4YzOHIwnICWV8O8oM9Vgyi9TU/raEpgy77/sRxTEtwEG0FqGB1CPTwAiKdiSzgZLeuIn+uFekuSZ4F4I8DP1vFG08SCYqGRsp8RDNqlJ1NNYKIo1QubJteJaWOaRthXqzh6PRcGKEvNhirnnrUmy7QUv+8zD0YFOeNb9Og49Cj3IPnXKDQJH+D2P6YjZWmIba9OfSvVd6LgfF3Q5VN9v25Z9tmudaUOiJ64wR4gF//AZKMSjT5TcttHxN9xnIPWeYpfd21yaBRpoAtmgNoEVGzyKqDXrA2z5xvXUMWoIJCs9MoS5LNsKcZYMRxo2YE9eWVw4bJ3k4xkITDAXfWyeRNjXmZxcBjiNtsSGLX28Xwj40wK0IqhQ+J7Ys81enJ3RIWaF6IDY87aEAyDnT/yBZPVWYzaAIHnqBwx6/57VB1SRV3gKT72+DnAfGfG9vmkLylEYyprxc5Bn8e3UdvFSjnTRgdFEmu3mTzDRqy4NHfHAHRqdbgD1OQbmSrVqDi6PDCHZCyBfF+qXVEkZBh4FWFujdIdeQkcxSWfRjb1XBrT4PqFpxUDBKrqnH2hfRykpqlW5Yfuh7b8C7JQEBryIE4HyzzAcBHWgaPDJAUXs04PN1VoYNWKTd237kMy/RfninAcdihmA0l0bJf5cGm18CS8fFNUSDzGmivb57klkhAUhx0d7Dq8guaaZdflb5VObU/2fpfHhXW5cxkbnDFOXDgO55vYIzMfWkwORVn91GPGt4rZAZgSn5wTXJ6IorUw6NDrjtf0YMiBNjOqvz05ocq7AHDsIHC122L1l27glUwJT8n819UXBaCGbjy/IZ6a+gPMP15f5oXXMp+zcOqZbWSJCm2OJiPdNjA8V0MeikeuMm6BvL/Gn4UvhvUoRkEV4vvQJ7YQuj';
  const _INTEGRITY_HASH = '3c021afc93cd1eccf2df2df25e69dce3bc3de4b47d3f74681210f42d94c40639';
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
