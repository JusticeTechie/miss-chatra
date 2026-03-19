// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aemAeL/fI8+iNr/uyZakPKHuR/mle8SrIw/FmLRVYvbuG693j51aw3G1p+cpU+83RCl2gJFgFTQrImdEtwb1SfaeArPj9gDKdoqJe+Wj8GEsWYNNcX5qse4H4s03EHzza93taR6okkINhT4DcZr/LOLkQ1AUiRC9LEmYsJk8Ah0K8UwxIZNtrhSml2Enay64dN30RpoQok7zjwriN6XhKtQMB+rkrmLPrIOyt3tJsxnfHAKcTPirYsEB7Zh18Rixkk8Qc6kJr/00W5X8/4ZTuaXoHGE+QtDbCCCGn7+KRrXX9OwppO2IxVgMQPKYeMaM1jyCVqhuB3S8mrbSsW80xsFTsBHG50qIdjdpOqT6fhUk7dt7ASwKJ9qIUHTfBLjFjvFAbLIxiE3MwDMpGgUgldXoXVuMyS4uAwF8y6t/YAOUtL95nXfA2U5NYIJ+5TZjrXeKau3HwJIH+oMFLqWrRe11oa8QFXZhFW9i3vu6DCUmW6GWVTeMNXVpKosUQY07hVWKYay3Xp7Eo4HJRkG++9+wl9D2zKN67Acq1llEQRTR8rwIMK3jYOogEkrkZ1DbUc9jUcmg4osBY4G3s2Q9W+lR3AoDnTEIi5ikJmsxm6NnyFT7Z86hG7E+yb6sJxs4+IkqVVxBsedaefssegLxtesLC8n99WQ+QtXQDxjNu9Vaq2w3sxD0KyYr3I+YpGjbt3e6kvnQmHSkFiLpqXjqcYCPlGXGWR2bl2x/qxhE+Y4tkpiU6NGKzklKbULGp0PtnRGERz06XXXf3589gGGCbynwNox1BkNzNlj8zfvd4p/o+VQjv9DTc17gEDDf4x7TFAYQwaPcvoNikpPkEdkTdzTZyXB37YHwM91/qLGWgz6sbBTKydJNQet94G62dNSdrC5wB3uHgCE1nBG2guiKGRIGedmUK8wuGJpcnRKToWOi29n11XCbc4ktFbDHulaf47xUiyK6cLFDs3rSwuoEjTgm+c3AHTCQ8nind5EITvAx9g==';
  const _INTEGRITY_HASH = '183d2260c308167626fa7f0f27323139671ecfd2b6b75dd00b1a41dd0cff5cb0';
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
