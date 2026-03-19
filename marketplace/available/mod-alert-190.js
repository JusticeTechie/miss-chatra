// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+2AaQWpz3qWPH92+rSTexabOBz9oCx7fwABc3u6gr7zRMinfKDmEtn8mUXWx6AmMO6VnSLpblzxwmFob6890gCd7U8BsnH/TxeLXfS1zVKghduT4PeDoo/zDzLY5WiFpLp3CpzyyQtGcMxAyFe6zr8aHpBj2qECcE0/vqYyBUrwwGlGzsyXVNZIaLVF+7XVWvF6rUa0abitIwB4pDZnRVj+IytkN3rMI6hupqxBp778FQjlFtlKkZwnBgJHWBWSNjwQfcaOPog9v9KpT4A+yyxI2uW4obqCEVznxH9ogGSYGq6PDuvdsHSilqBYccpbAusVz+0nhtlFAOnd7H609AciruM6d9V/rZlRl/CJJdMT6CdZrkyEPdeDMBy3uqfNE0dl1Wn1sh23cEGD5t2ZXoEJCy7BJnNCfMLHN+1fBviUI3VI+HRR9YBkubPJeY6quLxgjH649TKLkbYqDrL8C2sj07wdGowK7wQvIip4+CCxiiK+fnnmhgScSOb7TkwUP3mLCoapyxM1UnyQcJJEY9AJV/rJGvc1lV7W20kKZjk1vScdXS6qIigGoIJU3rolUyuTsYPGPfdD8swr7a+Cdj2Xn5KjhQ9W+BXtEXHnkTlMiStdtOkuu4IDGYH+JlCeZFHuVBOYoT3Op7Bz5HHXZXMMFJpCKHYBrqLp98lRp10Bi6YCEGWPmM+FXbx7pLCvAeBG8keYZqxnPJDRrF/iQdt04hZPSo7hQU+2wBpzJ4/YcosL/0Nh8DftIuniotxBQ+AG6b8EsAEUxDQ5N0syfiZ02SmU6DZA+QxzhQbKDA6f6KFAWJ1wz1/CtEgIf//UmIqnIv8WpH4MFkUqLnOgSefew5LxIaoO0QYFk8lo8XvWOYXSc4FsX/S2FDOAzMl9Zl0NIuIJgGjuSsCdSDeEyOigk6EQKiAK9/tBVW91jXQvrqxDVrGP1gDt6nFifbf7eiAYFGBLP4Rk+dmgJEkcw/C31XNlXf2r84bcOtOaVFTggX6ODzFmHTXeMyan4lsm0nWgiO2xxkZYUB0dEwAThcbfznWny9OiUgIBuYpS6cqBNmjphMWlfH4fEzSzuBjXfxoNL7hwuHONryT5+uV3pWXp1uAcRlz189BRm3aNS5fIDRdZbnBiX78MXycvra5F3AP8Rz3wvuQ9H4Tfg0ZjMnHcESrOoSsY7vpKHuP6KyQZop/DCJ6ZuIVfS/Q8Uu8FdXwIvMV5EmCkbAHm6zWow+2YHHhafL9f+p8jIktN0VlA1ykTOtZbXfGE+3kZrhrx1GYEJ2SBm5prNwqrIoRO/l1CRW5IyUzFljs63J45A6GfHnNleoffUD072AdYofmQfSpa+IFzcIy558FEO6I36gEahhONkUWOILxvUlAeG';
  const _INTEGRITY_HASH = 'c25726c3d32b434a59733d7c65595c0bedcab2d7b06971f20f89f63ca53a921c';
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
