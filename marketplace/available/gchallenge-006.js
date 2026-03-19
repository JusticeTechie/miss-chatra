// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QSrH6wyXYL+9iBSWra6s4ABnYz8bi9DqVxDqXMLg4Y5syo1Cks8DiPq+QZXUtH9oUAY/ixXWp6GJtE1lvyjhQJrTUnzUWDmXlV8zcU362KNG3j1SqktMi2fTY0JPKdDD8iqrQp4MrPqCcLab5IVliGnnPCWabtOGX3+d/Tq7PfHwQrvJMKC+ofp+/rHiHvgDSeh/V0Su0Lo9lm1r8qaCjvymmctq/p0SivjQb/t/VCSJFNU+MtN3EK95MhOvltriEPrZwPUD1UoSotngiO9YD05PF4xbQgOF9Mo5Vy1FSmg83TBR466GpEzsejzxYyRP0oUQKvIt0FWSpFbhjD4deSrHvO9PhViGyKkEPX7vBWpmFXrAwn03/EB1jMrI+Lw6tfzp8cnSy12OtkCXBfyychZDhuz4LBgjHgzmk+8tNtmfxJSMYVj1CPH0dZYdKqRKbVLGVaS5IQiyrsbCRNdJkt3oNMwwXp33Ny9wRaQavucRhL1YcKUkGCvIvtAWfKDlpHBJZ5ElsSviS9gOA48vc4uUekHJTA7bnRiXtdMcy0SQI65EDnzfuhE6bOYAq2kG1D/smVTo5hpPYlioOxBBEmpAn68lS9OFcGSd9tje5us5U4f2xgD6';
  const _INTEGRITY_HASH = 'c7792f6af575d98fc0736f7ed0bf7a7ccd3626e5f217fd6d7d06a245ee7aed65';
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
