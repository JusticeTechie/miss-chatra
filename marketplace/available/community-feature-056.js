// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QdKu2BsipDSs9trmVIHSONgEoqXVzyhCpc33O48hYy+kD2Dtmfc88pIzZaI6FBXz/Ab/2a2EWc944FBfj8Ix1nen1JL8e+49iOW8/9vg2/u0xvlB/MLPozfgJnXaQF+oQukToIMEBKhcMC6lJM7+VO3rkj06gXNhsCLW0aXFZ4mDkIVWLQG6C6yA9gXMZRlY+Il4GLodQb0W+FRybV/fDIwhrva7tgu4uDMObPYpJmG5qEaTmh/8MZCzRg8I64vdsfjwidCRw3nRSCvsY3tWB870WkJDmK6yG84e2HwVQXizWvJzH49gjAz0d1LGotUzqmEC2uUtwWYkvN1H06crj//crX+uSH/ReHtuXokg/GOARX3P1lJJHlVTOTRcQqHcnYg9krnDxgq9mr+1Vo/Nxnl23eFyyVMD+c2N+GgODM3EdP/d+44g53IquZDkuXeE0hF/UTwtHv9zwfLmWpiT8Lr+8dyN+zmwqU9mgIpa+UNFFqdRvAe0Z7e+NIcfowh9JfdhANxO7QHkdIWJ9qbIa0x4c+rJ6BJT9fxEQ20Lvv3NgigzlE/KC4MuJyMMq0u7UBeRAuIN1qkDG746p+y4VMlxQCCv8GBlMp+lhHmb1g15+Y9AEVPR8luYkeN7BwYiugQBiSrR4BqPTz2uY3+2u7p6AKaCIUPY/JB2uaJz9y+kQnJPXkwrYTeXnxBqBnlowaIUEDcvmZlAa1YNDuYrARJIFbo=';
  const _INTEGRITY_HASH = '643072564021a396173c842dc5e8f89dd80fdf418e128e237c63a65cf24162a3';
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
