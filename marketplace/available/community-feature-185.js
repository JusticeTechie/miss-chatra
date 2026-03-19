// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+BAoKWQwS4Fdmas53052PBo9XyT72FtvxDe1ZsOUBmrslHibm5g5fIfQ8J9ZKE+jJ4+GTswt/kHeP7kFrPEi5MbCPX6HoGkbkR8ni3ptRVw6f0EEkPcfEvKlC6kRUinElFOqlZi3YBeF/RLYeLF81zfIBmjMWO+zcxMSHTi/lCqWwOdwqDeifQKI7qRTSbaXOpnLHNRNxIFFRg10sje4Ez0944XU7vRntKMdS1gQa5ilSqz887Vriv81XHRyYBmZpwoiVeSyS4Twrsa/285Arv/BJyXH5RQHtuE4BQn4F+hNFiAnlaCpLaUHnSzpCgJJI/5StaOqY+0Tq9sMkke9NcZdtibESGMljM+MMn8U+wB2aJNgVLQeHk3PNZkOFhQmVq2/GFR1XJEfW+hy9lVk3UQPxs7g41qN1MSRRws3n1IPJ+dmu6GFwI4hTZuJcL+6AMyusJnTdNEPKCJg3sFnGUb2bUOhGJGwmqmZKs+u4jDUHCFwxkiC9qvw7PeaONV0tFRUw3In/2udKZk7Mh1eXdI70mNmP95DrGDSCA6UfO+HWtztGWoGJIbgBl7nw3IgOmbTb0jTwyEWx/j/wiGA7lwnHoaJ8KhAuNzQagg0NmFmDX8ZjlWVbh3FbX3HN63TziHOaeBQioIQT/qS+KpM2+VbV4wz5JnNJNj9Jjx15L39rRSQclrQ44nCijFgU+Azg1FEyB01gW8xdrWDuF0K+6ZVOI1asZyX/urQIMsaswQgkCC1UmpKd735';
  const _INTEGRITY_HASH = 'f3448e41834f6d0f935dec99a549e8b2d14fc88688990f2e95e7d9733cabf568';
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
