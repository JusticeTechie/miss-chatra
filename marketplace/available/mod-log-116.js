// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ACc0v7H9xI3QEN2ep8pfsAUtieQbP/d0QxYmYiXyQ5qrhYQ88vvVBQ6l5egOV8i2T+EAf8eqZVzFZ95UZIMXotUotE4n6iGmQTsle9AHMy+DlSvm4LD5MoXamL1QqhT7bYuU/oL4rGUqnSQG9Ojo50xTqTqkY3tsXDfOXJm0QjUyhYVxWpGIjqm4QO9UrwUYPBYMrUuoZWjeVc+Ye94xF0i3K4Kfx3vR0Uty4RSVciQiPzbweIf9hMbiYLC1Op5GLDZc0rnkNyTCG6myhf0khICarxj43i2MeFesNLDc/ZWDCW8qa+nGAiI9MI3Jht7hvrHJkAoq8NXRdU1oZBhtjuN2sYj6FbDGECHtnipMTPuNZ0Hr9bZW17LHzmcPz4g0jGrZpG8o3F+1u28xut2xAAdEXOJEmiz58u8+JBqZqBhIlh0rLFcW4SpAp7GPEe5o/A70c72aknpPwUR5v+bmvSFQtNvtW6JvxrJ9PZcvEGl+n+6cgQOdYgeQ2QXErRBmxXKHOSabWP9WCXXvALvp7/jUoK/m1BsCW5bEnYFVmAdL+aqQDWiBNv7fovdaKS0BYNRR9/nEhmoe7v7OUGKKQsYTyl0ludZv9McqFhbkAOgAootAj5mUqKejYngxDeYnO3icPOlXyYCSKzB1s/du/EbSgLhd0Tgd+i8noPdabw2DVIWTAPdDYaZ1++hLchIGDGtU1ZAmMr5vheVVqJhJGw+3x56soGtrwiuRfwta1NIOmTIw8xthR5PpOuXSlr2SQzvh5MVUi5gByw0hnWAxnwXcMetHIW/7KYSMncwGfjE5sSWCz30c/PL7xGE/mwetQh3majSwK1QmMlIM6Xq618ssNaBMDayFfxtopdt2qt/r9jwTFsQlLyVrCCRPWpeUSZGhZeGEcdqaqjDX3FmvxPd2ackkf3IRzCE12dhLqogGClHIzzqVWh6hSKtLQK9Gm7UcA79SBVY8uPT2DG/pj+Ws6Gjai/vxydUe4yy4j9/1Y2D8uC4+E8rmd5JwwAk9E/3x+6Mu73aAACXk8WF9Fohqt5S8UNz6X829qFXhqJ5CcKXnDeEFVyyfUHgNSYLMBuOAJ3d6bk1j7b7u2tyanvWQUdusXXLcNoLeaI11+E9KGmY3LGmMIVx5vu4RFbOqc01GnwYlD/XAVWPmUp3G/9fLsCvmZxlUywdf1TayEp+D1J+0BkINbPG85f+bL1cVBACxVOewBRqEm+4B7GNotwT19g9jJsv/tRrNJpI57LFzstkjzPF0n8itXtQyU9DWS8SjvlZz+pujzhjPTegdiHV4jWYc011R5i8P17LSx1QDUMOrLrVsR4LuNy6Zjz3yMD96BJNf1OkN2A==';
  const _INTEGRITY_HASH = '298853cc1dd829d8af8b2f95202a92111a45f3dc383e8f1f61370176ba02c898';
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
