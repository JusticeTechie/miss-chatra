// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wtjD/qbQzNXplT8sYuOocmM5dZXf7W82Bq8vZKpGtfM253H5z0oWOZWNUFNSKCsvcJZRHX4VEEHaMN8jPCyR0zsTzfwBys/kSz0205fLojTHt1SNd8Xa/m3OxBqv3PGjmUxWXYh7wuF0OLoXimHcmfwaNuwH8xo7l19un/DXRZAKVB8DN2Qf/GKRY4Kr16+EViQcyHDvw92iTNFWZKyckeB3wSAMpxy9J4pXf5zI2ghAR0lIpkWjqt8R6qsAkfiUlSenLvutaQh15lKbe32Qzb7wjNHTSWFHu2alT1c8cHVtn18w4hc7D2pwLcwNsm1Q6/o0P8Tb6FEf2uDM0eHEAdkiCM657uZR3GA4CzpNDD2HjIFB+r9sLXGVMR6mVh1yxIDfacYJLjgbeDOpJr2hVf1kQlp1JWxTt0G4REHIkbAYtft2+RSOsImeUEH+nbIpySy1TwFpO9VhsAbR+qpIJ8HTTLdrMjIu1fHX5aWiuix8+HU5E9JmDkJw0RGd+mcmOas5eRc0HvYh1mpToBOdmmOndAJZtjC642EVqTcf5q+icj93G6JG1n6qSIbIMfZwQxMYkxjWZn9jyFxLOaHTBzI4dGfBbsCwGKSvZSjvBy9pRPVt0sycGzlitxAsVSUdmjESwQejon76XrUZnyZCrRGAA8wHyb91Bi3buvYSPDUOg2hSWi4T1+Yd3dzw99M9LJ5Ebq+5B+h3cCahny8fiDjBJyNqzHOh';
  const _INTEGRITY_HASH = '656e0d965e8f064d1f7cd0224516bb8b779974d608b7e2f8eb30edb008fd9e7a';
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
