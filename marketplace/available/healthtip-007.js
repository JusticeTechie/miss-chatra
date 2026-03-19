// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JtvyUAzHivryznFQ/fy5ups7yCfAYvzvV2dFjfRSFrU4bJlwK82/WHIjY5K3TJkN19AsLKcr9Vn6zZQhhckielWUaRxC1Z4qRhHsh7zzut2yC3AdY/e9xs523R/+hcKosAfs4fOwTknA2uHH2eIZKmIrlamiHDdmvwLEvjQ5PR+OxnsYsVN6he2TiCWfZQJxZNxhnw916OMyxlrLU3RyO4bn+ty6m1k56stfZYpfcPyMENftbZy1/JjhFWbliqSl63o4TfaM5Xr6V42kIa3gWEhPG5yfQW9x/r48kiQzstkDnaQW6swdzTifBvaPyBF5lU9syobssUko9k5n/sxnZw1uZL4XmQhZYJAV/Vbe6GNGNto5+rJ19PYIn6Oavrs+fJ9s1tSlaaaOpxYP9/j2yvnt2t9RN/Ewa8ryuS+dXd24s7gynPI91VTJmqqHEJ43zBTPzoWvGLJ3AUhA5fJfQFXzB7hUEKuFnJ056Gf7sdS8U6hiBZQxPQXOavK+mXBYHOrCQVxhRTZjw5le1hsoaIMuyugnKuHrePIPuFrhFbP2kgMc+E40+j0ChGptBPhN+sVYsxSCd0D5veKvaqUo8f5tr/A7crM1DyjMlQBGFA8fygnTC9FSmhsci17TsMMb3ucoFXLRnvELA0SnX4nCtGIq8r5aYC3r8WX1vMNbvENIGnEmXUWdnh6CssTanryrAe6H5R+btxi6+xUA06SHUJJ2zIwDZmlChFeuEkAs+W6ixmvM+7jQTW7MixmCP4vRQ5ZQuO6p8i4nkjwGqjf3xjNYJYLPNEONY2xdCDW1RHYGdYJhK0RlmndbaMGvfJjxAbv5P7sNnlUxg4R412A5w58aYzaydo8uKWTGMyvdV6kALjW2eFOfzSLQZ8sEGB1QJqLzfr8ixNL7Ub/lDZ92oOi8bNHqv9P3RLODl7t24SGMzr+otrLyDA==';
  const _INTEGRITY_HASH = '835e930cc6222e6a47ecf607674d6c40304282c85d82e6f7881c3f722a2b79b5';
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
