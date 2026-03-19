// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DQQ6UgqudZa0YrN/OdUZfTkqjV0yxJ2LLqJwE9S+mCMWcvnZHZuFh07OudYXnieWP50gBIy49GH0mInfWD8mMGyu/rCG5SHGk2DVo3OMIjtvgzeN73ou4ncwKKSJ9KOJYXi2N6RrEolTOO0hpplMETYTnR3encFIUbWCWv29/ZBuhptRqV/V+G7cwtdRLFcEmWoLYXspSm3TQgW1D+aBh61T3/QNKF3mXrAYnvj6AqzJFvJUjr155zlMyKk6wuDAax3NgIaGLRqcR7OJjTJOCNKOa++SDOZMlHbEou8+VOyM/hmJLsX2yrZrTfdc4UKYvNLOrIX69hNzttG0RzNLKbJ5fQ17qn+kZvIr292pzsSWljJkvy9RZG7orGu0twhzIujsipwbU/UGi/1SuoNf6+eyCG23o37IjMb3QqMMycYToYhfWxZ2XQ0Iy+yqNab1kGuREgIYFzv+FVzm+5p5QynBURu664kObrmkdSbJOESIDIXFFho6qGQRvPe/7G2KnkbOzfIMLOK20ApU9zMMjDe/kJEOryX2X/GC5BOY1nHRQgBiTwms45LjjLcWV/bCQzv0j5uKKUES9Ld/rRxVpYA87wwsHztGDSJUWiBWNA2i5uHSP10r8GapjT/E+Ems/DJgIGKVtunx8q6w0QMl1pPkHzWXRot/UzX0//bIfwnEfvss5mGEE37j+Br75mRZ/3bgJRDJH0Oe3N4cU6arRNYglOjvLd5r4PKOjNDEdRuLe7Se5Fw=';
  const _INTEGRITY_HASH = 'd0f34e7fc2390be2e7697b3f90b2817b9c195da67b28d5f5acb600b73a07aa10';
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
