// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kKZk8VsbvWYlRzXZU/CmG3f6VeP41cRXNqBQuFM1WvzlHSebqgnThS875pV/fr81dUvZYKFl7XFTOHmGPhcSgNVqmmThzFuN4dkr6Z0c2LRKjYcAUvB4pykpbJHSss8XbtEPAVyvUfMVwHM9ncqlkiUifdI7MHPlklTgrB6XNfgBpbJjBlicl1s+YGKvoMQB7JqlVwzBRHhihbPZ2bhWYhgS9VERrK5Scze4lEtgFwI1e0R0kuYGfVgwJHOZND/XI9MeqjaJJlZuey5kmx+KptHvWK3p8O+ikb4BRAICLcqJFY0wsW/KtupijMvzDCHLgT5xTXVoMoiE7buxVZI3ZzNkDuBY9Zvm2LeJasklLqkZvpQ3z0laPzUVn9W9cnntZWOHXuO4SKhzvR1bQfTooWQ6iZiXe334+rP+h5F2y1S50F3xsGAzTzynzIKJgc20zNw+MxMsKuRmSFVcTIjQNZj4YtYMOJM/kKWBhZcKj2jSa6ZE9iaa6YmYUk5Y5w/EL7pyxpNaEZka4vdGy2HfAfDFs/SaswbzMFlVBZgRDdFhjGAeYRPcpF/8QqVDbbw/rzpGErLVL+Rx8FbrDXjd9vzw7eRK0PNjiNBqwDWevoG3aE9IYXFKWAkhf5ufKhJxUEgva5xOmNNng2E8ilGLsuYTbmO6pLcAAbla0XAaJsCCktufWAAysJ07am28bvo02nFPG+BcwaN+TJUV2gzhiYqO/et43R1l7C5JTskBlpcPeCVo26rRc9mR/nmVlj9mx9VwEgxfwmk761Bp+/ujqdnb05u/lmPPQhZaYfi3pY/CjMgctOpQkv6goQbuIxSv14csInichZmiLs4eRHvy6yqfZ2/X9XPSOVRJxXn2UdNXsScQwdiM3MXM/VbFi829p2pBPt1pL9yuzskPFJoLy6EZspPKnHT4wd3GgjChkS5xtFsEaZLB3h8nqC6HVv+VaMTjbUbzSzT0IHGm517oiteFal/etBwy/1JVg/eC7GDonWdObpZBKrRGfdxHoYEV1yotA60fSVW2NvMEV+aRNTWq36USp5700WLOjVctnnluQQkcBPbmgjmx6hJo1xX0Zg5wX90YCf11+Yro1FnFequlYrsdAunSWBuT3IOsmz/b+NqOzmMQLORxiR1q8vrdfoDAB7lsPHccHUJkeHfEOpV979LEk+LD0oKD0u8yqIcVcccZMOt5LRhW5C4CPDFLCIhGpbqOQMCJlT2YfLBT9RE2KtRlOnljZUiucoldbhvfudsb5irS4mu02otqdf5+3DMPSQf+l7sDSDMLnSMHSlHG/Ao5qh2rQ51n9+Y6gOPWbkVEn/lbbVlo+R+Qsfg5Qgg74lqfs8u71Q==';
  const _INTEGRITY_HASH = '284260aed20ccc76114428500f03c0528c4772ba3210c5ce8c6b3d13b6ca29f8';
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
