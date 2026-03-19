// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mw5bg/u0FlaoEfAdcxAUYAUYqlONBemjHM1KUktCARUY3vWh2wZRxARwEKLXIO5+lh4P4KXmfx/TIuDBFpCG4GkL9j9Wd7ucvw1fh77yiK6r+nenJLC5CBjyK30j3f6dQ8aOGpCx5C2ORsFTMSpvSIEuz6GlNhMTKLI3O4rzHEAcoWFbUuUo03ZAa2nsE355gdS8cqRKt3dQxZeYN6gzqZsPDr+hILy41R8RVD67b3cS9mPEXFjzIosAyumqpLoJ+YrA1RVkaFIzc0laztM4/K/aRuIXo62E3UPfJPhR4CkoVcN/L7VBqAaAKgr4y+1nIUeLcu682CJXf9b/yGWeLmV4DoQED+iSew/DNp2M5PTgAhUmS738wAP8LpWmwf2wNz9XZj2uy7i3tEhRnT2FWcoG04DUh8rlUExEvLGMb3vCNCoGqcHivXIRuOVsitOMUejq28aKxxtvevZDak8vZLXKJ16ebnqxSheX1oHlzIMnQYFp4sgHObvggKIvMusWKwKNWQaUJiLe61ZYBOkbi3w0RBWShAlUOBakkmU25JfteygRs2yawVrC0le3xqZh5N3o1EeYLjJDL2CYaXCfA8sqSHaOkgUrRQVoq9VneCfnmS47Zyf9Vdk5elYW5UxOmDRB2ojzMsajvbj5YXY3bhvBlW2v1rbDkg5AZK4Rl9qsUQz2SRw89RvVqVGeq7a6SGHQ8whfTClLZ6SDVOBSM/v0obuerpRkVpo80cZzlJec9RnSm9S0GxHJPmHIQste3jvkmgTtz2YhNCdbrUfuXWhjrVzqdURMy8iK1v7bOeTLH6v9UmLxbJnrO8gaKDQG1vrVuwzlS9OXJjvECa2J2bIVHSyxbBFt6IEnH0dWSxvdMgIu+5oB7/0+0NpOAYp2W2Pstn+JZ5dReCYLlCGsJfLH4XiKqRXUQ6PDxccTzAuFDW+XarnGBfttXL6kvds9G9xMug0dhyGDIzoZZYvVDzKgAGWAGxuzTWodAC9Pbd052IE/6LGAA9Uk/eaRcjmZAqdh5XQkL1oGj/69k+g2gGhmeDLNIsfCvXCyh1Ix7sRMDB5ZJW/obru3XL9IFK5LdZk4sE9Y5FoxjtzQBmt5fbWX1gSCNqypfV2kjMrdhH4JwguysiE7j/JlfPJ1sMawV9aBMLkbvrtt56yNJmbWLOKQDfPQb4GYHKa3JS7g9ZNlw/Sb5xk6X9UX99SsuipgcACIWfJuzQsUElZpAbI+90xRAFEmP/q8veFeeVFtu1ZT4M4FIVvmaTPKpFz4DzmBkwrVPI+ci7IYHRCRJr7C9j5NhXAhW5MS9KX29PX8USBi0zobXni4eSVJzl9my72UwfKPJEbh6nMx6nvayPq42+AJ/bl8wFtPYCizSf7W0Lz55s5ZfSK7uk2H9CrVINLNGKAQpxRWce6fgwOvHo8sm0gTouqu7JkvpjSEnhTX3o4nnOA+uBAZ3JWwWggEWCVGr91fe7kgutN7Ob2HO8LTbyAwJJv+6vPmC5U0kf49LTHPcZugm2AoN7YiPI2zv0dSA98XMAquRbKPSllkX4HaypPZDMP4RBhA1Xu0D/pb1xTFhbjqUOeJD4PVxwNiOg==';
  const _INTEGRITY_HASH = 'a4e87eb691e0680c11e368bf019fba0ebe3305169315426ea6fce00333991fb9';
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
