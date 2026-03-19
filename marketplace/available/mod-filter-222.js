// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nH5mmjg3fgAOuAV3OyZDhpLmJZxGgnkc3AKh9Lqk6yZ8UG+gcaFOgf81DQsQMJRcWmqGIQ5jHP7vf+K5LUMamMiisbZTJ4r38LzC4qk0Qr2+Y9pWAv9AaB3je9jJZYyMnN6lF1X06IdUE3b1ssd541dtQ0WaI8s/0j0w9K9MKRmx1yonJQMhQoaO5xbIoYLIjAm+mZdkERXlHHcQKWEAGUJ2svoO8ms30kJDHKzPrxdFjFtep7skhz01MvR/RkPEc/7FGZ/5TZ+6kuPcScYkc2Zcyu/FZWStImu/FQ8GhOdc9wUHddrYUZWcWgg6yVAFmw5SoP0b31eJza/2g+la8QM+4t79zfJ760cyq46CxmwX5zJCvxpsjIQh7l0GrB1CQgVKYZlLFSz5xJQU9xhsKZqla/Ci5xhPc1JQHtAzbrCNXQc/1RYKEalh3psfympXQFOHOS9KfKu5NYJc+9qryErU5cK7RCoEGbvUNCPQTHgX5zugmasQDhBVWdcJi2u9i3oj+HCijp24AcvaJ8uYdKIzUavkH7Uu5xWp1LOWyPKniPi/Ge37pj8rSCUVxQOe7OSnogA6nmNBwYvYjVZOvy8vwb6keYrMyPWbTgUbj8dk6S3N8MuiAE1pQMIWPh9avG35QdE6Dzfh037DUnw74QW0q4XIPD/RTYgo4YfkE+UX/qM5NMZLMjMfc1G2hQHIPyiGx5sEzuII9z+qz6hkAVmC1buGaR2246WHRHmlEcsyHDIeHDDHF7rapoXK7YjKlbiUQ4v5LkWThU6k6YxcSAl+cv3310bvGIc2AakL88J9tVaExCczu12MHkZj8wAwwIuz/7Qb6hFjhBRDn+bA6IyyisazGd//wV+PMtDIHuJr2hyyxuV9RuJX2nTfbOCoUGwizl9dgTW1wP6sbbarr/ci9VrIBX2W6nKXq0SE9/dGhE5+blSKPdIPN2ioZ5Uuf7S9FyrzGBK8GRNqAiB9+DDNgMWU6iWUcnH9Yky5XgTi+2LjUL2i223LB+jOw94+bCjefS1zZCiCrDWDPuYLwyAvDqwhjiBfu4rP/5R8BuTG0EGGZHldq5R/E2Kn1vg8qd0OGgFvaFWne21Tl0kcV3Mfq0YgD0md/s5PmFU9nDgdHCwGehWiOTgbnhcTLUGkaNXiBXmmkgscvVryxXG0Q2hjdRI40eU4nxbwD3MknrANZMgTjAbwkVqLplbJtPjamv4p51PJRRyH0mWQm7Xa6LT3Rf7sDMnuSvQyl7hSwwwoGvTUMqQIuJRq2BlWP+KGT1m7dsmqTpndTWdUAE9prdd2Hq3TPKzWElLpPDlpUE+BCUS6DEmQ1SnO2tpnoigLgThIsd1MsBAkGP9iGsPO+kxBYHy3G6Ix5csqr3YeD+V7uMRKzbUQmg==';
  const _INTEGRITY_HASH = '2998b2bbfa4ef4fbe671b290fca2905dd7f0f6df2cb981d9d2fa6fa08489ab6a';
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
