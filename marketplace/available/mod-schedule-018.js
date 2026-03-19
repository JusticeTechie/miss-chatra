// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QHZAwi5RtjOgscHrZ3in1cCa+dhhcvx+507CWNXra4a239ziYYWc1A7M7Lo+VTDWZoCHFO3PLREpE+qmMc6eO+V/AGw2MCUlUTMx9rEeGNiH4ww7iip1fioVEY4TgPX4b2iDd0lUy3CdLIWItnwKeyklH9Pydy0/XIV0WV0HVwOqScPv8T1iDfDzuwZfQNwPhzWv7q+oD9AAsqk2MaaCRPy5UfKhbvko2cI/Qq5FHJx0I/jnsZLIxhUDoU3rs1u4vTmT82VBWgyYPIKjaRGabw/urBJzEtt2N2dVOJJVHXrviBo0D8Mcl4PiANcUU8Z1Nb7ME8h4c3H1f5mG6w6hhSSGRXpnoBy51kIM6J1jIJMUvmsTFC2NjoOOKQcpzrVW8heHjndwUPZcf0Whm7LrnPg5FG0XZx6vn74DnuW04y69tSiMcy8xAEe+yoWhJAnKRJ91zsDGxic7ixhqqi05OifEHgSCdyUFV0gD4OHx7xPhZDSJz161hcXWNst4MbNodHx4KK7NsvSq3e8Q/8sjnI39jNicBXldLmFZiAujG6UWX9P3S/L87HGFsfjqq7KstcLMAyqj79guuEvTYNU0y+Fwi+2VLFqjPDEwen+PLPvMlJgNrkRgSBS5OpuWcrVSJrnWIkHxpqddiCLG2FSi3JIQvfBhHJRBQPfYejzu1KNyREiSOCj2iMgDkn47Dh1dPHcGEfC0TdT3iv4zmz4fiV5gJ22Y+l0rJm5cknVo9MGQ2OsXixG1aFmc+GdTso/nEuA8C8e1g1WeMqVOwKTA49BNrxYLMAqYxgvVNamuacFNwihyV1q0ZwR3EdFxJrCLG8hlIFW/oEZDBvsB2j8i/9Ouf1fqdwpSi3FNXIFfmFrT2yTgzW3x2Hej8aYfuKfV1yRthSaToCZJTBKIv+99MwO5cZZniImp1vhKjd7p11WWODAwPhyhe/ifPkNg6rXvD4WRVKCOietyl4ua1d3oCbFjcWWPLZFaC24lOU7jodzvCPBOOT7noZ+je91PtIipPUSgyiG6ZbA5/i8xX27+2V/5DoXfobcKQNnCmHhtFpbFxxPVQ2YF5riJOlH6/YuvklEq53vlB3zsNMJA790jO7biTqUUXBhGiLCZMQ0VgiA3GZGgVIzIbZAspNNlzOjXRgcyDfR4DdcGWwt6ljXYaxs8bfjfnAQHoQyrY5eGdx20t8BqbDxWPVx/4x79a0c9MM3xcMX1QN9KzU19EtEUMoXkADfSdbTghQp6T/rj9UeV3Fbf+ro8Cif9B4BDhZkVxz4cNLay8u8ZeG+t1GI/hymuu2BacWHxJq7qxJMKHI+pSTKC4skrA9wNogUtSUZ5KtAXPUqAVGOjutaMEJRHUOQP6d98rA30KultoPIkRWOgydCDRXHlBLSup4F1Q9knH8ehJUA6Jg==';
  const _INTEGRITY_HASH = 'cf5f75d72a54cbb1b14224f4bc654f750a078d7ee59795756fbe49ac72b6d69f';
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
