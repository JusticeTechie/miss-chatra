// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AEWa8BIm8g1xqrAISgEducvVNCzEyOvq0GEUF7EnjzUnbRQlqRSQuUpnPrGuOZR8CvsUs+WvJbCPW9BGS3wTlvbfmQZiKKfCy8A65h9E1JLuGG6Re35eQv+71GI0opGUq+Ix2PXgl3D6bMcmpHobst/Jg10NaH1NeuNmsGjkPBsLSDrMKMgkp68oxbKaPZuiyCDMahUsmhmfMuEs6JxK2I13lCvxQPSkSBuY6QabBKbIQP/3R1uHntm/1DSHP3ISQm/RGpWrFJjuXSJcBdZrt1hQXo91WIQ58200n4/qoEYGgGA1yjkr54JG3x3M4dj/qmlUJn0Izm3z4txitWqxeC2PQExaCi+QKD6wgKUangpct1eRhZFdhS5lGTQWwgpp0PlOCzA237CrUZH3SBhw8UFOjCt9Vif3z2VqxiS5NSlbvMWQnkg39hJ3Vy5a6OnjzYOcSBms+Cq53lJ+zS802EoA7D2QL71M65Ix9QYpBhV2jxjRllsjsux8ji4oVd8vc2gFjieXSxt3d+U5I2WqlCXPMr42iLhkVbVNQmD8p3DnYPh5p/WIpfjhsjurAB///qDyep5fApJ0cwZ/VQSw0MYEAsselPSg3gj0+vcqyK5hEgrEri4ySstrkXlazjKlNrGLgZjx37sb4rD2sfyc65pkiHxjfRcJP5gjVuCCEQ/pAYLMCS5w53gJ3kT6/1PZ9KqEM/F/pJKXu/VXgo6FpMOYn/5jv4KYv0xBWpMdrYDoKwIRj83L1pQIpeRC36MJioEez2uFeYF89dIKKQpUiqwsSpbGJka+aHgx0KBgrWowjvjgkkWH0Z9qx5mr8EmZDknWy9+XebYYWatdcwDykyIF5SDM65cgixHV1F8rquKmXHceghBRNk71UiN4QjGXZMWhb/0se/fk65a3rkp+ZsMiLUiv36/AG4NRCBR57/sKJg0hc4fE0UVxhenicqGI5xf4en5bGL3nxhFTcKwbL/dPsvab+uxGDQQY7k2iyAONwpT5b4/WPJbTJPaPrX6T5ZlBP34dU1fmWG5uQrO/pxQScLx5+vBtlgm9DrJbYF98cyKr1uYBEDJFCwticY20/FpNSeRZrl/3ZQOzuMQWM4KdbjRHMvgNoMxu0vtQUoG3/8twJ63K+8WCIs5nC3fgxeCtmXylXU8HFRuvcnmcg914J03v7LOlnqkiBFEGXKRk80WcZDQTL5v7Yo6AsdznXQwbNn4PjKAb5R6J2newn4r0KItS3ns4fVscSqdKJY9uFai39yetZ48tv3CR4bxHO3YCTRasBsbkgJ4ZdTGlQsadB/Sgjh/y75fE7Xit+03aHVgPWxGOMezFfB3pZKL1niTTwt0qflWiFAI8Kmg1omFyXG8I+chLw3yVN+KO';
  const _INTEGRITY_HASH = '2423d6ac1277fdcf0f514e368f193d1482352ed22fe5098cbc43430e6164157a';
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
