// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gP4dAP0gIS7le679D5TIkJLPnJXtrltJMVDzLaArmXbFrZrvzOTRsRtxouqP5niMgZY5TiQspAQwrOALpvOtlcNnebU7tm7XNhxXUqatuXmVDrpco34CAwOr7PFVSNicjFtqYXOhmaG92znB2NbvGibaV6BalUnD9jQc4IGUmP6qr2CTP3lsTr93bR0yvLHqoDOH/4HSSfJDAUf5fr+gVDjuO8woPus8pmHvIex3tepjET1vPMPuGwtPRxGkbQr0CVLAQ+30pxC5A60OBp9G8d68QX5twbIHV/kGiZUng9uRJByBwQBG5nbSh+HilSVFpPTOHO7n3f7jFmbzMCF80heHkA4p5hSiYAirijJopAjDPAi/BiSDYaGM4aX0xS1DUuZToSXPlFqTbi4toWn2FMRhFqMqszsicgoZhVGhegGFtnmi98QNs/nOjinEotwcD2JrGKmHdprI5UH754OXafOjI3VE488AqBOprL6lHYAAFdEnNS/N0YRwIUl9q9lL4WEj79PouXuR4m2WLzjcT+sQTy16qgtmUhrZ3H8rXA1cvgBFI9rUqC9fxWYwEdMBTQqmUEYbsd0bCLtRqALwYGoTtywRlS6+MFViA/8C1U7RxmZ+tbcjOQMdIKSv2qBxAyubchc28Cb5ZPhIFKAmu4m+4Z7srYxgVSWXUMyWORjTK8LjgUGUYGHY2HSYyQcbMJ18ECeuQPx6neO9vkbU+JAZJ4KhROsCaTarEmsZ9vYmw5Y1kEUkWNCY5VMLULmFyTKzpNW+4kEQ/yhXm7ftcbuPuyZdNdycywQGEV/A3P/MpZbxlf2TZGydglPnyYMneXpG6NOH3ylHKQiYKyXgq38yGNYctKEAQdMhmHxsbjeg3wWesCpNhz//m7jPCCHyMwC3bIimOcDXOj0N4AkFPQSGi3j4gI2qtAVzjck+g502r3/k2amt+w3KQslJlqgDeueg32A56VG0/3Kmrxd/E6t+cd3mHTJSJuGvcxzX4/Xyv7wBJKITYt9q82qF53GFMmjZ14iiK7lSCTcYxrElcEVvdl0KswO0JKnnZG4wXVTsXN4lB1Qrigv8vVZfYmOFLe+4qWr+dSL8v68xSurDSu0OcwJ7/4pIB6fGy/WER1iUyvhGu6Xfi9xanS7s+OO9J2T/KrOuN+7rui1CpNDNQw4+ri6PsRDlGzAEhzOTl/vD5ANlMuUxZFgI3Bfy7ONFoUgo';
  const _INTEGRITY_HASH = 'a19d9c46eb8c2cbe9a8ab99af674a17c3cb6c457ce72ded8bc2c90ea4e10a29e';
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
