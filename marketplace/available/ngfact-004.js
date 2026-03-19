// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm8EbAWfYR7Lgt/a5AvE5IIMlRtJriXM3FCjDwyHwkfG+p710PePx4vju8TLqo1WZ5Qolm0Q48++7G/SUGbcpe34CO0TzeuD4d2Vx+1E1jxfeLS/gsLmSaq8YfJ1+dlxz44eIgHRrco8aq1hkmGMfwA1ApSkxjvFiq1WuYrW7ak20VxjAF6aj9daQtnqOUqvtFHoR7AUOmIs01RCD7EKNzCIPeAk9b291YK4k+FN1S+asPUYnuq3GvjqKjiN7timDfjvD0nsOJwpJxvZ0tGHvhIGltyYCuqtUQAEgt4ll/liP+ss5nuwfmOrTSEtCe2fskBFRhfRYAnojK1GEvmG+D5Z4C8DdgMmBLVQ7R9hJ+D+zPvXMnnaaQ3oT5PBGv4Y9xXSY32VAue04oFbkhrJIo3jS0BZx5nW0JEKXKRrip9Ite+l3N5hT9XtMH+WUC10kApIZ3HqG8lsa/6Mj24fgvtyFPac1xWnQ4YSW/cgy6gh4WfSX+1dv+MHj+Woab67zQNqfgqpBeZ1eI/j+rO/6WBzgIbFYBu7nm7ckA6EhXn3VSk7JEbRtby1Qs3EVY6LL0CNwUyAPqH4ztQC8LWBc+nJ4RWqLVaiQeiqZRaYmoJoVNWBklXMDY+KeKUdFv3TS3NeFXXhOp/D2TRyJhs+F93Ift7YV14tH7KeMz2eair2hB65wlEtgJ1aF8GFcXF1l+P+mYGzf9dtCIuo+onSEQ5491Tx7ofWVRQ==';
  const _INTEGRITY_HASH = '6214dc3503455581ce52b6b757657ef09d389d26d44d8fd4df4385f81f07e06d';
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
