// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q3Nx30LBnsM5vBe++mgTnTi9Jv9tjoQUYHmWwNyiP6FtDvyNFsshgb2aW7SVhixStOpl6/1uZQNfoMY2Lj7UlqARZIpTiBdrfNijTCRc2yNtqAZlnST8wW7UD/Jyj9+aonX+lukq0oOUHnuqxeuLKFMIEjJzRXcr3d7W/3ZGZyYyvPKvaMgCuNB5hDt1fVKSoo0JygqI1g4n5+5SakUktCYnJlzJjShouUAnEIJdg7tU6HZDF/fD5h9m8xNcevcZ3dkKlqI/t6H9O5tL0qVp9SNw8N2WLW3wRPAy//qUmpHEDNCU6Gs+Od9qpwNcRNaXPm/+EZ2ZMzM+TZY6T4CWv2Of/FJ3o2DeHpeuZL/OvWa0aLd7hN0Woivl+sFofQ4Bmt9e88l6LSygXzFZLxU+Waa3ZjQ9rqEEQDSa39m+/NSpK2bdRk2WzBzRJiourU3aP9jbdhwIpRizDDAcAIwhqOeQY3hLjUEj8cGEQVxOyOMU/v/Jq4UWa+1u9ERvKOJ5aesGqUDkm8bGMKUdVReNfDq+WuSjKgeXbZqve9uASPw4aXOCTLiOaYd71CGR+tkTJmj4JXJqKYKscjw5qfPPRHaUHVquefRFnid8n094kXB6Nlf0py3Ln6Y1xPHRoKL16o1GFDkEdGHZcx5G9bfusA+q9m2LmGBhzAMF2hOlfV0jFbXBl/6VjBqblvI/k8jKnun7wDssotI4dcYupJ5n/v/rwYEL85xpoB6XUcPYlrMNd1ZFpeoCPF3ft0jqRUJXk6BFmiU/pIB93LS1sJVGc/mE0h5pmlvDMigw0f1vt4ceDTyELKPxhOsJjd2lAt9n/Gc7wuE8NUSXC6F9yDXF8qozgKUXzwgfJIuNRH65Sf+XfHD1vPF6hsG4Uka6FySH4xgx5iCoZnmp04tr4UrbK/cSWvByT2pAvhwB+us5itQGcAQfatI5/m8bLhKv6DxPhVpd3z6kZLN5Hq+aNsbaDGEpLLJUWhfo0XeNnfsJJUMiDqdpkv/gvLYViMuXxgcwE0PJPOY0cHffG8gqDJF39vgk';
  const _INTEGRITY_HASH = 'aedcd2b09fefecc366a0b558344e7b069446f1b75ae337d64ace63429c3663ab';
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
