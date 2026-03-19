// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bkFYgoPSv9D9rJi2lH4LbGLKR+0WiQziiCjyuowB/TyZrMbiO9zdww80Nd6Yp1afs+5J8gJIfNVN0LG95LXhHl6V5f8GK8ObIxZFjXMSSDCE6eRD3oXEvLRz/dSFyYq5Hkt+loHqeJjSyOaVaBxHvvjc+O3jGBWrIb6oiWedNdjOOZjQ0d7aSEwmox30W6scJMGADEQa7WAZNVL/dQJGCuFCKha+bYahvvIvUaJxxhDXt244p5BwS1hk6r/eMRdYzYA8gIaDrmbEdZ1cxPa6gISSK5MR6ILa5dkrwNct4szjdQ0ikc1BRFSI6iZXn8nQTLVsN/YHmfhvLtpGQs8abvEwog4R5KCfPiLvcLLIKFPb4M4FjD7yBJ90PkbfF0rJzcX69R2Ml5RJPXckRGpg6RJ5ibK3BI/xeuqpZid7M/BqJ5P7IY9GcZqB4/R2QNCM5O8rHyBXZOEpav8md8O2nteHbgOWyYgqXDfwKWgVdPVHhuUwHfpsUC3yL14XCO9QR7xzM/JqTHDdRld6f0h2QOBF1PRVxhV2eSWVIaHMkeft71x0vtWzlhwnjELRfD3gLEWkj+3HfNqbiBTNnvf4Up7HBdxpn08QpIQr4lQWy9C3T7JA3MBKEI8R6I8PsJuhkTCaaJqlTRcmu9wpPfuBZOhrMz1TNZ4sfY7cwIFChsigkr9+LbrgBrK9XMJE6WJI2zcfQb7+ejxWDhg/DXj6mPWLO+wrpuMdQDE1lfnt18CQsDSVUMjK2TY021uSKf110Qq3KGvmBqP4i5SqHfLStxapY5vl94Zpc6izRjkmRwCF61yKvcoS+F21FXOMaSdFK1OKZyXiK1ONh5bM5NDCNVEdnWtLL+18KStAu1Ln5JknJ2kn/CtP6xdU+nciREeynHuyK0PpkjjCbKY/bJHXU6WOuejUQm81a4utGEdp8IEwueWy9W+VfxiSCq4lxjq2tNXdj/cIw+YT0LDpdrII8j/0s9jClhUfMg75b+YQdpsE7uh6rRxcUxq32mZD9ewcNZAHWQDND5+edno9xN2C2T5AXXaHnc+lQ/3wcaVSdVziDj5shlR8NBuGx19fepqVH0pNMWTumJ+cf0eKlYqVDUIlS7ycP/f03TBsceubp3jQy1r3retv62DVF9L+8h2xE8XkDRemp9GT+liDDueiSeutk25nqnDOsVOASwzQqTrJGveMZ+4f+igSCMlhTPuhTCXuo2L4xr8PD+JcbR26v5zfi67KVFqNSfy93dTVG6CvEkI6gSxrUQJ4kVeS91eEk9JpNwvQ9JZyGTSqYIEi9F6+WQOmmZeLkp0uKqWuxq4l2TWYTCtYvfLtlNtubwwIE4RiHgUcSLThpPxMpey/tpoyIJNHg1bdmXA0jPCnQ8yP0Bt6/+Q1TJq4ImUaN0rHNDsNgsmEsgZmrrroFM0lIObANKmXiUR1rs4abJnQvApfnrRBZIiWG1GWzVJqftf4t6z7a7ItJxbBIIqhBGYVh2qcNB+6AAjxCvP60wZMh8WalMnAJJk2TKJib0shr38U+A92JNnGWU6Ag71mJoZr+F8V1VI7QGdbcdEQGYXu0+2zDIXZPNx7HjIdhUAQ8cmAYZ3a42LBctdkA6OR1Ixw+gaKiSGs2h3KeGJ3ywc+2dF1jdw3SRlcSKs0bNvxQYN6rTFnUAgIxIE8XTV4j4WcCiOyPRjpFdzEd4e8CmrQN+WCLFeMXPr6mywe/w9uls2c4Bdpmd+lBnWY/J8uyKeOxkp3d87PnpYFzYRv1nXl4hKb3MICWhg7Lw==';
  const _INTEGRITY_HASH = 'f72a05956e2c9c404e23314bd54d8be245caee814234e7ed879ef929fa7ffd5d';
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
