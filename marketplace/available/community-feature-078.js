// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HeJd+9b6lwrecSKQzez35B7W4XU7yeZylp+RJE+IL4fd/RiCJpXiR6LFkHRbTvrxf2ldiOTBQ+SOOktqfxxT71GihYnv0qOaXPdhFk2qK0R7eH1HHl8fgP+frTDikWQYs6ARz4XlyYl3wc/3rKnlDoZki6J+MvYqyuCU4jV5k8Vu8SNDg1yht5Hg2ErIdild9TUup4MEf7ZspcQ4V0k846Vi+wDjnJN1er1mJ+ovW+ceW4o3dsc0+i0WdDr1EF3S7Ya3/gsvKXD8g6gbNjTApym2/updHL/SrFxR69HQKECOGVl76hKRWlgOkE9XnwfGlgATFxDXjE01p45yhi3kSnHw1eKMST2IW2s8ZzeNT6DccY4rBtYuikmGcgEOxmerRjkDr2J+/Q2Xks4GSkBtc2O6lQG/cBLBVzp1+ocC7BT00T3FD0Fz/cJwJU3NcfL3Xg7EktpAbuo7++UET/wSSWh15dRHsY8hr5iTY4CsVbP1bpcV3dbTqS7oyIKjUwsPGRxwQMfeZ6P4n687ojANugPs7C7hjZdAeVEM6rJFBqx2AbehK/a+eguCqnu9uWzK8krS/MIZC23S7UtNToAzCiYHPFqyPb4hIrzyxHJFfiD4Lg2Bo9P5wWY12eir7ALHhZlqfIzsvXKjqb63ksQAYd7G5oTO5+Iz4onNWVCrKOJiF/vo16RjU2+moqLWh08Y0EBVv/kjzmnIplLaKX2f1OTaoT89gs6Nxw==';
  const _INTEGRITY_HASH = '6bdccbc63d6f2039bce475b1f50db35abf2fef5b4eeca76c37771f77fd405162';
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
