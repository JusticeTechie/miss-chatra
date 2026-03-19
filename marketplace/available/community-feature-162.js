// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a7n2Bq+v/L+vyHexY5T7gzFk60limVdzRzzDC6ocSad0rZDLyjGx81sGeHEh7IGeTXHDcu81Exql6kqP2PcDQnmRbxCZpmYST1yrD4pY74+hq2mYBCEmzYcCe/lrH0FfeXWpe/OSW/hmPucI1cwRo3JZ8IkzoMOPCCD+BUNIHg1ET5W5FEtUkfkKhpaJt8oXEIupXRZ8gEcutUW1X+u85v1rgUBDQ6Ii4y6l0vrTMbrz96odjn08pMphIoz5Ot0oogxoFPU1IuCxR6qvDaKdR6jZ/1C20b6BpQbA/tN77sgRKjE4XIjf8hzGvDtHQcvddKzsGgvLc5JEyMYLVZMSyygKbnVEWTHXGFSbRtR8/pxFd3CbpWjAACPPGX6PlJJMEy0CCXeg8XHJc+QgNB8xtDPfF0V22TB911IbVulKbO9ERIuVyaR+U8mi5Pmy8A5+jXrmUVHu+rtOjNTh9lq3TD7ml8mEjFt3TvbhZmN5ga9XGC08LMcbDXKusqY5xaRnELDsYzC1GXGiOv9qBvO1GNyAi90yYoXHSHNT3S8sLUrhZTeGl2BaP4qcs//s1Gv+8eLfyltXy2qMPX4MUdmHVqXemedg7ReuOdE9uXjwHg/W6poVgLu85eiSzFsUQx7Df3pJP0zPqIGLdA7JB3LCmKNlxnEWcr8WaBW1yTySWwP9RoFgCJm5lpAa/M0TtxJ8XwRywC70FoWR0VVWQaljrCR1m8IrUIRIRbyl/dF2gKA8ohc=';
  const _INTEGRITY_HASH = 'ff6de96aeb73489f3a3ce06781cc20697e958e1237f3b9939ac2cd54eb844fe8';
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
