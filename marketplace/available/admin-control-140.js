// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SLiTMR941wDmIOQK1krHOcBl7zFnusWXJ/YRgZjUb1gbtPAt/WHV8G1Jtp35wbeZmFGm4JhUao9iwqimtLkhAB7/GhTk9NH4EQVqivlKjNJLJhnwj3aLHyfz562YG2g7EF0PHesxyTmp65Kvf25EEa/2iOayuaMDH3knWRoga8UlBwnpBlBhCIO/E82OYiAZTw09anPV/l8rSNjqi9hClIrWI+SU0Fo3a1NABCo/AH302sS99hd75i8Uylmr6tQ8Fqgm5uLTP5ZRsEuswO9l0J/YkFREX8cHNo8bGOpTJZvPyrvAdpVqEYgOqXt9DzovX7HYk3A/rBUTHK1g4hCLm1fhwdlRBd7hdhNdFhzETq6hDw+SoixCIKsbQhshKTdYknRAQnWsiiymr+zYeLb/QfEIPO+CG0Tdtxxy201PZsLa7vCo4L+eAQs0BSDzxFOHNkEEuqswpmG11KEhXgIdQl2Ae/ykqHZut98AVwkmQLMZJFaAxantOmz+OGOco02thLcwD16yuP3PXoOzHtkY7QN1R0A9br94otISFo4v7w4BZWeMPTYrC03a8BjJ86d0cV1vVyRmd63BZ4KPsSPhk+zpGxQSbQPboEb5i6Hl9Di5p2Q03IH1F1vSq/CtGzMMPTS9oHkc6YVWkRGUP4jnO+k54YtKd74AE/CU4yDRLsGs7ORF3S+rPO1NGfW3gVQ71TA5Xv7OEVWXd3UltaqxlFJwKwwziAN1JUnxdZKfevDf0vUAADHJr0J14JeniafxhvYv0so17aYPzS+Fe4jufN+zCIcJC60aS6nOGE/xx4PPC6Bz0OjxKPMMiVAgEJd2t5Ja1KN1uTnzBAsT/XNz171ryTvk7E/oUKQ1kTBo8TiDG03PbUo0tIBdujGHIvg69rUAHb3L2Y9RF+6Yf6yBetSBUSotlc7AMvEzCZpKMa4Ppm80H8dRnh0U2DJCzFVTuWQ5vKH0NEHJK9KTV/cWI43jzNY0vazuGvWF3+su8x0Xnxbn/nZxI5q5wbo8FnbiXkopsWipSVs=';
  const _INTEGRITY_HASH = '2ff8c76d68eccfd044f78bb10aba7cd81bf66a4ccdc68a39a811df5eedfdbcb0';
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
