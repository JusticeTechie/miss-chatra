// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KWdhXN2rcAqBV/N78Qy9oET8sdN+pzQEzIQf3/MWbqdT87LyQbq6SYrnPbbEn6sahCJy2667ARHrZIw4paY7FAN7hRTaCsPk3mS3NtJ4IPtlfvgWK/zYNJWBsy9mqxGA+ZmwWA2z2gac58WNI6lpwforU9zFiknpojoTHqw/bCi0k64NMsXjLOv0LKtaSvNqAam4p46tHJntE/Dt8rGSz4NNqDJRjg3HT7rRWZyu+tgIk3DAmoMZAlEdIFjibUkGrqHjmNwj8NlZk2s9IqpGQCYYSHYsE35iPzfbLccuig13cj749Hapfw471hMCzaMEDF625y0bwJbwggQmSQTYlSMI2mwlV3naxHZxbOSIgzA66gF0LdhoG+uR+sxNmqz2941ro23U8TRiBLHYdg7X0ewH0ELPOCUZhJQiF+RDlpzIYVyye5Cvuk6QmmI0OCs0ErTf+fa2hDhk4bsBe7hQj1VR5haYnB0CZFqkMtEzjS+396rroexurTOZ//0UgZBJlw1MUDmrQPUssAkp3V7HWGyegrK1olOBxa1Wy+dUj9v2VNkYsIE0EoEPvzzkZFIX9ZeRJqyc6ATOql9P4Gteeo1dI2Q+dOpEhavUYGhkhzPomBqrkupWFxTIQgI79zpi1lTp0HD8yprlObPuz8QYk2WsSc0xnb56ZgpPMijB085bust5WLl5uihwylC46QsnV4QmXO3WjCCJxyOethbs7KV6XukbILHEmx4ZTuE9LyzNomHttAZl6RVt0yeIrIilvN28KqrMnmxTmpeOvvkHkkebUVNZVGYGi3LHyhJ1k80FHSqhIx4VLaldyRTF4xoivjWDop8fSIcPojl9essZhZYFUZ7qtMroyNC6hmO0IhtXnV/SuIhCRHbN4MX6ub/ivZ16l0oWMl3BGJaNkqSWXIp3/TkyBE7Vn1RPfMX6wcj+h2fcw0dQlXs9daRON7EKbMMZpua9VszVPm5EwsdyF2HAEKy/tYF/RKKs9CEIu0rx6Qu7iOKvK9szf9z1pF9Zuye1UHExxWBl9063LEdlzfDdb4vxiQ==';
  const _INTEGRITY_HASH = '4567f0aa68a269fdd5e75706ac7992316c2a52bca97bdfd5a9fe6e869b6be2e2';
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
