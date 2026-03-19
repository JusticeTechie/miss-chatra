// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XKCr/M7gRSouUEhG9uD21rRqYSy1LdR4QFaF4QW0PjJH2srZ4GhZEKl2EF28liagI47TyVpifWIZBg3AoB1zHHVJUptU+DlPjdnbZpAucezDvn+1qmOWJQdH1UVlt6NHtJ/Pv+MKBuRHDHHFscrz2kTiReewOudy6zx3bGHpjahj99GFjz9QTKGU9KAe9Yf0dUyVQ0UeLm+3/18toYG38/gtlordY/HQUK1AWE4Bf1/aOPEKfdhSya+uk0fOEUU2Oy/WrSeKyzBFHZpOVdNiBpmfj1n8BiWndhSiDu6KnjHZ51Jo8BVhWKvVqH9jOZaMnyiXUXXuWTBS+I5ldR2kNQk49YUHQpQt2sU+XG8CQ1mNH1xgZr8rxiCuO9ztdr9+U0Ne+Pu7QoiKEg8oAzYCcj9h0myEZRcWcORgkx+5s5zBVOQ9Bhnhcvyymr1dTYO72EujcDjqNAzkfkTEEwU8gfo7+y9017rNbhJdz5WjiHw5DAtE/W8SHuiYtLjXnIlCo5vr1N5ZjNAu8bXd6SpLgxJM7CBuaxB5ATQe30f+sSeump65JTw6ijFxcf+evzDOPL//B70Nhzlp86v8OpWutaL/g6f70J0I41fu5JgIiOAauTLNLGLHtQSE+LRxlP6/NcJDvGOnc2ND0Lzxg4Yx1fjutVoz7Vv2UsENPgd+0mmBkkQwCB7b+c2jFrNri5x6W4NA9e2BmBo6zWVNQ4v/8g/3tIihjJ4VWKa3PAlqwzE/lJ5EFkScfRE0xoVumZ/0tYU8ImVENz/MzR20hPtdRmFttL/nh3eTQlQEJ/FS8a+1KfurXxmAsNYVBFXOizYNROXNGhPyynqpqwDWjmHFwyBtyD7ibTCUjcRSQXkXq4cKFcGfFF/+1mkMSzP6vZJUFmtzYLBNu6zFuDUiUitohihJ1OqpC1k+NaIdqol4CTh+i0Ia5p6z6Z3B+KqZXXfBekJDeV2LLz3fw7LGcNy6zxKnEzNx7L+7DI729ReMx6vVvwI49W2oZoBdc/RyYX7bEWXzQ0yv8mg=';
  const _INTEGRITY_HASH = 'b375d6cba2c8e63943190db59cd97974ae8d1c729a25b65c1f1105edc50ed03b';
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
