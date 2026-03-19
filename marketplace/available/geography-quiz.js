// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GRDufazfjs1zdadeK+3PF/Xo1ExcJ5zUmOfHacHz21dFZJjwea7+YdbHEX5Q+sq/xJz+uV6jVR/n97mb/lhPq8JBnSPPzs3s3Tauho9r4gw4hI6OzDQgF+oW3W8JWLcVj/jRd6j7l1mfm1MIcvJK4uiOfsDl+GVSih3F1ls59OmVYx1gD1Ma3+us60EwsRvmIpN2DkTx5RdMNgWR7BSE3PK0ronVbv0xi991eMTgmA7sNs02/a8EuoXTKl8vGxjClHEunSzm2W9yDnwELJqTk9G//4PNOKIAUhsr6oijOZbSyAVjq9OhAOeq22wMkSD5Ebc2KxcWKtE2Ri7B4x1VVFtB9JSGCuDsY62nVkM5uY/wFgr+zPxXiD60xPXificsEyzsCii2Fu7lWA2wWhIg+Qqors+lNfJy0BbkYB9t4KmsNgqgGzHSvmk28IB4YlX7iwl9dl/MBENeN8g7jdv4pAWYDWlbGhHR4fxE82ikGrWtU9IOY2LteTvy1ocxJcuktS/0qUbMZjTTXJx+IeqlQYV8PiuQgiYPGJsH1Z+plAMlTEHMZXRVdByIcOERaXF+qPnNjNbIg9pgxsmVcqvCNOW4UquobA4ScwrRwz4HPXi3zHOuq9EsF8mMnP+aUoNi1u91bbxLgW0vJAJTzZmmAw4C83PBGbGZcqJ3iZ8tAhmJIm3wEvknNtQTv/yPgVjdKOmq1oR6l2CdMAIdTOGoyUR+ewVym3/Dq9AUEUZse2zl2JlKXa1Nfyeq75LqV+tkY9CXQqvHJr7Ms1E1QYs3bQVh3443Bp2lOPz1KgZD8Mdg4T/SrS7LBxOg9lw8yIbaY683XDrWauNJAOqodeHnonWz1hOaqLFYv6KwfZJPqWTOarOFROseu56RNuqRPO67c0G0op2bePA/prLKdTrSwjM3TEkTuEqhzivFi08cL77TXliNS+nV9GoOkDclpdlUjbeY6UWpcZu8Bk2Ns62A5DHZ0bteNJGy1TV9EdEfqy6y7BHFdwz1ldVlGigLXDZgXLoIs/pLqdtIgM0AlMewKdDvY1UaywQk/BPhZAkyhvQtkXZfbQwFulnTbuo8jvmgQBl1ziAd6bovpZOt2n3PVGXDdKz3CMNarkoURPSlXqxoufYcaEYFaHnmVcqxoFmvwSZRobIZFuFM9dKVbbKiFj0KmRZP6DFZgAQc/Prik84OkXcv9NJXYFwWl06PAAp5RhtmJcWkoVJQkFO12rAIqhkYTq+9eKbNsAKT7KKU/rQOlMhf5b/1kK0jlaIkBR51DfLWiFOGP7x2X0Q7w3f86Dq/IJBhw/8Unv7zbpTZb4qn07cXs5pJnIFKNLfMCaAqFHQiJcVYQGK/fEQ+i13F4519V6DN5vAAL7aBQp2wqPfbphCc66uiyg/dUIMWDDKhcvrqXk+XF69X41Xi8PbvDjmSFtBs10TjUKNRmIR7sByniNf0yyA7WG0/xTisP1E1M1qzX/DlAMah99J6+rgpeKmVOd0kElIDOW57iHZjc/D8PLnMM3Wn1yKZrm9IVICMKWzeCABCbCLsjX94zsHOw4Q6oLRlOK1/LA/LkrzkFrzdrPrc3k22A7569FQlO8nqDooL75Y=';
  const _INTEGRITY_HASH = 'fbaa9fdb610bb5ad8ea7640178ccff1c03ab2ca98d5bed0493c5408fe398119d';
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
