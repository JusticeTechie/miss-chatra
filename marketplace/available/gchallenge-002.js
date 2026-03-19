// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bWMmtJpp2ilwkQJT2FkjsXI9M9USwlfGchpk0lN/yi+okl2iLuEcCHTqvf4HrkRbxhV52SLVc2TZ7Zu36fQzDbaCg5i/2kZ+7aqcK+pyzx7lpHfi1hIup++Z5CRmS6Hss9aADpmZyMtSQlr27+2gjbvXHmL0vfbiMNa33bh5C+t4DN+dAXluQ1BuHOyLZWOiqEklGkHABfr2/ogIzIPb1VfhyYBa21ZHH8bEND1d6UobvkEWQnCkl/XVew6yt+SNU5I5CRB93TAU4L+w4xxjulIxpbHBtzYL0XXPNXhlTX4ybvSTVJDQuPZYkFvJqZukbfrkR/Y4832EKORLn9wMgLDgmoMNEbshxrI7Xvv/X1hakS4sBGNLVAwQCyR1VenHd30+rARnPtdXVTOx17ebNml3mVdIc5jeCQLLoaJW1Qqdjz8e8uA7TN2pzvRM7O6I2jP3bh6PwNCn6sh1WX+9CFpJZ+IP9EY8ManFSF2HeeRqqdj7jj4+7UfqJTCl5SZySt/izq9rOz7je5lBS2yy52IGauKNn6wqW1Rx3htVmVSnZ14YSZmkGhmIAehPmdfsO4n7x3w/7FmMVobq+NDolrNN4J0zmgJKMAipncazJpdhcCIpRbfCJORidaM+wMG4/Ye2qfcFU/hOC5ZX76QSNoTi4ezY9ssPXQ==';
  const _INTEGRITY_HASH = '38aa6f2979b88f6dd0b09b771ef4f07ad7ce1026e450fdc6d1d76002b8b97add';
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
