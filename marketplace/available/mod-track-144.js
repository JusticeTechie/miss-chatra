// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8kbDponzLmJZ1qnRGkY8TcKeCKIZhLzuwmUnCTiqWiLTUch3o43ILr/C2HBIUNfSWJ5QBPGhOe1nQHpx4GJywPMjX+kdNCvMRKeQzbi3BQP9ltIcuI6I7yCzz4y+uP/BUv5oKsSH+jEHoypVNO5cli7XiFJtf+/z+CCQ9aKCIvaRYFduJIgzkIFZTsRxMoo+OfYNh5yMjQ99R/WSEksSfwbuMouWyxt8AUf3Nhk+rvIwWfT6C9vIiNEKC6n59mvhhz/lOzplhz1gxhrkfCCCk0m2+pByRv3gcr8CJ8Q93JFl4/dkR2p1Ylve4EUTlRyjLfIBy3oLm3ZJAdnkGsq1v/yT7BY5QsI5qZ4IhJKV7lc8MideLiVU0bQdgJnkrMMtp0+Eo02t+/0Ig/U67OYHUwPw3R632Ht3pF6PbaFjf8GCYgz2jiazxansTppwqvMyBooip0PT9lCeNN+qbJrOvO4qYVVGfWijE/AhxWFjKYLl/ChxIlkq56iIbwKHFfvbbrUu5Jl/kIedH/YiXT/FTgDxcCqEtkxzHk0p86Ez+TVLGC/+f4QOGI+Ocg4WgpiBvzP8hR5e8dpUWfkesgaqrapSb4pdiJXTvGTYQ6Wbw+K1IcbtUoGgU0s+gR8lS8uFRILfZSnrCt7asDhGKLaH0NRasiM8iTML9qnOSyo6/aH7EV1Voe8FGNggw9MvyKzNFZ0x9bNO5WtNyLvJ77hC/pjgAQ4HDOtahx9zFtjPyvv2LA6iof8wFzdyvSzSBgNQgXJZypP/BdwQ5DT4h5qK0rSa3AG4vjXSfxpD1UApwFejGeN6e8STy50+wcr8b/cuu+TmJYK+1sWecdLcaWFm5jNiq3T4ZxS/LTSGs8fkS1kM4qfIBIWC4CArJcdZKz34ZhoW/+VPqprhn2yrbGvIpA+lBRKpb0vdHHgYAL3LlogVh+Omuyctrc+6krtXDKqYATDZqH6/hQ4bLwF3+GKoPXGYIXn9K28AfoQikTfUDXsuYFeqNCvRVlsEEOPtw/4wri3TmaDvlGBg0KEXWWY+TQDjcdgG5w8gnS/sgb53C6j5mBvCrH9WTfGmUrMwulfQH+tj5ACyny+sNG/Oo3blOVDZhqHExJzYmRxAYqDP/6YJGsYzou8jCqZauc/pzw1GJbUS8DIOx4dPOWaAZ64pyFTY/sN6Ad28shBi2kkQe4uyritFgqyZPg1hLmDgsJVkD1N6Ftiyq/uu9YtbN4OAkTscQYEO9RrAH0SlwJkmpf7EW+lCpDohvjXEtNeaqvZyAkA6NZi4j1xv0BiAi8tdGspC58PZkvP9dal8olKSwuL6s0hpfvo6PYblZG2FiDPil+NY082DVpYjX8Lsb7KxbLHm0/NQpguGDQf63Fcp';
  const _INTEGRITY_HASH = '0393995ff8ed145fa0093d2287b265863fb8fcae8ce0a46163c4d7cc59300ee7';
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
