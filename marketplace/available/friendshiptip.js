// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f1E5UcrPrQjSzXHdACRWwY9ZOuOpiajFYYBqGHi7bueMRb06Po3LHcJ1/ObhAMKPBrufZe2DYE4FcRQhkT3lyZGj9HWRkP4fVPVGzKYaELs+S11mP65rBxe8Zfdk7LCMHgJBDiEFMY/QeXbvuKDXdUcM4wppRa4C4xelP3dT4QQW87aL+FkkK+8CDJyeQR6b7v1PWSIhpeCyf6ueMqjuPJoDkWul5AwEY6JiNfSws4dS8+uFDoilBhmMUAHjrMhKQeas3kSb0rlqccKI5YMc+TEFr1ahumdT4brpQQz5Q3cm7mAGwOwsbWTWA6Y0ErGRH4je3avwPhq8jPQJ3dDn4Iamu4zxsOJMfatx3NRha4UF+QEHNXKdRWd8YKBC7h3gTX06Y9ljkcf4qL12yV4P/bzK4/l1zEMQ5gzzYx74P+u1AJCUPavQLZu+sUvRRzpjX6u5lMcC0dnNJrRhO2Sd2EkXsK9T3k78y+4zlHWa9ynkKtK4Nsd/nfrRj3BsecFYMxXG8xMZh2r66mx7AcZVb5/mHo2tKdp8hbCs/PpQstBSoejLPpZcvUlUzdsG7f5Xu2/XSKborDz+BSupd4p6VAF6Q4/1JDb4i2dCw7wgN2jYj56q+3UrQCi2kU+8BR9utGA1CsiAKbSCDf9oF/C9Xd0pVkg3yTxxtfnPjWHyPnUywFawMdLFMUYhD5+EdiTP4DcmBA1Av8Ry9vPOMnZLnQk5yaj3pZzO3Ivb651YclvWx5fpqH0V+/opoXnWwPvv/dALm/0rum40GTuo4lkaG7/jvWeAF9kAEJumHj0yGEGdUg2aKLXQo45ulIDMKNgNr0CqwE9M+RSNy64PuQhHU9bVumh03bNMhI+X3WgEASaJzdZtBVWpgfGcYHGnaQoa9LF69VKXmhUHZIFWpFAmeBva1ozque36RX7PMWlb6UaMk/rxMfTWRiCz7a9k8vggeABtlz+H5xbFSL9gooj8BzHDCi2AQD5NmyyGhrOS7daxcPO++l+ruPOAGPU91E6vRciRGsB4dSiMLY+9cxq2TmNbatt9ww+uH2cYbcZ3z4P/2D/jhXHn3qtPGzVsuBk0fAsebJOUeFX6IIHmfx1DSglx7uIalcIwjrG/ngNdfFPBYE9+OGTfTtcX4JxqbFTcuDi448gXGqsl28lK6TcFkQH2TqAiRlsXocNmVm+6Wqu1VSucwOT4t47Net7p+enRSK9XxYPawRuY0wl0ucPRTHL6wmg=';
  const _INTEGRITY_HASH = '78f11d49f9bda7985317daf48ab5ca8246101ad17560aa3dd0fdd83ca77c783e';
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
