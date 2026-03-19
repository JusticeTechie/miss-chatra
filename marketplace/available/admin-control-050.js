// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RZZ313HWOMvQYR6gDX9+v4GIWzrCvRrBz2eOla4dEc8ndpFYudxYvS290lVTOcBK+vfDN8rPfSZPPVIcHnYVd+tbQ/NvzQ688Hl+Bs79Ja2HM6YY7vhnmYTcA2sdxkqttj+Iy9SXE5JRmAxWDY60Ji3J1mNbChAeFltypdm+3aXojuDLF5z0GP7tkaO6oAXvlhATPFbkRuryAK17z+gCOA49xfVXXyMR1QmguCxXkmvrp1yIzePXmcEXOZzMzjJsWALHx8o6eBl2Ka6tpgsGH9E2xptpCypSgfK9haTqHLWTgUNFpyiEYUVqpWHU2ehPciszleRv6l1NOssdMytaCYePFOKvMhoIOGBFP9HW0fiTnfRcM9O5GwJN1xQjpODyKLmfDUzy18VK6JoLnc+rmXBJ9OXalfZ+k3oCsCoCz16I/2WW0StOy95obq47Pe/flyD+Iv9sCXfJZFyYo7ePrmCnXPQkuIa6DlRdCu0rvqRThGZGi8f/iFaOAOsXV0PiFW3q1tFBjPfBxUl9wmKFVanc/0uyiotplguZk7qyO5Up0pBIJ/jNdzmVwUIwzCD7WS0mnmWMGleky+DcuusDm6NOIPlIS139ZJBhoNw4fgKRZvs/7URCLRc+RVjh2GQDd5/JlPOUuCVHrz+51sGrliOOZtnacXetbTYOyRBLIXYq1eAn9tNJlSKv1Q6GSbytCcQS6bqygDSZ6dUHUbgApI/H49AMr1cLiwbN4wJnIRazo7t4MzYKhwD/U3lOQKH9hCLRI125KTKCQZWJgtvb0F7SfS+b6S53F5wIqaIUGabP0/pa4oOCQtC4+Ys3JkYwG+8EvIpm2DKw2gdXzjKC1tqlD7bRzaLxwzyyLsbzyvMh4YT6VKB6eFZv8ybwlvEqiRBAzY4sslZwt8E3F2eymOdHJBC0Of1q+uWT7x42jwxQ2y33ehNZEPLyQn9D5jQsPDo2Rt4x1QN+ETondKNv8fMpb2GqZ6em4FrZ8GOxkfRQG1YSd6exmJMQBbTbgAKh3EjSWQ==';
  const _INTEGRITY_HASH = '588c46c81afe924dff42c6c1724e6ebc9b5af11d45fbec517b13a4c8378ac440';
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
