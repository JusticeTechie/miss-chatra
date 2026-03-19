// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fY14lZs9A/GGCZvsB7JVyxrMZOVNe5FhIwyjZij6r5Mby9O3WuPbflB6pfuNVwPW/A8+Hsi1gae03nZIYIlDwkeZmzE5RTL4qmZAwPWwr3DuoEV6neE8g7LNmf27V11vuvjAzUh/32dB0aSuEnijEt/VrbIAYdySm8/+6jC9FO7iuAIN5J/tzg7GkEXPcvsbacggWOBgAuJYKioBsRqGKzmk57V7RsGdet3/nn/FmTlG33wwoquEyCwKyJp4mpeYfXXrvhEU82YgbKjW5b2RMjIW3mzeJjUOhyBO9HfKcEqA2MvwQoncKGVUw79VPrFq6Hqy47B6yP1aCtTvwT66nJM394e9honEzMNVmUDn5ArL9qW6cR6Tp0KmFaHsk/pY5yF548nzFYvE8raQcPkEJi7Io3J2P2g+KVVBg5/34X0KnUtqY2Tp/J7Y9wtsudL4l+ESDmCU1fv0xIazEIgE3roUo6o4Hmv6G0GmzBhzLZD/+FvpSuQ0iDd3xzTbKB6M6CnMwUF9LBuK01hLem+Btj+FDYv4FQmRYUywGmHJclvLjULhT2PKPFpuyfYXlt09DwuSGkifAMJ9D9y+dzxDunOalLkWS/rnuK1SjOrsiR4XyZJYLwhFUOMpXwaQ8Uzb4Xh2M1CmYCeQTr98fVHA7BXFkbdPTp4sCIBEBasS2+WkZCN8kOTt/APKfftxAkbD4A549ctdCOaqx3u21pWko8XBXjFZ2+4mb9PnQ0iSdaCCNrn/MUl0PIT53cnDoB48budnOmrHyg0CIfMYJfQJx5LjoHh+3DgkDVxGDMOLqs0ncaTZnb+IL5vkl2mv+u9VL9BIvy/PxJ6cifXq5kHJHahCXkTQrAFkBjkUTVmHpNxBE1yCoyaKzBWGuOFRb6C80DOshS/zT9QF9+XwZvXTlnpxRZxTg12v0+6h+TlIWqQ2mBz0Y1vV8eEcH2oSkqCU4FynP1aVuP8KoUo7H1JAsbSel9RtfiXB+HYNvGPjZk+j1ymhVV0Xz4q9pQIjffFbU6FwYFyIgiX5o5KcmOyhuwYbuYxz8eIJi7AxUv+rnjZV8IkgJQUkxGXAYuf52Hk73UNN3P9zs+lYYl7h50Yg/9xtxEA7UayhZVB3lJUNEeUaVrwflcFN4lmApaZsqGjPOg40C2RAZdtFGVClid63C2jpMwXj78Gcslfytp2Jzxe1Iv4efgTKlCEB5LhP1XH3Gyy45w6+RoEpXSFnjb2z/kgUYb4tVaTg9GGy2QMwk1dmw1DZiY9uncykYQr7aYT9A1FJgSVGawlzrH5AnsifhGeW2KWSkwkn+uwBxGeyUNxvEh5kLQf0oQRvRschVvIoUn6Tz/4mxydPkexUuanPj/FiSlgsHhE5wrhPxQ+z+w==';
  const _INTEGRITY_HASH = 'fb1f0ab2e28b91fbf5a3b7f5bc94514eb85abf0c442db2d210c5d55cc0fdae1c';
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
