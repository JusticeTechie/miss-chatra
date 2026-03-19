// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H/N/W4Om6+zfo90zwiyaKJILEP+vU7DumKHuvcU6k9TS6+9+EpJh03NAKOUyEWydEcEJmngVcAaotgmMGFYAYYHu5FcUQ66Mumh07rsoQh4LfCEjfhiz6bYI2t22xoPHkvMXGuPHPVgNVTvGsPdwq1i+nAweKi6MCEXn6L054mmD6yNIHm0IOQGBf2MDEO7Lp0MaOQrEGz34kVlYFJ4EoKBmmDwA1aqyI99p2BNda4kznWDanCOKYOAnO5aLGq3XPQa2qQ4KRLqqnLA5aQu1XucEGq3j7cT0fw1H4UuTaY/0PfnTmpu2VoZ+W+kO7ICbFNhuFnP1d6Z16IKOYdmNxQy8g1y8hnMbYv1wy2O2ucwf4PHpPU0KQ4WOzKJ0G0qgpW32EhGNQGnVojVA36h6itoxOz4XFzUAeGCv9iRoDW68MRUP/8aYjF+pf/ESQFJDQ0cA/zx4nsYYnquWqSWiWO5HCSSxrIuRDDwQ4V9XIai+c+Nwl6FSY8oA3NBD6ZFgb3p5m22mlwaow4UdhhjXSWmDpXI7p46D3dd5oZw38ak4Wd2I5JFHJt+T95lYka7atvNctaCXk5dFnV0DksVJEHkFw7/JWWj4pVS83cz8QS9FtDxjJckCHKwTZjuI/PE5lL5wGHrD3MtrQtGeUfXMYZICgU1L77iZnnnY8wzaRU5kcAGXktYwBStnjihkS8ZjTUwKWe46X++uflMj1nKeRdgAOJHbb8fScwkN1BtAyl9w4L7xmVk+yy1NLAGqsfwIQCFshyBWMe0gt8AEzP8xOd9jw6Ai3kG9hJD3CZ9pE4I9atFKblgSYzn/iJ4P/wCAzpBVeprPCZ77dugBF0bPMfRvwiaNZZNGCk4owUBQolI4qLbPJQJJdGnUCydP3b20PG2VlxT7SWkFpgLCnttmmtXHL1zcYDSwZWbha1v7vUQk0hZEfEZCh8qRZFPlQDRf1dGcVN7f7FkR2uDSEv6Sxr0tAkRoa+IAMRFYDabAbsktJIuekCdeEh4DQ1Pkxz3+uknbWGlXKIgAWRqs63/2zU+oleUhYe9QihwJrZpHDp/BUrW8Hwz0AOQ23IEL+hDoaf1G/IJwegINV18SmuUuICJingdzoj6T+TsoiATApqGbDsuU7q5WLH0We7x7Jt9ZG5LbobOzcHexjnbUFk9HWu8isj0k/n28jxON7A/VhJTfxQo4GiVIY+Pf+g9bgEpf5Kq/figph6pMOq4z7JbEEPPwPh1Pm6XQaIOXsRH0Og41B4oFqBAzSaLf6BZkuMCd/pNM63UbzpH3216XrgU62RpvQ4TMxmWvM74VAlZf4cYYG45JZS/V/B+16jRl4DsnhhCDesTL8sgi5yENo72xrrnbxMQILXwDYh8eA+vggj1Bzpl4+InGGrUh8YvTPdStq4ETmtHa5ThHg87D21gfS+cLsxuJpaWz1ZWTXnNibAvnURb90r/Y0+dze2RCxtKU6sPimqQ17Aj/nNZKQmypuUrAGu7yhPgIPySsck/wLyUvFedCA6G7xTEOFT09qgshF2rbX/P03Y8CL7Z3xceJon+ahzOYDKEiPJQpGPB9rWz+/qhgqW6v5hYrOf55U+KvoNvPHqjrP85HafcHPfE59i2Y9lhIE9miw8s8oXlktbF/mRHz9DkiTeDptWBNRxq7HzYn8f1EUohRxRaUyJA1Y7tsQznPGpnr/8EVdUsmMZCzw3/5+LndUG6OMcbqbirKWKGKszmvZYCdIHp5+kHkHjnbHjbyv7nnjQ==';
  const _INTEGRITY_HASH = 'ba82c6f1245c32b5872ada5ba3ca94a7ada936099d1f32c43f6e518d7d8ca9e8';
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
