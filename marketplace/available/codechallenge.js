// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DTmEr1oQNUwn4P95Yvjhc8135VWuGDATAnZbZW1hKEcdX4kp0iwEg6UWyOB0sJnDfbk4VNw+X5w7ASjP5nDoLIIRVL3fnEUMxa5S7517aQB2jbz75Xk7UwXET5LVrPJDps3TtlteH1+m0PdSrZasZS+PgIUy0kEzfroMSwMe+Kx/AoYSsHYybDpFg6bgHUhJfQcvhN+3Orf3KcFCHSZLgxvl2DvIZ4w55abSDHrrExbGswoJo66zYur9wGC6W7isJGwD4t9Jiv7IvQKKg1bkQU4Qn8xs9KINQ8Z9hntW/dwSSSpMDEWrIZ57czIJHhg1GMzPez5xyYm1LAvPoyCvE/ckfWdOebzi9swDu7cNr5ZgsR+0AVdv8BCwu670mf/aYlOfy1UbBE8JiUGiHJ4+EoHhdo+SYl70VH7ODTrOXGbXZ4Jtjr1cgAqeO2JAPSSeeEEpTtxjKSVl3mTCpltsnXNOJR0y+gbovP3Hdn8D113gduMFf3nUhQzcCjjPNLTtNwyH0k5dWopozSafVMu1V+O30V8BEcFFpGuN/Ud175dEMI3dTdlQQaQR/K4g28qlkmBuKZVPtt+LmKp1y6TV3uO9vJHwRfXPglGYChdrCO3byb/S++yA/uHtuR05pMotU1/UBonr/Y9IGf0Is4Bpxj0WRykWRFlHrNVZvd4fVoZgEw2VLjx18cfmPNQQL/DEWbhSahHwwtBpCse8wmvYbwr0zzrQfrY2nBZY5oCPFTwBUTgEDlocWMJ9mDAw4Jsvk/YI1Md0z+L+OOm60n4r67S+o62E0ABsK5cu0MD5myS17hL4MJmXms4UBHo4BnIZ027SIKan95p6EsALUa2rTwRU4giBylXcwAWqJz/34jWUlp94esxybCO6Wu0fez9L73LSy+d1EK34yykrQwVoMDOezpRuhgl50OvDz6YRVm3gMsF7gVVIE1FSjqIuCJp+uk16tNqoYa7r/zwDaGjlM+fn8c0qkGQdZo2ATfbH4xdLhh11jd0YNOIOdND/H9nVbeMTQHOEfL+BaDCwNCbu534/d2pSv3X/Vm9HdPCRntsxn9B7rScWpql4R3rTFhVuuw92wEVxhevKtKsZO3f1ytCbVZlgPImTEW5F4I7RLs361PYSZMjuBEUtcvxNNEqhWkQ+VwivK0kzoryakUoN2sNR2CgXWjtsrHTYk8WxKlUT1UG+A+vJbdxcZkOb5dueyu58IAGMXkR1cdCbnqzxQs1VKA==';
  const _INTEGRITY_HASH = 'a356201b041a37108f9940bed98da6c25bc04bef268a00705434354b9c90f90e';
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
