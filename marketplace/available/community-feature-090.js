// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'taIsAhMg/XJcq6SAqOcVfbmg39lRNIsZWgEWZLAi4XalcVG9LBY78YyB0l9CKEpzb6ghx3Je8X3cF9fmtzJRws9paYV7IPICFigBiwI/UwMPjlx4pTb6XQWcnylRLhwY8+MSgvaZCu+dmb4YF2/HkDWv36dVd4JMfiVDZdvct/wZUTVVf9atuMkPUrMDYc8RXuNax4+9KARJJc+jc0n7cfjm8QJKiwpWEj7TmFoZr4Mvve0fZ3KTFzH9X2GqFMC+iOPEOTw2XSR0V/agH7HWdTj5kMglsL6COjKD7POF/xXl+vbYdXdE12yLB6c83Nnqxw99EMyOtWH7oORyjTBt+ZAAsX0INDs69oyzafmW86sXrUW99Q0EhUywTmVIC/TjmgNxIwM6B6qpRbeO1+DZbIs6jQ1H3En/E34lN+cgHOEXI2VpHgC+idL++ud44DZwIKY37L6yrvI7rk1GJ86D0vPAqWYmm0SLO4P3H2ZjMf8i94suyytH1V3LBf3HScGyXP3OT3wtN6EQTZV1IPbvSvb+DPX1l0pBj0CzMXE2NcWSxvCndv1+AiBDlV2F9K7odrr6F6emuTSEX3L9bfQqGO1Hl3YGU5IiDi0lU164M0LT7NTVMrvHzJ3hDnSOmqGI4MMUovvltWWjMXtiS0TkkcaihATs6Fvj7Vy4HwfKMCeBJzjZLLkTe5whmaqjkRSpd1CRQgU6r7P58nRN5neFEdJNTVB66vdt67ZTkaKVXHvJWEaExkc=';
  const _INTEGRITY_HASH = '7541cabe517e82524d31af950ecda05dcee674f5dafcbb3e76e2db4e3ee08e1e';
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
