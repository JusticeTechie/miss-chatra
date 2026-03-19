// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tRQJqHpG7RS3VmTZatrBo7I+OvR7EJggbJH/OScIlaTg/P6BtIurw9SXMFt7QoHY2h3H1pp4wDmF0rkh/R76h2U3HHKKxzFWW4/uEB3IsJbFTuPvM33O6UabU36Z9Kp8oa+AYK781qBTtvZ/xb+Ht86jp4o83/n6XMiyS86DrPgMVJwZr8QjMwzVA6LP1LKijghIt4III4o/I0PFXVEAplDOui3oO1+ccgkPrDXUtJnAY5JnYPM0rh4mpdAERs16lZk3moW8hcUCVje7c5oh2fxgTya+osY2IZK8swg43ODQDqAq/bksqXi2048ep5m2AmplesrAG9GqTxTrE25bkZKgbSmLxdlhnwYnpWSMKv+AJlarZroV7EophYgQJY70GHOEmmHHYYSE933XVQWxXR+qiOUr5caPQgI2vP+h43/nZpWgoSIr7XEz8kTfIvftNDo1ZCSunru49EVe+PFjj48C8yD+HOUJFKu8IvVM240WV1EGlsRdc1giDQlUV1P4qS+UE8VYu4dnv5vo7q7/Q4UaFRdXRbOZciga8hnMwfJ7SmLgk54kqRE1jaLfJzYpoT1z7HwYgQ8ObWs5Nvh5WYdMWVuULWp/xbKmimMoA2Ng/2RqpeHqE0BkiYK5BfIUG5k761+rKX5+Ejqf3bzUj70xWk9hbzDY17NHLKyE0ftDCigUEO9nRwOY5L1TV8ouow8sS6nz6/M0HA9D7YJm/E35fLe/vmAbYhuejkN8Tg8NFsUlWfZ30VxKmBXlOr+6hLc8I53UCuA44SzKpoLcegVw8sKBJDWBr31/2l7jfHHPpyODWUqK25W7xQJRqrJzLHkJVN50KhVcanZkm3xYK3IJYM1MhvrKIuztcFhvayi8Hy/WvPDPGBBJ1n3AyVHVNpt7/3/RUGxreL8inACEwUbHpAGdUdGPPeoV1WyrTAMTF9Gk+/yOELou9A95YoYaDH/NLv1kBmPHPyFFWTiSaa+j2f8to3RcU9xqdoGl4/WJZPAeJ6TWfrTfB+sikkMjEg==';
  const _INTEGRITY_HASH = '166f6986a0594e86b97739895184c67bc008e369de865bcec9a011ee36e944a0';
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
