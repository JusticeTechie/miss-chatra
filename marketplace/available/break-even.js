// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hXiLsuCdPx6DVZh9Wz6cYX4ipzhVCdmLMt7H1e1HTqoySIrpNAH38Ai0U5C2ugSz+jCws8AdFPjJUCX1+DD/wF8jLQYjzhPTRjw0IMPuNhJgUGLyKDKNxuDkizreLFNACS7IT7kQEIIj9DEFQwKwpxLwWoN5RNsciYShUQ64VUURQtnHMmZlYx421X7MJfWsO58a/j6JTPlmUy226N4vBTD4S+IdO3N7Oc6GNWtIluVuWe4qZIf2ytYPHE7N52aWAPF8FiODAYbtdtXtLpWpgOTshNrErzvnLmbgIkdqvKBM/cWw5vI4+uV+Tq0LCRdTjBCalUjt4Y+9otQ05Ms8DINIfrUGvLWI+OCjco1Ed13ATMw3hWhFdZGZTkiWR7ZcxO25Cnpi2+BfrqHFGmtlU6r0KMti1KOJkEJasQh9iXnmZ0hrcruZ0HLJNSGh2obzTlpzGHc2ebkNz6pZwzO9KBEgrTNC5149E1ZQPfu8OvhYVmDk/rlsQi3AK58M+O40Xu/0jH3UUqVzmGZlUfDeZut664uCG/2kQy69E/pr6KL5qUc0Dhn45WAmyP6CX0Bd/mcPLtCtBX0r1m5bOXxGqW4sCMf3UrhCbhLJ4L4ooA3ZLqy2DF1W7NFFEqxxvFoDr0+7dv5o7Rt6PaZzaQdoXCy3zcBDIHBxDu5NGqjwq0LKYwns5GjUP7XzMOUVXGW9ALgmRy5Vb9g5T1YD7AkTYONo+M+zuVk1Cf/LIF4r6R23Hb52ygzDiktDnLP9tcRaXVhvGkC7hGRjIksvx58MFid91vFlNiC3DQldN3Rn7ZgPuiROboKOnJIFM+RtmkeKTDt1AsGTlxV50xgize/tibVYEDJ+X/DiZEl39YBrcqYelQDxpm51SdjqQWvmAvILCgmxxbmKLvHOlUfzwEuknQS1toiPDN53mddOPwtU7mtpwu0vUsv0hiI40N45ppIck8Cre8uX2Zn/KEOZ8DyaN/i6q18IL5JAomqtfJJV/LMyQNIvRRxfjcF5WXmWhSbRKboLjLTxArxt0Tx8RxEKQESAnDBTXAucwa6nW2xHjUUJ9yxxgBBJ0Z+ca3sB3Yp7yEUm5flT6WMGBBIPjiMzc8SDFvDLT8skH+Emm0Q7JeWmoLcsFq11SRs2IAsef2BpZOTb40zO4jB/nqqYvvraosTtBhmeGEHY/wJtFhO78cNCW2vMQXSainXzIrIpzaNnLYSaV0zh+XawqtagZWjU6jhnE6H+SrTFJcCjeDYlXN5D7q8q2THmEPUaR6LroZqg054L4PbPuXTK5Z2m5xg2PkDUNnJYF+gMOAd3/v49aIK43Ld9j3XPQrqOzuszikqawYUJ3E3s75IZsUMUjVPBI7Wpj1JadiCujFdXg6m09I3vSVK7rHPwN98g7P5JCJ9OhdEGjHr5GxDEnQArzU1oxNjne2AuiTOsq/xCH6YFdo59KiZj9pQKnvppDSAM7bTVN+4u8IEs4A2R/IcIxoZU9LqHWzXV9nVXs5FW65pyTEGCK+yopYgh7+8mGO1yEYvU3NwpPulCGNj+xQhrxp1apsCnFFaQT9udxicr';
  const _INTEGRITY_HASH = 'cc82a85974ab7b53d38fce7eba118ad4195cbf0b2a87db05620a73cc4edea31f';
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
