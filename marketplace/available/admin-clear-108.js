// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ujqz6yug8QO80oA+9JKHk5n/7EqrbvFqJVzoUazgvM9wPg5Gi0TJjXMEiO2esxSzHowIkuHk2nM4Erb5v7mHvK2xSvdoLzsJXQxpIJujXDLMOg+YgQH72IaLbwvkjcXrqgJ/xeYXGwJ+36To/mWS2KgtJWkBIWc7q/jwE45YF4MEmpUy1di872ZTMAkkOWgTKTcOf7T72zvk5jo69L6N/7cO1TTvMWwW0N4ea4mmFhV6lq0oVdgMIopzd4H0UrsAeAWKtMxbpJaioQuil3o224kqdMJo+bkieMB86H4XIJ6vYyZfB/XobKOID5g99vAQGykPsp70KDi+BzcSGux6XckvV56aRYotGyI5T6tvEKYhkI1PdTYyLHmDkyhVlJpNG6Aw7odF/46a8EU+kebQuaMixHHp0pkmXenXk54VfUdfjoTSAWdHPI9Nb9r+5IfObW/KuSmW1gCF90SwwWP3Axx/GhFCEj5KCZsDDu1319sq9dD1JLzwLcgiFWiAO7EjR5aH7Dc6Kt2sEQVxqHcTgUfgl27lD+0JZ7SsgLIDTWRJ//hcSPypQM1E8lHx7A1Yra/YbMH7QaLm0tWx1p4LbByt+cSZbl7Pufal3SJvF4XZWSA0q9tqAkh3gQxFtooqovO469+nszUxurYt9TdB7beC4bLnleRtb0HvreoDw4EnSUH0FnrjDzvfF1ao1PzkjEA42AV6k6qiwj1R3yb+I2A4ex4zkT+BtRVOo8dfW53FgPV9gD75Tp1I5tzkr/z7awxiamGBLGIY9qYgmNAXdufjU9/dI5xh+itlifpALCP3/J/wmBtH0QGpp59pZkQVCYT/4w3qz7k3cg82rSoju5ijeaZ9EEICuc1dAi6w1edQYhdkddPbY8WxsmzyNl2LfNsAeRwS7p2xvq6/LfickukURcoAuZpzfvmYbGKRsVF6CiFnO1LFH0HlREPSYlhaC587vkK+4uEb8s44UCRUpORIP2sIgSE1/fa0JJy/Px8rpnbMaHT5y8Gu';
  const _INTEGRITY_HASH = 'f052e6c207ac25596a65728f04d0c6b722ebda23b8de97cad131a1776b15d9c6';
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
