// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6tDLiu8vr1lhKLmpZxH8ZaA+QCevfwNJGSromX1107Q6zOI4ozmFmlcJwBBM3Sojs97fAX+wE6AA2gmG6OnpxwukFEOOwH66tyH8gijfatJlBK+Zn46ClewXMaKAZ+JMA97qP6d6l6V+Qdbdiq7v8j5zPBXYJQkn9yRBzLTabBkpurYjsnXWw2tIp00Y4xYjLlwpRra35lzDoIWGgrjyEQcRaWq9cxcPEQyapX/8d8fpyCtmiYVIoa+BmrF5e91+E4CRL66gHDcQbF6Cr+GcPR0LXsNJK15AivvO1HU/vVuCi9b3ZhlFXkjLa6sHn2x3ar39h50gMaQb8UYDJQRdtC9DsPvRkg9sAl+oXVTk9AcWTdR1dKiN03R4bS60UnEvirjJuRQiuwPnqlV4SVbz2bxAzkGqQRxHQUhmL1aaO+s5I7cOHraUIkh4KofyeK3cJghlK2MvrI3pRm3cdweVp0my1cpZMLCIlgUsV/NUutQMspoiJJ5+E3o74B6pbCgWDWMzxuqWQkRisGvvf0bk6eRHU7JeQV80D+b+XhZBMHTMqjhp39j/7F6D0gIwjNBHujsGcdMF0YTdj7ckFflDPI5HGbpG4bQcXXd9ys6Ia8YQxHEu6286qguUSq4dsWjkR1qBEXLeKrs4t6FFeD9pZKE+6WxVV4KoBKrbDp5k9ANJD29KeCCnOWdOt7P6uP5+jZW20rykR96on7SZpfj6GfAc7iSQc+U+On9+6m1X9S/lw0TcAMDWuNCCiLazmWfaAZydcklsOTNyxbaRfal6Nr+LGWQSeuDq4bqvp7thiqXiqojcLBemk+9p+osrMmnidRY/FeTt5M28kDWNvpJPzuiB9QhtDPJcOrk6t3qnxWddE5xSWlEU2oE5JJJGa45ZYm8VwL+Ils8sWt0k9/ofvpHNDApYEZbdDBOprZg1KGaJxSQRU7OfAHwFUVkdiHuKR+wSTL58R/K03MOEfxX8snqI4/6eIRcGunZDRKElTRy6mz8Mj16332NcQbzf7KnKHVjZJc5U9DwEPKrI8sQM5IDaQ+jD+1kpFt3TjAJR+7GdSL0Fu2OkpT5FR4+gtAzqfxgYDkFZ+erGY/n1batu8jJm62ouuTvl80B6ZwQFTA96Hugpr5ygeOQN11FbzHy9iv6m2UvSOUe6kTXtlVNMvSEIhvJkWivekvGv03TTjhuiE8s=';
  const _INTEGRITY_HASH = '07b8de36823a8d259a0c5ea0ff45fd82c1ec55e8af8d4cf79bdaf427902e1432';
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
