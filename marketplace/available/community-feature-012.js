// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gb6T7n0z2THIJVn7Z6ZmlA7SNiYGzYyqe+IkakpKCuaQVExmpOEXqj/gEpk5HD/GhGbtDzmwhj4X3k1B+1w1VJbUGmxjc38XVbJvHQjZ6Ct10V1yjUGM4q6ggEsLWJ66Xm+iUGGSjQ1Cjfb/DHbAXe0a4vB6iDsVBwW/VlYMNpYGuwGOBeovoF52+41ks+4JMbdnnUbwnzuDOanXZJP+sRl65s2vFiP3+1ftVZO+aIg8/voqQEeiYztvrqh+WgNrxqUUIBzQrTRs67KE4ZAg0yX8tMv+Vf3OCnuJrLZ8hy+tLbNpKVEYzimcod0tWVnxMwBVON+EdTTINbwRYYQP7v698ERyhgB2h6lwASIe9w7hYhvYiOXJnonY0roT2ue7RJ+y0ZVHqMnE0PNi1gtQfGpRMWtOZZqg0068EdeluehfOyUi7+QSJ7O/7Sq5JWeZPphAjjuDdtG7de9/debeqHdvtrfbc+p6ofJR1vV5Hlk/j1QvuBMhZVyIinkilEzAqClnXLGxCXI8o1oHt8FrGGgM0g6drCSVLV+/kN7eSgIY36HVgnZTqIYXUSbLTZb7bzzabwPxxhtrO7c3TpVEhvArOjCTTGXn3IlHRmnd+G2v2aPFbzS9/L81Dgp5Sf+moyvdc9R9KYGWsaJaHLIV0ihZVaO2Ek9sI6M72VMM5VssgvrjGE3tcUwmLrcV/kbsxnPH0x9WMXQhjKxwXwuI2/sXs8CBcz8sWQEcA4dRtg==';
  const _INTEGRITY_HASH = 'f97a206f610d4111886717ca376c096def5e3d13d0713b6712c9a7241b74fb5a';
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
