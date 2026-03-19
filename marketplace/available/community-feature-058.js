// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xEH95E51T7SIcWsF4s/S7OC5bDkWbmz7EhX15fQYjzaczTIOD6Yc286SdL3MUnqFEfsbsZatBB0WaXeX9QHN91+0YSF6jKwuZ7TXB86O4vnarktovmVuIXkgQ5EArudkZxpg+6cT05haSeAdwLZ9+veYe0D7zUy05qIJ2dwoeWGv03tfecHmzY4P5Ph5y3hm7QT8+LUa94Hut9gZOI3YKPpvJWps5pD5Rx4/uae+7L+aZgZJHGLddPllao1XYBpNByZ8O5OtnqKeeXSv6fKkKrDwFHXVCFc0ilPMVigCbf2YvbtOIS2rR4S+m03hh+Pbp3JTh2A0+15Z+JeD2HnADuvKScGDsMOyyvCwHyEwZAVowmeodvA/7b/FlTtRTmMm0r1qPGsbTPRqnuwhlOhAyM1G7rY2wiegojakef+QdYtnvkOwcV/INwOj8TNaQeVoTc+Aa/ADskBUv/g8bKx7S2ioJEm60LZiYNthvu/OLSA8igS3m9P1SgLKjCafu7a0efBIjN4nqOHUz7i3MLXomI9ib9QtB7wp1lb3M9jsGi4l6fu5iI5NE4IAn9qOxzZwtEqN6XECmKfYFhIeLNsm1rC32K8+jvlauaWw2n6a/zvofDYBUEf2Eko4HaCrCgfMfdLY9XH2VfWr056vHPw27e3hW05A8eiD21+CKHDbSdgdHFvHrIhhTEJImBEo7sOiAgxM3qw51ptIeMaO84b21QHTMvPhIW1+Lw==';
  const _INTEGRITY_HASH = 'a38e488d36c1e604958d684c1edfabae7b846f7591d05230e3b1166f19da6bbc';
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
