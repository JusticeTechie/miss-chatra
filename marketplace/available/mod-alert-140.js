// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fCfWXkQnXMp6tns/fpu6285kaCD3zjBfpCo5sxGhSRCtDH9ix9feNbsPUukq+yG6s/6e4/isXa/fA4MkF/HQkRCTz1PJUrvTAz+hCcJJ7lIk8vdTDsdhfRsXjrTaSJ6pmD3DckA0g+qKerSP3+Ud6y6fSA8y/e8HfKoFCvHjGcjEutviitFW554wOCuYfMp6UXVDmRRm2DxSS/9pRbjslQTi0zbNfzwfXQ//oA5nL68Up0ZXzmBDozr9FEvo0MgvpVY04tcYqv4SJ2z/cDuGs+Ehuo/jjs5Y9ehD9El5mMqsWJhpNP9UUpzjR0TD/B3RG/ZNfjzJxg4W2fvOSx4mFr38mW0OEDFmMR8aJGW/xxC4cf2k0waRGibAbcQq4CB4tQ6Rjumme2vYUb5LIRWFDraqK3MwoK59VW4e0j5t6FV0BEVDvP+TF0fxdToB2qxu2QKgAxEx5wuxME+klPWynjcXTbWMy0LzVwLQ6HBNMXuvO9ABH7hyYv6MRJgwoA75qoOJXPJMIC6icy8HNiStJUDAkobLv4F9UljG7chEDOgqtZMeDlkkMtPeXjcOVqhDdDws5iJalDkj/UdpX093IkVGQe8Ii+HOX/Xiu/4njgX39Tu//wmflX01JeK+eW4rDzgW2pm1elaYPmH4ispyd6asVld4/6MXAPTyKIOSJmsPGEyhlY2rfSsjv4kYLg5WDoy4L3I7rkshtGiWXaRoyGiJIYAg65mE1m4IKSLBFPRD07dtky+V5uZhIrFusBsm3YPLMsJh5J8vSdHWTIKU9hbK4v2JE2BgcNmdq4jw52u9j5mVicFpS/F44gT6ZSaT3C4Be+O4v5sTvXHeb506X+8ZpyKCUMx5gKoC5B5JvwLKTK8MaviIdEhRL1//4aRasGcJZ0svHEMnHEPO5sUux7Oczh7k/uUcphO2CsDIfVpVFoghDVvxxeBPTmEy7Scm3mtq2T6wCWX6nuCVD6cauBNBL/rHC6r2z9+Segho/1+PCxbGcRFmdibsGHODJ5SNs5DPiu9cDZ0Ft131zCt9ayolDmKsAk//t5h4/3L7WwA5pK69oikMnwirNWT0ObdTrVd3uiEvIaMYOpg390anwRzrcyt8nr+utmucbz2P314fTO2n3uNUD22pcgZrQNQaRLZRDN3wNyMXblBr8G2l7KvTf8MaJaXejyeED3FdNI0jCS/dpJYjjpCQfqAaH3baAvkSwmnx9lSno/GuhlspJeVphK4XCtQe4V2vSkyImV+ys3U2qn/dlaUP8DaKaSMBxoP4SWlIfyi8bFfzVX5BhGY5hUVAAFxW1levMsfB988eWYdAAQQr6Em6qdiKIzPdQn15+vz+N8+Si/nz3FYutNkU0zcqjpGixIoxXjMa';
  const _INTEGRITY_HASH = '2d71c62c9ed93c15ce3ed07f8b405e8447e3fb6c216da7421a65cb73f62f6963';
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
