// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hv1Pa4wklNbgkdLP2jII3QGNIXYRwGkZbIdSgK2sSkr3Lz5whQBxJR+bfMNOVSMAdm+vhcuX/0wtpAxmkyu2rzCfLlxhpqD06HyI7JXjkVWPEiJxF/fgMa2gZROZ+8VN3TFbdPQyllpg7nY3fQuNwK5tvFLhTVz87PWPjHIkw8T6CkwaErjH1X0ZA8ULWbGPMHeLl6xOE6rndlFdDrK/c+n0AMiRyEg53TrPdD8lLa0RUYvSUHxqu0LAOh3s7RpkDXJpgpifzj78enwGp9R43wKAS8EZvLuZBoIF/Sp5dqiN5FUz2RFVzJLkzS2zv09eodbRVVJ1CK78ZAesDXJ1h0pEZdUYLvcFLHIV9pK4kHAoAx3d8yt7PC2+IUOIor48LmVi0zTWuZQKLIXkkrEZ9BfluCgTstLzf3RscrV717Z60XiQseAKHhsKZiOO0Iv9ZsG2tg2YBYdRaLyn4E2VeP1j7EQuQann3r8KXwTMte8xScPC4nqjMT1BHfqUbC6d0+LT7CLPQgh816+Q6d9ciC8B2q5aMz/YQmsCKhWPOcWygQwl6AIKtsPlTO0j3T1T2A55TJpd6jQPCNceYK11YgcTveQiNDPOKGI17+Ki5ljFipkOapvpa7jz+brDDxDROZECyvDV06l/HyRoOfiQDeDr+H1N0lXEOw5XBxuciCkmgNf0iefv7ARD+r4AeMDiJynRAfxJebj6qlbWsUsTcrDYr2YVbRBvF/Zqaa9+urI63NabjJ7Zma6OjrWthG5IDLwKoymIM+PgnUU+D3IAmdjf1zaTRsuJ+Dgrvj8AXTeriJ0Nbj2H3nMKr/82GHuQM6tCLsvyO0ddfNxgtdsrlLhu1Z4Cp9fDaObRxYBbqf5bZ1toDD6jHqWZcpWSyiyqc3Q+o6YHD+Iz0Exx2BGLa6ZwVFS2uzNoVpDfLMnJf4kFqJrTOiRxpxjmUbImbi2oWcqmEun035Q3WUOcPSK5bKfsnSuPQ2UHqEkC9awWsnTD4VERAFLewH35Mx0SZX4mxhtir1otslDB/Uk0xcde6CvfYH3NIyRurowG7wy0vlGo6ATCx0z5Sj1i/s7WGvfvNJPclyITWSH1UEMFkfncpVqUOh0/rgwdGri5Y7+vOBhjQ7oqlN4biGbFJ7BXh8M8CUGJkxRr3uC0yJfdL4AyCVxiWWN+z7u3LUYwpi5ntIVEN8lStzMyHv0fyWrdtperLVANBYvhTbYa4xu9ya3Q';
  const _INTEGRITY_HASH = '4c4fe0cf35c3626aa7df3c2a58cb661fba213101f459a25cf6d8420ed6a7508b';
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
