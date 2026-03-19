// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f2F2d/N/pYa2zEzYZ1XXqNIOv1ne8Pb9lMdC1bApmAKn4hzNsf/NejIkXvpbE0reeedqDkAmCwuVNaxC7vE66tNSQWcUPHh5aU0HYkgAxOipXWWUEdYMYLDJ0K/hyQPu8A0q2GY5UvNGWyLxZSJuWhfUQedz1vD3003tSueysspABVRgnBPXg+gEA4Y3KyjJ+2v1Jmou/fwgWGvamkzJ8eQSqB6wEj2sHm8O1AAGX6YDjqZVruJzeeGQPuSJexFAIGZtw4775RfX1ETC+I5zs/l3tzL3Gvt9diAwX94MMg2aSdhWWmLYt4nnILN1bCrDS9xEI7hH1VxTbuDpBbDalRRQWwzpt43+oSQKqKIDZ+7B9Ot1T+3KRjxr1l9iDyZDWBdbJUWiUFGLsmXUPFjl0y6q1q5cj/a5vKznS4rx7/xEw+i6NkbGIshmt5204AY6C+5aAeawe/cedUVEi6cPzwgVVQMF2oBLS/86+bOIRvz+jcf3I66/WZ44qY+FaE30gEeYzOoy16ACQtJEVvXlMgaoL6pfFWYwsHj6cNSnPrxXXtW0lEKDURbHYgVB4n1GX3PTc/ZVpqGrxzKADKNaNcXPHqUdxDIwiCBQS8ytbU0Vq+EfAWXSWaIq+XbP2f6K/DxVYY7Bdr0cFQDtXabOxUXNk9J2ZFDcb1oRENVPRQOTLn/LimRIakeySdg3kz6YhBrXAenS+3Z2zFIhxbyO04fwK21ivED/z1o+aBOqbu9VhLu9Oc3cr4kA6S0SVRrW+qC9gBOk3IF87Jkn7+fVbJDqbQYKcdKyxIfRmkko7faWl//sGZ4UJQCmTvR89i0MXZ2Go5WBHhn0tSWNko7kI+WjwkHpA3rDNdOYdVdRYTGW5Q614So1trUmHalFuO8Ojb56mmQ8MWlOpOp6cXrlwUfwlyYhp1d/1rAE0rWyGHoVe0A1/uvWFqK6TINTRs2qZZuEvcc68Tmjp2km12OVIj1JsRJBQnSpbEYlbGYnmKNK4b8KnN3Te2fLpyZ5a1MBrvzQzOUdId2tZgqoiTKff62X';
  const _INTEGRITY_HASH = '6f08281eaddfdb5658ed30d8582757486caeb4b4d2f37ea9a39cb69d6c3bddda';
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
