// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qoT3u4/xMK7FiT5hLPM8wFjjqHqLzNML1o8WqTPYBf9j6cgfK1+bs2dI62f2v/wvN0ifm3mNkmJDEx2Jsshw6r8iYdZszdySOIJ/ZNX3gOltrEOcfw7EorSF4tB8oMf14bsmeVpYbR08/lg/3CCn7eqaHy/Hks+TWjp9UDUZFRk2W2J+uG50KM8MAEn5aqrIaQ54K67y0AmmELYiup8tT7NZjzDOdgK/6K9UqtIkXZei8tl+Ece3HHIvs6altBZWiQFZTZBScL2sUvMPYwmKTXUSIvaYP9IhAAC8dax7FzITt3HJ1GXBR/xNfs7UMzJ2I0gquGozadXjAgEVPeSKsxERtYI4VqtE1DuEeue6LhsRjSMRMuehqfDwiwV27pyr5i6yFvtFYsVIOAFadlQiecrKMO2+CsPxgcdBKhpl1iXnFkRaPFi9eZqkhJSXJfCsbDqF1VtimwCQLOUkswvEoEUmOr/zM6wq+VrZ17qjtTIk8oeLlLgQUPW2nKipolUbL73xPKc31AgOnrm861Rs85ERcsSgBxMo182WvzY177UPXit26LsaK6KKIPLo7L5jmNPg31natYH2NG7OyntCHLCAjNyrnV4nqKxHB8//krmBWtuYpLMukzbCUptAO23zeVrUgZjdTGOZL7Dz5YkzMGtAlJM9NH/+uc4VN1iHjAk6LnCciowWlN7rfMq7Auu9w+o/VCEMDaxHnXZmA3gntC0O8iGguATWR0dy';
  const _INTEGRITY_HASH = '57ed0b5bc957b513c92ea29c5582ac84e796cabf4e84388e05b2d1f5f14a2408';
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
