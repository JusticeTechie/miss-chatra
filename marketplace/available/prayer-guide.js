// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AgxXycJf7BE7CQpkCyApDumIDLqVbcDc6qd5k9oxareAqZIYCACBwLx4/SawiZhEh/Bwfy40uY+VbHgvj4bp8aHI9GKb8BIRBRhnVacc6yVWUn8wi67Ypr9G/ASuhxblnRl/r4KBhxStRKeAjI7OztWm7C2v2+lKK6aD7yssQD4Jj4JXIYcYj8AibMORTS71LLL/H7tq9KErgGKSDS8DPPe7vHOUGfd1+BzBNcT61WhpI4cGiqaOq7ClCBJ4PLbAI1EOfaQVQFP1BeoqweZdv489mOqi9PhW4uow0l8Ry4iGZhJuzgfvlfuBMf8NFSDiMq9/HT1gH1ve3pUx56EOpzsyOCbFZxZ3VknRFtqoUCmcAwrqSecZErZTV3AlV2WrFQleEYzbkAlbSA7uQFdhSUmLpQng05pFRjeraess+tvpvnU5aiLYyhqNBKVElXY+4iW64pJZr2IEE6KnTZ7/AZAPDx3l75r90iYygoW93ZrlwyZNPMU63icMq+m3qXxDwaoJtExgP3GoS7QAfZSF25gAbuxdwwDhH98Z8TcFmDHEkFSjbsbZSiX/rItHCaoLoqnLxS237+khd0Om6R4Qw/8VLJH06Zrsq+gSgkBzN4aNaA5DApA/rnBh9qCUuFK3iB5rRcVGfRVqtBJdBBo9QaZwuycdmGfryn7/KapzK6q2cWU899tEo+YBt6hGjcUa7NSydaRx5zs01sscxjYsiTmowSgZ/cy3H/WzylpuiByWfCyId0HkyrFxxicckMFIRNNeVZmoruX3hS75F5jFJY4NZ3O2CxyDdvlRZ2xgJqQy++K0rns+rn9oDLXLGr2SLUWJXnDFYF7mbED3OK3ThU7ontiq3042cX5dmPu4O+meNBJYh74Q0lHlBRroDoI10Rt4STRTW6C1BZjyTvSwSb619AB7F0EXTFah6pNfaz3B9IZ2brZPUcvNAEXHgfMyaWc4oEWGsuNfNmVfLHi74ZKG50K+D4wpU1YiOALdYPjU4r7/AdwBUMkfvig01zIHQHEFonRVf4DrwNjkvsA+PjPobqdjo4mQMDy+BKtZYgY0RGgKSCj6mcBUHoTyJ56pRtfFjFxIhaXOavBVkHKyd6pG1LeIedUTq7/k4yA7z8dAvL6/9sDymhe9n0lTOq3S0pgP4XQvxo3wvmJBGNjEatSDqWs3fBthge9ZML041lQjuhvrdvd1LcVU1DVqPh4FhArAPljJvHoX4kTe0qtlu25jgXL2g3SLUgj7Vff4rggcpQwDnrTasrbkj7nCn7D2TPowNe4n0wdJt0toTgOSvGxQbEXYKUImrOswJ3Rd68mY1C/U8gM0NKA+z9UKVSZxEMguegtY/LsyuR1/10sEnEoq6RUpiv+xcqHyR1roehOZ247xd6k3JEid2P7kNcojE3SjgFhrrhtAVBEeQYahI79d3R6w/Ps5mQS1bFrrPIhDbogYnNpEyzRF/a3TMJTPrnAf1EircUrupI9pwB6SoGmObxQwWf/aN1oRRM3L1NHEDGnDPe2nSkR2txX62JrqhWYZsRfyYdwSAZy9cZNPGaFMBoPLFmiCI5cHfulPLJxmw9Jnv9pOmW50YH7hNCKzTD0UnVQ8Sk2kDjI3Nq/jIBHGJZl/xNf+Jdcr+1zlEq+J6U+33HUW0AzBqScvNUs/fvoPTDVV5A5urKobUWXlMB0MjoC74gkof4k/J6EGJR2vDc7AGscC5E7/ORhurCPab9ZFAjVCkKxbo0vLCC6WbXRH8c7enUadRbmxG+1PN2u3u91sHma5WKeTeSp4Mke/HQ4Mdy0wuEzDGIA9zHlzg7NrZHi3zlIMGkDj4Jdj/A==';
  const _INTEGRITY_HASH = '5fbaa44435f78a83e2bf13f05d343c777be332059f0514b0be46123d6bfa66b1';
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
