// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r3eB7JIjvA/lvTRuYL2dWYC3/fyTUiWKdwjOirAy2149Ne+hPc62XsNBLMNqCLaqNhXFym+1auclene27Qb/lzD+zgkEd1JpaC7FEstrkv8PTw+CkSkULjjHFhjdgxnsQ7hLJolNf/rOZgLLF9lg0qsnEfVdC1tGWfMdMSILGNMq4Ml8sd0+j1lYKno3zqv13g4vNsCigi9arcfaqq/rObAk4Ea9c3BPLd5eNlPlXCxEiSezdb1TU55yuRq+1kyQLxoQpdi8S3PS1gxeSecCaYrNGxC1IK4mzEuAPNFVQHljpx6/VH45q7tzkYz0sYhJVO1/ErwvFFBpDLzkoerAJRZW+L9uap21BS6C8F0eQWQUlUcF2k9yaCnRExneLbixAmcgOJHZa5uOMSLPbkIUaslOXl+32PXpgDyLcyCiXry1cCqChIG1AOrSmnxzOcdvLnQ7chtD/gE1wm1BpPnD7Uvyer+/4V/QzAFJ5i71EF3Lz4R+gDtDf7ABLUUxxmCchaIgnG9fxN+MG3dQTmlhVVfDlLzY2mhjiKMOEfu/q1vtaAK6StlZUnv3kR809LsqF9qqBAq09TgpKWIVndDsSA1hBcXK7EcpEIN/1ZPnOrkUDZ61QbyB2YdPofIOID52CKjDZmQnis/LEoVqvmF/3h2iLahTWs6Y11QXa+3OkAzYaWDuvkC0VBOE7y9jbrHs7qk+Yu864U+0UKpqJ4jmIBS2wzzlXiYVvBbCzdFQ6m8wxqikYrh2/rDnYAPaAKZjnm12kxAn8CQZGBkh81W3kWqucQYYj5EouZ4d+ivJNFDoOAxJPtf5ILNEXwXM/yZFoH+aEr9cjkOvHUyKGZhuWISK1ca8jZAS44PFvOT3efqGUtw+JspWT5A8KzCDdpRx+M/47kJOCGnMqv3rii6ROJ/xdLVe1CwYMzVh4LIZX+p+URNuevauz3Nfz2brAz5MteqLF+GtpwvCCOxBtn73bYCmxts/0Sev2eAHTKxQtDutVuOadEhbzN+VT3cdzLiICI3zfIuYog3W7Cg9UbXoEg/FJ7JGVEtOSbnYUJN4/phvB8orpNbEpoR1M0PBGNregi/cTsV1jIqJPWE=';
  const _INTEGRITY_HASH = 'b1961ab04e8c0db6a05eedb86ebdf7077f33f9a0f3af3510766ffa3ae0c16c80';
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
