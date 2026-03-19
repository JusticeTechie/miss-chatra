// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lc4uqnfa7DUZBKsW1PNYgNCranaEEHRXxUs27alFF1u+i59YjumWyoNVo+TbVRH/wX5oro147vDa+Ld5fAJe+7/quwRJfO8cLk0JBJUwInNVnp/DMXX1nnz1LGVzrBGFs5VDugA0H4ojWG52msJdOcELuV3+2TgN/5g8P9KNgHVo0e4uccOdI87ACanS/yJIXS/dp7m7JY4wePhBQHYDMhPO62HxJijko9qpiXZC6UBwgL65mP4NhcRGvShPe2INreUF6LsnzDZhic8FUeKfJkDc1+VtupVNH8Kaza7mDLTSc5z3pfcPd/at/gQrqVQzLnHntAJtCB1VGqjC+/i6qHvMMdSrmnTdrqIgz2KrBrlVjCC5TTa8RvqPUlbxucsllVqICB3ZtLreC3QHf4s5DDwbWtNAUUluWLJRlG55yvTgRLm9GPKpDfV1u0IBqlSx/dD65CuUwDMHzvvbc2g17sfeZbdHESjln5R/BVDYZB/fUE0t4El8OW+9Fq/J9WRV3QnTv6apTTnLD2pJPDSniMNCoUI/IwX5OHz7BUADqPYCNUcgQoYI+co2OWyNtS2iM3j8ijFy5Xkx00wjZtgduOVzU9oRsIYdLdLiApycAEvLgllu1f+sptCgVhR8fDCV9qePrBO/bbkO6u+FvuyS8/IeOCwsCoXVuSwAGsfFWOvcBT3RRVBLf/oNTONF9sI0pVdC+Ukv9TAXHDSFact7X0ux+eE=';
  const _INTEGRITY_HASH = '8c54ca23661f404e9aad7ba6282df5ce36e0d8c729c41acefed2a5c57cb0be30';
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
