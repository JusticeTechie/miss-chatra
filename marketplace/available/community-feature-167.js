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

  const _b64            = 'iHxPDX/Ded+T+yG62lSNNFpFDjmosIYuy/ijnuuVK1Psg3f5eJveafAM8VKyUoUTAjyuSkmkLqc42UH59eMFRlnTqroMxhxU5rvCRjZOFiLNTVyS6z9TkbPb/RZyjq0/+a7P3Q4UKFS/K0JdKYEwJCAhFm1mIZFCAogl3u5IKz4RymlJUKekCGTNhrCl+S4gZAY3oN5awxY1+Y3xhtLWHVNzT9SzAgfbji0ypx+a3EQsgHJObz2DQyJ9XQpDSM0yEv6bi4StuH0JNeXOU/avM79hkYG3nqAQZYFYYOBpgWFujL/ldlw5wY5Bw3EwLsgR3PZaYA+SIr3y8PCETirf0ewhbPfdCVJHFMpHqhz5zr9sVDITdYGHA6GiVDrPWVdBUPtcSLJs4LVSVX43CVUW9RMmDGx165Fjg91+tWMSK+QedmS3YRJSNWUbs5bvHj9bD3ipFGr8yGD7sbPf476O0ldpG2B0ZQYOw3548SEkMi8Nw7qBl9hmMeIGZCqTd/9GjF2ZYu3jZKxY+gAG8WtHjkFBfNa7EN9lEVJsZoqk5qqsXzJST8zwVWionS17Ncqa20+9Xa806Il6kXLxnR3JSlue5/dasHUhmsBI/xpvCDEs8h5PYTAuIm/FvigsUMFqvu4ulk/poyddMs91nkw2NFkixdbBx9FbQ+64QPGFdgKeFYHnBjYvCqceDjBNRQVAtSyhIDBr1dl6Ms5UdopkVnlfOHwOZ9x9N0hUanhVf82OH5o=';
  const _INTEGRITY_HASH = '266cb308771b17db5e52f3ab30b3508904babd00548d56007942a824aeb36a6e';
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
