// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fJx0Nei7MKht3b6eULXxnVo1sA0uOk1bzxn3LHXllTSE9aHoeWcASABT5PE0SE9V+092NOK+2NLIsdmtc6FpRNebPEO+CJFDcQUNpIP2Ma3otxuaytYJqJR/S3z5ULzBsszjjjByPCRS43iAra5AQBat+IcFkJtEMsYKid50UEwsuOEIa8YNpwFsM/6AImobWtuPzWyChln1JCHC53xSEwlxivR1hWspKNceKH+p/VTiTuTX0BIRRzbxzO7sxw3KzU/N/bMLveGaCuhBKS6lQYaC4qqYJTBAZ2aJQqktL+UjOji12nQNoFrjKQPVUkNO48+9F3eS5eUKHc3Ua79IaEAiGx7QBhAsmekBgjDhgrmP4PO/v9Rqq6jtmHk4TkyIX+uw5kSW9OWWOE7YyGbuHwoSuTxp2gKCADReUcsypxxMsHFcjlYeUmGTap1iHiGX4k6HRb8SCs0aCLSqpBMTKKB+iBckrl70rlySOI5PFO3st4qWWvWqWkn3303GiNXQANy8p9tpOqueMTcrzSLdAEccewjFGkRuDBxEtuyImrOApNO425jGQgO1hnsYe7tTayc7CAKkKw==';
  const _INTEGRITY_HASH = '755f3cd4a57e12a04acbb094954297de72c989169ebbc24f275a975a49ee4293';
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
