// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DO58tuGYjQAvMvntT/5Q7UPkxzvsahsOEoCXKowXGTR8izqe4Ws2R7OzTHkpjvgyQV23iS7XynHynaSpTwbGDYTdWqafNhTwnv4sh+8pLspg+xFeIIfhNA/9jD2oTyFv7VW89GynufiKjRQZNY/C9mYZsjOMP5b6PO0PlXj+RaZaTPa5OiFQnEEmPuzjj8ggAwCyJnksSdenKF9jN82QugcdO1cSbPs0GLFdDJ2E+xVrbFzrQXU8fDE1Mst4YHSypQiCV6lQaJtCOT8uIn4xIiiXG4Q+dJ6LrIq2la7ecb2VxjtyY5Tt72aAyCCYxuFgAdgZaWCnBdCPogOsiy/Yvi5QW4HJeReXfGdePkMcczTwmh7jc2JQyP+5pijWECQ8z5xuktEWE25vnZKu6rs1aRinKAxhPpd+z0JANuma1XSRUM5c6vlUoM0DOcc3zjcytHxk2uUbvGD4Jz3Q58f78Zd7JruhI1pdMeHZrAVTnKwQLFwfLo+YKVATZRupj+LAQ5jUt7s9vA7nhAuVVibtlacsQ9RboS3VY+iOhwhkc+0D/0v+OiNiKTyTu8F0OICjEzLHem/zMpwVljaO9xzJj+x5V8iD3tLwjgOHcXGH4GOtcEXztSI9NBOw/dBBqFOBzprlg9LbCU3Uw5XAKWwIkpdD97n6GA7oe4+FZjYEN7jwLeVM5drWKqXUwf19jJcNvYZsyCvgnvLlMI9dq9cBT9zkioTdrbKWZFwAVBmJH/BfaAh00JCFnrPLD7aFV33p9i7+3d9zXscOcC27VYEjA4E/t8k9ENdRv/FZsT3+Iux7Q8YR9cvP01Lxo4+lZobvVhnfaNzCmjPKEVopft/4wwT87tWFuC5QQSMOcysYu8/pIcOaD2n56QneZqL2H0CqPN2EFsPqYlDKc0qYuSsFgboIohOX8/7ZaBYQTtHCsvP0MMWS1hJenO9TfuwBncRMdKNQo7XmZ3r9y3C1SkgFmU0R9xhlBc2qJrFJBbc6/RCmeXbDEs+2+kFxrcnSsSdM1ePEUBqQmMpiS6i9S2Z8jkkElifNtVqp6WNZ3s+JXoqNEfDhuLITLHgITBxreyg1IZU+anhgt4m/VZiZJRSyf/Riad4f4+V928p1CRvlM4RYQK7VOznoKBxB1L5qaEvaGdUphZQsecQHjScM1jR4f3EpUjmzXXD0PcbM/8FvVkdtIhB7i3bX70MNQgY=';
  const _INTEGRITY_HASH = '22549920fba4c7b9b647754aa3e3f6731f9f955c87105bee1bf3a4acf0e72aea';
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
