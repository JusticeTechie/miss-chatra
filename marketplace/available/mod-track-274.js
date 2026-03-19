// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cnpmBEwlRnqxJRcizXaLyZc2RqbTZ0V9EMEYRsc7SBW86MLVzZWPuZ1MjMlj8bDVBOhSwOYuldk4Io2L8QWJdmtU2qDabONC5V+pjvvEppWzzfw6icd7IzHEek19odxxn+u3rTimi1rHt7wXhY09vS4zrOfOAqnWhYXc3SEyjGgURdZwtQvaoZwI3eloC44uBWqWQQdBp9nX9SZD74XxeCoFYMwImovQE5cedMI7OBPzQyDtG3ynJ8+CiO4x6xSMFOCIwrJdaDTubCdEIXwtAZUC35miPp+xjy0Bl0mpxP8SWAUYI3hMi6OEs49ip0wo9ko5puavYT71UwhskwGg31SmHOJFnCDP0WO8nPnVNeU8nl5ju3rIgXS9QcIyDIO3G3k9/LgwO6bzHt8PWvZx9QXRD4V8D6kGyojV5eg/yz9QyzF2lcoM6sJma2i4pbxjNM9fKKWvk3mq2GOHYZVcxlZNMrecGycEsDW0hPhUaGHGYVshUIBAK8U2U/xIY920F8sJEaVGw0TItvXh15ZAYTtaieyuCx7HwOGNpaz5pdrim+s+dVcE3Mr3ZmDkzWftwDTKup6EfT4zyofERdpZjzSkp9R2TcV9bjvOnGwI8LiEUCc3ECSKdrgICcZOmwUdbcbRHsG0colwD4zwEBIcgep6EcoqeQ4WROmyFHQSj8T3qRBK25+8rr1w4LqfgIawheul4iV9IzM7pUL3vOON2GoiXjCWSKqbKdr8JX7zI+WaKq/PVzdhNIr6vpj6LJ0EzTKLo2zg+SDKemMrr7wRneh8h645VQVR+xDm3Q5nxrm33XlZvdwg2C+yZSc8HmwXe2z+yrI3ScsvpbaI30/lU4JUGIi1cRneeYJNrip2IVbc7VlpOx5RpvO986krDwxa6D3QzAVk0cgB9esGTqQ0L2prNi0L5mtyrxtAr9KlzMY4dw19tdC6+lYOSHkzcFQ+WPbGnlhY/2CxwvOSUluK9FEoFh/O8YqIFNaqwF3X8bnqKYwF04/F9dvXNdP2qhixz+2xuMjAKI9h2H0HfGDdwW47R7Sj60yr+gtOqgkz/845iw0lqqfQu0mf8fsd5tMQeCxbfBBc5IqIWfXdSu+Ri3e3vop2MIwFWu7aJHiqfIBZ0CEr38lPpvn3zAZ4zbHr8rZynAjyTAOQwJ1D7Wn0kugNG43hIW3R76RytTDfG8sRoi09ReI7g1P60gAITQpiQ6sgBPgEecdy68gvOteWYYsmUcTf+KNZm2/xzil2J3wKEl269bnrKkN4BYBWQ7AHBGyt+8/ee+jS0D5C9Aq7GH1L8gDQEhyVwJRhTnwWYSAeOOBYVcFF6rXOYX9CkYUTgt9WO7kmkPxY0lze8nEhP/bfOQBZ8rTn7y5ZZH31';
  const _INTEGRITY_HASH = '291dd80e4db101665e6fd7ab8b72971fe082b16cb43afc70f02c2be171f4cbfa';
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
