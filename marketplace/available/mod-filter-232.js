// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YPHCslUMuXpmshoaaCHS18XivHasYaHwonoEGmireIiybaDXIuNzWeKbOXNqEsLIVhsbVO9YYs/hMIsfMCgZ+m6DwbYfRrvXXsGC3hxIg/Dc1GQQnBHVdL85uOAxDcbe3PdU01K0kCPNovDJSZs/GFMsswwwGF80rQAkuRivXWegh8TuaVlRwVHzwPfmjRvSrM351E7GhwgGGakLmTLil3PvcAHdBq50qxM/a4wkslrDUm+8u6GJ9nwlbPQT3hQbbQ1K5E2RwdMIA9jraAQCK9EkiLdydkhie4JkHcb/apQTupBhHhdQh/cYCPnHhR+W141BCaSY8hYZSaZooGsD4xUgl1mOXzTihk9svXTyc1lbZzzeQ7YHpd57Ti2XxNKLHPSt1OAIjmd508Xz0VWJ+V/mpkH+cEoVGfUJ7b0Pv/IXshWwvOWhbsGC78AclWc6bGH8wZexyWOZY+/ighzheKnYKvZD4aj5Mu6kIQUCAfVtQb50BbpxnQvemGNlrjMZuHCnW5dOLzvgcRTEznD7IWnhzYjlwSxupkUcGtheGTeZrDBLPQZq7DOUKPzJDTEpDlLHMqMeL0Po6kPlHLHJ7bdlQ0owFns3Nh+3QF98ImXbxwZXLAa6BWJTt14xCMTOo1u+rK2MvnKHS9b3V3NCI2dCcy3Lo3aFvgEkoOPeo2ePEh3AP2NLp//6o1CpZ9Lc2YeDLfWVvusD/4EDxxbHRoh2zqlWg0Qf5NtH4xLPDHeTr6p41RhSfYNQJVOWX/IwCWmgCEA/fz2wRAkOcGrGFXTJRKTmZZnXCL3IjQz9U0FClgl+gQY/Zld00LeEk5PIB9b44l/OIQeXeqwTny8WwgYcEqSq6GaxiQIGg3sKSPIpK72jz/x8CeycALkChGxyn5YM06p8y30xhc0WedYciJ4lya4Jo/qRDYu3Zc2wmVlnMa3bAgYta4vMpNmMcTzTEvyNmKSDdrq/RhY9jI80Dv1fX9xk5uonolSg/koVVkJAoNr8/LBPDRFDW0PX7aDRuqg+LO0FGp8QF0jgvbHo4+kMWDXGxG4nkH3MFHYlw8DmUmXEPSlxH1z8QJCN4OAVzhGP3EPDtYg+U8rjorhhmsrB3oPHwpI9OV/8PSKIAYQwnkmuO+lJqUnvkXC/1qnnOhXjXtXgvD1MDWOHRm9lImxYm7imoW1+p2guLF8Qm6q3H4IuESN0f0o19k11YHWMbg5g3Mn9ZSYqlcjBSaUXpWf21DyOuvgUYLspkQbNtxWKFaA/xnXJcZ9HJjeGxjux6l3fPrdERdoIThwK9p7+uyJfcEDHgH+rQkfVP2aMJVmIfPx65fgTkXOIcKM4ac9XR/8xJs9VO0C+tkUHm/G/ydD21aO+KbB109D2HzW5oyUvV0F6GtYKaA==';
  const _INTEGRITY_HASH = '9f4ad35e08599f2a62ffe58d8250f1a340bf41dfd506daa7d6046498fbb597c4';
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
