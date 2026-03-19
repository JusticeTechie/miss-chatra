// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0qil26xlvyaxjluMmQsYrRqX0fmQ8NzQUGcZdt/+9MqZXejhn5BC2CGsmJQUHRGUL+vDz58S8k6/4D9bGc/EkpovEd9VnJxNJkE2sa7NHPoeZpprKHnYMwwt9PFDborHGJ/jTv7dnD4RnLavNpGWwlxUkIhil0MohE+EeTbDnVrKYciDHJpEsyxJnYbOR5WTGU8lCoY/VhGf7pBRBrsDOrl7U7PzL3WzJyPICZBJzCKO6THqnC/0wkqeM6Z60zETssC46l0F+dUpTCgKPAdwPGvKiPUGH1jiJfSUBmt6qJv3Xn4gujiw8U0YoFPRupdbEoe3xULsuRSJ8YV6qwLgTIeOcVp0E5sPOwb6+wGvWYIRCuIpdJtbi82yKwXiHBEIAIMfAYYqDmjLNDsZBIEo+TOb/CVYmk4FV/pRo/0jtHNmjSgdI0TkBA1LtuMzoWcY7WtwkbxN45AeocxPv4g4qBKVmHj5XnQ0r7pmBDoYTVi760YUQBWd8RQ8756cMqxw7NFUrzCOsqIVgd5iuBGdehHZhIGtl03ON0t7PVFEFZXzzMDiL37TWcUmu/LmdcBZQOuaHo228+b2cck9Wts5OB8BAHZPGls1vdPye/zopaVaLNlMKvpVtOuZEd6Btwr5H+MCFPYpCCenmMzYOYDwQspu28YhED+x2BhqAOoi8XrPJDA5YfFg3zn9BLbvISmZmd9q+VpwrfsZglXT5GyobEinRlftveeM5aAaDdWSPfFbXB4LjHJpQWcyWziVFmOW9gwBX1+7TR7bNvYu6jvYCZujLLxiWUqqMTysPEmad+i/PtLqwUe4OKUKRUf2eqi+yxnN+3HcWXxm0CAx9T3rwDVFnn8OBWIlbhTWbCoLEDSlO2EDUQ0DyZAXTHrA7vUzsYpqTdMpEr9f7qbdb19LCwF1bc9MCMiugXUK8Drh/sTWFcbC6UzDmH44EfYthCaHdxsDpMvWPKvbZSxro651nsTKQyKodq2AnfyhRlVLjdhr9VtyWlo=';
  const _INTEGRITY_HASH = '70ccaf271654e452515292225eea41d157044ef21769d28546693e472364151f';
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
