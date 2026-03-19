// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vY9T/wkVFXDrIO0xRSGQ3hV1YD5VMuv2AT1koFj03z6mDMTkCJMkC9UJ8kZ1H+ihjC3LksVs2TS7aaskz9QUmM/zn/MaSWRpNnDhATl05uQkeXnBtrJMdwihkaNsbI+OZFCBJ5KKwtNQmwvwjpKchAQL4uO3VYztUUebMf2vPc2WEqtpVR7QZaEaqg1FapgbG1LrBERjQvPZjmoMdVUixUFL0O0kV5fBH6yExHudvNEaWqh8//0lrH5aDWTNDgVm8ghrJcMKhxD+FAHbxH74yreUIEjTaFZXqp/QTuL1xzIpk0xTHxZ+DwkF7wpEgaXLVkAN8NoSQfAPNjTJOW5cyS/Fgkpty7wOwYHC49Xoy8Cxh5sN+afSDYI+73PgsDjnqfMsWyxHv15mDsvaxSVXUhAao4RO4f/DNwJeh+uMZLRqjqE34Ihd1D2bzpzNNhNJj+yYBwme+V3EihrHwiX921MZyWaHjst1ac4Law3Jo4Vn5/V/2kcKW8Ga5PxgO8b8CkESHXw/z7tVC6W4ukYGn13LBBUvC3lEMQbtYhQ3ud6lmkbNC3yZxTDhu4DiGxqYYIrfyrEoEyJAHz/0FXpWV+Gs2BtOD1N8kMKfy5M8Rp+Rz+ufNEoXFSbCm9TGVJz2ShROIoBKAQBz6MUzzwSuLan8D6gaxXbQo9yvo1uvTg/fAAhRjCes5AcvWlYdqE4QwdzmJLWXRDwEAltFfrts1v7inZnCbYPYda2NoKwJNMwvFHTH1hi8VuDWqZqh+DSMdsw+H3N7M4BtMlTe3Y56kq6ybK6CYm3pKE5yBR4sBzNFK1j2kFjlve1ga3pYeSLwnGySBdIE0BDnKmnefwvQpu4iBvLzshs/rr42oOBJu7Q0aND3RN8zpfL67SNrK2McsHV8f9wpVLkCtsMHvqZXwP/KGmc9LXFU/vorQCYWMUhvhwzd2tHeeSZjuT/KWOQhgRp7CK0Gn4Dv8zKAkkgMahEZrleawQHW5menWQTB5rIm2dGk9SqMDaBbSWdd4MjjFMp+P4VRfG/ITnq03b94sbjbdx9PxdON3iEnB11lSM64e6Ru58x0WXNEBjfNhmZsX9Syk24+W9dW0GSpF+wgw0X96MJKxPIXz5Bn2RV49H84HRAb0+GhDshp802getZBa9CDPsWlA+nGMJRxf/qSrtZ7dlg92NfF5trjZKX9pFeON2mZzhlssaDqFgCiDsqZ2kiUhHY19VVUfG0lANj+GRqwO0eGlMt2m6nGYx5Fc2X9BkF1T+6ixImjHoWnloNVPPToXQKiX4/jMxIZtcLEkG2bLYeFOo45cZ3zWj63XNLi7fbXbRCcJms+aRzTQiO6kUemo3Zqe0qrUn4Cb086gyi8IjRvd12nZEuIVrwW';
  const _INTEGRITY_HASH = '1dac334b8b2195ff79ee624a56213c2f568c60e3d40ee7a479033cbf04db8a61';
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
