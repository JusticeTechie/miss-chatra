// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UpERrlfKffbMHAfnfKQ0xphuprIzb7s1lThxRoUEzLiGnxme90DRrC0ieWXCtL4ZYwR3hunQ7LsD+zjmXEG8SWgvjWCc+Q5Vmo4OZaVGRV/rB7/1gIE7aqj3oZlvkEdrpFogKBGjuNw/ISxGJpSNhx0AUOsJGsRXDbD0QFZ4+F1mFdo9FPm+aBg9g4jCmtoq1tp2IyLIqB65jBEvHX78htxm7xPRjcGJuan+p6CH8wy1p/HJr4wJwqKJLreegRJ6RxH7Jn1H6yGSjj1OQQvpqz+mjaNItp+opiDx6CgKIikZx6rMs2AFMiI+jgLaiV5gWWwlcJVrX1H0NMRHgoXRPlwQSC7NUDs7OtCaCDjK4Nemit+JMO2mrit21eI8CyS6hQRM4OV3Wi7FHm7A4SECd++iqJZCUHfrDkPqHAokQg3bd/Nu2qqg296METgqINzDiMOi4Q7YMNUGS55XOdR0W3/uqjcCICf1pXG1sg754LZRtLGKur75GaSXfUJcTNxWHz+hwHIlq58h1E49MV0xtHLGFdQ/3SQFrbhRgwzuVMP8FWejpcgXZDpzhSeaKV6YMfHY+6ZDsZU7HnlSFOcXoTbvOE6AJSfLr2RbH0QusJX0FDkASvHp9nBYtCNoXQz6gAnHRUq+1/rWtuxy5Tpf5NG/SMY0t9SohEdN0E5KwZsTwPP3cqps+QYDlQIo9wPgzHQDNeWcRmeUce2d3WBwh7a9yM3LEsi5Mdl+DBa5U1yVio2MtpaA5QN+YEmIJYtUyuFNVo15fyEHGc7g4xcGV4qJ9TIHpxFNxEyNvtURXiWjYujk59QENp4swfL30tOd8eTfwdLZFXyJTYOZEAAQ+t0WYzc/uOeZ42nhNSeUDpX+2DQ2VBCmd5bXW+WS6zj+isOKbrWtGvh38BxAJc7mJAGto1Oz5jW4E/DEzJR89+LWqS5ei9ODcZ92GKDrbxK93T0JiN5ajmysv06KkHFSXTuf/yF05ou+dqCcD7nBfjRUHRAWsS4hn5nIZRHAWtIKl/UaibN19OBURZlI7bU3Z8emtdc4ok9sL0c9P/s7z/HttcwZYAzSRRuFgkkRA4Rz/ZfJRAA5ee3LGEoFb00ivZ+2BSFdVsUJL7Ohf+Vds4QRNRtLWATHIxD2cDEVNo1VYsqncHGkCDXvsX3+YnlM69E+XVQXbspHj927dBihaKB0UAMtzZGUzHUxG6giFKAm+rBTr0En6bP1ZpXaErTwwo5cj3WCe1tF8npvj/t9PiS5feNt6jkNiAArEh5O5rmrJxm7eLPixLo80J1UxiMrpfNEa8adFOkhUjA5SVlTI2GoxA62/XQUie0PRWRuTiYpiK7sS5vz+bPzFHezPXaJqOd7kbl4fTa2YWCRmwnH';
  const _INTEGRITY_HASH = 'daeca6eb5f9e63610ece26015d0182fe5cd0f6eaec4f845f98a095587780df5d';
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
