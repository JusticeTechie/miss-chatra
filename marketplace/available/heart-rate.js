// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'esOI3g2mixmvRcIvUfumeQbc0Ji+TmjjL6iEwOk6+dtJhar7sGxvmuUguIKApCb6mUfrotpWyFNW4MbKWmKvk7CCVRQehqr87qYbQHrP722aoqPSWaZ3giunffHPS9HqZJmMJX5YklfugmmCwyLAeJHRiLCikaQQZLKsj+zUXhsxvEaqG1SBTCEzbIIVigtD/8Dc9MJ1hMkHAglL9x87lqNRZELxiudCETv8r4cnp2K3aoJ+w8WrYUy/foXZZ+wuM5vZgJuMdPz2lEL6OPZMc2SQmZB5l1PVxPtLDwBq6pwo9AqP2UTtZAtrCGS0TMMM6iKt9ICXf1tNp1/afCBiXjyuHRLysfeJNJYF+9dL2/3ysNlIzOT0TmnWX6sN5HZTnd0gAuEncoynEivT7fStntNjkM0w7PGH516SEnHk/kA16tZnxDLRFTgOyVaDa058VYTT+J+bwbIKhjPBlRAOSf2o5fU64Aq7Ps9q6Le23nhnUxJ/+5zxGvgoXsiWnf4AuL3Me9MfUjoyJ1tpedjTWG3OJj0CK6XaSFI2xm2ADqLVXnofRQkzFMwpI6bfTpKIZ+Hd5d/KiIAMXQkLAE/KyFLFbzNHMje4UYP9roHHIQ/8uF/FZh1eBbGS3KFUCVofpBcs4ZvD3kRLDYWScQAmL1YKvInOxqiLSZFexgKfaGdBtKi9C2XZPoOI9mRJWzVqSYQAXUOlQzbls8sYENUeQ4GBe4IfJCLPGuGMLlS7DWavN+g+YuvQK6BbUvy0l1D75MTN/F/3od+JiEN96PJUuik7yaoeCH4WmDd+uj1HW+2f9aDwruEnP2zo/y+wMYWzDYd5mR6RXxTcVmmhDuO8dPtcOsX0efwRUjiWsayiiABE+zjZ4P1QGV14Ip/SFeoe05RRZlAcRhBTMxUlp1xz+X8+DMdOXMpaX2XAAsoeUVJGWhstKF4MDhsewdfPoZsNl1fYp0SqfFLXR+Ty/Qpup1h0Q8NfV5+jIF1lUAo3GtP7ZHC98m4kDDLX4EeTTUKwnAB6PbAd+LIcwDtiqNur4FG+EqOkan9Vfe+6OspqrGzBCR0JG6MWJEQvwrkZaNlxnHHr0iKJoUaNcKzKLsiFO2BpuFVGesXc63Mm54AVSE4QbNszrUFkbjeVZW1KJk3Ntk99iK0zF4Too1m8I/+ki2RKQ76ZuZ88czzVXThT3tvdIyCurP+13l2BMw1y05j2AIQprIEGaof1QpnyoIznGGW6g0xYBHaZSCqek9t69vStFMvnsAOLx2re5e4YraWjzhoL6BMMsLhnur4SDtHyMldITclJEWAnwwY6C4UaOz4ZB1AKTWTL8r+jIbq0GZ7X3xDQtj7N5yIJNQJ+JJp/NA==';
  const _INTEGRITY_HASH = 'df89ba689b1db9b420801356bacd51c4eb1648e30a0f7a3112fead462acd7981';
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
