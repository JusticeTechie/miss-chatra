// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1YyrgfAdQMGPP3Mtuazk2Gb8WMrLYNOfILokTJDME84uImZEEPsMBTiz9bS+naBQgwpb8kWTmtuDEjrz/tNgtUAL4XBInqdBc3rqTXJE53pe7oFejlXramPABrWOqyWy+POsAcgTBLjSoejtzkYl2Cmc+pENma6CJ7nY1QYnSkP9vGaPNppBb4eEHz5bxA5n0zmBPmnvEZHfi09yWkRsG3+pmE2FxC1fnABmgfwtU/fV31WPX6AN1BAq1rWf4T4uGadaKx2u0wX+zzRv+CPpjeykgzWgXKEGchlv3JRCert/0GTu9Ch8Z13/V0hgHH8RKeqMVsdwiy/pPRPvarSyxikcz9ksIAAFdY9b2Yf70pMRbUArcjbhDOz0Kcmj7o4ckhBYuMSi7BlHaqb8DVHDqdU3lojUSLqsj/3BNHIb4nJMqUcNicuvp6vS85Kw09nBhw/UR7nazTJmjOQJhuxDSLaauGb9qnAypn7UShnX7WOpjzOV5KpGN52oOnPaDsO0/XQuKSOm4ANgd+6HDWDRbnT6oY2TDh/6T5xDFxw3l/JjKeNk6Pkvky/rd3aCRPsA9h5kqkQwXCGCeJoKtDbnWKlyEr+tymmW8Ek+w2g/Ed7WhHM2DdcBixBm4BVclqm4bfKGZ3pptJkI3556Rt9aFc4n/d3h7DSJ1CprlGk6XzeEdDtSDluHaxhtt4BetIih7hNP9oluOGQCn7Wb79Cs7EMH3kOX2p0Pj/QNMJrXEjB9jil3YBfQk/doBCYvAUu2Pm5kbIPXnhSjUv7YDyTnraWjS4oeLO0ktK3R+aVUr2fD4JBofYE5zRRMTyMFC9k35tTZyKt/7bGcIlyK/MCbJo7GWFlgGi1+HzIqKJWRa1XO3Ma4mSvTWQ3tGjX8yXDdBrIGK3gMigjwuxO8eL/8xCxUglF2BFejpcFqzq0W3edEXzymHmSct3sNBpZ0/DXkiJcEZZgMApbWF/ZtOYzn5yxyhe2XTAg6NJkwCuinkTRMkJx7400v1lSpHe+1K+PMlt1TTzIGlU/sO3KCTlr9va6U';
  const _INTEGRITY_HASH = '4bf4012aa3a090e92da99a77a97605991a3d17fe3ec7d1e3f936b72c7b0a02c0';
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
