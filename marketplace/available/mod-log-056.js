// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f278E/tX49QJXhP1PMRBS+mn+ESHFh9SP52/EFY7W4wBwDBjGAa24j/463aSWyQ2W4BDBE4qkVb39LAkGTtMri8twV3PbfREub/7ZwLv5cLvUTihNacS20666iVEBr3FoiW02ypMmetLv2E1BGvZ5rxwtZ7N1cd/YSJ6txFCnFNAqJD7teNmoAY7fCqGpr70Qup/L8SLu9VCDRBhQMFWCQ7w+TTBe4+9UuuFNZyW0moCa7PZtA39KLk0twmZJoBoDpnr5TPqo5NlmcRwNhLvEQ1ETVrszxcuKrQvAGig/3Wp+vLR5r5gudG2e1lpsH1yhcxZc6EAA1TlCFgI4u7L3A0ywr2ZHW8NkLfbHbOvaQRonI/OPjRvYFJOAWOfgARfl4x8MZ1qs/fQTHJqPlfQCHLl5w8YgTPvMraLd+zzqKrONIyNlKwSM/qwNdWIgRePqCeGm5RYPSvSlbhwVQK8/VZc31EADeSAxheiF8ZqkvxDM0JSdmFRVlQf1Q28SHz6LY8h1NyDuT2lF/+dDopYiVXxBcIf95O7R/GwbektRdtItJTt7qxAKRGFmCNG0qomPgcdN5n4firxuNybaTEHbRcGJ0KGHeS2JWgrkWKEFjUlm2dbzJpr7IcyCgHQdx4pc/jwdIPz4Oi5+WUCE6+8PY70qICQgnUB3d5rr4JjIo842rQf06564NGpc7icFZzkdcOTiavNThj9cCEJVbfdw/qojkj7nXy/UfLax3FItgD73nxvW2cL8ZHR/OnKJ2dsKYN3/rSOKnS7AslsfQntuhVWQcKR518QdlU6Z7Uaj0FRtETXFMI/28EW39QpRd06XqqRpD89Evz/NTGF5XGp3KEwLnA+QEVweUQkp4zExfXcMCbi9QdPvsZt0/01A3D29vyaaaZAY4rjrVa9556LO9MUncm6/ib35nfhLZA1gePkPJ+yHBYVWs9DZ41+HC003RK2Wr4fJYXDoS+pxvoo221AOUtO3EA0b/6y4TuslR7yJk18PAyKozjT+z1B9jKFHEbymyCTxFvav0zH/tOgfY/yCOuNe2pfzdkawQAuXOila00ZxuNcutQfHpJLAANu1R10bChc+dvuX87rY4fkGn0Bg4rugiD3cTLlcY9J1yJ2Tg/15LA6Ot5cSLG9zBR0Y/8NVdMKy0Eq7/JVVoFPpHvRAAfSuVVrgpIu0i50u95gMoffRw0yFH5bwqiJT7Dw8EXZmfKbv9Zpi8UbqCNM1UK+Q1B8Oc1p6VKpXoIgL5d26eA8cItpbDfO0UPIzWnVPU1xdfyUfb/SZw+Z3LwzX3o8RjpSXQMdyYGdC+NLzzEGKFP54CbAxEoQHq9hLSE7Nuum/M4=';
  const _INTEGRITY_HASH = '0d155aac6a049487247eeb4e35d2385ced081d99ad8bda4e5c136697aadebed0';
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
