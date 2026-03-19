// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NZD1L2je9QjZMgwKXPA+WTriFdi/1ocqL5rMNF93tWuWW24F9+GhhG2L0A6gp/txHutLS4G/kMteojPAe2IWHmqxNNIM+A3INKNhP4v0fNSIn8GSnh2nQQ5VAU+bHeyVDW67uonB2uoXOFXJo3UUIgeVvZTiCzEBA/1ZZAOx1WLTJFxsYNOxTAiBglf5GFwSCznPqnNs1KfOEs/EyQ1ES8VXXLuQTDCpM9Ej4BoxFC0cZ139colwkY+SE8FqpIhnIUG5vpqqUOg56irPygAEF1QIEUO7vef9G/3F5BsNIdhe8YMJZ7IJpTsaGV6OpmmjI5k04CR/k7UuVhRiOTNQT5HqUektx9jlyGRk7chKmSGUcIe2UXVStFUtabXG+ANglva8uYyF9LMlLD9yw1FnB4Ky1edGcec438H0yqJNwiC4qRrmJvLlgrYvsPdNxmxpLOjOGuFfWqdlP08FCndjrw0PGfN8Hn2TlNURjNGcrh0J+ATqlL61WMCbbV4A+gVuSCCuKSENYXr6jtTdWR+emberhWTcltNa0QaDgXKStgMz4/Y1cJMkRP9qIgQp74v2D0nS0j9TcEQsrx78Iw511UXSC2AMThtwLFXlDBQimWkv2CFwQXEq+MnERojw9eygeCD0EUPJoM7Di+qhFNjR5Wo6kKmlnFSxHJQZUyy0fXffYZiXuaVuB9RKY/hb2fLkHreoqHY3HtQGW+y1HWf1335AOwVTNR+2OgvSTHHwha9XY4uTFIlGLHsvfXJsbCob5kohVKJRbA/aI+VVaOq8bJHqeYFnF/wcccy2ZXAAaIAGY79L5Q2VNinP71OxjpQJr+NapA58JKUu+t+OoAPWfNhWYAEy6fUPBWUI8q0itR9Bl30MfjJvwqcBwwQNY1LkAsZF5usgjvOIbGR6Kmey6Xtsg1LFgI+aQvWAN/yoxnXMNZTLZXZeEuold5/SU21GxJrkbRvlOnPfqEp7w+qenMI7BMFEXCly7vb/eGaSGpA1tW6msRXvHVabIRVQAitGHkdbLI492iHuAdy5JaI=';
  const _INTEGRITY_HASH = '958dda0f7b42d7c58d926be4edec320780dcda1c62068e73fbd4137cad053cb0';
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
