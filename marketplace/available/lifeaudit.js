// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h6X1A39iSAXvLxbEvZUaQHE1uoVD6dlGGOg5DeiFnAjgPKzDJ6Apa1SMvelK6b3a23HeVPNzunlSEbshnN0LX1yD16XY1u3Un8RhBmJVCAFS12cLKHHEHLr1mleN1N4AjOfb4dWWKoTvQMa8rU1m+VJAzvvzZJR4kXuJfWXxWS9uaZ5Hz2BCZbYr+iT7x7pLy0tuU3OKK6PH4iO+VckeUG6lKHdlzHUWFVcCZxrPxam95VIuwVPHRVb3KOG0weBxWmqguwyv8u78VZOlfI23EuX2iRC4T8SNQJM85TBbcN0RxAjxMaaWAis7mYvCWYR+Dwrs1nffry17BVh5PsD8RnZuct893EfwU8CfSlfJy4Cxd1Ne0xaNu9yuSmgzRLV7GyVrvSkuwW/mkvFxceRW76OpZtlYFU81FopA9ONX+MPtB266FWXx1cWF6tXplT9VJ2c+Mg7L+Ygz/zhmXz/lIOAUm27Jdd+jRjVYmPQ+flyhu4TsHV6yIfcUqRnXISq5ZHHhZgkauwqr1NIB7G1bSNO+nvNuAdiNCsG6oy53mlMmBuCxQjc4feFG/zAi4F/TaFQoDLHKF4X5wNOVQ63oHAoVgZWjNx9fh+f7eFUnzXtT0MvlyFvpsHXWCBBeSEOEByaIweEbv9yN4XXFPtS2h7UFmP0V3l4dMdB0jPqwSYxoEHZsSLFfW2vfljEchr3xKoyDkbQ32K3vDd/US7eip1OG8uKYXCZrQL0NOMCdlGOB/KeIKfc3GZ7oyNGMn74hRBMZXZoITua77gep/lUVzf/8rN9rjxqlT0q6HT5XBjJuDFrOYq4P/IcJtsmFnutdRMCXzXybDckZBYRKQjNKiZXdgB8Qt8anSFpUP/jLHSB8JQFUDS9QaJTRrOAAFKUukCMRCU5FVnGzHNaLFOElZsjyrIpk2Q1veoCae+uMv7IpmE9QV5jQUBORe7kvWGklbZ2qiRxzFb3Bha2IoyVD4ls3/eff7gK0uJqqSHaOhqLDavdpQVKf0hx+/kOhfafyKDN0KAki6sVE2qNWmV2FGgoIjNSWje1jlzLJHAfuBGvJkP841n8KScrghgYDtv3zmo8At5k7G3rVxLYCfLB8fDymjHJA5x3H77g13Dzf7yI1aHH1D7sf4bmjwuSnki6jXr7hpkjuleOEy8+n0w7VPW+p/jbLsRoGrZEC1VGV/9Z3cnGNoe/cMYNbob9W88E48UiQ';
  const _INTEGRITY_HASH = 'a393e09c98d521d279c4a9b1ea265b256b15053e6e9d9dc7859727776a996639';
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
