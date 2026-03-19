// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ejDuMNVU1FjcjuiHv7b1eOSqba6ZOeWQLaZVqmBUlzA3zP7ZGMZmQ0ZXMgnADqZ/ShbS9nnpKwoLpHbhmlnGQmHKiAoKZsA12uWRZW9TrGpwwy0l2tycRhZrK9cfXXIz4vxKoR3jhqglgOArCU2Pv43393nc3lB5VhH0a8ly2YLvYAPUwdKjZQYovSulrDEfmcUA32XU0NWDtErMjNwAHKpYGUFZ5OK7fL6Vqny6AD9rkUkGrPq0t1uHC6sK0Ju2RxSlbaj06JqU1KSZUyxjDDxwDMgxo3Zs81EQN3OJ6FALaSZ2j5XOq+0Cd3XLFsfR0b7p1Qu/Qm8OXU2qaioZCu2diYc6UbRHz0OZ8o2yTQ32l1Cy3ffhaQm8VGvoe7GJPYtZM0uTcsrS1LqrFkBs0bmcLUw0KhZL2z3qzVZGxg9xWQER3NHBjiyhw+dgyFuZFnmW1yR7VuRg6qb3sKuBlf+ZFMIHAXSNSOz1nlWzOZ/uH2aJuGuZC9nHbfq5OyywwCf1Unb0l/BthNPG9sCBctRMjKTt/w64E4xVCObvkjghZpjO1XoPCegjAgnVUS83V8dV14liw5vazHy7U23RUP/SQfX/1zHn8yA9kKqiTMcPjWJr55S3Wt7hbnEijPUhNO0uPcX9dKWtDRX8mqG8uuHSdfTc50ILTSo1tubFzR5d3Fne4eQingW+bH3zoi8sDvbLLLmBmK2PuZs+1ELE9gDv0HFXykW8FwyJD5zyOukjtfEEilbTQp7uZsibGFo4tCGKYebL8IdaREi/SBnZrLwEQ5RrQtTXE3k+6b9ZeRPCC6Rz0n91w1AdTu1h4cUgm7MokHBCf2usqAJgvzgTlEJavB93W4iZXrwLgEJqt0KALKRMJBNjYEqUTyYoEDkuVucL+WiK/8RsIyiMHWs91FPKZ69Lly5yHMZq6V/k2H5sigM+Ci9w1Q==';
  const _INTEGRITY_HASH = 'a031e2cf8e83052bd255a1a862b3f3553d0e8c45454eaf951bc5466303d646eb';
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
