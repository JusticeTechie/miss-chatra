// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '31bnF86Am5wFr0P+hMmXYtxKHH1AeBqa0P9psr8dravMQp4QXma3aBGtaEBwijIc3jk0WbIBteleFDUmPsXhsFIWjZ6SMw/RnJNoa3ZqrU259CdkdaGJ7cv654vx4P8FL1ZBxMcWoDPEEXFp7J8xzj3b39v+TX2qFD3iLnC/MDNvnMtJGFwfvnWg7Y/aN56M7/Bl9AekiDs+z6Dlp5DXidRgpXHuI20WPsTIYW+sMA1nTCz8ReiCgvbLv6sxV99pNZVD+SOsv/hjXIhDqwduqKt/L7ZuS0blgIa0NIVXwm/MqXGaMq/cG6osrALy5EgZFgGBokEEF4nRcsOdLaELcNt3Ll1J76z4s1/LfgjYCvMo1cFX06oWjAnSfxHc/kNiLnVGKTlltNsoab1kpLBg/WJLq80yQQ8Do4ow/2H2vlbqDbmNpZS8SSe31kLM0IhNfL+FUKklUwGVkYSUQr3/7j5lgOMBOLmrs2+p1epFy4aAFeEFc1haCQSKVzsG/VL21bY0KKSWa0eFtaovdxaBzJwOqaptc2rDfD70dpP3EAlo5MYfMYCc3sDmY6uQJW7Iwf8gAymJRX2syiRZQ30FqoBicuaQQqDuESR1wPMh7yGJ4K/q2IWvgwvUUeZWbPisgRZyWeI8SP4L95LHUSinF8lwnq9kYe6cmIk/8ATC7JSYvHTyBZ7dUe6ZHSLxQuoQ9y5cxzyGnyi0BtcAtI7+D/EnVehZsjroQkyh7sNVNVnIKjfEF5a8DmS89sFNw53K9fSCxIMDeZN1ksPiT7zXoOxt2BIazAXxfGTJUVcxNJPUI6gl3rX5eO5ceTLbLbauR9uGpPjOpvvFEaFl4jByl0Pp/4GxSmYM8l/EnJXwgST9o94qs/XJIlkf4Cqr/M/7VGIll2w6coVpgMdb+IjKpOBv7wfeLKAcZKfxUmMRa3jHfxPwnzRn+j4FFs+1QtYxURKvkUES6HC6unDELr9yqY4yiu/rkg6TPRQZHzOMn6y6BYWzQfKjUC2LvcsbyhBCPjUoAGakLA5wU2rmr/mQ84XlLaE4t8chGtUAYl4FKe+XZqEZhvnSklr1pfhExnkymWvi8Jcitkt2YpTlaDs5Izq1r3zUiC5u73gT8pkwM8hENxQHNUIJpIPhmogtQex5JY1jv2CbHz7vS3C8Bev00bhkhYPKIZcFu3TnOmQJgh5zpvaBQQCpL8KEesvuLP2U3cPhpi4yqe2+iHLayOZnXVHJ1Jwr1/jtxO/4qv9PGCykF6LN1LHbZPwZwcgR74ERhBFq+dnE3PJJpml6Vy3gDZs5I7ex4zkBCjYa0hMSjmn4UsGBHcrKsAAgfo6WZmQwtplgYJrXPcA2';
  const _INTEGRITY_HASH = '881e95b0870c92d08af3b52502d4628f6e8109989ec6a4e1f1cd19cb8acaa2aa';
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
