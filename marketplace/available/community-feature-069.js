// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GzXu/+F00Il82srzqXhrQVtwjxhz/5tlpxFNhTXh6J85I25+z/Vbl9kuA8SHsxwh7ulu1kI5j8FJ+q65G8ZRYERA4+3uM8fDhGmgTB1iYNPUYNiihGo/u0jCwfbz4cvIzKK5Ln1qI1SDDiSwj0kFZm8AXggA9xh7f14iXYjl0myXgiYNUgHRQOTqD16oZp2EDMqGDk8vkZ34EXY7Lg3m5HXhl+ul4+tNz9/0t8TjK6UwjLIQq1CKTlkyViGs6AZqHm7r8MRyZ2Ak4tNkPocs6bKICPINFhNPkIkG0AHgZUTTN5gLnSnwmtRxAdN+mQe12K68jgorAkVCxNTkrgT8Gmd3JOlUgWps56W+q8Pi6xGe1gS8LVUN2OcDG8v8J6ek73tZZcahX8SiOeXE43lROWrYNnXkc/7z+2r89xtMrRMrnDynlGGdHTm83jRf5JHHQoJTQDJBijvvQ0FwShHBSPqjj87w5emQjUqCSgJTwDX+B9gO9jHCCZrCbhF0CPkVjhlkwJrRrr93nSeQ415F0uW24qMjaUDZ4hTkVfssZsJH7RrQBDTjb6YRQqbnt7IW1sQLBUXRQMdAkoqISBcIkEpkXLqCX0jvZSpvgSDbHYyhcvVEDYwG6Q+PQPPoch6/5qf0WhhciZRfouqHQZYg/L2F8OCEWVIunLxvBzLbMi+tPkk85DNI2z0t0IUPlcqsYs+kXDd2vrNi7s1A6pYFtAOiTSr4E1XatR9z0U2TJoIuYA==';
  const _INTEGRITY_HASH = 'a1ee217a16220abb02e07d796af3c3d88fdd6a0d537b151b994d6faab39dc963';
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
