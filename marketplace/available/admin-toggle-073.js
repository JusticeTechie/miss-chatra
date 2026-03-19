// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0c6safctOsOwjIpktLygpZhsjE0h9od0FVJ/6x8eTrnm1TGfcm9Sz5Q2Am7C3rHdxU96iOf9mBWDFvY3pi3aH8+g2tNNJHsGov/urRxDwRKK09AcwoGz6XdoXdzT28JQVGlZNKouJOSs4qmGt7mkbPMRGzYHx8bLlxz2RYQi0tQZIbdpRTrnKbqVYQCI2gsJL0GQqEAv2ego89h97ITbAMOWvGvgtzVYORTyEmrPQbUhq2DofJnZUuTy3olh2kpLmj0nsnl7iFlDNSODNh9nm3TFGT5cSnxg+Ii5vn8GnMKnH8w2kPEk6UqEanUc4kQdk6S+WhUkiz15BhMs4AnNI4yZCLDovsXaFK046KnrrkDf6ApDL6lV3jpxgrov8lTz2KxHg0ZxGbXUP0cC+txTT3z2HqITjtargmbff2ZNeZkqzzn96AnMVsFS5DoiMwVfihoN2yJ6vYAZh2BZZOyHByhkZn4DUpqII8TrEeei4ewVnLU61LH5/i5KdA9bF/o09tQOyVZEjcZgh7fqMV+p0agoL+hKmunlROJk7WGhquBcQS+rlf4b0UlyZ2nDU41g0mmVXjoNh2s1gF09v+BffyGjDMDiHdxneQdnmbx+KX+pRzcoBaO0mtRq3ndxTPbazkw2Iz1Wipsspz1EMvfPtJcAxZBOeh/8SCElLkYEHC35kOsMVW1/O2qfPaRJd5CFWFRJfQNJKfGt9S7j9VT6m57cwZefGxCD4TEPD4cNqEBLG+27iiMg9o+TcefjMJ3zChBhx2VcO5QY5v3yk0a5qcZd+lp7Z3+/+xCGP4WTbACLz9pB4B7GA95S/Ou3+VdI+O60d7h8AdID2v4AnRXLjN/ArQd+HTVsQdeM1A+dOR9+lZOLyk7UXsar9GnttG6a3ht1XXT3IJ3VHTfd46CwP+bkB8lRXRdlYuTfGfJbCJNwvU5Jipcs6IdBQCHLXFoJ+T9ON2hv2NMtLoTcYZS5OvnO/SNl+x6Az0qVaJfjXBvqMIYwzn0eLa+AuARL';
  const _INTEGRITY_HASH = 'a38b8d892efd51cec0922f9e9c70573c9c965daec54c8e83cb456ea60bf148d2';
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
