// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VPiekiLvoIth4z/3e+mkqSh3p+kglAVwP4N6WRAaXNFy0KMGkDVFKxiWtgCZoat9da7oB0j3p9LytW9UvdOTKbznUyDgKeHaZjbLYmJIJu+ZDML+6j9+TduleFuGdqTpqBXURf6eYn9OhWW/K8722xndKjw0vq2QUkYcXBO3tQOkV09qVQb9AlG1170DlgIFsK7wyv7Ae5B3iNw15fy/Pf7wMPkSyPTZhPa7J6Cr3Spt9s9zUJRB76yiKJ53+WuXwJh2ejdAJcqxIxlHI88w/dxqqcr1DFV4LffxRKzzGTnxb07qiAIvdC7UhgZfv1imKnsoWch2ZFCJaF2bL5wjlFWixECiFcroNFM81iNXMb4ynv0coz5V3v0iag0dxz4CLE6ZbUvcDEosvm5WonyVcYCWVQO7tUZ8yBzSRK4wNPaBbl/8UnFHznc6Iyjg46aCRgG/RzDzHKW0LZx1RRiDfrPwvK2x6hJOPPrTdQZW7srcN/u9xoWaPC+VfPoiWoQdQ9FtRGooB4oxOB1Ja2vSiscIY9r23djNpqb8gY+SPGzymXN28FZ2213H/E2/aqhJscAweporO6ztqISRQBmal8Xcl/9UUguOEqgxwuVSfu1xHVU5r7H6f+z25n0RW6NvngyD9DNjDUtBMynky1GhQOn9eE/xgf1rVxR+vr+H+JpgHGVmmUNrbsAqbEY5yI60Z2Sl1TdNa7etx9bJHQ6ohY6dKOOBGdMUMhwVdArk7aI/OtLNKJFkZ8XNZi31ENGwBS5XC+FlIc8YENttdvcJbnwn1UAgHdguCQNlzVWqLmzhsGm4gMHbuboFRWpqmpHMogp7V/kLNREHVCGWRS4DdjG1hUd3PzuewrnJnQF4GrHf3aPOFzrcc8CLsrFN0QdNlCJqYRa5jSTEKwTdCxnOUVye4/KT8OCsGfk9LZ3HRX2MsPFQbOhZts/yIwc5QIyuniRuc3vDib/hNac/TD2L6k3RbGksc+q5FiTEQF4Tv6iu6egIRnl9ddmtYr1zBe+9nUCZzA==';
  const _INTEGRITY_HASH = '20e7cee377a31b5c692720561b8d029d34a64600b9d8a9dcb5d9cc1880da31e3';
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
