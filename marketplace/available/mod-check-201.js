// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7cHjyHuGMhJ22kZkGrwSQDn+6WTCzWBOaBs/NgHNTJlJ2rOzwleKoVqqY0rQCptqCf59o66Rx5vuIaDMmJDlq0gl5dtbZX3zRHj1AYckup1exFujfR4tHbtd1qKK5WK+1pwyj4FCMR15l8cibW+UTJ8rd+iQ48JcCLXtvwI1qwQBunQ2wwPrVKjMp5B7Ls0a74i4ir6lUjqMUH8csGajXfIo2QzPBy0VU6MbbsqsjwUzxX9mxcyTbe64sfgbz7GeLa8402P8oWDgAIC0uZ9FvQVbgqwRmGrwQvDigfgDyDGH0a6hILo559e5jJ3ENn3p3oscWmm5/2rrdgxWldQTGucbuSWeSuD+7jtbxNEjZw+ALQOZFqzQdVSUn1EL/dSxyr4V1uJAhBEvnrQcdZFUe1JsGM8mWUmkyE20xiCe82HWf4hDWxOTIMC4MaeEScfrHXcj4KX7gKIIQZVYpKiuqabsTh9S4plKC0pW0Mwd0qguqwkIvxBr5iNozd6DmjrH9vX2rkPxis/LGXSj9m99lSmqQEI6ZHJMZ3KiPPjdCIlxYgSmCA0PdztDbZWsTN09obDjxp7O/3OGL9uQB6x0CIPl59lnHrRahiJF6djsTgl1bHfc+pHb67N4yI2AtIW4WFu8VDjrzizwFv/YcfVxIes4xdY6TLYEOr7kSpv9W3CqSLo17etyu9vmNfO/n+Ru+lKPix+E7ssQQwp7tF09Mljbg/dGfQ+sKqUAdzfUTRVXZJtd1LAZhHFlaBTabTOawgb9YklAHiO/+bm69iSEMGkLzRMJJNHoGOtD1XMm/BET8sAgAAxedxsmQpc/T5pgldIdZO+1rK2CRDnZNpVLRDCFwraoTk4hur2WFse5MvFFCac6+aKB/N5Oh+49xrwM5LsxCXjRAs24k5LUalfGF7HoId/TcsFy0PyNtebrN3iGoxz/SZ5m99r3AZbCeTbcbbsMZSrVVXkeNKnh4IXyl1vv9JFgHp/gAoPU5MCcOs4Yj/wd8V5Z/TSJSUrS/l5s3ZyEFNuEslySTLwKLHDQ+5dxoHYn5R4JjaCN5gaPJKkDA74NbS/B5HQDOaYuihosh69EWpQRts41ERGrfa8iet9msfa+HB9pzVgXo8r+5Atm/EUQRVcq4k9zzXMjfACCgfK3e0EJazsYRvpe69x7AVhYkToG3HCRj9XjnOQHZ0UpYOtPU5v7vTDKjjhbcZ7H8ifspkoRVHTvvZoLijXaKN54FK3HvrrnEmsoerUvYlzDzUpE2tuNh0lvBuP+31TPPbQBGNYEjD4izlHkehrFGsROpaPG2JTyVSmx2/JNsyFZxrye12sE8xw2g97Chbfv/36B2LdvCTOiOnmaATBz0S8mZuK5IMaZap7eStkv';
  const _INTEGRITY_HASH = '156e2fc15b6e1848291c2b919a07696a7aa5dfba1cc1bab7fe68824bfdbb15d1';
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
