// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S1hMfLfn0WuIqmakM5kUUlHKP3DmmtybmamARagzR66KfosZs+aQghgsFXZy2Ygm5ibn0AoMFWKR2F+GmRdctyDDMaQC/swePXDjR7bA4JPkJjRy+OqJoiuR8kqj5LD/OCNpHJWLWz9xqCY2WWzMNuedGhdMk9zKp0caQ7qv/NZHcSwqO5mDp8ug4kXIwBP5fDj/8UGQfheCtRJcaVwjoqcfPGSXsyON9lmrwhD0megOChTkFx4vI4g0JocLWCIlURlR60c62jacqdSlY1jcPY230cxutmH6fRcERCG2SLusUwi5w+tGtbkGBoDmt/u8ARBjnQx6b4+Xv0ShB9GKu9VlIQiLAN2ZX2YuxeUaO75Vof07BLJAMQ/1iS1MLzKh0vVoQMyCCxq0i9ZYYZOueh4aRGXmIatvrWGCaO3xurDVjDMgPse6ur89WmlufPFaaT3ARBSxeW6YTPehjz049Drb+bP6KoDuarwWA2RvttbrtvP2d1eAoeIpcFUYr1ET6NQEJDVBNPKPP5HAa4FKYamM7qAmYWLrvbvD9B8JUCjZAO4+yDis8O1B2SjHqdBN9HOHABHGFL418HL3+lEPZhp2JgmWKDpdNGoIEtfWsp1XjexSFat6pYJSmIfHHQ2LXxuy7qHnNUIEJv/BWBFWZ4/Qgj9K47sDa9Py0YdR7yXNEeETK9gDMSuBffdBiyjcWeLjV6gpih7je0Wod0AmTSEG18k=';
  const _INTEGRITY_HASH = '427535e51edf692613a2eeb9b912a4ece8d8660f2aa2ef9588b484138ee16cdc';
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
