// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IxjsOXRv7s7Cre1LcSGwG4qMRStflOZD10tIjhUJx6bST2rTxhisrqnTUb79/ilrxHexV2IRFOaaWG96wBOUuiblrKyuH5JUHGUQ9zaVvCzJl88pMVAU2U3j1PBRe64LJDntCUhMppjeV/Uo+A5WI2PsIxg5tOqVFOH2dm3J2NamKwNGytV4J318UBsTuNojkeMmtmlspGuZp50GVIL62wKdSt/RlLjw8g/ZoDudET2/TEOqzK3AGZ/pUAUWJl2WWwc+X9SadnWQxd2sj2F54/Bsr+iTAvbEOOB+ir6MgdND4wiP65FLcP8gnHclZlA5fTLPbvhrLGVQmCLoRZ26L2Z89KahOcUmysVnvLeEuYjM1jlAdJz+kWk+03vtsCKFTOMCnc2n24KsgNBH55e5LzO8cuvOhw+Xal2qtSvMN8+o/+8SjVf4Unl3m1cZdctZ8cX7pqFy0uUCedxR4sRM3NTF2GK7UobMPPGBuXPUS99HJcrDzogCCZnHCCAmAlGkWcaQCf35CHOM189RUOIn9O9a4XQ18qGsAFjQ6P05ETh4c41DI8vZ9yO2eFHxsOjZ75M6GhsrHkC0Bi36VjfhIU2HRvLVRYbXTjCvmK1vjR6cPtgHUtVZ7A4Wuzd5ttA37IaZQLNy9Es7wazSPR+++OJhDJdKyYW04MtCCeCfU/H2W8BKVlTl7Qogrsyk8rmfsDqarPYlctEE+ZwQi+SCkanXGeeXhUwxlVl2pQL7sPX6v04s7Or8wLWG/s82lXqo4z31e5fl/yjolK9GgEn0KGKNtk4dHO2bih2yvlrKoQVcQufXmLEExCAH+0N+syBOb6PU4wjnYBQM6eo/Yb7S4qKYuXuI4CYYrJa7RXfVfTqX59mUJ57n50lKjS/gjqtV6/xDk7NgPBiTCdgXv+l7FiihR43v7MslMhpKK4L7oTDDFjVLUOhgcnTFS3LpGevdp4915fzi4i0AifdTuCltt/43o01T/ujKIJ4/g8wIYp/d7SjNb14y0xaFR/L2Hj3vwA==';
  const _INTEGRITY_HASH = 'ce9bd4d7d58521b5b9fd746f8ba91e15d4aefcd91805c783b8c7e1c0fa0f2817';
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
