// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HwVbNxSIR0fZp/v9gDTyrwBecayPWJDTM+Ie6Jum6C4ArssF5pf2wMfIM1AsEMKsAhCNi2IYnOaqA4/Jin8UUtuQNhgtnHh1FmGi9GznMWS1t18kJVagsRrVclITuXhh0tiEK2bEyJXI9WaeObguk9aTpp573wcxtupIGZKlob9/clF4CUx44MdhgYuTBydA2spwblmc+pifw/Pkd1qzMtzQDRbAJHh3oo2mgfaT17KrjG12lbYWT6gWKFx9wrZppIJMwXfn1Z/ziuFzOClplyjvixh+Zo54wf2fHza/7ZFdLFEJ5axjnC2P+yOWJcza7KymUI1yJQ+AP5H3B4az62UxoPxuSRIrzycI0gEyA4vCNRZkAuODFo17531/cuGdjGkKReq3H0Ba4xhKQ/tXzfRxqvbSjF84Lihs0iofsnBwN/BfYD2GElw46NItcdkUt4IMKgN9icI/Cc66r+HfdT9auRnQnecRSgX+Tg7YS60eELPAsTVYRkyBzYQy+gsAb6Epz4XCHVgAzO+N2ak1EisYoc+gb9Xx7yT2HJkkTr1GHS0EaYbU2NiiDKhYuO/hCP88A7quUN3HtQJZIjrf2oKRH50LM4aw38/jSXrrEGShjQ==';
  const _INTEGRITY_HASH = '110be504cb0f73249b676f13065abbb40f9267ebd3cca275602809ae7ec9e165';
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
