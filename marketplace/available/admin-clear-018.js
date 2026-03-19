// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'exi8dfQorT+aZ6nhDPhfq3GLaNRwv/kQV4qjg+ZwWJhj4b1VvcVw7shc+EHrqfTEvAIcrHrLIseq9gv6fojT1NDu1gDyGssBYNgDRl6LfFj5PZ8Go5QtHkN0aWH3/MwpXD1LAGeI1kXrMcXPA35bGRVnefT5cCA89CyPchsGtKCN977EhSXh2wAhxyqWowTodTOTS1OnKRle7LvYfp0102RTMQm73XWO8cqhBStryhIhOpWmPSFXEXyl4vd+ShhRRQ03fYg0bEgXMZe1NQRPEp0zdz42UMUZoYm4WYbr9NhiJR85El5cGiKGaIBQC/jlZsN+es/cKl5aXrfh3BhX6/X4lJcoeTdZ41Re7YHxoFSKCKnQKRUDyTobJLfkiyvgnmWK2cKhV0k5aRnZBg060JWHZP1HrfIwggS96p61kJ4u+o1LT7XM4aT31gPORgWpchtv5MSEAWhZsdhUTkbr4Eh9m62GPq0euf+t3LHYvY7/gkBF2b2BVupzRr6OZpsKuxGu0dLcZFE3FhNvp15HwLI0DffgvWICidPmN3CvJ3+J+AeI4OQ1AHkc9gSHvWK0WpqWnFubLPNh7gr+g4GBlUsvkwsfrcX1tzfacu94kBIpgKgQb8WX1Q/qTVVwwP7SEKaN0FjKyqLxGEfMadQJc1Dq8/2UFbuFfjsWOGU8VOw9WyffNbMav9Qz5yUli0R9MmSQOAarQPXUHYnVXbjdocLmV3ERH+DaoWd06p27vU3vWrXzqY7fmgxWTQ8FSwDRRwvFCWsjEjILz4DuC4D/uO1zU8HrTMXpACVvQL6/ft4TFPi0ffhPJnQfiYteAUKlOmrj6bv7z1c6OcN5oQTWitWYHdGDUn1M+O0vTNR25pWmBNX2vXRkmYlcmcMyxhPPZMAkeouJEQ4OgNfHaQNi0naRG7J21A4gatVaabJBButeUIfz0uB3osc5UApI+Wim4mcXRTDVJtSZ2w4ji+uU1t5hJZxAjaHcxkV8pWBmqNDT1riPXWM=';
  const _INTEGRITY_HASH = 'f1828d71550a72f9ca6febb7f6f8bcc3825184a718eecc71f3bbea37048df59d';
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
