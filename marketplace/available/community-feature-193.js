// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/GRJ+ctfdptoitUAoxkbB369XdaSGaYBXtc/6BOirrktlztwHxChMUaDyGSi2l3mMdBa237efL9yqKzYg5Si1ytL5Z5685SUk1FvmPxziMJlcDLuyBpQoO/tFPA5d5wYfZ2uFEMX20BE/iconUN0Chdj6mI3pOENlQMK/UcDrhMB69b/jUAANbr0PJ4sKnlBepwh6btNUE+VixLq+0ktVBxsUyzhS17lerawCADZA5T3R/b+XO4oALUR903s0XRxJHCZ8u+SsIKc9ojtuhiRmCd6j2hUsdn+MW1hrEWWL6fj+KkuyK+EfuMf47TKcCh4ZsEG3UZRI82ILTirgWMVh7gTuYqK5oAaxsXd2HnkYvdaiy0Baxg/0OwDpuZn02s2c/+0FjRkPRnpjkqmsuw5yAm0R53x3sbbcSXf4cQmDaAdzMvfxxee2Z7Pq4MXwGQ0RQdmtGKY7b5J65jqtvxU/IJheYoIWLCO/kPjv3+yl+xGbQAwtlH5IGgYULqcK2gsNXzdSuI8i0F9RuHPngjUC7p+8rEc7GbZb7DtEVUxlDCuiQJtYcNtgugzTo88yPI3h2GIVkxrUQt5P/U+GkwnDmyfqN54LQMu7+qvqmmvbENhb2r7m9lubRN288L6Ck2b6XhhxmEN3CZQQkZmpLpEkfzeAdBJJ9WZTebLKzVDs/3IBO5TeNKziw9Z6dAPej0ChrR6+H31RFwHWpiYdGje9Dr9OmkxYIy0PGLCa7U=';
  const _INTEGRITY_HASH = '6fc5ac79be775a149ef9bf58114e590ee2898a4aefc2fc8e560cb28477b49c37';
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
