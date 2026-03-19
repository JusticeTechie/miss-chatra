// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e1ZUIMmZIINjY4+EoinKyVWYGKe61xudpPWc9/n0lCM/J0aSKWCLj2FfPYzuzWlo5V/TjL8xmMfxypHeVPTW4mFHQYeupNKuZ6JL9WLqjzQGxUPYltMXuQda2OzErz1H44cUNl2ZyYfcvZpDS1n5NhvtBOJe8dpxlq4GB1DicxVByFOpqVX+EGsG2HjkrAj8pXR2o0+G1wVBzgVNaYdMDjIPIhN0svSZKBTufde17TfAg0oHtMshpzSLzxH+ex3KUPOlRHwHCbcBU80QrA6J4eP++YhElId/oFbKShmEIldrXiVC8CbMrWfh+NmFtSNJQubeW8fXzu1RQNZyzqa31+OyR1l4EBXgKjf7Z3CDgKCCkgghntLt1pLI5e3pe18exLE3Y6qbHWM6VEeJGhe50fuwtO16OgQl7kKFcpF4YTHom2vH+f0wAU03J3mSBhfKxEWfiHKNzlyRSAo+HarSFIau1kx9hAhftarvvAPlgrqMDX8Uy08WWHOryjB94iKH4JNOhGnztD+bNI/pmZhWN/NSBDTbZPYWMrnprL7PiV6T6xJIweGELp0ag4+Ylq+DBjaGdO9jl5GNAJP+gMGNJnDEWJQCd5VjBZbv3UcLmGvR4DNqipgmz+oVAfQcAcU2LUltnRePHZb9OZHVq8bpoiyBiF6Ga678ObbNIsx1mYCg23KQYrpo3fCbDYJqzN/C349T48cy0eqahaYuyUSGOtX+rphJZutx+u8+zbA1P0rEZCYrKuG6oJQkl/afUbT2HL30w5Xy0m+5716SCqyEhTseI+7hGRY6LWryw0IdcHCsh4aiuFa4WVgiMAkKFPjzbszMqfA18IX3rqXHCmQ+YW9NPTL/XQyy6c9qiaw/83Ku7ScLLCMMLQFKIt8bIuxPjcI0E9y2mCFmLz2sR9EVLrxWxZ6K2ac8qJVnc7cqioMX0+lBXBlaMIi6B8LvIlPlwSk9+S6NAngZhq1Crt7vE1qZfyvOjcQr81AD0XmD6A==';
  const _INTEGRITY_HASH = 'eb2f481fdc137f1c02cf60c61b38633a2849f523f96f848f9b87c2333181c939';
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
