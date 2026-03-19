// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mLUY/JLBlhTzkkgZ7D0k34Jtx81lxPv0GUeC8TVvuZ9B0zn843yqETirAnKAZqxtqKNA+1TWI0j6OI12xuykw9QJG19LEJAKFDfaJg4u74QIRs19+1YRyP/3FVRUFTtDngwiQpUu8QdjjnfU6sN5vvOU3WGRmiHtdo9BTm0vPu32XOT7ifTni5sDJLbYcPvSBxXBitu/VxeWgdpXfWZOaxLfkghggMSGE3+4Vnjx1kNaDgP5Pkejt3g0Ig87eF3MkuHDmxHS/++3PcSYVx+XWRsu1tzzROUTKOpq5uL0JmaMCEnOS/bLYQirpVraeIIDkyg1XsvClou3aOYVXXcmXkyuy1jp/iBV7NuzD0eNiN8H7SeVOF5WsDT9PVy4MSBTaFrLLbWW1OLAutNnQnLoHQHfGTfFVloN4aolhBxC7It6+tk0uBIdmLtJznLdY2ofHlYQKTFUu4LyN+AQiHeB6OOp+yNaFCP+bStBB1PzEQkE4jIcZBuDzFMIExuMDf7F3ILHsv10clWpEWVb4NeLFFa+wDvJ6Z6PMaZU+yrhp3rlIQuEM2DTjBS8sNLeO3/FR6/cnpGn+Mx18WTBnXw1BCrhoJ/276ks+a0lvGLNkxeUHbyCJlT2jsqgOf+QrXbipAw7UmCYxz8ZeyRbzfVREmtH3zZRRGFR/bY8c14i4dCViCsmv0Ha8Duk8zYBEps+tad0XYIYydNLgs+SnFmWRjYz5TWlzSxQIGC7Ct2lC79mM6Oylsb/L+C9NaPUvOHQwM13XMxoJg7pFqY4VNQjA0oTxHNds3XYS0mSxzvKU2CH7u72WG8cojNchfo8bQldS5T9faLLJ3GF/2f0hKGiSXigv9S4GV87FJYL9c/e89D1AduCqHE373aV52vxCcZa4PKF66DYa4MDyo2TP6izUGdtUCLsDeX2YX+7C/Pj4kk6T0M74tmY0gMHUUPAU1QzYHGInYTjO2pOC+866/9akV9CKBS4l+guDCHxzs0fkm2wsjTz3pqlY2qOJYMlbLd63uYVLExe3rdhejMB1gM=';
  const _INTEGRITY_HASH = '02133c8417af8e1b356770080b2d95dd44f62c755e04ceabcb80bd8d6970fbdd';
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
