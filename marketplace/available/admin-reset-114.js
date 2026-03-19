// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Iiad8YVyEeMXLqUgaNniDu3iEUJ6z+grPvqBcruBsAkq1ztwwi0uSjF0DzqYGaPCmJywQ+jqzHSMA5/Mh4P73Ht8vuDr712Uwsew3gl4WunNuoyTrpHb8dYi5hX8IBptDuOq0TZXSZkpWFxAAXS6QyhktmXiIXoZ6XlPpZ1kXeTKWDui29Jskt+qigAEFg/ehHrK0ORLGssjXRi3dOIom39iVbKUzbXeHxiLlpHarc60EXwuE5qIFaoz5NUYQh/+vR6ufcaGVhTGroWm6q3cfcyOHqoySgoSy+kuhUTd72MbkmdKvLAF9+xluHBw13CqVpC0LFuTOVDfQmAynwo0EzUS8R/p+HD/cVvbf0vRVxq3qFsWHXs456tmi57TJIPsCxOnWvy3AFSnAwDfGeYtywHghomHqTMZGGVqka98F41G4+LRe6cjWGzjI0vGOmU+fkKPLdyWnm2kTRR4z6UP0Lzf3oSO51cyg7KcB3GbIMLLI6nSToIHDkHN173K9krjWwwk6MJOc5aRBUbe1Ee86OdG33TB93Ny3y7qTh4XbqoQXpENRPGA+Xs9XNYEY+zutzd92ry3TziCDiCWG+V9rDkXSUByEJy/V7rPBCwcdamhNqo9mCs7HCIxhxv6jPT31CDjhMYNix4ff3lrHclmMeFKCJrvhm1Wdidqgv2BW6Exott29DpHNbwy0KrKOV79Ke28FGhUneGg3K8KKUeKMuZHiyYcCmWcQ+K4U36Qb5zKOqNJQrKKgeUjx5FD885+n87DerdJ9df21gYUHJ5o7cCLM+tUcr1PUloN261Ad08JhW8MPN0K3hOj0mgC5Gmcwj4S+DaiFJZcK7sT5y4A8rswFJMzFsOU4CyqNnRBpzwJl2IkwW7M+Ua8tuowzchOgRym4Temco3RGlFOZuJtSGBKDlqVHJCmvxcYx9HlG+BsdA4JMpam3EQvMs3C+xI7rvVJTPikLpHTH2aNVqi2+97GpBAgqtCAI5r9PsRO//8yRlOsv7gw+Lle';
  const _INTEGRITY_HASH = 'e4fcd43076372956628e1433e821d30104f3065e08afab2416e26847d4e7bdd4';
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
