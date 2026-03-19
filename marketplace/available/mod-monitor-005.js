// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QbhFhJ4tpeOtnzXFTMheCWLs6yj7PXrqRfbF57let//I5ZHrP4DokSXQYOqKy5sq1CvqKqTz6xgLIWP4QyeleWckggmS4Tee74GJwdIoJpavhY36OHAmdDnrlfCm07m0ob6i8+nhqb4UxkWKmhkaYXgk7Mq/A3y57KCtINu+5rNzISX/MthmJQsQRRiNrtI3M+NJQf+iy3GSzVv+iOxCKYNCwQkAkVKJ+TMdnVsgs49QQcLj81gSLR0+UGecIHoJNTDILdSZk3vvGM/JfcUXrg3Ci5M3ZxFW4h5cgj8bRASYGaxeE4gNwIXgjBOZVUbMsNtx8+RRJ6FmPGAgM6F7c5CwA0YMnWdbNSyvPqflK3GW4tUSiBuS+rUDLTmb5Cv3FyTQJzNejFGBGM4/+5hSUHsRr1diDQyjLutyp1n1UA6dWvNpnLA7ijoIhCou62T7IN6S2cisVBTLTYoMsGuprtZJWnuJ1G6w8I2QtzQfbBFqnmTH6E2eUr/ofXZN9oy9QiywT2uRVpM9cLy7XMZ7mdhN/jyCHyYDJFz2o3IAHBG40yvwCTWdhJY0OoWkBsE8XcYYa3cdE60jMSfwfrJwebAW1K5YuLDlbcD5Hu3cXI4P1mojee7AFPp8zeYWX2xIMxEX4mkoQsOHOvRkWXsjjzPm2Xto7snB7fGGlv6Yy5dKb/UjYDSaCC0pg981I5l+Hk5p+yeFOvox31lwHnZSix4h2Ep1ESXLsrIs546P9VgISP0VDcjxDjIN00OSot+vlbXT1FdNozsY+aN7hIealy2crnDxgzw7Y12beKvRmJrxCSytWsG81sGyg3ZLA9PXjD/dD0MrbbI57ObOiK4364xpT+cxxGO1qXlUb3Cnsv/QM6OnXjHE4gzB5LnxjKGERQxVI81Je1ezowd9HV3uGZX33qOKBKAOyauM/PdMLLEgNNQexNBWVVn6pmfQAUiluWzAO7ZGlmv1GqvKeLTH2Yxwa87cStjYVFpHOBNU4lp/t0CWKoAP3G1blPWaJHa5ynIcJLpqp4T5HtCV6AM9bywwsec5LKSQncAhfQI/ccVvFs8X5QFivHpbnlbfQemX/VNsCbLNfm5cxwnkl0rlfDYU4QwIxPbxRG6FAYbG9xnvj3TlGlFfZXryzhRxcofrCiGVZThg9dZLc3DtvJHvhMUeldjsRsDMGJEL5GZTrZqgUgjiUnrQn8c4MBDo5IVgIzo0QMbdkwteAB5nQBsx+fRIZnP+cxCuulfiW4/r3XGqqdxAzCjpDSBNwj+9Ey6CCWJK78FO7dO845t0nemBoEtQWEXIlzwh3zYvQXcPcxERVJdi1KDMWdcHiwARlEvjjFtXJaa5UDFoxuZoBP+3x505c/Dlj9s9OIFs+zOc/771ctYVO5Muvw==';
  const _INTEGRITY_HASH = 'a9aebd47cee10ad9d7097271016b473a81ca93058f7bdb837c1c1c6d1fcd8764';
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
