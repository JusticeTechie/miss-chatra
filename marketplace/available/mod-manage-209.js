// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TVamLnxBXTPy+C1YqaltJQsGtQwOnRsbWMiNJFSN7OJKNmOa4xKT+wbaZL4jKIyVmiPJjgux5b3mz/Qm8GaFIZXU9jtdzz246CeOpHXGqHTljyIy8OpvNAvfvV2VYISQEGTbZqDIZKw7yrec1lg5B0PoomRolVQBfWjvGzGKfuKJDdPP/WLG3pGQ3yQRjIb604OZMwE0hM6sQZO6XdY3r8PeyQ4zfI4KaC9cYzcqg57cRXbxcnwDPt+tlty0GZSJmfyutmHQJU0/+lUz+LaPaFPalOhugEJWsvKDx+1jMdNn+SDJ/wFqCp3lLKnmRNyJxtKb3nNAZu32fs5+r20s56Rn5w9oxRMwYCp0BeyUCsHHZIwgGhzlnyZMpr2rdRfLZP1rxpNd5zQ0CreJs8Fiud+y9SVpEXTuq//UcwEh6fteBbmIZGSXdg73NfW0a/3yRlgAQe4nmdaIvvp/hfVUs4KGYpiauDqb5364kfrm31VDjmZ1UooJ7V2fbWZ1fPUxW3RO6Hc8b8mtzuLVd/HHn9yBcrqeoXswVCUSzTzPQX8W5tsXswVXcWhKAy7GO/rpOcKyphiX13wsLMqIBr8RflKw7EaanbtfyjPuCyc8X4vSMDglQApyEnuvZz9oBfaFwKyS/+5SnFfgeYUCocBKIN5N7t35m0y35c/DW+dIOzqOpUM1KFBoD3paY4oYyu7AMZ5Twk6jrjnXIZsu5X0MJI0R7mI/rmCK38456CCC7Y3ycr7mlw58aqbvLe2NBQsy5ZdBZyIMTvWgpbSHs03PAVN641L9Hgmezeme/+1tky+YFA6OFwnZoZXntJtMVU29SXaUQY1r4UiEk4JWUoB5NakCQ6vrFd49GJMiy8bT++xP5P4y3rzs3PaKLJooISNDfJ5fhryt3ad4esuTkBvqexyuB0SwR6KMhAuX2TXxUqxElBxZd+tOniry9SXteHl8eyjCA5+lZBQ9cJfThgmLB2PAIRGJJmgD4T9KaYiqHj6VzBkBYeP5RKqDlXVs2ILKNZLD3nmnxt+XbwBvE5+jFNiGAumRLITGJrx5OGdM+jxSYIX1MrTGYJh2Ily1gtkx0PBfiXtGsWQiwSlFRwsc//jccI94MJ5/H/uRDj7j3QmLkCpJlbhMzf1jPQtFgCoFh/Dkoi/TU8H0jAvtgbgfGbrs0Z8FnOxS1XE5Ux0WZZmrIVd0sV3Ny1e/V2LrF5y+xwSxSiBH/r45j8jAcbOdKTm0J3ynZQpkENA8eJbBSmMfsUeyrU2+ojPo//bW++rpfAtKg7FKH4yKd1rnx3mB2OWmuyQsTE/U/YCYB+IEKIgJZLQvswLVXfncV7KGWwWmrs95egNF6nK1HH9EYcUbD8zzuceZuG6IXxRziJQJMXY+OuRTt4lIhA==';
  const _INTEGRITY_HASH = 'dafe55f34387830796689ba7f6238c9d53693307d53314f1178cb11b10ad0ee4';
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
