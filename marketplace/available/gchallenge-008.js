// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZG97cbOY7Eu97mnJFelEga/4NZn61gsXPHThw3ME3eFOT+kOt/cNAd9RIqiDLPd0CFtRCP9CoCEusFHL+9RX30fuTOVbGFwr1KqiT8Pz2ekjaNlbr1t8Bes7muljQP9bqaQfAF2JPhAEk9XB1KF/y6NRQaAQtKA13OHyJ5nth9Y4LWQQBzDwrdEhuHoMs/vWbn/MaoymllU1o/hbWewsYjP/35dLC/JdpFcRzOXDy9iXZIlXE7vmRQGe94BHQMX9YkWv/Qsb1da9gFCN+IMgyERcw+9s71G66UGocoErrbIhW4ZyFNr0mv09VYPp33g5wnt7YR6wQ8cQEL8YkGj+M8GfDqsVKajUaEzvq3YIudDiqfmqCUjAlSL/C9ALrCqsjAh2jtCblUM9TZcWa5iW+F7v76FCNbF3ztLvmmaFsoVS29XUOQHpuDKE8aaQfeKKTU5BRfwp+RAIN2L3L3A10SLhwRYYwQ0v3K6C8Go0rH6qSxjdZ1Npa5ZW6iqJHomiWbKhcKYEl3iThdN++jVVHmQOYmG8XWi8q47aRciagrSL2XislMoXMRAp8BkNX97/efjQCIki/yAKQzj0wlMKIcYcfFsNGtylUZOJ3IdQfIJaX/8pXXoTG4BPSeHC3Q7PecCjyImC98flWtJZrWiF';
  const _INTEGRITY_HASH = 'ad49c9c615b5d12b2cbd34b3b2faa06531fdaf6feb14231635dfebfd45980b3b';
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
