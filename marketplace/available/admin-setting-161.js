// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SN9lTqKB6BYK7hsKretl3R0nWmCvig33ciebFvx/2EhPNKBeDB0Prx6/HR/BxHHzOQlk74/m8zkt+lHfyHYflJOXZC2HDWOsupQv0S/7sBiB3N1b3zb9UBTdD57X8BLAbr3o9C0legM8zvbSs1pLOkj0sUM9BImi78/VVnbPRiIWeZrqSpsA7pwZGnkq5qaLsKooR6obmcKNYyigkA/eiv3m6yv/vfDhvUOwmWcSiJp66m7BJ79eh+8Mzi9AfyRsHz9//RRRQYYV/MIztb7cgfYHa7gfrKg1RieAMJHqzk1Z2+MrQdBVg0ULPYN51KeqlZbHToZpod1DSCdvbzoWntx/snrYq4QyeXFd1tuPnxicFep/fUNu2NIcgy4lEHnB61QPUt7g+knoGZh7ulEu8B699/B18z6gOKSq8WCRqpEXEOTrzuq89ZSbkl6BNRxkvagcvoCZM2O775evuml4gLGbZvnOhJQB7rTCh8VxdPR/u9oZuKLoOOMWntucoAMuyWJ1GkmgbF3KaJD3GHDEpcFMqHHhwcySdzZPea02hY5n64NjctC7T2RFiDHIDExJc/m5G5dYhD3OWzT/nUkbKCGrHjqW6XyQ5CyeC3SrnHpbLrDsByxRU0lKSbYI33eQ8JszB/hUJigyDbV+zX3FJIqZdzAUyIQ7S63EczWjw1DubANkTYLrGC0Cm7l4wi9jw7RuiXO1VhLge/ypFC54znI0YPbFF4j18VGtU3A8VppL7C5Ij1UCE2KR8tN60qYYQNTwIgM8NaNtkd9AiYLcMTsi1pk3W0KhYdtsNcl3lPFakCn10WyQTzudNGP2QI4wBooulrkjXRWrset5yYmSBz8aEO0LBN0CuSAcKtg6wQaaVVoZOoMmiuU9sPwpiM7CZNK49buO+TkKh6XsGnz9DjTCH1SBUQxoMxgBgE/yZ/pzD2RFCadUJOELYC2FzgveIX+Mgc75TArRchFQe2XY+8UclfOKQyH3DqD1e62AXVu/LbGxDxVQMXi0rbtI5ZMpP1Em6AJAQMc=';
  const _INTEGRITY_HASH = '15304dbdbe93f630b11fa544548a59f8980d7332ab52a1c01b3977ea5079b976';
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
