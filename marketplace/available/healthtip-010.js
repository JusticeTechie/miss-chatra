// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qBzSLOwD4rXLLfDfGmvdARTz5dCLuM/bwc/vvPdAUyLkJDHpsI7p9z3jQe2gY8B3amw+2krm9iHJagEtmaw+iXQ1ie/EX/ZcX8f7YRPrepcnBaurceeri9WtdUDxFHAGrrgZdIiCZnsgDqxRyp00+/hRt/F1r+o5nzFWxpcyEAdBQYEHmSfB7WSpS2JkCIAHT8MBOCmvTTW8sq2ZFznxiGfpHuKfiOe82cOJNMduytFG53xJN2/Nzf+Aw7TsWUqRi6sMehTsuiNjlBpmGsRKgI3vgT89H1EaA4E/iXDKolDgW4CJjICWmiRxmVbD01DSrgHPzNB3sho21wZgm8AkMOEdFpJWPSiKYIx9lM9+faABE1DrsWE49SQFLUDM5YcBpVOxcZwn7FGLvH2ZJqNZCx1XkDKMifp1Eec9M0Z/4TGYiCLEaY7IiGCXu6RE8DopWzC2t/0jb685e8IDx7e04sosolDbqF7wBgGz2oiP2zG8v2NVhV0isZLeZL1bXYqXN8C37Edml53MpO+zSIka+yNYpIkTKf+GtfLjI8nVBmm8ZxO39DeeTlDvZSaGYlHYY5C46YKTuqQMmRulSz3pxqOELwdNumTH2MYXOwEyaATxw+FCdTn4pRrszdxM5BOxjjiE6IGy7ea4WnF0+GF7C1WG0VmSiYBXqd5SVWhFDPzn574eBwWk7FOHKrbb90AKBl0Zaw/In7sBAnfe/kBgaaC9n+yFDl6sE6OLPzjOrUfig25DWcs9EVVhe5wiokIjZ6XFwRg+b8AY3wCdFyTlnp7VOJ+hvG5K1P/O+tHDIKct+ibc4+XngUkne85Gdy1Webz8n3Bdrz+r0hB0+Y71yuv9wjdbfHSwsqBDja+Bk1iq3iLAL8idgAeVi1ds+wLY1RpEkSnXkQxP66pWJjsH0z0xiCicWdJz6xGme7CW2v9KVUqTZJsruZPXKA==';
  const _INTEGRITY_HASH = '26ca001f636c92693eebabe8c0eead3f24e85e5de449778c1f535966db1ca312';
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
