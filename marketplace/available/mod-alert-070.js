// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zxfNaDBDsmUg0k5TAvUBEQLW46ihtxUIhfTbU51N8PnffbD5MBHI1pu2ANim0JtXrslJ1OPf93cbFtEGzY/8U8IEDBv/0ENonTQoPzu3NfAKkmobxKQuCYdpLH0ItTO55SIxvRCFfjEMaM+4FSFqnRR9VuH65j2vGRp9WAq7RXSUgqIt1XtbAYZmHdGQnHyFhBNvxp5bNPu7GuZdxTjDTTd2X5F8NtyPSbOoNMjTdoej1gIgTAEnaBS+hSJJy3uRkLM0b23IZK8584AnWL+Dsd27JBf0ntRXJ33v0hzfsqo073doXqOF7R3GX4XOC01YNClanfrYOEeeIq4TbTbIfoU+z5Iq0ShGZQ6LSvTZqJSYjF5R79v5Z95T1BBzI+nInvsNLP+Ed55hXkPcB8Zjcm9ZsApHts1DwetjNycwog5ZXrY1zoTNPntCglLcx+kwbzdVi5Se8Duf3UxuYUe9Wg22OU1pNLjjUhN7QOd6Znt/NePuEdVnLpH5SlzF1qwLXmbJ+sAzoYTo96MzVBFHTfANo/hkhmJkLF1U9DGpYzYzGIQpMhSFAWOnb3YgSS+u1dc6EWyoCKib5emE+Wszh4hQV3rX0DPQExk3Wbspvk7/SlzJv0riZZCL7Uaa3iAIMQgOZJFWtLJqBvipprdavHqFhYV0DDbxpCamu+s4kMnTSxI+ykxpj/udRqYXCbarVvFShAr8bGjI4eTqvHFQPnk0XD4CHDwEiLUuKieTllqpGMX0Y4JdXrohyvdLE4gCfDGDz4EmFYbDHSmJVrGVzFtCjy4e/LaX5uMhfQKrADdM1tmRwtMs2+Y0Z489od3durmXW54NyDcL7EaqrUCC3rGIJqexjyZu5jU93iPL8NtGjfbtiDxfGOeT9u5bWD7ol07L2lyu9QhFWli5rWD/I7g4B9B+dSHpTtCnJr7pEFattpx0XIL+WHL/8LaBAFR4SPtIc9pa2yqcsomsEK0tS902Slg2awf0w47O0a6uLWkJAcYKiAwCBKDlBrDBcQwK3pNWFxuP3TM2PXVkpUI/iLSrJlEeMuUZAwpk61y1O+b9uxyGri7sMQZ3ZvrgBW9wbfQicVt4gJrpETJ/tbK9UqLEgep2337e6jKDGBhowwdaH61VnM49nnLGjtR5fA01lFCvT0ltqHeSyo7FDzZ3St16AOe+hKRYkL1C22+HMKyfK77sv2v3PLuGPD/uj+z7EQSFitTDiiL8JxXg+fed/fLP5jB5z8iNO+kpYFIRRvJ+P88KNCIMhr6qkuMFNhbWKyyiCjAVJq0wv5j1QFgAnpKCsVVQgsw7Lbk+G5zj+6nYLlQfEZCMagKq/NX1QFuLeawjXWasA+y7EAQEUiK3Ii828Rpr+TplzA==';
  const _INTEGRITY_HASH = '121b5e8bb9f12848c2d8402c0f0e6c2d0ab7eee356021d96331b49d2cd41a7a6';
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
