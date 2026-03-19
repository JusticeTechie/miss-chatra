// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hHNjS8HlOqsu55o39b0LH+mmDlvo6SJgMb4FkwVJ3D6kO1bKEAvILjT6WMVD1Io3PrsBJfUnkRN02jOhI/PAtMxXe6w5/7r2/SgjvER0BhszU/u1NlFAYrUr4lP3VvvvK3jw8+iZh1hNG0zYAN5n0z4mY7E77Nbj01d6REs0QPXi8oLymicq88p83/Wut0cRMuyHU1Jv9EZKA47vCMrctJ1b3JWJgzJUE3ZdXPI4eRTnLfr/D3jHM9YDQ3l/kk3IU5kSiuDpD/4w3bfNMqj3RCBFOwiK5rH3nMvmy7QZFPPPqXWSqQpjecAwIdQgZyEi3siKdsJAL7GKkL7WjynE9B9G/9hel9/9c7r1iNXjfucJ1D7FnUKa99N2QfyEQ3MbwoiXVNNDVTHSLJirvHp+FMq2ywl83A0GZHPx2xOl2nnemQjRgBGa7WZvIK5rmzJx6/3i1Jc8+jy1+jyXPUlqyXNZp5Ba/AmMQhdCr8rvqDt1ivL2XjUXjbOJVa3mb8J6aI7F3AdOakgEXvTGBYyzvZ6ePhe/mP0edxQ0w7XKYxM6Oyfy2xKLGxdkU4jlOapKDWhh5R2knyOyzSQyle0+xcAd/0AhJ4c5vtMqnYEQ50UMRCIm6NoKGHctmXeJvpSvgX/bJ6J2g2RhgmbsEldpdpTAPiXLFGFcXaRa/N4Zqklt5+wEMUKzjv4VoGoNnySF/E6uS39JKMX7QLEMJ79Pm9mDg9NTJdBjpCZGcNYxkPMYIWkFTyzIDO1FSvr2BaGjRS9fyddK58qwP599dROmJXF9mjqyORcu5gtuYb/f6yzIrq7z8gqvcN/ZwyQDGIDQ5CnaC2XRsaPTsRy4vGe+ROuyZ37FPwNdr6jY9YgIMIYx4msQwH8Jx+5sGy5hseiwBSkc1lIF0JoiJWDVMNLSktoZosx0pgx+yXYx72Pr++tDnoMxQaj7J4T5opE=';
  const _INTEGRITY_HASH = '74bedc837256393980f8e94018ad838ef7e91975b734fb89174e8619bd211d75';
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
