// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'I87ua1zE5J08r37XHR/ZdRA3JGadpVynSFlF2N9rT5vMdKPCXLmxJ6wQ/iHG/ziwZ/aPtS4Jrjg0Q7RvAL2nF2m6P+59no9OVUMRPlsZTzAt8F+qRF0moPPeyh3SaYydI7YctKy7rohziacX3u/Js8MNjbhN8fkrsp2wPzlsgObIM4YTk3W4++23HiY5IMBE1BlZbrx4ezlSNMFz2XKLtSIt9apS6EKfYn9yoBZPJKhjHSxeQTfubTdEzTicBzMzB0hGQ9qrmHH+sUYIjtSgVpJ8hZb9yfNZHwCEdZzAjmlEg3z/15aG2SSjR2LfjEbI6IX6TGpobxh5Y9FNCh4VPFPoQvaRSqCU4ZhxWrKt5+vfZSjcDcij5F+qqLwtggUabzTAHZ1hHMTrjm4gc3xf/L0s41xXnbkeVzG73d6mHqW59bF4jgh2EnSdOAqzWyzPi29D3+qkIdq0PpSLCvolt4N9OOAIwH1XNCe7sItVscioVYUU1q/gPbCKfHM0ybP7/sFmPww6/hLh4oNBEePYnYhDA4y12WhecoUkvW/S3EbjJYCFPxZsdbK3pyeF+RuQP3DzVE4azGlJVG8JYPI8sCMjb4MYxjVjbmeBO7IEC/w63BEa2BJ5KikyCLP94ZZl+0G7gDbsXJ64B9pbxE25UAWZ0NSDhlwJA8D5vI8kQGpJmap1GjxkF3UsuhoEzNawoVsJLDkqsdr03Q8N61AncPXOIJaGfqlYYul6W18Zuhul0iyf14ldmaML+rFlvHYRJLHitSpq3VD9Mgm0IfwdyhYvj4dCM/kCAU8ViQ5Ijtw2rar2VxDrFdndGQIbsbRmvLIo39LEsJCtO1HoYxdSM/BzPgnERPQG6xCH2BHgFNTUNhIvQxt77r5taoXW+BxwKAcOM+ZcpjODHUV9KoUcPn72WRXcXk6Zxhbw3szcBvsPT1eRFq1WQKla96z5+J4r96pklJ4HS4idbSpDI5lJVABxXSdbpvRrpWJxIJ1bn3goxrktJjjDbzwWdo94vNe9o0F07s/XkTDxrpO5wsOtJQRzrO+FfjjxKtGtDe9SQIYfS4VQHX6r8h7HAJv+C5A29rfG4NKc1B87gjAphXvKAWDXKuzK6d0mzrOVvJUBuhvXhrshqdcqgourUBbg2NantSsReRc5IpT6Zzgm3771Y56DzGhCgJcCKK5zKfIUeB7RBGDJMRxO7iESlIDgjjJBD9bjaX1Z1usSXxHmRWm42MHdQbCLuGVgKIdvBpM/VHF1bGHlR9XUIIerDubbxLd/6M3ahjVTzDtr46eJJtpoHbxV0PHiHM+0tFeCww1YOXFditoXQ78fart3kwsXw4Jpx0Y/lME7Q7yPnwg7ZeVgGx88C364gIR5AzgGQ3wALdPYy9y1i/vVBYEnLAaGQmFn0Z7+FdAjBQmVSYtc3seO6SOLTYjGzPCpcA5WSItmjHW69sq2J1wxmSn6TkHODp99jUZWdMIPjj+gXCtx4MNYKTQiuJrVnNcQ2nClStPqmM8Z/dqddkJh';
  const _INTEGRITY_HASH = '6bd69b7e10a9bd9228a248640f70cac59f6b2ab713bd28b20974077cae592956';
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
