// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vkn7L2xYXFnTDm1sBbYzFeyWsD6qyQLqIPwJHX4r/Vq/1nKWeVSn+MuycUNqWtAJAtinOX/UbbcJFkId3VFk1mBJa9Q39Vizt2kyy4ih8b6KfJvNyRpmKxYlibmbne/GFuA5KBlwQGtvnxWOF1NBcUjOhHifqdUDg0WD5BJTeKbXV67v7SnZwWWEg7mE5hSFQZvHhFRaSUa66kQE9NcnGf12LpPwMRPcv0oQi+BlFN7Tk6Gqxs40HFsVlDfc2QbO7q2DXLCsBPtfWf97+k/MIdylMLAogCDNWg2zRx0LrbMhqiUbj5E+pjRlJKyCKL3a//zcsoCj0/T3eOIMdXvWhobmsGNh+O7xk3p7urRyLqwVaPwDe/qWuVr1hi5iHr46qZDeRT7oW538PxgAThL+yq87LNGUaq+CIKhQmohKgUz1zxnP+4btZ29hOqbmqm96WvS32QfyK35KiPYQi9GWkZ1ujv2StHzZVNzd7OIJdiBhO8YbDdIdd98s7YEnmAKFaUQAyhYzRX8S/orKPXha/9VmWpcxyFBrIufoIgDsQpk1XSxZWOwzMY6sgx033H25zDT6QAwsIHWNeDFh+LBaZq5REk9Gu1/96FN+zKmFOhD0sZimppcWWvIOI5ATY8hsx9xFd334kiNEQ4iV6Y+dwBJOwm56B5vtRyY+NVU7AFyCv2MS1/3zFczrfr99HcU8jB+P5MXpSGDq5tYRLBB29WBvABB+0gdK7f0Kf9BLQd1oUX8EoB7zV0oXxDQWwAluBWK5zKxNixcwfiNS9v4sSZvcJfP17REqd5bdjB5lnZACKsvUvVJPvRCi5lqHM9eGeJp2tm4Fe+xy7H9ZZ24gwt5z9lqqPbybX733cuaMG58Wpj8LcB38qjDIikbJ/pPZ4e5Q6BMl4rG6YShmyUOfYRqeD/8pDKpPqaGMcdJ2X9EDs98rYjJTnoZgO+HQ4VbW3xlzwusCG/F7y1pCtai+kzjcywdCisDn6hth7rLfrdzH5CQdjhdgIheE490Q26cjfo6LFUWvXqU=';
  const _INTEGRITY_HASH = '89ac6816879419972fa4b09a41fcad9ae952b554c84e7d676ab12227a3a433dd';
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
