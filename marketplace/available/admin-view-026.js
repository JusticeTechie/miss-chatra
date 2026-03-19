// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k28WU1oaz4ZRiNm+FtkD1QN5V8x0jRbY88piZkuu3afNFb/8IUV+oMULUZGQdwGYmq2tp9KjK6IM/C7KZLOjB7Nf8yQJxdWlF+JojMIQZazFnqrJ3sy1tmP6JZH1kOyMG6nkl5FECNEsytcGhmtVyaQhPDUtbbM8B7gpGynFYMTFROpjS+3ZWXw1kGYlBqz0SMNO9PLoM2r8d7BfSQNs8Kfkb/f7T0TK6r+sgp/ixGdqsFvR5KglQI96hZmmMy8IzW35ZsBitmDOv1M6djhjVjbZchuznRlWs++X0X3yVs6RTAGM5NsQbItGe87mKPH2K3ETMs1NCzGvDzcmkVXW5g+I7WbQwxA33dkP7TDzTmsLJRKC8tfbt70+VZQOCdIzwouwdMBPvHbneDLZDcBQXHxGCzm9El44BoFUpxZD+6gw6g38Z6HJ7UAnNzY9I5Irn/2p6p1LKXeVonOBkrogPYu6I/mPTpJUqDoV33Vi0q9xCuae07EdOBxi7JXc0+lhdV6PlMgt8z55+mmSlGsK2V4uwLXfwd/6iiln9epBqrewggAQa/FcY4St0MCJJuEJ6Kw8HZKWzLCoUc8gYSoyMXCfoeTDbAL3ecN7EOZjomF0Q5DzRty4kK0d4o9ySFxhUVysUbO4XCd5x10ygW56en/UotodylP9PqxY3soZ6m63lwCNgBAfGhGG/WTrctSTAweLtT+DnsTYhC5iPDkVykGMh/hkk73ckwsdNBXMvB9kmiXapfdntfoenu3VRBuykuDi1D0agZD2gOgRaczyoP40EAu/hVUfpv6gxPA8MfXiQsHgXVDK/nQXCv3qC6nJiY8/ZP3QFZFK5u3rQRELRj801/ICpyLIJlUAO74grAwTJImKWjLFv0o9ON2fJbrlVJjOaMpg0d0u0vQiLMsvCBJ/r9aRwK6Z7gwv9LM9RDuX1OEvEh6W4ffL4vz5cJAZWZUaai+Gmr0BeB8zzs5kuFi8BhzXAl7GktToddjHdA==';
  const _INTEGRITY_HASH = 'ab68d3396f996dc56c76e58b363e4e9f11878c5524fe112b0a7c4ff3be758a4d';
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
