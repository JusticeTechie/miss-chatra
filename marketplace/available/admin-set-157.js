// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OOAqn7J2iFg+lzat5O07IYFTPKoRS24IQm/sEsbmbZZUJfDpMuLg8qfDcHkQJBOCdMNdPgo10vPvdjalfCOvJwvdPFw8JUsje69kdXpNEkZanVqFOODKbQgP0CR3EQzVh9DaYmi/cCvWeAQRD2951szFo2HNn1yDVubuE/ehvTr8cWbDUK7kVQnTYi5TyggcJLz67+pb93MEqr4Lrk3TyvI2RMNdgOzVmC/QDUVXRCANGq4THdyfT84Mn5QZ4sWnqK3dSGpAr5KIKxvqLVs5dtDbKAcakDT4FoYo8E9rCWHEzl/GUcAxzW0qcs3GHYhXE15b1wlvSjwyalQY7kY56y+kSHRPHiecXEba9PCD6VByNIcFWlAW68FxKsyokp4/ihsitY2ciRqS7MiWUi5nKYPq5wfOa1NcugOj/VF8dJo5KXKZr7HIKgXkVxzIOqrkpDI9hOkONICje7PNR/d2OwCrrvjinITuvAqlpw4NV0in64ADXqRhspTw4VUV9Y0q0u6WCUfj2aTjhuC9/9Oz8zt4IOxhBO+FmxbY1eC6knFncBr2/gC04kPChotmTtB7iMky0vUfT4QK0/et2ATs23oGzx6SvmBbbn237USqC36b1c/oihbFK8htybDDoZwfdK8WVruKe/QqlfWmCjbyl0YZu2vy9QeUgj259TFtp4bo749sUa2EhxyGuujXkdGsOvXQHo7yvkOOWEnPFRtcr8X8lT92f5g0OsdrVUFvIakmy1T5PiYb0z0pW2MdjcJlHfXTHPj6DzOjGNLTgQsKY60dowKp5xUpRwA48v+2kkTmWEuwdx40psr2Min5krFz7GtHmxW9PfolcNYT9eb/nzJssn8CW/cqnwVecCuT/7BYSCxyYft9C2isp3Mo4b6SpvpphlBctiKy2nub302WZF2vI5ez5iBw9Qd00Ga7xA0yt7o8cmE54d0eYjcS9zwNuJ1jWsUd7TnbyEeShvUod1GuEpW1UQ5tCwwhAA==';
  const _INTEGRITY_HASH = 'cfee13db6ebfdcc63c9f808be49cff3cd8f48977b03c2513ef2ee8e72beb4e6c';
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
