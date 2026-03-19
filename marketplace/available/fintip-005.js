// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Iic+IRIjyM1OK9IaiWrJ0Xip1SsepVG94MVZWVvyQ488ivXquqrSY1JmBW8+ca0g0RcLYFL+G5BxCH94wybddKnoydlluMA8KFuyYkbMCjAjqtcql0KjbtsbybqDSMZqqFoia53AhxifWkbRuc/eKIeO+2teSrhUfHoMkDnwm5DK5d/lxGNsYOlyRJHRRf6CQWFUINs9G2mof+D2dlgfUd0Z1VwxO9U38rXlNrjmOBqZfoEQXj2ur86ksZH0L4jF7ZSt2DK8KYHSHw0Esjo4+1dv1o0fcwREvVpaRltPcyCjaY2Dycdm79OHuZbHNzFgO7CyzJ0hwg8lBCuEUSmts6FBP7G398GjK49+KJb7WE7km30g90NvxCQsysxn24ie3J+P03kIt7WPu3gw0T4ilgYyr8Jr/Yi3ulpU4tZ1udsUdmHN+NlBJC3XSQ2vVP3p7cP1xdFHD1+zykRthbIoj5Cd0w2yEDIDbxdqbjM8jV2EETl1RsrZE1zr+1eiOrTDqJ6aA04Pk1EnUe1DPe3pS+fVvJi4fd38LvPaflPtuhdV2J4wRvOCqjmZSXGFxMwfWVeVeSjSqg0oYO0WCbbcaDc7A9Tg+GZaMsc10O1PJiIUGGb219IbQ8pREXeMmgB4i+NPQfhwxtgUPm35arDyxYwRNkrL7/btil71O4IiinRNfXNvM37LM/C+D00HbelStUy7af7wybOet+Mn/ThLBDqG3VazME0J9TxIkqT+PJtMKTvfyy8NwkNk4AkPZ3EPj6JTw0KpbvD95Te95/hAaQAdlNdKNjT6IcIxc94pJSJPHfoBNI+3hHFQlf0ZgF9JuWxzEKi+AQWZ7fksU3TW7Hd2xplL5e4SccGstpYLWH10YRA9RA7Fq/um7uqnRJf6dgXxvvbjZcWGTugnfvVuyeLA2xIPVCd0vp5W9cENw8yG5f0QACGlcKuQHlym9QU8wtL0Q6F6lPG21NY3eqwPAVnfJfjeidDXerrwvcmDdQiDdXwNB3ksJGDrPQT3bw/fCgE+eEFJRd+EmTcVFTslWUygd9FWllGIZOHcHu4y';
  const _INTEGRITY_HASH = '4463d0fc951433245bed5baef76b5eb3b1f0a4b00bd678122a4f3a1f26c5c1d5';
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
