// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XKQPtnZIAvO0Djkrxg5L5+zDcHVWXzoxZQvruUhniQOtIa4RjwU7Q3gEITcNZi8Gon9Qwd2XqN6WYt9bVZwTOQxfYD5Tjvd51xZXdbbZiA7OlePPjJcnuLP+7QbqF3ZDQnAAGh6KbOnzcDh0fZQ9W163rS33X9rhaqTEzMZ1Fcmgl/UWKQ/jnqXfp2i79bY0JTyR5Ydc2FS+7/biNiXur8e1LRj310T1RY57UaaXBu18hLGxcDEUj53RM1fGfeYPAvXAjGxQa5EVHjeffNYkE1u8UjtF5E9MB1SrK3UuI+PtojyTII6qjxsNuPZD+IKs6dK03255y+kKHlzKpjxAZxj3vGsjkHkBoJ0TsDYHw3qqMR1eW8WYe/4Mu3ZWCj7Jk0C5QiWX0XPfbFncT8n6ByeD0B+CyJOqsrHobOEbcOqZsiuLtIp7CpB0bGZp3YDHVVzt8SYLOMuUYgKHz9q4kix+4QRu6b3VNrpuMjl9HEPz03Ku+YtyRXVYJwIoMysVGopmBUv7oBCMiMK/X6lQxJvmTPkzqgNLNbRVXyNZbDrqQDppR+3wCj5NKv/6y24pRpr62/wq0D6CRtCUQ4QG1Idtla9FnNFlEH/5p6l3kx3bRXh44dWBwTOoaEp9iQILHCulF2rLsffA/Ry5akC3W+r1Aa32+8GGRX/O81Rp3mzcjezT5uCKWSVlvwRtRdhDm/LQoET+HMNrqtWPcdEJMiRpfBM8AbWCayISJZFCtQNJ9Ifyhic=';
  const _INTEGRITY_HASH = '4b4c219f55117c58096bd264d20d894900e6e46dcfe26bc027ab5d8aab7c2a6a';
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
