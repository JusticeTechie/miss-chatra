// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hb07LGlnkG4/la4tcnrMqNmi3AOihGPbv0icSvaw5KkQywu5INliS90HKPVn9VDFnUB8oWuC8Y8G4Q8aQhCUYZTtBFFtYu2Wic5Wz4itLhFygAuW/PwjUDTRJOf0Xykbjn7NAlgmxXtcwatBJyoQPIAEvInoV+Ry5Ls7Czb6PGzEvh5+A6KjCKDpemaneA+nKf2zrO1t+AHpC45FfNMMAceawXEi+I7SWEEUqRmzx89zHL2Y6eB4x4YzxWP6VWdTbN9CSK+mylukhIyU70MnC4XFA6BB8rAkzHNRqNJEgWWf0xvCSC0pspL+tgc/mDZWZOuuEwRks3os7vSZv3hKkWlaAcb5QBjbcaWEqvjx7w4L3UoOIAul2LICwTM/c6qH5TGZswayD7fAlSFffg8AycGYHvpdo/3JTqXvtWTG9FgdWVJ2QogoUSFa09q+fp2H1+I/b/Qdoo/ViAkDC/KKueJN6BLlBg+mDdHpeJ5GBm/7QMNVzljOm7pAIrsp9KCZvzunDtqOsAvh1GM1VnffeEMZLXFw9h8P57WYlDgv6xJqGFfqqH8kAECWB3C1QZMZ/g6wc5NZNg2C267EdwxCU39nP8MRu8z5aHeJHSoP5Jndg2hfpCN+LcoXrbEJQQ3n4tWKLjlFT8eBlQwFenKMEC2wwr1hLHo12v9c0lJ9++UWmmw5KWzOgoBE+E9/mIQ3KM5C3XV38nF/uq2ALNPqqu/PWfafH8xr7vEFaiHpsEcNBtlbFNx38BcbqaE4u/9Ye1YaRwET0VctEM0f90gBDcWPOIvQJx4FMPlg57V1gLIJSqVVSZJOqP6/qc0BKToSq7jyCjxCd/JLH9ev9IdCez4jODABZBaI7owqYiFtSLBI+S0X93D4yKCHnc+oXrKx8e5Ne5fXJx+psrqDCMH67gcDiZIG8dPKkDAETTmNndVDA+Pz0Llf2XDoZzHMAWShP0xYMu9d6P05ElhBtYqZjj7pA2erie1vQGj3/QAFkh1zeyk7vG4=';
  const _INTEGRITY_HASH = '2915d0cc6790600be1a6c44f378fab11a90c0d6014608faa6d2d6698bf776c7c';
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
