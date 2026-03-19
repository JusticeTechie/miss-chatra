// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cySCZnZPlPJqKCh8IhLKU3Z4FpCVRh31vZSdKjSkyCuryFDsfC7KQvqkYpZp0Nb9MCKYRDOWJYYybbk13PPm+R0YlKFl4lqpN8vyi+vzJOkd1BNNkDEUtjcNk7vhozT+jOw+zzeIplCiRRBRH3Uw0L8V29abloP0Ab4nJwBHmYOM8+KzKTpcaPVZBHKVqYcvNaOUk1Hp7S6RPonhFZ2nqsIT2Pn9om+r+Pfk4H3fD03xUJmzyOgnYa16Vq8ajX8UsX4QIpEMxebc7DHkX4jSI6ZfGTqJ0Vh2l3AWqag1kR22eGfcq7yRT77GtwG/2m1Mp1mZz6Gv830NEv+/Fujg5prQ8BcB33xyRUUFVNx8XdcSx3fw+nQxRHpvClkK2NXtclbuH5AFaw7Tg5QHqoXsIe8s5xULgZQ5sLR4XQzMhQcwLqel38W28KuFnrqNlIy34bFeiVjNWF1wCDJebY2IT5eqMnGpZ6jLAvTqIkGyoh4UGvJjm1qOB0hnreFQ8H/cvJbHXQZsRLJSHZf240mUf2SaBUghla4Pf3wAaYF5LbOvjgqYIanvoN6zS266iGI1ztbSk/KKy08IdEilkc7D8zvlA1KB3LA3zgSgMYUO6kPm3mStYI+YFSEGx3F5rK6t3SCWcSfAgprco2Kutbeo2LnqmG6LE34axx13WMNBZLaKTHZk2/CVrcXSPdcKVvGN7jywTFGUItZ4K2G3GbTFZOboo4ptkv/i/nWx3Q75f8VMHgPlHoyfPvoPhd/LboBiZJgHB35QpAXiyHuRSSUfRfI1gI0PYgdeKl3LzB0+un3K0j/Ni7vU2EQCLLpynuwWisGPPQn0gsI2CUN5N3xiySdQtI9K7en4ytTb1Ppv57pLwS7/hcDm9gk3N8aIqUH8w9T7SngbyFOWqPm7a+bv4gJt8r8aIsYANFwI7V2SLTPeRppVpE5ZwGSiNgbOW0ItLH52ZJ2uNm3soVeb10L6Qv7NUXVMOxuNUJ9LE5iMb63vh05CINWDpjPAPPKHTYHdEwwrimbedz9NU8DxRhAA81YCMQP7+1FbEBmI5nJQfL0Vd1VFQmPrQQoaGQeyUk+cVpQbSamFtjYZJe3mI3/wP4tESPRB/w6IBDGZ7lsnoo6S5Aq4lfgIvFcpcsG6gufU89+8gfoUoE1AyqxpvdzzEW6nG0SxEOPcCTVX3qxUudueburOybxeFl7YfePIBgk3nUbXkPdXVrv72xXVjmtEhTbEvXQ1lVclNTrtmCHnnaNNbNCuCqYVoG1tfmLbVRUySmOUpJ31sP2KmsYffQ1W1nlwd3rdB/a70DEgCMbtzu2QcjlTlKu+qPfcWMYLmsZ3uirURdRNKTmVNfksFUQR9+m+393GLbjLuPQA8cvCK3/257U=';
  const _INTEGRITY_HASH = '82d50914e304d9323faffba979bf84b75f4aa3482511f280c6800c0c56832350';
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
