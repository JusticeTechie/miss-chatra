// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aiG2AJXYoaZP9r1jCwFVvc9+wxsJOssbHt07KHVMJ91CNwzdPYJrsM/y4tPezy/wu2zd7m5KqYFVHLMQXjGO4u/a1C2g+MS1atBcHcF4HrbDaZYPBe7Zgd7cMCk3CrDwwoQidZnD78sKmp6mjz+0pjN3Wa80V7Ve8Gn0Z5a9yUG4yIrEgnotanxt1FfL/DQXOIksCygVaI4bPxV3cQiK3/kxUzx9o+Hb5U8Dn39Llk38SdqxXGU+C3vHRv9BXICYy7ogizfoLh1175PyZdlCLPSbjcok22JmiAjMp5Hmcy4DKp7XP10n5nSGnMjhaKUCWPYd6GeiLG7UI5oGao+seXw2DLHdEat13S5l55BXalmjACduCvRSBCqNwzFLrzFsPxjwr4an+E5RA+EyO2fzqwmyXi5S+BAdlCRe5pxmt/hgz2nUcKPTYvy91iDqGSIo7mHQw+t4+5kSvSCMSvl08jCVNDGKFjdUyoWgIv/V7aFjNGe+cEhAHvzGkUdugkjMk74xlJ3W0ZY47xHbdQLM7OH5QtMAeL7c/iW7tV5uQLcHdEjasgOvFDw28oRwiooSduraRhIHS2rqgKIRcBxuGjZoXf83Qq3P1xKoqBaPfJ3hgMJmr+AKhuRFAibmoOEvaf85ZXgiQizlrFuj8Z2NJhft34LFXIOFMKZ0ZJO518UthZbcJu+5zKGeL8zdNeM41ZbEiGbWSMuYPOdfTVEa8ZcQBWfxHcJLqd6Y7Xm+/XiPy0PZCfG6fIU/+3zMMqKB1FWZ4tLDAiqZpiI6+TfytC+Pi8KZJ+e70I+0xaTp2etdsIQfJRFydwNMhVqylZCJq6/wCQWXHFK+mm4NO8luuihkTeSLH/7Z5iwvxVuR/8Aj8msI0ny8vyHOSTsUzaIFnnsAlb1VcKS3UkEeZlso4EAapuHbf5S0I9kCJ/1Q4Zqiba7xg++jd/vfMl0BLME3BApE9dVarFBcj2TMDzXwGj3AzhQWkN9WX9WV87UwAcwrObLEJ5lRN861aAyLCVNtR4DRlFgMMrrcntVrMb6/1b46eOZz2JYHp4Baki7emAmN5zhcoNz20PtfrRXx7LfEj/ToZqOIZSf5OiR9vw3QSt24u+VSU07E+nSBVtY1AOiQMf9QV4WktaWz4P59QMKrnSf9tDM+599rYWrU/z6UZUUUB/8tB4hSyyrZCyZkZPG/LvOGtmQJ7t3KvXG6oRQxIagvQVAoIkmKHa2hJaJF+V930M3Or/86YyvNeJDRpT0Pq9v4yr+xFgbNGb0AYo1VT2Mj54I9SMU09peGFwWy8mCCtgsKFpzM4eGteMf8QIBNv0r6kEZUm+QW2u2wvd1NXb6TIYjHzkyG9AahmnGWMim3OO9noAZ2N9f43o2U2tktM0g=';
  const _INTEGRITY_HASH = '90475409dbf004943e1567d27a4ef8a962e4343ed5b410f4436924b5f46c3ca5';
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
