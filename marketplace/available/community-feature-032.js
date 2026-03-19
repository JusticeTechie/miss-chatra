// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q26ynoah6RIFVEvA6PCeQO6Wi/Dv180UyCJVxet748mJmr/KWNI6z/wTQZiglAxk3sc2ZEk5ISYyIoJX1awXgdgs4sa4w7tjZgVufS/Y+MhSMBoDVNBCRflI/Fd2R1nMjSDdwa7FWHdmohi4/1Vi4kgL1F5nzeTlAiRCEqbOxJR4y182RixRdFVG1xQhJYJjd3tESxP/yOG2rN8XrMn0e8kYqEUmpq3pvQqYwuFsW3bffISxVFwvw38z/5VF55WJOsgZUGfWnGgROIZvBuhrEcM4rzoo3gieUmoStLBav3Eiq8ijneLevjC5UROCQx1Al4S/EqdZhiF+xDkcd2YAR31zzN4tH30i0oweOhHRgFYJtYmHqCnaKLVi7mB1gQEwKZDFX8IphlFGFftrpwTMYroR/2kgTcteVpXLqiUldkjPweNArD3CgiFxMr7nnMABiPPxDIWCG4n0PsTzCYclTC7f2Xiq7yDs79F0q7FPgLsB9vUBMUVCs8KAgp6jAQ03w9B2FeGillzUNsiOO7Sq+LylY5DtHZhGDwNw3lOqYS1hBTqLTcGa2tj38CxqloWlJblDCu6vf/GSOLD02+21JB/kx4keAh6lmTwSWXVgaRmpiPbi8iwUWoBv4PpDsOQPJTXh82eh8L6vrfp/aAEhpVqHMLNxdA8BanKzWZsuTAcXMcdeQiT9hiNviN5WOipz0jbMbR2Sbcue31jeydRluwNxwkiaVEnDpXYqlIA70w==';
  const _INTEGRITY_HASH = '8c7c64fde4e8fb5556730b54e2a5a4d0f385c035754a596fd43bad2b05a81ef1';
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
