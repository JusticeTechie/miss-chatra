// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5sHCcfGzYC54SRZ+Bf5+bp4M1xQ74t4/iy3r5oOwNTJSdNWY1crSCbv2/L8SVhyvrmQSmEyEiF8yj/2i1jYYWikL8GPvWxyuhiGsE15fYybr6cgTGAEVwN/tDjveIOAu4daux91yfRqxw6Q0EFTDx+22rIJvNyULDWcsKfwJEuntWoVavxeW+OIgPquA59vo2ZgVOeipEhhzBb07U08p8pnGobzlxMMwTKQZlyx1nB5tYA2xxj8scLyC9Ozhp6RD+YtXkfA6ZQdIa8lu4WPv/jKc0Lb3/KQFxnUfRjzsS7jyFoeVeWogntROPTxJcZp2Udus8QS9nPWsBTAv96PErJxysYoELZ/sZKZLhyEMqOT8oBdfaP1UUDiftdeWv1PDdQeCS11annIpd5eYSSMiUr+FYCJkUedngAvsWJcDkDzAhS1d1sVNtUdY49pGZokRcChDgIDSZ03Krm2HBYZD/9aMzZFm4WQCbvvroVgsLoBG1yTwwBWlpaMfLWJbZDJt2wGRMEet5I0NdB1+7Jqs8JvRu4W1k0Z7ksaGaBkblLT33jVa9hJO8GS+E0nfYQ3hj3pqd/+dT9kDZKQrxCaVeLJeizde8o+bRfvmQAobquXW0swAbl3tC/4yungyavYubuJznkpRDPxg5+/TzxPLsRbNAdJzmvYHJmDHBbc7opM+kI3hlJz2tZqBA2TD4F8Z8OfwTvCZVDhFcTgqMMB4dhEYbsZwGw+1xVVa2UWpz/+ovv07PKXhzMTu7F5ILuxrOv+27rtl3m/zFh0/AxRWHBxavhuiKznc8SmPkm1yPZpnkqDgbbyMzvw7av+/ObQhiQ+KfTtTx/pBZ8R/v/pXa2fqZo3rgkBilRyxuHydEWzqlo3j4seCyWeTrfOtZy3v3YsxlDKOLTQaH+51P42YYtpOsRyRWxf5CsHjEl9LkzKoe0R18WSbr5yIb0zFWla8noTU1KaatyDx41QRHfQzCC5YVj0Uj4pc2r7/ocxFu5+z4pQHnNpgtEPoMmxmwATIrNuZbUPv4pS1fjlXr9QbCdXh9w0Xp9mrXhxbwsbpE/HbEd+zd3utJnIrLMSOQPfYmT5yYf+Z1AShiMq09oculeDk2isZva2RHSl1rkZtGfSmxA9r5kexxgc1Aa4HuQlItoHFYdgncsJLnLZyX+pCyx5rhqLHcMyRVveWFUkQ265FHjczwG8Nzus1mxr13oHwXkZaYmh6zMMN/BvrbhvNfw5c1ycFdv83e1BZIZN10O8bTqRRGakF730K1un3baPBhGjlKVQNkJPmGq9SevCuiI5bmoNoMLlzX/lCYRkaRJJ9V4G53coYFIHutfmr/GIud+zgfeqmonftk2cl+yIJAPinVTqCfBpcRw==';
  const _INTEGRITY_HASH = 'e39971350e70c1f65c57b3e23c38f5043610b1cf43662175e380cd76f0402d26';
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
