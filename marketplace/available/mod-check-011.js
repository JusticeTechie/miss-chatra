// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u3dUPB5iJQ+GvSiEZkJR/gkXSAWjqLyWEudNx9JKnARlD6o+BUHCWf0qHpgoPyMUXYRzzbQ4UKaqDrNftIPWoW0amQR+rseYa2ol24REw/TYJAX2VVWpmC15BnRtfzreo22ZCXc8F4PYk/lUjMU3X25JbF7fd1ghBNzbcGR0EfBGHjTpCv9Xuih62CmL6w15WALWNJ3dtoYjdpU5HewzUkuB7DtRgse4AZqTxIFOo5Y1oOi/K4OegbBr+Mvd5iPVFhdT+Pc8sN4IL51lbBPRCPBAdePJLGQYMMP9PFZrEDqlVrPue44euRnGwnXrhnQjpZCqz/xI6/W07PfH8YGfhax+qH5yJ7MmlGmWvsppkZwyhpPxkNkt7GFYAaZLoTZC/Bj937cvcB6gnQCPfPmXFAfpZVNnkDjqb6pV/7fjD5FBmzk29ZGOSjc5IRqBUAArt/QwHFg4EQ+ishq/CSOG2yOTD7/rN13WU8YqheyPM9cvrjIbhITfnjIEkmOP5PlgfAW6MvNFsSKX1fjA0L9lrXHNKNPpC1QwVreyeV+17l2sewFeJ4Rev4oTAlVkvfoWIZ8qVWNLGCQiUSUWCH0BJvcHnW3yOo2WNV0ih0yYFQuNBuhghJAA9GWXgd6Jpm0Eg8wgOqAK19uvrNEOU3LkSBIN6Il60gv8/fT9Mmo4oBEczjD41jv74b2U7XhD/3mPhgyD3X2i7C8TA15q0NEWI65qI+q0nrxqHe9l1tlPz4bnBrz0fiqQ41g4pHQJ7y//tG0Bjrve+pnoucdCslfIYgkHq2hw5Mj6OCU2KCF30pKDpGIWtThS/eK8uVoajp3wgNKlCjGOC0jLAYBwXhYUshUMOYVR+ol+kEjhCWzW7QEX3fzMXiJ7JGRHouh8I9n977H0mLzo7u8udc2fUdsbK7LRL+IguhTvJOqgGtx8P5bhEJ+x2xwq7jYaAQiCgVJtt6j3dsmJaVHp9oZhz/MSzMOQfMBe2yBLpxpq+hvdolBUTCFjDATpjOaYkKW0Yw90rRF0AeGdkVDLcyW2sgkyukfl6I1mnJcKfAznA2Gz7CYdSAj2tH0Y3pxFi62ulCfrZymCqZj1498LPz8z0KWzqiry9SLfXeR88UzCGoNkGRBDQzQP8XMu0Qn2ubUpES+iJu4lpqWtEVvPsXrmLL//nvANlQaNrbaxzDVIlGU1pm2bXAlxnmjtShIcNKt6houzvPWjWfV9/dpcKNjcnqkiU7NBUIdj4+IlzBgJZZzv9FU51xrYiO+B1MQbOYogHozrBAW/SPs0qoQSM1IEBSYihZD2CoLc2pydjA3F+ksX5VlhVoeO+ewCgxqMoJmjkka+2ifmbE1CXEK6Frf0JySJPgrh2IeC6RS0Pg==';
  const _INTEGRITY_HASH = '997d2c2469524cdb6f8d22f54f84c0bd626828580e6e91e661a1c28b08144961';
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
