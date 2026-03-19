// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fZ8ffu8xgzZm/oqPScKVfJ/D9BwHrmZtSkaGJYHF4v4a8erroT1wsyIifCxlI4b5bPHcA1wvajLvZpiNEBkUrwq8AdjFV/LWn6SS01/vGmYImeBNVSbi3D28WRQzeBwGVJGDS0xTahHX89usNByLlI2zfh/8/B6OSlMldH2LPgdtzyuA5YQPI4Im0Hm1DX+p8nKjIEGKfj8T7DoztwbdkIxLv5EP3bzk4Ub06AhFrdKuFtgHBKmC7WTjlQbvTatHKqP2KHwwjh8UyPbS15gkel3/SecTqDipxEOzMii1FTZGYzdDBSwqtjXCQIB713+tY/Kfx/GK6FeO0E6URDofbZ7kDEUcxur6D3ns+PxnZua23cUsV5ZuR1xg/WXIr2CRxscY4i7mFgzLE+Q4TaA/tMY3rG05X0sGS7I7WU6wJ3VpTS/N96o0chFJf4TZfASEmL8kaGFQcslPoAFvXMHZJoX80DqAmYoRzHjWomz4OHHjpvRkDN+059GU6XUQywXU+X7HRRI2/mJjiUjdoAyBiQLisvR10qs90zlGcyoKGOzRFI0//bbZ2huRrqevRZF5RaWwOFtTHCRtVzGPPAITjH2cYeEpPvQuCrQIZ+A917AVCzR0Ao7B87K6CXN4n5sbWib21iWtvVBvVFgwqYvitgG+Ic57SU26ad0TMINtAtKvuu7Jxkvf+wDxOiLNxi3+QVodojBG3YRTywOlcTyB3JQOY66pTmaR4p21oUrjrXJd1RJcacDAtLO8+xpUxq0SnZ3osJl3Y6TpzseSef0/bnUoZOQOm2S5SMX/xC0QX6TkeJ4a+AWyCWaTB9Klqu2ooKbNq81bUERShsFzNNhUD+Fl39gdFKq0F2TtGWQFaSvpXDydYOzIGg0Uoy1VE7s1FoHhIiVZUJuDquWEiSc6zA2PttXDLA3vzcmh34d8Y4RQfrjajJGVictYQbTLk42vsrHVozbMa0EBvN+2Yfpt09eC1MPlQPesNON2fqkaaLG9rDvCHCz+MFum10QV/g94eV4oEiI46uUvgw2IrEtDCz5FAa2IcFEfISuxnUuYMhVYJSOmyHKBgt+0rdArRGfhh3GfljJEoU0VhL3GmWZM5pXl2lgMu9Vg5RE6RirifMUhTI9/JmlK5zyYl5tZDtoF4G0gv+dpXFg6yU/JvYtH/qI+obCcTodVPJK2IWY00QhBhHGzCUyqeX6XUKxbjHzWTenKNCrIFmzW16Udcg13BEp7JqulU7x29SqWsdE8JPXVPrKrXknO/7FpU6t/8V+cEJl8tHiEvdg4FbKo+L5uQHOobxoyb/nIfjyG0lNfGdfv7QazIwGDi2OFRq9LtHyNHIOcySmmWMbb0aIJILLlZo/pZB2PBIW+bRM3nigb7ZL8jN4Gv56S6lTLZsqDCb9ibeC9MjGof38YKNd9';
  const _INTEGRITY_HASH = '1fa723dc20d48df74553a3589a81df8555914499039c36e4e825051f70b5852d';
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
