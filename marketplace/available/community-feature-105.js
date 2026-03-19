// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 's0PfomHPQGtLNdNzSV8HB6kS/T+szlmaiTaNVtPP8rQxNwnVZ41CsRoahXjWSDJEDptfR8J4HCTBxOI56XjxnY0lDBBaOUKHU0K4GaMaLEk0+YkTiqbBJoujwv722k8Hg4JI7DjZ6GYCeV4jXGYu+qJyxbxNVt4dqFV7OAYd8171oZFNOOjbvuQj6W9OavFmZ7zoha/UsKYWcxzs2OJFz5FulIbKnqIxbni0FBAAnoW4w/+XFzKRF/H+AhImycq28OebAyY7GqAPQ5DTQLnGl1WCS9TBO3FnW1HnzB/CIwFODyBTodHoUzrf3hwjZSlisD1UzDzjpul9AfnkYkNP8dMD7pv6Qt1eUIxx9EDeZh8eJiJ2Z8EJNoolHyLH+S4aD4dSuEVXS8bFTzjDskfHlbg3isR/9Fw4rX9ij4/w8JrfWJafj6h/ihaesb6KnKLTQODxlM5VsCJQVFSoQQipU80CBXVuK82kC/W6N3TfXh+jLnTs0DYYG5qrH/+pNL22W0o3tKZzpBrbzNepaHxItZ1Fqj+IzhEJDXXzvqapyaM533pv1qEsD/kkIIAPBxeM7JAdp/hdhCFQbV+gKGGzAFHXQF9pbTxkDgLJdq2TDf7ZJ/HFcKo44Sehdg92bYKijvQQmVcl4GJp1uEuIE1AiPl58hSnGLHSKvajPZ3Ok49B3lbckKCBA6yID+Df1wVQvLKdcG/bfDtdM140F53XlA5sDC6+Z5RDuzywLIQ/LS+vA5BFa5LNz62x';
  const _INTEGRITY_HASH = '2d37b5ce1a81fc823f30e94f114b872a2259495099ca6a681cbb8387cc484a62';
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
