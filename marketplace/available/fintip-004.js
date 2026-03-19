// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qi04jR1PMDzSAPc1gq7kPc0U1HRBbTiVnfqTxUiEvcPUUjR5v7UDMo5gbpUvuZpI1Hg+upTrK+3V1vqgMnX5xucYQ6XMBNKHPxfjYW2UdRjjPx+FE0mQCqCp9K3bzQ5XzKxK2073GB8jIpYBqUgxrSftl77dNb84iXrTBV3uebnaPaImHn//+QaetYPo2xdIL1eYTzG/oNf0/Mzz8/zVHb8A3Vgm9Dl6s6gVb5iLkQHfsqr5+5OvJHEXJSg+JrsJyqQY4TMyGtAh6rPgClJR+7Wda66jcL7QXqu2gRYlSKsTrVqtGArDGEbJ2Nb+NTWJCZoweNZOHuxg2KpboRU2bbD9rMx81acokbki/pUFFpvIdiZTYppaEZrfZaW9ryvO5E9GgGyKEjXuzxTlYXreYxdbrdeyVNeXiNKnmq4T7demEb0NHL+mwlu47sg4ubBt9SCu0c2lBDJr+Xu6cHICDIFx1TWFFQrxu7oCVyFW5nV2IO5CrNAWPty6w5VwQu2xNFhW0QElkgXSEePBIqmFO9a0hMi3KmJOxhdBY3wVpHDucJqv26rTLnAYqe34Q168BPDtaeIllR0V6Qcs6mh0rLPWrLAIIBPoXrmMGaVQtf1j4b3nj31E6QwzR2oDMI55jKKPt82/EdFJjGcExGpmTEZdkD018DXz07XFRt4T1847yu/eaaRC9U4nG7HB9qc1WobE+VBmLNPwH17yXMy/cFMaZgH0/boGDPzZoN+TmaAj8LYIZL2d6jSuaYBWKtVVgPBLLK4LiNrvm8bKYdJE1KzkfWhOOlK7RXvqRSCcfhFtPIz7Z/mowjgnLhOz0Lrkw1/hexhs9IJLm/r2N2KKUCqnSBbLg7OAOvb+Bh8FRbuZZoD8KubY/EiII28pjdSXg977frj5rHzVyb/CMMz5tXax9nOGkZc1THgNI8QapWa+0K6NzpHzoLe/ICxKyIxUgzgkuMYBj1PyEeuynQs7IVek3yfHkCkaJJZPExg4xiiQqL4BnQaJvd09o95t41V7+Ys3PgRY/6u11ytx9hwLa+d6XsIp5wzY5Sj7U3jr';
  const _INTEGRITY_HASH = '3af5412c6cceafe531fb20921134fbc1c51eb660bc63fb6383af65f653c08804';
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
