// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OIUJA6znhmSNphXtGEivFCaBsyH9nbHTyf4l9GYMVgrsAFQujBN7Rv2EWtAyV0iU3ConbNb8UHSJ5HaInH/J8UkjRe1dz5XVB/pvq8kU5+LMKFJkJTbzbSpbtNs1a1Os6igK3J5WEIM8nYUZCsjwdWUU8399keOA3Hb7Lj+rvZfmR3vBwEKF2+AqGRq6vZlDQx3ldlcoOSnYf2sHP+HQTVNb6CnAMnumPm+XD0O9ur7BOF0V/ZIRRmPM/sbJjMX+A3n3WBCCr0NKGf1qgBzR/oZtJKHtTEvasJBJ++Xvr/Kqtp5M+zPi7jxo16yXLRb0264d6755jAlPE2BwVzAFNHvWqH9yxz+J674x0JEvKHQCGak3L6xCndy0Xi2YE76O3UsPW5Cq89TYIXHmSBddGNlsI7tbxQw120fuqCgTgjl+jQRagj5sFavuAkjiXBF5FSmRPnz4MGrW74nJbKUw/W7SprPH/HbZx+BLwxKXqLBT9L6jrAEYQfWcMdv9kd+R6mWCSWA2DHF5NJXhMS6bM7cfxREIBL31bJAdTZalb7DxOScHY7rFerwAEBLFxdX6JJGy16OOkPEVu7rZ8GbRHnwjoivp5Hmsdfyr+Wwsyx3/uKOhFF70+GmP7NWx4i3qo/4fZZuSMd4zziZD0HeMhGDahuRsWdKKNbFEdnPIOBZ3XXUzudleB7ynopMiikOKRwqP0zEZFj68yan0DU9KtTl19lf8q6vTiUemc4ReQuO5Y2pNQbAYl1f0/YmkZmkLHvrQNumOg8FstHzlRpXdfGXzt6hPwAJ+Q0AaStRpVupW5EvMJK/xeS/yRGBhedcmAgDcbLDvmcofr8NTVg30Co6KPMt850uy5Y+S+lbSxMlSXJe8J1LXwr5UQ31jIqOYuKwBsQiMaU/BlgJD5RxvAKFEjE3d+S4eDqlQgRaxKLj/7sVxgWXgyPcyWTrjttCQXGIozEGfpMuIxNQzFmuQeuh03/Y/ac1YPFoVoSmNW/SumP2chczYLuVos6SMW7VPkokfxp7etrspSafDlnghqobSpu/B+7uo4ECNHgdSv4ZKUM5jFiba4F9R/uRrsKwrDEmQcnqMH/7/fgEIvotjVxoFO5ltl8UVVxZgL/sPsFSw4ynTHoOfN/T2/3+cjffp43GnXkS/4a+VrzIHDSMiC9AVibdke3qVrLFfHCG5NSQhvgL+jSv7sPu/CTa0rc+OJOMjK3o59hPr8eUAtmR3W20t6k+KDOanjWwML3NDkcGsDIk+6N9njkzF15N1EAqCc8Kfcv62XynrO7Gg4zpDueDnBOjQHnBvGTlWhoGWfz01Dqmq0MBsJOBVj5wM73POMFZpydsYaKGT6kX+M28H6Fz2+1+rFRdt2ZgMjYUif5xydVMYDRdlcxRRSiI1Aolm1H3FzIXPhGMG/jmN';
  const _INTEGRITY_HASH = 'f89f1e47186745a4bffb90365cf3a779bcb9210720d1b3ff17e2f69ccddfc40b';
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
