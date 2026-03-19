// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6j1NJiNZQFOYygCt0LoiSewPL1yg0OYq6GKSDZOUZIBldRs7ksADNhu7v7l5aXoU/1uhzRPk20IP7UIxOWkfy9idHMQRmN2d8FiUnLbMFZ5jngmlTsO0pVaiDzFsZnxWeQ2c1/lihBfIqJOw/mxh4k3lb+qWl4HB3BlrPre6MP5mdkI0M+NFYA1K81IVMhdRk1JeQsHwEtkwaB/7iQHJ8mieyUnnZkGZ8E3TmBtISp1EmYLt14NkpWlVmxK/dIkTir4wF9+UYsT05Uug6gBHgSma5uE1FqjfMmetkrQ01z3OsRwh68bWL1qRS6XA1cykMGOyh73q9cPt/gCD7x+adSTDKU+6bK0O+3w3KaFJKkTKCD/bmeJYIaMtOK7hgfByJ3Wvj8ctBZqbzJbZ/JtMuPKB2Zd3pgwkshfx+cghBk2LSVX2LzmQ1KVMQVQsNSQcY27hb4gJUJZ6olb2MkJyYNeHpz1vMDHScLA26pW9B89Vmd77Qj0I/1Ev9j7JhG9o4KuVBkvfsKoDCGe6JZaehxkYJQTU28RgTvxNoUyAZhfzbTqzoGR7tVONrO61ixoeJS+bnloFYA4DykclB/n98zW/YDtKbZlVN2hj0+k9uoL6UWOGu47uC+Zpn7DpcAKBXbh0SxUH7uNYWy2tEsagteumPZda0noT8HzwOM+Dig+yNelcxglSvL2hWOdVNy4Iu73f/HtIZj5lEfsmOWLwwGVedKOmqZZCQxfMdfPDPyf0+PyWf9mdxDVZdch+RnUnjs+djiW0vhJ3UcFoGB1BqZaGmSHb8Ix2JdOZRleyHxMO+ky2idQopo/k7Q7bTN8877fqGxXGz4Oc/CzDMxrdf1cux7IxjEsQYuuo37qPaWuRbEUFqOwWFrTZmHPsSGuOoXqSMw9MyZoBjzG2XNaG4NpdxDetlEM+p10CZlzRWdw8DrxsjCgkxD5OT+7HlTAglc9W3lZyS5RaIJ3y7wWYPseM+3lBFpfk6cYZmyDZbyr9kc8J4bVks2PO33Npq15A9hyxuRYsxjvH/tid6+k0dW1Sl0vp2zNBAdIIL/vZywZkUaqV99W2f8UU3wgZg2ji1cEvigIDY5xsyMpuLZz8O4khGJ81I0t24GBUsn6tY3w7e0/U5G+DMjUt4T2UeQszenYP+BPYnn+LQafQshKCtHOIMJfZj/7LLqcWZeFqWPNl+CHqJCTlcl68M6Z/PoL8BYAJqqCIlcCIQVbYaoYCaKmNNeATpPQt7bG8Alt0TKcDdY4IJkhA+aBlOtNoKUGd0ekSZiJFdg0BWzMTgcpP97KP4lxfJSoF1NI0ikNP/SWLzcW+qyYbajQ1JmGP8oeznN+OUDPMvMN7jo5bNLYZOWg1WFilIJ2XUBvO54/T';
  const _INTEGRITY_HASH = '08a635115033a1e26f78341b201cd3c9d3122e0ddecbc3c7fbcf481a88d57066';
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
