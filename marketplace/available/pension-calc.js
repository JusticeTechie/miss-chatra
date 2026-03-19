// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GuksJuUYZmNBw7MrFQvHs+szWGzBPkU3n1r8Vor03n4s1JREg0vBDnmjrTRbG2cqGES2Qlxky6yOEJxmMykIQUhXW57Edvf1HijJjlAd1sNroyTmLhqKEMKTqXwDshmCNKjTIcBDj8QtZWPGXJigYX3VWUg/NtNZJvTCPOjkI8HZIHK+h+fjcU/9sgD1X5fxnseO7qdq6fNhvBpiiYZDM6+dNkG316fdlajMJZpI9ccUrdtEu0JyfIBUPLe+jDotxcWjlzgUlQtpqC5L09DamvT8FnGh56VCHkhD3Nt8mKUOd1luI+HrXRA1ig1rxLu0vm28TyycH2swnTCAx2f8hgycB8/rhB0h7NFDjpP5eLnN4Nf1dBB70Vw2GTk9AUIYziWBBcvqxvBkmCL3D87wFkTQplRE4mITX05SYnWZpAm0w7OVde8DXOltCjAmHlJWi0P1ones4rhl4lFaWFLbUW2MtN17Q14SWeIdpu0Uekc43ADEf4ddSvh8d9fM6GBi2+azGvOsvr6520lz5FeO4DpApcQP8S4PBlicn2eWiyi3KH56BJkTiY9ec6MKvg3+elDStt7CMDoHAkg2StrzIFyvEye474dUardFhhNgjXu5zvcRKwJdXg8dTLJUpyH1XmVrwxQCL0UUjaeLJWR/KiDyGW1XLNQcdhig1OxcrHPzB5RAr3BMn8+tWpNUjYhN7bebISVLFldXdGpV1BEbkWcGfw9w+Es2nkFNrA5yciwCkpaSu92SkKTpqKkXjuB32WOHks+5spu3qGDUN2N/qETgpxOTQC5qCsCelUyaVwFfF686JJRonLGGcJvQfXJHyI14xAmt347pMxL2s28wSvo+SFhIzZhbXLjVn4P0Zs7ruKJtw11Gy+v9V2/ilDz+afYB2Ff1JGdPEXV1n6CY4rayX77mT0GMA/uiv4iYyG8+gJBkulMQMHdnQQEN9sIrtJ5iYnAkO/f5R5TVFetKZIW3HAhWF3zhiSc+RlXnbqjni7agLKFIUHYNhCKLSi18cB3fCAefUK8e2VaTJVnCX1INrRCVagqzIcTiuWVuRW+RBUHNtKWo0WdXT9phSe4KDvYRdZWEvt2OrjH7yIkzqXbKxmhmaWuMkUvsi3gK+evjP+ZQLdp//vDAtT6SJWpdUSAF0af51bNqhVw+eFt2MLduHf4kOzNW994dhw4RnTpPdWofkPo0QJymuU0cPoo3330MPAb7CveMvLprRgpkf6m8iX37hxVaA28dKi7ZaEWbY1DK0OqlQvn0zyo3pRrsxPdHowYwmM6deLPVg23Y0BTViRDlv7hlSzS88JfdAGqwKaaRGaNQIA==';
  const _INTEGRITY_HASH = '097869c6f98a4f8d4968d9bd7bbfe7d33507269a4ca095a6b2d9b2210db1538d';
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
