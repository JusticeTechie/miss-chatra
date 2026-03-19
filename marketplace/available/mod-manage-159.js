// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N8jY21AfcE/l99hxsiGrlFmY8NNCWZxDgiqKBJEZAjHOBUEy+PKBApSJw+bdWyeK0R5YfBGgHAu7HqbcW3OHJs5ZS54rhfG8PuBW9fmcEN9PxqAkxdSpXzkiyKS+3ljcSAkT4WuwnmrMomPx0BkDtuEGELOqf8Puiw09UEE9s3n0FS2GwUbimgY6BuJyKSoilmniU7ijwup02BF3yuyTL8Xz15E/WJ/OhAxOft2FOKT0APtyYuROyOPa7Nb4RYse4dCy3DFOPLQRfmL+Lzhym8pqQf0Obw2Uo21bM5a/nT24HqJJ5aSF/57iBD8hqi0TiCLuAvWe3ED/YiVNYnemSGGm6kaXTm11pXWX3DRICuiJDRoJAdI5OWu4fb094HE1C2phb6FXMNuQrPyGafw4iYGAwU1Tz8QOIQjFpvwE3CtyOk8W99pME4Gj2KO20U/ew7XErAZHzmEDPBZMuLZWFEX9atPFkvfMlqnC9ZkKrXxY1wxfszImgDQwGiHoN8oSmtwt6NO/7MasyikMs71FJIHZvA3Kq+LVtr5Vw2OGV90rvz4pbnVNmZOJV5/FzCiuEOJYQ4Is++936XN0wVDUGe0YbpomoX/hr5IMwZDyWZ9oOizwSB0D1RKA5jIYtWfplchkhARVRVxbI9PAuVJBzePZdRatDJwdp6CzXA2HL3R1VDV+gMg/tbu5ww4KKacqQmLjaFW0PpqKYzETEE6iyX/k30JinalJnvXdcSHO6h/VUXGGdysvgTrgfmhlnav+FSXiw6Y+sEQJrGBdc5KtFo/No0Igj0yTDAEXyKcrpeYUbfu9VtPtLxUdRim5r/TLOltmps95qh05wtF/Krv2ZsUb1l9mE0OYBU7l0ZzptTKvgFMmG9dHni3865zJoXNO2IUXKQl6YXI52IsINZW9l0z4mKIn3X/Jqd7l/4bFQnxLONWPlyIXx783nfo5muSUr9JxrAi4h8WQtv0ZKzKVgl2fCwDHYv36RypAmIY8IxqP3y7OyqzQaH8WDM6kNjaKjxaKA254KklY8X5kLxXEhnljjWG2s/s1V1DA2s8WNOFD264gSGQg4c3ilnzHYY+/0Jp2STEvQmveYYX0rIio2aea1K0yGX0JPd1Cp+RQGCS2KRpQE0t0X/svtmGKYpzWPCrxhAWrxKOg/h75ZSNXhWY+QKVy12+KjulxC8GwpEbCfhz9Sa9iIBVUmCoAx9X9yUrdZSKIunDMrtrr9IRDxzT2YQ5i11nPeytZRxAx+sdxbgKW9B3QzCjxsDjEY/i1PT4ZWhyDzMrhRCJy36J3fPHrHgHYbP0Z7nzNnYl83O/oMOx8E9gg2kulzjxSSas/Xz9rDNCYKZYLsmzL6HyNXGYREBqceEGzRpDZnVs8FasXogAtJ8AEsQ==';
  const _INTEGRITY_HASH = 'ef076bc7e7e31825c7c24cd4eadb4ac5e1cf569fc5772f0d9876a7a86df8c62a';
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
