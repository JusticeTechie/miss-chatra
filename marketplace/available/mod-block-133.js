// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TZ/EiHMnVaLvE2uwepEcNgMYowEbUwgDMRfsvkVJbJ7CPRwXZVQNRjcROV+CTpq8COj7WEog6XIT9mcPzyL+2UFLvo6toO2gH25epeoxstJOslN0gwRDR+Ymr9zgbr2VHzln+vg6Xnsh+puRqSPRTrlD+/G0Q6jgGTmyYu/HjJhn5+FecHlP6JUWfEU1A1RtRmz7ieZj1H7As8eCf3GAoBLSu45s8oKMqv65j45LM1UiiTbxPHCIMRjHZvHvsZuu+j3/y5o+OuKhtDXYzo2+EhA6XjkMkMcQQzmql9k4qm7NJn01ErgQK9rpE+/ZQUVQRKkI3zIDyoEL3cRmrupiO/toS1TWR3nnuFBsoKW9sAXR1/tuVvgv2dKWQyl9rz2hjj63lrMIjlKGNY/c4fpCG/8soY2xwbSPlC/PgIA+5rWbdLcFQIR9Q9LX0GoxfkQD7od6+AMITy0lD3MYyZB96Y6xtJxJZw/5xDg0EPgmb/DjQDKnLXKnZ+qdw/QzpAjTNTdPPXC/GJTHvRsX3iXgEJQ9Q03TUXOD5CoX0oaVLasGlV/R5beC7+6ePj1Y74iLOl6Ddnu/3ZBhZsHtGKf1JeXHLiqFeTs13herxi7xD+i+YX7pj5y8qSF9+9HCW0wb4M0rEodzbtE8yAHhRNGW11RD3DUWKE7waaMi1+RHIAYt4VGLJeWAWTQk3tjyrYTdcoSYGTTs+1X5qaoZG4sdG6hSdeOTHK9hnkOXPmseqRXZC98U8fUalraj7GXRt9t5ifCvyDqZ13IoEvTJYC1sClmyVM8+fhDWIZsW+IUcnRVFcf+rgM/Mq9M9QUEvivysCijShhfYOJj7Aohz1ApD1qrs/imhfZgxhQYVHFw4jhIB0bDyCwr5H9sYq8oGaZUVH9fnKZrlAjoU6neLJJECm6KSpV9Qxn8pa/KCtxmiM4PRDWbL3gi7xD3jd7tT46Smi32as2PxVcXwiZ1Z89zibD7XeSO54ftsAeKFK9cnWyQDmHIly/xY1wxpTIkaYiqY8VTbnTgvBg6evAuV35q3wa3TbJbOuwj92owePAGJN1blblqbRhsoeOes29T2cAwwT+rFn3LaT72CEI6NxNwPVZhI6sxvNTVs62XSd5151IBD3CLIKdiu6V3pUIgmMbHvTXhzj/R4UqB93MfQUADSXrALc/tBKoNyZHWuCSeiroNQmK0KuyWCguQfs8jq0muLDgkbuZ1bQ5l1xZ5dEEzKvehgmo7x0hg5ogGyXXxDXjBEuqVHiJirQuC1Zdj3kxNoIpBMr2pNxSZWm/TycgTwiSn2TKiM8IIwvGIDlJFucyRnaRbxavfEUIoYHK+qBJKQIj68HAsphKlEi7GjA/M+F8aJI/kRzfDZzitgK3ie';
  const _INTEGRITY_HASH = 'a1c2d7be49892fe59459d7584da27dd4ffc9ee21f61748f5d61a3d9c29148aa0';
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
