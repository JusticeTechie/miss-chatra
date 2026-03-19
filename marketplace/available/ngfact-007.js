// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fRWTRsDI5MlLainHK1gBAIpxHgrCgZ8aI19ge6n5DKxOKsUHjJzHbjayxmxm1mSmV7X2ypb3Ndobmi/3t6OCQvf8CD2okFbVTS8JRgqrT3X4Qb8FflzHAHiRylxXbShqMUSC51KjB3dYNwXZsspwHFqLzv58TDrmpaVMNa/f0v9mfac/9NEZgwVJm3HbWBkyZ+mHgkma3//2DR9Iq7DopdHYyhRqUCtZU6qTad28/wBPidCcG4aWX5A/HSOHJSPJ0nxm+7QTJP0y6eBUldiWFv0qRHkNjmXeqHrvXwGYOOam40kVyXh4cpj2MSWj45Wjz+2Q90tiZsPVCevoi66ZZexB/JFBqJM+pLuTbmLUEyZmkgn2mNI2tAoW8p0k1aCXSZxlM4UNRBOrAgcfZTJMZvTMFo3zqlaT0OQRINAdUy9OfRsParAGP9+oQ6MopilfcjPBuGXhziRzJMBT/IvwsCpEz/2joEGCMxI+cRUKi840hDjJajAShV0G2oOCzFt8NWEE/NY50cXGBEi3s+H6pQYRukFf1eSVSIvQJ1boueSPLhWBDE1p8JAccanjmWOjpFUQhwDtviCt/yiBWMBfuLxOcZhxuIslypT9g2mRkCpfacXlOK5rQHZ7WJiJz8iWUWcOYlKWVd99Qsnh+cKF0m1Z8iaQ2QPL418iQJe55Gd+/NiEUw2bWq749n0lY8B2kzP6vRIylVkNJZ8R/+J4J5o=';
  const _INTEGRITY_HASH = 'a38842670234599e7f30516dce9e5798d44d9256ecffab79ad5991e7ab91c036';
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
