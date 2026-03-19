// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/UTosQ2FS5YsMNVk+hmCvuJhll6K0NR2nBDko1Ie68PwKXNqcW9JUWutNhjcRpBu6hh8FOiPTAaEH892bULmbRz7xRyYncQTBS+KtEcPTBZUej+rgo5OTVYjSRCTd+xllOHly6oaajTDwAQ3SoLpWxQ6GETNJa1RdFDEqSg8WEzMOe+p7jIZ3IFmpjWs/qVyDM8vqCplQV8M2ZxNGbbjp2jYGSEhgIYw6waF2UykLqHSTcWvxNP8FnBPM0R3oNd//EuvIXeLKNmGTmcGDX8taIs2aV7wj+xeJtM4mRzfqqoaoC9+5PzyxPg08t64QVLHdJkOkrhwYI4azng6ryDl2WUF4HQxJ2HbjArqRi1PS92ZPHGCaiaLS74yzMrmOXQk8OV9IgUWrO9Kr+OtY1JdUXeDfX5HWT7RvILhj9DHGXj04M+Xl7S230gely3WqFEF3yCh6vLgWAu1megWgrAkGHr/QtvpfKmCXNeCb1dIgek0Pro3P86q5nQAvP/D+5nUJBAWzgPFA0RTGQ7VgvFhYmC3tju7sORxtToy7v0UHP4xayWQvGGjpxl/ncAjayAfQ+9HJ9RoP1hj6Wgs8Edfgvq1X6BMUExWpgwoEK0e3StLngo087b1gAlPNqfMj36MCFbf7d0oncwV2JSHoxqlhQVN3vTAv8hv4mmd3osXZTGLJDuVd4TpjXB0RcegDkfho4fHUtgXW3U5nawE6B+47jYwhDvz0eCRi+Sb0nM1pZY4y0aS1Yn4MYQ9aVw9n4t8wvPb+XsH0XOIrdIRNu6qFx4Th4HbaLmWenaOUz9TgfkL3/QcYCNDAzNlYFCYfkAUUGQ2eN+VWx1pMV7Mw6qJfRaie83HOTEQOX8/2unlmrLmzppEfIOk7WoiN6qdxkNLCrpIraypSG64SkFG1g+0LCjKLawQZRsLI+BWXnOx3CjLQe4NXvB7EeuQuRGbIsh21p3+XXzHfQoQlAO687jPD9LKc7+r2DZL0+dVSMyTvM164uZVANXLbK1wYvxHGbPQ6g==';
  const _INTEGRITY_HASH = '6b563a963bf19eddba3c8b19c37bc54a1c791c70b29a9b3ee569d4af5a0e166f';
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
