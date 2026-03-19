// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rKbVxPfXpYZ96hT2uhqMaLFOl46u+S9EUTf7JwIgoyg0LyN3zx0+dkesOkjKNjwf4ZNVMf2lY17n/wn2jdMvsIkSrHlron3XArzoqVRS+ZooVlKgyKKRMeFu83ZXaFND14eaDOYX1buC6QXdgJEdIEMDORynTT7yF1wKkzH88XXCRuK0fz7Aydh4tGNfFpYZ4B8QDvIajkc+qy6JJb6ZDisAvm/hGTuhQtnoKwoBhjDGdXIwANNMVHxGbEeXPVF+Ch0WVVGcCxqfTWLUYfx3JHki2Tks/FSMl22rla7j34CiC4WIiILxU9u75m3ziXp8Wg7zIkqJ6LrIIuse6RbZjLOpRVXyeCQm7UGZ4ERtoUDigcKT6q47dO2gz7bKsTweeDJnxOem7gnjSaGrAJLe8k7WxCL52PBdVMa7g3MqDzwE9ASqMRuds1+eXWIQG6cGBkrKWtH5I9af+kd1AX8Qw/LDyIca6XwWHBGjW7lsBGiUvvVa3hfUDIs53ialLu1rrRLWdDw4mOgXdMSLUyoTzzDmlhhBvBMyIgBJ6jfrKT/M3EQPNj+Zv80ChNtE6yRQxTDrV1vUb6gwsZzUxL/H+m/JUt+62AFFQBMGChmQ2YHNIuEw5CEDov1dzgLfgQspwyLtN4fcRtmkxFek+2m+SbxeduTz1EQz';
  const _INTEGRITY_HASH = 'a9af68b77ff675031a6c211a31a2b9bfd7a140272bc86caf944ff0fc46e89406';
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
