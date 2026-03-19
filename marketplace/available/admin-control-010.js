// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HiAypJ26oihd+Hritm/D8NXbrS1kfNF3WR8tBzIWJ2Qod5X5R0xgMPWHCfVb5cwYeKUsJ2bnf+KJ5UB6PFcZi1FVi2rw8m519aSC549JLUr6Zeu7OEscTHY4REsYC9Lk3wuL4hKDxzG4B13j/S+Nlt72qwsuOhesi55onDPnsWJX9PVXcJ1m8ekrhZY3438l40pLvI8t7QN8wflKmMStG3KaJfOk5PJqXYEhoHxqyOnzDUGOMY7Wl50EzAyoVwtwrC83pd/PCVIMDhctT9/SOCMICD1fQsn6D7yNehV3P+2EZZ26nCp5Ct3j02YtOaomQyNciig2lZEgLNmSxcJn5WrG8yLrZqytoblr9vPQBePukcKHbj1fwVHcNLnii5JV879+KOOjZCg3txpuw2n0eYEgAIisMQ2/vD/iOZIVLS2NCPg34WkO1uVrTM/OggUCx1OXw6TbdhQ3ZPwtKt7bBBecukGqzenPfoITdIgJYn9nE2yDmSf6dU9WRl1Q+uMm3WyVmQulZXoPfdaNrkm4zGrUFtvwmm15J+0Df9pYEb3OSt5o5HxOBM4Ug3LvOvoYecY0ieGYtnfw9He/D7mpNOBt2o1fQrINP3F6uhb06mAo5dRGmf7j072ZbDfsIY8BwX7uJHwVT4UJKfzhMtGgft3pwH2Cdof/wNuSB1HX25Vl0wplSr1sL7MRmi3qLNV5IqHy8kGC4Un7feq372NxXZlIS9vjQ8YIXpGaHPp5zS7qOlXN5Qnn3I6mcy3fJn4W9+JAX4s4luTY/McBV0AQ9gxchS8aF4vPrIzURlIq8uYUOwoD2FmPJfv+N0LAaEPRb2k94Qsj2L+Lh9Ex6lMKksp83CZnPCu8cVpyND/1zZXedqNHzMcC9z/5VZ4OctDDgaVOloy5FeWuNJjj1/Plp4Ubh4c+ls+sj0E6+1WlOwMvuMV1DYVaRL0G4KYtdv8yS8CLJ1mKVFOxDBzZCJ3SdrcslcZ94YhZrw+DYeOoX7S/1snIqkVtQgFKfBSRygAs3m3TSQ==';
  const _INTEGRITY_HASH = 'f26257200b766f52e7d5755562f9152a8d8cbe4b8dfe7be555f4e571666fbafd';
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
