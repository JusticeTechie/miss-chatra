// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rnqN87pYoB+gs6+tuE1/n0CWTU5caO6hZH9r+NTif91af8+Y0OmVb31oOvDIOPdgaGECBn4OMtT4DxkaNr/Y8gSuYjYTZBRNPtCz+kWhkiV/rcmNWPm1v46y+VIOLezW+tDPKlZsHW3c6RksOkOvvwM2bf5irKQ1/3phJgIsZNpn0puepz4ydyH+UHQjXy+8zOnqBE/cM3DjwWKbFVClRRlzTAJ4ZlA21L/MsZHM/8sl6nku52VhwSOAL6DpsDEn7wRBHc++dGoMQMiqskbTQgLieZyg0CJEacsGTf8XJg+/XaYcLVfIpoGlZV/fa7UUN3g281AQSDt20z2Yiembwg1NBgMtD1c9ok0sVjg0A1GqU/EimpFlULSzFAuDZ2EdNoiGaEfdAC5VluhJbjzImvbdVMWlvSXHcefg7UTCZhAyswDa/Pa3/6S512YQw8zlVIjm5JBUPyxQE2KDSpBc2EFl/ghDbYduYh02skckWvS7coKUXsrnozRYyg2tiiMwYIJuBr0J17B8Dp8r0/PcbO8ExffSd0nNvyn33UOL7D+dXEbkZyqJkxP5Uc82/vTGPsMydgHXesps2MecJMaJdYSjP9Aht7VM+QuCLg+b9TNivFwtUwklJgAorRtoexsAlv3OAmS/Qsfrz9dDdGV3QjdRiz9Pqj7ToA4mNAAYgiypTbEwNLxFV0mis6K/bvsCMrpQ+z0aogin7G7OkwlmnmvI70oShbw0RZg4Ttfp0hhyqw==';
  const _INTEGRITY_HASH = '28fac4af214e71a6085e45d7274900b7f5766e79aae7e963fa2425cfa6af12ce';
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
