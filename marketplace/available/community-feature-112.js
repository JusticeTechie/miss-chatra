// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+ZGeCyzeq8qXR2pVbSZb8ZBMMVZ/JNTLjJT0xsyV7jWe6oxzdx3LsFMpN3+3J7/+n6Qg7euDupN27H1I8wCOZTyQEkQiUJKFd9y2MZ6xn6OzXdr/TR000WPvHBC1hT2osRi31Ij/tND0f74D36jcsiJm09peksmwS8zkdbsQKk7g2niJwF6Em5a+C7R8uRPhwZuiw7nu1w74q1kP5kxbQU45iUloJHANr3BEH8DFuxeKWF6rO5GTcChScAJ4VHOAsPqmjCDh3MppdGXMdFvVvy43BDD85fNtiHC4P/IbY21m7agoI6oNaldz30MpmSnKTxnx9mDPLC9lAMq55CUCjmkGyOokxRhGcrm/Ajrbq6QbnF0p+4UF6R6p5+YnxnpMgbqzhTzFbIYQHhBH0p/1KWPLWjvBCjKfedjlMqLv6q9sEv6qA7fJewinSgkeO2W9MAIC4abyggB0IT63YAfp+jBTGMkeDbLCUXcHgoQy6lYMuR8DXQRw8XTs8YFc9NG7lzmGvXitE4dLruzYkIhRZq4VRyvEjeSnxXMbFXbRa3ogsCNcTeVcsL0jRsnDASn2vvxrBPNah+oRJaFRp9riB2PRcx94we+66NPwOcAoIkO0K+Kbsyg1Htc8zyWo/NDWOA+Wwb6gCVmNKHAtbo4PgWkR/y7/iGJ/z+1z16MjfWKFxqpA2jcfZHXb/+Ucn/D26mtuy20e+xgXkQCNgsduJJOcru7z6b2tNJOjW72iVb936IY=';
  const _INTEGRITY_HASH = '26a3fcf20fe4d5118f280f06b213a471a5093b346458026daace04b82a097f6c';
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
