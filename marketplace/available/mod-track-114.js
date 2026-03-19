// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WSNIXc3IhwEiCqq8Sd+c+8KkHnQ7DTuzaAJNKTncsgV2jb1QHHI7vHbhsUGCbu1DCrfDjvEGfFsXIa3Nup+ASIuJ8M/pn/o5Tv/NTxPJN5GiejgRgZdAMC4+bq4B0USgCeh223y0zt8MOVnO56WN/7fj2WiszhNcNKleHl4nmW+F2XWj3A46hIvUq+yXWi0AAUGTzZDmNG1+DqBvzpc91dmQ5Nd9OALZNnnqUVx99fympOFOq6UWypYh5sZWLEp+uKMVOEvho35tKz522V3qGwhKGGvu+h8sxaf9vj4tQYsC5FO7cisqZgSFSHVwpk0ovbd14a518gUaMHi6i+g+yK7Qu77sx8/216Qq4MhoJs/bwn4ZokRD5cjSjcPexN8TmjYM+BpetkEwMearw9Iwvu4xv0gEJsxgyfmcdG2P+aYSizRY8WR2dLTQr+7pNU2to9cSfST7qO5rIa+bpI4Bsmm2AUZhFu+2o//bqw+ANkHHuymX32h7DH8V3iMHBsHBCG/1Bkz//HrQTk52Pc207DoIljsyZt9O8NfenQeNUENPQ9Q0cK+o9w0mLhXVPRbtzg0hAdgYzo/8pDQc/cocUIVBbmBupdX92jH3ucFsqZ4BqdT5BvRawbJe1WxmIuQ9og4JiZPLV6cfeB3hI7hguD0zjJzPvK+D3sKmM4JLnSIB8yyVMjOlMMheB0IBvZb/EUbbdgU54N1WBvBqpNXCKFPLKRtMHi8+iNIzee4jYdHahKSg1h7h43IBs9sojCXiJBI1Pe0KqUsw9TGkDSg4sUPPG6jGos6H3uibj0XXtvYIDKzIWjhh8YUPZFwKxXY/zF9286nZqCnNBdlzILD15LjjLHuvCLWibQzqNt3zm4UbUgvXux2RVU8UDMGzXeswk6A/PGrMTBGsCRS1TRG+AcT2AnPlowfehEvKoyUcPjFGZcUA1OVEUv9+AsNbpF+WwUSd9S973lA+bdF5/BUix7Xgf5NDigBds7iz9QATMpbrin1crpGb6l3FSlV/9YgVp90b+sUydq+eqvow9Pykp8EsqaMZoHNq2dodGJC7Zm+hYAIUv75ELtin7Dz9H4jC/HaU804HkZHGU2wv7UOmtS0VI5hJXHC+foSLtztpqpi4Ym37QBiQp4IY467Ba57srQYX75b/DGO2XHwVL8I/ojDjM6G5Emg9uELJCRiUpPPquHVyLRyBa+OIyOyA6pAeli3Rdy6vR1sMII1Vpjrrd1WLRvDknOgCQ6JM5+T1AG5rsmmNn5I3M2cna0A6zkl2FWkyMOHnAeFXf09jRPFzmV+01Iveq3C3QBWJDKXtkj47Z78YweXhVozozIEBlAJpJmaA09/r3RPl3WNXUK2QKnzIPjUg97GJuaW3I99j';
  const _INTEGRITY_HASH = 'b3232b8b9ffae64d4089011498c8735b21a120d6dbba24af9f6989f0e42030b2';
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
