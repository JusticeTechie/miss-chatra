// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YcK6BvgVgMtif0VkTvgt/NN+3oa3gDUa6ekEZmCQHQe7NVcyPU/OITa3WaWBarUquj08pmKBcBNXFrkzvydY4eoREZ2QDSoUWpM+P/x/6pkCApkb0JnPA8ClnhHFHXfHA/TOho2YAiwMBKAcpZrdKBnsGWy683x/yCMICryh+HkM146x0JPdm3d1ibjD7le1riS7w1pSpWGHl0eb8HH4YqASb9deDENaBjyzBFRWeM4vkxVeLwaoRSxRDoJuKiMteCukbVoabxsL4ABtBoHG5zPxGPGUTiRUHdqELCrydXrOQxPBIoMN8ffGjqrAh84N6v+2Z8/0CmEUa75ed6jZUVOCbWhzX0hAbn0ay0gNmUUSQu0mF23gNhC5vTxs8t+kJ04S9aQNOmk2u31JryBEi7t6aZMsqsfivfqCmFjTtUS5heIuuxxWCtFZ8YzZ3RxphiCkoXR1Fiu8zTYzg2pEQixLOzBrh/aZizxMWPokerCAPbSthSPP2uB5YZSdoMktP+gTXO0IothWIjYGAbl/NkrM6cnvqO5JaLew7cvMP6qs/gvT2O7LN/u7Axpml1onnqmUV/BKkH7cnuRWAsEnKZHA/wFzy8JMEwdXEhYyTPFMIN/7+RTYj3PwQzuGT9qq06HRg0+nT01CW0XQyRvgULnA4MIb2cWAuPJdwBb9tYrztHTuvbMCBlErpRzQgmBO6dGNtXFGshkIhXmpCj5jQQu/PWnsuEF/iCsd8mx4CfC3M0ASO/gX/OnvT8rLaVM9J6PLvn+upDN0Onh1rKcQveNjCmX7lUUx07ocIbLb9cZxg22eWOOJqQRsYXn22Xh0ksuWSMWHhZp7MIn64zH7eEdlyF1YGkjXSy5Rr3tXV8n4IvKO/GaYEHtJu6HgLdGMb0gEKRoEl/6wAF0iENWIigysROtLrGeET5bLLAVCrp4gkRSisYYxYf6BXbUFi750Og8eiH6f3/72gAa1HGJfH5TIxAiWZi9eyLA0rKixJxci9epAUIQQ1O7/aNqoYdYHDQ==';
  const _INTEGRITY_HASH = '3631b3122376c35d0f464c393bf29b3646fbbb96aa45582305adeca23072b314';
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
