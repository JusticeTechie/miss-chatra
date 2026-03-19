// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o1yz7cjxNiiUEtwUvMAu0HitoHat57Axw8lZ35cGA+4JbTtYBAldLVqooYWoumhG8GnXTjRbTQ9cwHa6QThbQmiZi2fKPT2SJROsub7gNc8HIXOuwcvbQDVnJs9eCL9r22icfbfddjEWW6EHOntJEC36tB6cVJvnNO4juqZFCtroNQyN500OQoM21rdNgOYZsVth9pr4WfR/aWS7L500KD46tY4caBndWKrXl0E8ICQR4dhwkk2hgpp0KrlDnukuroba+pUFBGtdr2a0py9oOGq39WyObB+QZGvLE+G8Mct0inqFflps0/7cZEbWOuqQPPH65R7d0MG0SuDj/GXwNeCiqAFYj9dihBBzOEkOgoIRju258Yj+OO7grMwdj8bV4tGJzzBWFYwPurK7YDEHWyvnrsv7gTACjqVjXZYfQXAP93Gv2ZK1B5zU3248nK/g1EoM18Q0zwS7z3i+n7w3JnTlylejiTEEhdhPAjWF875NF8xw4nmjY4Wvr0UW9ZzHYESx9oFv0lCmdJu+q+ttQxS5dmR0bQzECFnRND7ZpTTcXxIpcCdhhIMy7s20/4wEJCRbaukPIRgAdOd15mv04VlyqvDTQCg3FGrc9ibQu5RGOQjU8ncj8VJJ7rlQnKAtyqA5v0wAKZLyb3ryNw5LwPHP9nEJk8EWAiaeaurh4/wvjDpfh2IHzMDSTOp+/y7ORFPaFFGGIEkMZEWJqzPAtyecMDv54LbhGIgLLLZ5pKA1DnyvpAWxzlVUr3HGqEmH3pcnGC8yIDTGEeQjk0pfHhffoSfizaIm6Q2zjkze661NwMq3n3mkqZWIoRtkRLKObYjJXsWKHhTC2S5dzgzzQXciXYvCJTzlTXk87uT5VGFUgj1IjjrcR9Ph4TOZHFY/AumSItPq/F4EdOZvzIOCoV6W/nSp9+CndOk9+xQJMXHXRd25NehXQfYISivRqtY8dONJMfqpJ40Spwoibn+R+mSu8yadqrMEcX1sUpwWMsLbVeZhv+U=';
  const _INTEGRITY_HASH = '0dd7b2e08c2d4f255d1e6ad1cfbcf112ad2a6f6996d60b9edc065da5a8ca6bc1';
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
