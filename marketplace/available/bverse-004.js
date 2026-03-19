// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NRE6wylZukKSJjtd+uikZAmqJR+7uxrBfH+JMyJEE5hZ+qtz/PwePs9jtvXtx8EvcLWuylTOWGEFx6WOQU7HtB9ctQte3IJm7bI5PxxmT2juHQaCOswsh6aZzhiAs8iHAoxj+6XIFzt3ZO3fGbVAtFtdv2m5HMKeHDVZZIP1q4ZQtYAzPFxc2lZslMAz1t70/M/Af4uuYm6mqj+dUtMGsLuZUUyb9ObpkovKDC5I561PO9MkrJb/qvpLOxMuFco0TH7fzoqepEpxN+HJgyPspOjkZwukXTIXINPEa+dlorxC2YE1ZKAeq1hcpyCkebEUHnbaXntoIzy9iDdRmqCkVQJvR59pzHwgUNWjTSX0zNl8uVgmG3+hf6UZWnaMFBcp4dGrnlPw+gd6R7aZnqbSt9Qp12+4yRgNsI6HlzR9yNVzO58myaAlzLMb4bclycOWX7Oqjc2dO2/P8D7p2Q6OYx1rpYIwNxBM85rOHtdxSksMmQFhw0YZKJ+bOGKDGF5+FGpQVAECC6zF4D0fDRh0wWcF+/H2KbaSWbtgLFxcZ79Z38pVrYJnxZPdV1PRT2zfd0q+gLKCx0STgVCL8VRbpl7frAm2aFOCXCaEw81ZCeRp13VT4Xj//KwkwmqIbf/2sutEGdgIi7fa1gHfM/0ypqoc/odokQRqDEr1gGerkvrBLwE7nw==';
  const _INTEGRITY_HASH = '5b952b60c683663676ae7322a5e5b0ec7b1f0333e5c330abdf2ad424c3b1f92e';
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
