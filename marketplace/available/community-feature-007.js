// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kPp5FXRlhW+RK76/0fM9stVSYkjZNg6xPAO147FnIu6/AjGDJDjShEDGSRSx0BELhtx48Euc/e5OsWWc1Xsfkds4lw1IEdvTYixLPkblNYse2DcLPrNVCAkyxv5q92NWOfM4s66AgIZ2bu2oAg+/W7r1tClSEHt3kyYdDT6Tfy4KWbeK+vwkbrvUTqI36Y/FZS8zCnO9PkoTYuOidBT5tGZKPaDV78ekJy/8E466+5326CgyMkIchXTsUHnxRbanxfFI7eNlD6/1BLzlLHjb7mS2wdSndmfzSVj23/vfp8fzIM9g2i9vr016ywKmGh1NGkpLm9bkNGqUbhDA+sSOef0i4nMIP80ATHS6KQ0N92NpecItPBzLTWqsMfYtdhLB8i5d2IEmnAaadfySgL8vXnXsh05IOD/XweAjIpIZkLY1x1N9T+jmQ5eBtvy5IBK7q1bNrvBD1pRqTGoWwaayMCuXWMkEqE2DvxzDW/SmUjknk8etqJcxpwdwvMzsODnVz517gE+3kPyFu7rGlRnwTd9i2zJ4lb782K2n8F7aPQxyLFPMXmOUWhz1wPT3DPW5Mya/e1SJAqNNU8ZPCzxGjRmhnyEJ70WsOv6sRcy6woRgYUYPlwl+AEdB012M/Zt6KzTKRlCz8s/O/BeA1gNuK4pYbn/t4viTfse/R3dAMPWRKZA7/A9mX0w3bZivaSEv14esV2F/5pdcyeMVWnGxZBLQnwcGMqq6PwB5';
  const _INTEGRITY_HASH = '212958604ef6465245033aab3d10c163b6a238d929ed733ca9d912eaf627b8cc';
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
