// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NQbyLJPpx7T19oGtio9v6uI9YrcQqQXCVVxeAVg3vmvvlS5mrhZo0ZIlaF5Jbi1rYxJGGrD4pZNMiTSLiE9lE9CZKci9IglaOYBL2sOQvQR2dHmEqA3yYbboZ0tDZP2bzc4ya30HGex9lcgCRuUJrj6YHvuJ4uUeIpzqQWkNPMb9RKWolscDFgefT3BenZUuAfc5vjzK0yC4kgq8jYKR6a2ZMuzO1i3X5NhFlHK6zbeWhfz9QH2/igVUdin/QM78YK2S5OU2kb1H/bRh0s3dD4bJNJmLpeF50tpvZ1cbYuCABtPOZfjJhhVuAjsid4Rddw4tXg9rjzIXkNDjW29SQ8sRC2dWGd+j6ROB9hymbOXS2iedcl4NuV6kP43PmXNg9/b2BAWLoBfTgXuWJ82ahqe9Gp5bJFqiTCKxvvADq6Coge1MtPJAPdWSjPH72IDJvqu7F+YLzXsP5UFgN7hnGZXXrjqOW2ZrSjXAipHSfntaS/Jv5JHD00K1NVcaJLpt4fgNMn3pR4HwS8cq4wQIO0YJ9O1wRik/BwFUtBe+7WAhshUbcMdk4+w149kGNeBNxe4w2+H1nHfe+d/Ow/7NBAlznKpn5ce4zeK0feXDzT1fvEtZQYGrl0M4AXhe2jfJhtEDz7XTPtY4Kry1Ftrs2b3zOWFYt0rQ3S5AFJXCO19QSEsxEVLsx5i+rslYjyWIKJDZb4S+dytqnm1XtMYJgPOuyqX5r8D7';
  const _INTEGRITY_HASH = '58fddbfabd8c97d1ffbe3543e51fe56505b26c0a867d960c03fa071dc37d44a7';
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
