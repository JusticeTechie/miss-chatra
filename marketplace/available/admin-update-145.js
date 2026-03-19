// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v1Xo/J+ATwsShx7PllvPDqw4f35RnjXC7MUH+LoEpobf0JdPhcIaMRMkzc43k7O4wbuoV3so84k+b5ea9TfMzB10F2Moc0HOeI6Q5ttgxwP3oi2Qpq1CAhppg00WF7IAHp7lYR0YM/Oo0pDq3b16C3wVLx3UoMC017Hxtt/n9IFduwooro13B1OzLHUBvaVCe121L0hQ63f7R34540isAG/tuMX64GFqYhWm+CZGOMMr7jsTwEMx3q+SM8PKEY6eLG4tpAR4mguvC5HQX51fubb+tFDH1N8BlHsTww7mYHGA8rgrz52giZCsqUVS+uEcGqrBrYJwG7BffXIza4u2OePaSLsn0VKk2B+YLk4Di6RJQsIwISmOE/h4YkScJz6Lm7isYH0NaFGWYhfKP7XmE7TZSfESPyrUkBwsvysows424A1Ja5DP10e4LMnabWqhI1/3ALenkpBck1+M1F/NinuVsLfhSVhCe8eHeG0pqzXNwBILzwaCTfGhqyvpRz9Pj2SwFBGwdGTQUwzncWO5vaxw+PHexQmkpBR+VYumqoeS4Nj2JooF+Ysw3W8yY4g5uJN/I4g1hYqByusrAEFUDINk/qOvmdLTTxqR2xnj9Op9aHL/Vh7PH6J3JK00VLFFqa/UaazIZ4YSPliE6pvTxEaF2N2+EQTHLZCp2PhsQ2413ZJfe2u/ViS/EfUpFNw3m2Y0eXAHW8bC7/aobi+mU7hOkLDkBzDIR370IwlK5PCtVegqaWCE6KHVfBvxqGu+o0EYOhmgSFrFV3lGJEGgvhSFX3XIeDFJCrrp33hVvZ/6x26poA5udlubYzPwK0ELm8AYXKRBty01bWoSc5nP9erUiFNbelW57R6VbKZ2hxAmXF3Ea/dq2a9uKw8B/SnJUIMPyAx9QSq4Yv6cAarsKB0SVTXnsuCAcs2JUf/Mbkk13PmH+xtQrRHvAhd1G8rH177D/KMcr2nzJJoO5XQ29011j1D/ZpIZS9FoJSCmhPZIo7XYBl+PRrVw4ftzoJgHXw==';
  const _INTEGRITY_HASH = '7cfed1e994215331eae6d3176347ed3af018f152d02fdf2ee460111625be6782';
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
