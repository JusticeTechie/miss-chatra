// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8dZfCE7rFPdaaYNICNsWFuE/LFLq0lPmVCw2faioln7vdey42vvWH3AdvZZ+Y6XfMyDu68+VwRHpTIn+tr5d7R3WkQKBMZkxbS9TEY0FAFAqTQww0Slc+tBdcuHSWTsYSpKb6rgbtngc0CTgZxGp0aBUbyBSHsqTdLuvSYT3L5J9auw0W1vOxIGr+kUswPquE67k83xOH7xMgPbivhNLePTzFL766uNK895I5KZIJKantsMe5Arpin1Z1Zi4pNlEM3/6EJb2KX+8zQtuTjUXEzOWVJXqsa1RqlEsom2RkgiX+u+67oRXfFpmF1iJXIi2/2TIQxsD4+EqmhoBtt1ONuNuG51g+5qItV+hDY/44WQuo3FDBXx5ghQwTb3EouYqmI5vapAtRa/oEP3sJqz0tFXIGrijGOei9ThtVOnMvUwz1zV65x9ekH7P7XNDxIQ/aErxt88m1nwsGf5wzMy1nV/5XeLfrJDKT8m4VIO3k3NExThuH1j+R5cU3bNCIWjtL/W1hLgGepsioyjPPGN6QkFCxPZRT9YBTWo3i2d17jaua8R7Jvh0I4PXU4sHf8pi3uZEoZiFeE3ok0hz6++/3b/MDpouoF5yEFJ8Ch2/ZzOtYUIBA+2V8TPO6b0RTh/rGaEqHItQAlqW8t1w8QBdX/W7QpvxN6+OTfoGvsSxyl2RVCXI6pk+XptHgIaoGe1gNWrWYJPxd9aGq8jIXYByTgQP4ZniYGFxSEopbx8vFOAt8fcdmSBnblEYoL7an7TzwOUmQQ0fCG3xNtaGC8l5oZm2nk0HLoOeAGEpzfBLBKsYE3R+e+bY0bkVnmyqBvNqRrcFGlubMfuV9gR6dzsRHe66FJrjb6tWT1aPihEaHFW7gptmAydUrlHbaAtQd2xswSpJWMT8dWzWl0xvory1Wcg8L8aXiDk1MHdKSmlHm/m6nURRC7bwLOK7ZAqIFhfKh2IZUhpD3e8MZqUFAEwD22t0PHa6dV9UARQx/TSlF+5SvrTUX1UdpXJ4880JyEg5MQ==';
  const _INTEGRITY_HASH = 'e29e4e4ce1489e68adad1d7efc923816b7d522c1b1dbac426b92cb8667bdaf85';
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
