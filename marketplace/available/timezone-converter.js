// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/qol0iqqSrq5MLQG4dUKBlygpVmOWuxk92hWVc3tz58oThNgsZ1dd/8DNwmGW16bDHTrnA609M+fVP6u1a/aH5qzJ+A3k01MpBg3boYZZKg+TbgXg/DAL+p2SEuodpYR51iitTgsvFg21awMwGhqavgDZoQUG06uFDqP0KcjQpCtTsIDT5j6DIkeWcGKOBpVCUC8Q16U2JcIsH3VUzcAyE/FulVdVBojux2D+miC6OdCb8axDVp+ioAJiZ6F8iQthBCrckltx8ODS6UUDo5LPTTZt5YyaQJfJ632pBPFssnAogJxBR1VE/RtNYZ/rksRstvClBqxmPiqjJswXL8k1t6LKHEpjnfnd24i8OnOfqeP4RZwzNlgAndF3zgE0jopjomnHfdySplyZYaKIIUkCLEHTgFE1yvIdXcmraewdF61cya+dJ4nyjfhiiLr2h1r0i+vzXu+IarqVSnS1iw2P/WvclZ3E8tzhc2hSaAiv82pMDQkjH87JJsnAD1IwL+6YeYlJKOa8ArfY1lA/wCAtLeqSwv4fnWYFvzBrgwnW3zv4EvTL+Vqmb2kSkidvZkjY3ZnDD/nf/B12T+DppFdOiyf9sDElj71hQxM';
  const _INTEGRITY_HASH = '8b958b345e8dca0a972edcc9a08b5019c5f84e9ad89811ccbb9226106677a61b';
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
