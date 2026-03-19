// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gTOgzHdBXURJy8oYUAu02jP7hqcc7ZprWXsNo/lwYVqd7Y3nF6rWUlK1wdCLjRkpzYeENj6UH6t3trfgOcSi+XLyeQEI7YSrWVkOkMfBT2KBL4rrd/kInPgyTCsf3w9a22ChW7o1MLyiGnMZAY34gvBSmPQ2XzwrN4VUN0uK5uiSIJBuuFAHjNIFlO/6xu++wDrzoCnVIvWZNYrZKilg9GtJbgB/DEepsGcIrJURLeBRdvKnpWk4X4kAx8wBs9iSQyr0YwwIt1aF9cl1VgHvCq3lbq9nhrIf0VATFPvt4uq5TV1y2r9VEaqiHsfDVH2ha5UdWaJ1xsPvEZzn8fbDMXolzSooluVbe6XI/yu4cfcxWPClUZ81Tyeu9AYuDFoF9OsaBkDuPylLhxwyVyPlCb89/Pnf5IKzhYE3ulyVhQL6IgrUNC+HcKo3+jTfDigz2QPB2AC7Pn+pO24KhylvTiRrEWLemto9XvMqR2kSE8wpUgkLJ8/Zu+p4VNGxIA4J86JxVVvAE8g04/sqSGtaX25kkkMG3QGkTrO/XVG7mlETuCb8mQsQL4j6GqrjFXi3Bbsn8iN7xIR4wiyB3tegAiOkNiUQ8PqDmzhQXAQ7B62enTVDZy3t1DUv6VHUilFxXUod5FoJpaTB5yd11eChNfbKLJ4MnDmWhy8MC9CpP1Ih2MWuWKJAr8TSldMJlVOErUKULGbAZoZsWhngKeBlDPsou1nZv3mW2GFLYLAyy6NpTU2l4cBy0Y7nko9Z5pByiQwmkF0ElxnYF5DCFW+W9b27fFxVxnnp3oyYB8svYWRS+MXDAoU9uwUQjhQvDAbiop99oRSh+SIa3SZm4dVnm8I/mBeyF7CMdLlEgrOvn+zSSBA+lqhU8RN5zdul7E8dOM5gAKD58S90ceqzYZe+hr5JNPHzJ9KRHq81kUN1PhMKIoHi4HfGw6nd9/ZptqOToMXwtLIRggRfDsg7R6fdMn2DZ+y8iSyDkkjciHhhlvbqiJqA5WHDbmJJcO7tIkWzeUS7zWn1JiJDxz+u39giCkPma0Mabu1iTSTckKN0B+3ItQ0I3j5YyshGC8umc4TGo3B4qRIZzGf/b3O3/d8v2gQO7JJ1mYKknGl49Sv8vLWSbcBkRUbVqxRmViwkEwYHhjLRySmOuIgCmFZn1qt14WpkEfeCkJEKJTFvKxEXMDFWwQ8QRcKhWovHg2Dbzqn+nm5lxlfhys1/KC6LQQj9S0ZTGch+8Hvkiw4x/cQ1MJOnnWbM4QPFOEOKhRROTGHZ/6eY+vFOmwV0wzssoNmxKBauTBuxxq/cOfsWanTC7MrwLGAywsQJLsqGSdD0U5aQyHbZrcQ6xZLhlCHgsI/P3KKWkNbUpNdL2Ejv0oD9Kz0/SFXq55N2UQ==';
  const _INTEGRITY_HASH = 'f634cdec0fe28ef743b865abcd5cd773f0b831466be73f49c3a0ad33fd1aabc5';
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
