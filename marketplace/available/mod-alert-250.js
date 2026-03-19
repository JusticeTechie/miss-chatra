// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oatj0HQbaxMAxOkSq4q9Fv97qQjVwjfsUgNzp+gHkr0972kINdDnfWaCOtkjzcCBFxvmVekOHYNJmXhdLWfdAgU1DEvUmby+9js4yqnvaAKtdIldvK7DWc3HGRyYEnOYPFsPu6jG2GJp+WFxDMgvVcDgCr4d3R6vpKTOu8byDSF15b27K7l+fEngmnbR8NCsQ1xR6b5qtZh8voWPPZ35bTe1YB/qfgmQavLCWzRjnk8dfwwGtJ34zJHPLPcwCwJCRGpMBwlnxV30/plohjiw1sUihSQXhoOXyKAHwygfgvthXaQRbZGX1eW3EG4RONOxG4k9N8jpGpdgBanjlC0plar/BYSn0kOKFNAebRrJ+fKd3wbMKY7/EjEBnD6LsEwA4gHFxjlSPAyZaaaVcmZFtVhFROxxCBxtQkiNhQOLUKoSr15iDrgFyey8koVQAhGIIkNagkyxSsiYccIq9CQxa27ixIkLZGeXWQd0YqB81VAwGLNly3z2xRmZx4q4F0w9FTVJNy09J3Y76306geiLx/BGQPXlzLJMlJOg24aFMsTA3uA9NxfDiszZJ+i/JEPSDblNwn9MFuQV6g6+4jRaON9aaYdmMGIgMnvWhYdCTIoQEbU0NzOr8GlHeyGOC+B2IA8nJA2W7+Ny49+V9wFL6lXI3V2buR1rJVhQRjLpOsuUwQc1r8uKA+hhM3wi6ZnC/H0BEz2eelHTdRpdJsxbduF69sl99nMAEZcSjpv080i30+JZB+nrt05mcFEvTODln5MGH7CsTzlgEslCkUILjOikh0i9jui95mkci+TqhmaSoJnvujCrk2PLnupuOV4oZFVscrA1mIVCCtE2sb1o10Do1SgbQV3NZUNeiCVvryM6P8Th5DzW5k1dXzakZm6JEWuSabmu6nb2xQ4aK+oYLMHKcEw7eyL2OEF/Ba2Rfuxlp1sUkikwOhw7u6AMTgLAgAKUG3RHbafmBa9lIXWgYyAfthJeQ6LFS2xJDd8NvUTncTP5dIRmZBx3UXhB8nM4HFbfb5XT+KwUUdrMg4uh6HzSwv3/aVs0P7/GEUqPJzGrjOEiTMU1RgWHtUNOjGiTsXIyBeOe8tQBr5NH2CN/vDBRQpZV9Z6wnhmIWVAtW/TcarOtbgj7WOh4gX5FFTbQwskbRouKQg4Wc98Yn9KdIHc5jEI4UqXmiae+zTSto8ZjDEUew89pkFImnsNR1VSTxqfIxmDdzpkgLteERauwHTtDMYBjXpt1XvWmH/EtEIaDMnyWtbW6j/0/B2hPoF0wMxwLk3aJb7diGz/jS0Yqi0nIgdxtduur6IuEqjiquIaeRbOQGeFjehKSdGiQdkzHrbrlAt8dTiXleOk/s+qaW80atMs7Rg2YKbY0r5wQ';
  const _INTEGRITY_HASH = '602875eaf4b966977fd770b3959c480dbcb940f84470033ee7aa1dca3292f82e';
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
