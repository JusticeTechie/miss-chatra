// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U1+BPMiMjtQCkNuTsTZzcC+MLwJUVjnAYwoiPHjHl2tJi4Jow0ncE9vVugQsSj5hVEh+0FTmH3z/jQQa5BZnLASz5K4/cWMv/5WRN3f4JULWzEKkMhTdVfzTsGA8LiPRPpNh9+ojXXWW69gPJJBGsA7BxJoRGo0ltIbOwpF0M8w/b5xKmWD9Of7RPqzVTs0u/AqV7aZ5hLf2CatJy6vKrHx0Fcy1Dnzdde0Opodi5JnElmTHSZlcWTZcoG+YLb1IYGddbKu4z5pDO3HBfZQ7uU3ukhUXW1EPXurYt71Qxfn8DG0edCh4nCA/mySTKAmV5sYCl/UzYkZWZ0TweSz+4DRI7st0yHtTHxqB1Dl25YNzJY+LC4cHTDS+Jj4JIdkDCkR5CLMrUJ/zLR4CJuCDAf7C4/CMCmUYcvCFT4NuPvM56dnIbO0Wfcl3LkRR781NDBQAEA0qiNdi/P1vxX3gCgUcBSGTTa2J6KFgjBoE1S0FSGkPQoOx88HM3iKPhFLPz5u7aXIEVcQjsKah+mHST0+Zg3wkupVkE2NwvwMHCq6QIATsxpwzHcZQdQ35D8PDgackjEdcgQz0vVpChLEawtW1pZVFyO+v92A=';
  const _INTEGRITY_HASH = 'cbc13c66b6c091a361a5a1e18afb17be41cb7efd90073a9f9b5ba7d2adec82a7';
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
