// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iDFQW065dkstoiaCVCMBeMmUa/ylQj6yS3gNYtF7aaMGetN7+SnyUasztuzl5nY9h3/zzbUS8YRXW/yZwpM2syqzs67TVQCoTsvVO/y2251IyreFtOQBScvAZqLhXbCx+RTEZsstZTyB4RV8omtRFJJ9/p0JE0bqAuNr+Sr+tZ2egkP293axkE1+FVAMlZ72FPMwWtWA82/7uLBez+ruD1pei+grQYEt2lsGPvJDbsSaofYM+izOwYNosLO8MIvZm4/Va/MZAitRztzvZFKGhgjl3dKeBxNtKFINpFYQ2GxGYwQSMJr+VnQLYJtI30itA82g82abDg5WYstpvrY8Gj25Y8yt2W+qjSXSVDxXq3lHJwS5buniqdNSzoL56//7RSNAaUCGUb0ksJDnmgtQpPIevuza6skcnxhLknhzrjmdKHUho+vE3cqGcm+l3MjiFjpzwKGcoFoVNYxYPT2xowmd7JfH3/dr4B5ROyzyghJ8ZLrV/bdYknXkx+bNdXbe7PIYL9lhNA0TANLvBRNzESJpJq24celi9sOLE54fgLkijC/gwlSBhAhAX5e9dYhfajDrL5gKABhE16JRWq5mvQcO3O84qnCqsc8BZ4Fwe8Qhj5PocMk5uCkdY2Uuor5B23gYgQ76DkYTOoJ9iIi9xEI/ngymTiUJs6GfaaomCY1SZhj9LiQYLQ26WOzV7mFAIp2Uza9K+hZK5c3pkEneXo78Q5Pex8gRcwUP+SE=';
  const _INTEGRITY_HASH = '0112308e7d963aa7a45d31043856f957b0131ff708b1b310745543d45b13be47';
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
