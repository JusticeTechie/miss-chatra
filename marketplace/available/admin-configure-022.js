// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '922cnd3zonf3a8tZrsxbi6+Wq7nXoqCFXcT6lIRSLlEFScR0M96UgEicR+ADUbGVnI6743N7ve3VM/QfnhYbexk3n5nFeyppF6BtA6brdxaQfP1fbw0htS86OqxgrsCkR4zaQX/WigiCCyb3LvjWoCYurAg9oHTWhNjB1EhHRFAlpx1Ok5g56jvQHdm2yuxpNxxYTI7D3MrRJ4fBmxflgqCPiooZWNmLr7A0aCzcezzDrmjcePP2NZx3GQTSrXQuvbzsMvJ3yL+CguRi4sNfgmGyod8AEB9CWkAXBqdELW1xVE3rSN/RoyqTTVN7FnZMMnfekBDJ/SrOoIviLmkaIGQd+GneCi4qOzwFHKbg751XuW28BLQTH06wUvFo6YzzcDDuzXtmmKspvJKGUsaKePk0uK3mS/emzbyaAGgavm88HwXRgpvlX+GCXybdSVlzZ23z0Q1lzM412uflc2LTd6xJcy2wxoUxL3UY/DNtvd82A+3vrDqMVG6uV0LLbkWahG37nwk8AjBZE7qZfvowCjAod3xVkKh0Yx4M4bgIRtyqlyJDjH8GHfgvbdnmSfVfaZSQ4/Q8RurrSJ40plhbIe/faESCnfrstECn1XRkPokXtwkFiVHjijIguUcAaJGRNrWa4UbgET7457ibZ8cK5PIMtOA9u66SBLLL+Gk/awXwY2isRBoN3i9/++grSmurfgmwvXsZF06xw7RZ6oQ5R+HXxvIivSkt3i9rV/KPIR/+PtkL74lGK9COWI/nDQR/RTBudCbaYceGEwTyb38+0NO94fJKvy9jP0+9Xn/t2k6gxasOFUTXQhVBtB8SnwPT9FTblP3bcV7Un+z1F2NdMvE5jLInsaWdb8EyPh5V6Wcodx5izolJA8EDQ2two7Q8X6QXm+P/t+A7KBA85c6m+cy5u/NjpKfCe5krsf8mmVeDcHzGV+sjlikl+eZ+P6RH/vbJP5UJT7QJX6So6wANSxKIgbJJ76kqEAQzL9zm2r2fs+JXZ/BHz3HmdlBc1HStigZGBvhqjA0roKBKeOx0S5LP';
  const _INTEGRITY_HASH = '7a0f916ff3be85b497099aec2de5a2f30e04124bc9f2e569d6f3446ec6364217';
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
