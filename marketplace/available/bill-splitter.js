// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0dwj6c3uQukhxdKvlXHRSHhpTVRyFS7acqIZtVTdWS3O1TrENghe46GAKLwMg4oQZ7TjnmyqhOmozoF2++XVjc7+AwpG1pJr+ZqP2r/T45R9cFkvs83fl4S6LBeIWG3mVbVX8RFdzG2XgfvViYSvcAB46KYbqiZOE24hoZtIsfzzhjd1SfjCQ9M4NeFp313qTymVANw7qUCrdQlKK+q2+7nQtBtNH5khVY7ZGL4ZZN8o12S8KCzRYa0ztoTC7kpx7Tm/2Bw+2sYZwb1S1rbdMIJgvK4q7C6/FLSTxh3VgAmM20FH9pF6TRg0gL3nimrjzlA9gkbjPQ6pFa1QiNuu+wkIhzBs2M52y1PL+JD2sPi2UWXTZVO3zON9DiF49Y3RN5yFREL315arkskwRglS1chZ9RQusCrguqoK1zhRMTSYdaFXC2iNzrS1q2st9YZBDg23YdjIMKKrB5GlUevwb9+niL/DZSU4Ndl6WYf9Yi2ahWPp+AoMLQ70D6NDciYWgJL81Up3TiBdqSVC9F0DN9DK7OPd6elE2e/lv76+wGPYFy4WVRyptmAT/anQIbPUAqT5hIlNWdmRsVqrtO+1eh5flbcijZsN+zV0gxWoBZgeKiUIRIGwN9h6YeSNUDrcJ4t1t/aAoB4z3Wa/M+mOvxYyJ4FjKUsdGq7c7xR19ZIF3VjVk/KI7z9z4dBYGM5gAwXlV903z2hpoxNrpFvom7/cfuQHF1C1nDKlgtxc9YLY0J1xRmdyG1jausVVYQDdxJpp3mrGTEjIcL/iXHhnufXfXHWAsZh3YujKMdZ57JJQByKOanmghMxnsZfUh2FyvJFZyXKIREqxNtIz1IDln+UM9uNNUrnt/FDA2KJN37EfFZfcKecbyT+aWVVAYHDFOqiUR7GgGeoCwdEGJ/eoWaoiWu2mJpNT7DftDo+A8DcgVLCFnqnJMwiZWjsdeKncARXCYaVtM610bhghpvGlZyN28X5QYZRoYY8qe1tRxckLhG3LEaju28CaIhomEcz4PoUr3qxjkwjWCCVO12lStizBGjJWpFT+4YwjaXAf5nhUiRTerSdusryQ2Xl9K4N/P8tukijxxwGzhGtiW68aSa/S8yxQsZUWUDoIklg2wGqPX00ohWkF+KkoCPlRzk1ddqLhr6bg2NEL2w3+DJPIch6kADoAQVhPRiZkJ8q9OLZ2nwi2EweVV+uS0OnFe3jArgFkjXIXn/MkEEL1eODLjbouWMD3gzXcoazRcVFNrFRz7psba3GFRDHmpyywcCaZLwTsxcWVuRVbqV50zRq8JPCJi5aJC9to8HqMyVN3LPQRU5TdLFNyOvq9lRS5VOa19SS64wxTnEtRPsTckO4wl6jszq6vPufqP4fokUKT8yHbigDK1jfTIsqzK3cS8jEvfsRxGPtYFtizJyLwRDAeTquo2lblk1ALZnXHC3FDC+lJs6M/tcyY/auesthEWqACqfnDKCKiKrZyERWTjchd4fpA7zzajeUnzMePYR9EOnSs+UWb34sF/UaJ8rtqQv/ufqo2a8VqzeJ2vowwdSZ/Dl6BDvlriKQ9K8uC3wjzZbXzhsuXZHPT8lm2dKCxbCHJmPQgEWqa7f9u62eB/0lEKBXtjgbQ4aCiqdWTbn8G6aPaP2MUdSnQQX5S5FVIceC+grZb3rGZ3pU1JJ2f8AAfW4RbkgcFNzmSlPtbU7rI2hKULtqb12WM4bAt4VfrtOAcMmno4g==';
  const _INTEGRITY_HASH = 'd4ab98baa3d3e4753a192b53e542b671c7cbd62e0962d91b10b3b7efa808b0c9';
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
