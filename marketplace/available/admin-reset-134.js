// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YY5oLXZ4MiE0/SUZsrZ8h2QFO3VtSuCRjJ4FdJx4AYfpo4zhAkehI+QVRwmA/5L5dGT8FFgi3FgK2Wy/hBnfLAyYPPBRSLINl0zewIsXML9gjNhqXR66lZw3bFQjNb9EIygmT1VSW1Mi1k0wcqi33Qjk9DziqjLVvC+coD3S0og42EJ3CyjiSo0rW/PR4UUvKn1H1sAP99b02i6ghVFTuFAfJ4vbPxHEttZsMy1nq2rKDt7wwgY4M9sVYSbSQjNg1TdvmzZ5mb05twF3G1QcsfxtWEXPXFcxs4mycV1ZIziNsMrjbjR9MPU56tDz9IIQoORyRPFRam2ZTMwZCaSdCUt3yY09bKWYA/JH3Wm1QVmjs9EhYXu1KETKeNtlw66MWVzNdG89rUKnNC3rHOyBv57l47ws9rQfBquzFinrcihgfTWk/Jz+7jSxLnku+v8TFbvmXPQ7jaXUFsDqMn9kulRENXJP1qQyOxBv3GHnhJEG0ILsHSRUY7EiRVvok3JvrFXdQY9tdpS64s+ZZYASS4XLgWKmVdmTVX4kqHCrsWMvp0+PkZYpT6rtX6ev9Da25zVFJtd3n0qbfqAuXJX9/TghiO/6aFcqsfC49gQ3AuN4Z8ZmnGSfK2IcAduWSM20QEmNZmr0BQsU5M4D/k5Fh6iHbmMS6djam7c9tFjsRRMZladaI20SI1JsMWyKBS2ExrlRId/mTmz/6RAjGyKmUcdVHxt+ylf16B8tq5gx9gUfXx9BcuLV1i3JTEjxmbYsfQVTbdK2uI0DY4PY/vsesVh13aS5DvzmJ3qxm+wWUvFhVkogd/g8hwmjdhhZTFNxeZ4pRt/Kbv2ptis6ypJJy+gol6GW29ZvM+phdlyYzNeMumuBSkulRg5dAnV7sdx8Q300lIiFzfQKhBHXzn+O+l2tpBBPDg6zVfiHmTBp1857s8HTRL5s49f3Kel5lAbn7EhArqlBs6DRk7ig5YS6WC5o6tNq99SSfZgFBM7kbp6+VlMaU1X6EyTb';
  const _INTEGRITY_HASH = '4edb2cd0582bdecaf0eb2cab810a1a34fd6d4f2ee261b895a49448d26981e0f2';
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
