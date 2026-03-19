// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aQbXvctpJbNpJ+9EEa5OpwBy1633h2dHfbcRelrzBXn68W5UfxfGgEDtZcK65P/nV+JvltLATMIhr4O/A2YtRnMRzgWYhUOFbctWsz/foROMXaeldD4QCwAPVT56Xuy+T8ryQP6TLSNk+otIKBTwAmVQUG4g9QWxyXCrmNwcDqpqzuUYnEI83Q4HVgrgn5x7Caiy4OgBciflnJ0POQGekrkqFY11qCC53v2HkgcJcFc7gXLEU5sNvKt6esv3GLkCl1I2KnXVnKSkMUYOFM/41fzoRr1OPz0Y2ZPp3UHuocdD4TiDoigNDjzIxziuCmLfN3cb/y/fl+0iUN6dpSU3YXMvEW6U0M0Q5CqhkbEa40KdpPvJ54sM86MDo6H4LTBk8sVekuwNsjorL5ZU82acjG6mla9m/zEA2AxyE1ZLE7bSSndMIJXVTr8IsSKPRMP7CouV/5Qnxdc3aT6clowd+6cabY+siCX5SN1ACsYFm84oJN8otz9Bnz4NCtFTD127vUKWFkGe3Fld4mHV7hLkoKNFlZrR7ymeARGge3gbZ2gTbC4tD5KYbnCau8f1CXAAbQgK+n33cA3aYxMMVPUqxjkClIetfDrcXzlXkj13F4ZFj9xEAeKg7nUvh+w9JX+B+UnIRTok1ljNI9t3w5hH0886E6/m6xZYxnJJgP/j9TPZYUtw3r0Iy6CiC3cTjwfHCzWs1rYka2f5tmREEmra5tNqEgGptRVXHeDU+PqOLe29MQ==';
  const _INTEGRITY_HASH = 'fb14d7e2fed89696ccb5d2273396b46af27008c0479585cc6598110616892049';
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
