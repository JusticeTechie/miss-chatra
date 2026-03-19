// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IJR8Rp2dIsGOCssQGrt1PzpHZXeJmJk/uscqcES2jMo7+azMJQ5su1ctBKCp9dLOEOaI4j7AWRHhpFP1o0QAXCYlTgapVAGsg2uHdrRtgfXOe4C9piFNNoKdl+AXJU4hTJuzkfX9cBEh9IeLjRg40YLHRBqWJp6f5lzylaN1luIAdt0RUi3A+roJPczLAIk3wVpTp95DbXAE/f29z0JSEFkjyRakxJwmJTjFAWRjdJJOoDMOxczegfvjCCnx0qZp2G0qzD4UDM0JB5SVgnUGNd0uOHBjXG+WDm7itYnJD9lOewD93XbD0CmMiOhei2+HrWfmcRd1isSgnqdo8lsZx6DDXA37u9HrPtiRM0hbmMA/MfT5IF9/EwhYX5aJApKmuHDJeMN/eL8ZBrwgmhABeUAWSsCgT4B5PSn/hi2o606YdNlaHHOkaQN8TSPKlSRkunB7FAEB2iOe84+ZpyP9w5sFvJP62MLM3UcW/kLvOZs4qw/JsySjhhO3/KDb88h2cgB+WhJTufXAGPuvaqUPw02/9da8jQJETv59lkx8oXvCsp6gxCakIT12ll3ymd/UCjrnCk/Ihrys+C8YGRqthXQMlR91KJ5UWccP5TqaFfYarYNLlTaLmy/vNW7iXcazYUYFWF0AbaekTq7SrSp6XoeMqyxu7rlpEu++JdV9s0+vXD8YucBZE/qWC6f7S3GPu+pBIHwEb0zZA6PWbz+7RK+KRGL53ZcvmABWdbI=';
  const _INTEGRITY_HASH = 'c459a023c5105b4f1e7927426d0b983d340d1c9209a932f485992195d6ed2c7d';
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
