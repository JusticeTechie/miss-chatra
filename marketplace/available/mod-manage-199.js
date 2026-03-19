// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A/68Bk4OJhslbdMWxu2hbRtQHVj6g9iWn/AzLZrjq93MxFyo6vm+nsLG44uicdQFO0m/EKiuyKtP7RwgE6DWP7QTQKp8Jy4/Xi2XctIO21qsOiLbW09VkIWB0gI80cLDYEuqIOSPuKziqVgsN0WBby0tXmKGgnaYGn5HjZE1kbce7w84cGgWUyIpUHV6AJ8RkrezJKNy6Zj7Ooboh86mY978Kc9wvG5j2ov+GOwIFxO6rPfcoDDGT6q1EHAHZAtCL4csLnfVR2ep34EBUyHZXs+Du4njTwrI32yTCyyGl6MOx4XGHVOpAGvF6aSa3B406+r9sWG0lxajTZZgb7Y1lMrXE/yjGSF19iDj970inDKB7tGGufGayLqNpn7XcUm7jDaSZ5Oe7K5kNSWKTArXaVX6cSvxc/YFxNqh6J8jIqnLup3uXl6GJbOnhrkp6FBa9LCI+oh1u5/Hy9V0iwUezgeUScKQci3BhdkXtRGz0vzGnGkohpuOwLrCyUCSgu6q6FP/U/m/A8Jd84QOC7zF0eUl/ILTy2uyJA9JzyNeqtcQjXi/eduzdbhfpkoMkBVUt/xP1JjM1rjXbSzYx3/fmo/WutsyEIkosBo8ox2p4xOhWpJVs9D5xtl9Y8oTXXARmue5vXoTiAh9YJ98dUQwKu6n3sLVQBMWAOvqyjnq4iuU5Bj7+/hAW9Mv8CtxgbgKsw3C6Dgf0VWqyKouzzi6DE1zgbQ+pKdg2gmSPPENz60c38sEHzrznKIcYq0qna29meXgU/Uu1NxgzglZXDBrdhiw4AMXWFddsx++OlymP9f2OlsBn6gu3PrG6SUfNi8zrAV8sgQfkoVU7j7QKXEYmMrMIQM6gwyqd6DuBayISpIjsb1OU5gH7gLlsGlKdTETuGpKIewAdTo+nc6P0IZI/jLve0ReFz9UfcGMuTgeqw09RFgumJ0dFdzHzr25AifEwQnU4JlmiLk2nTlcttYYyzPJ4D0EIVMu7tY38MHGKBoYKSp0ETqkdgxH5hGNvPUhqB1gglXtJSrKvkMmlgEV92BVPKAb6L/CtDn0AvR6hCjPRYMklQRMPReEhgT2oDK5bD4litneb/7qRq+ANl9GyDWt0VBGoE6ADGawduVfSUsJ189AAxZt1+6pKMAwaWWD5zCG7LiRJpj2UhX2oBsMvCCgEKFbchVNfzfezkQMKRu0D/VJZHdfYjz4DJ8gCmMXcHRd3myE5b1zLtz4T+gozKbwxPOj3bk7bOt4orbXKY3MSYS719AiopEXxV8SBPDzaB1D6ZT3rilNaNWW/nBId8GV5akUqpN83WDJXmchDtfET4l/vmJTJ7FmofpSCb0fD/CjD8mnu0WWJ0WlTTob7CvEtsAi6WdiqOdOmP8puiihGHLXGMrGbA==';
  const _INTEGRITY_HASH = 'c4d94e6124b4440c1b387289326ab1e8058ae2011ce9f45bba9c52aa13f76c60';
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
