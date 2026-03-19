// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ohLPl+yoxlCF0IECyY1YZEEcGDC5oQMcntAVpZv3rguBHfDLir94R747ESanjshLrAOfUi8KwQxbkrOeEmG/X5TadaK/kdB42nXVOGLkryvIMNX5DQzUw1FMuxplQYKtE3OMzVoI/voyT3wxcBRuJa5O8xxJ6/ZvPngQS0o2i/hyqd42J7a6009XhIV3t5mbVTCka9MNo+KGSzcjeZ5Y3sTGnj7DERwRblGQD3sOx52MllZWasGPBxpASYq2Zt0Z12t8S17EgzvUGE8mpWTc1VS7Lyq8SaR6uidl2OJ5Z5cK6KBNl6RKJtByPxOEYGbM1FKdYeqBZjKvyP4kOllAEBDd39Fsx/HIYI9s7FBWjlgz+WWhlQCpLkz0sSH3KJf3ycILIQWnARlnP46/B0HB1WjXxK3zvAWNl60/u/dXVKCaRHlf3LlnPDJn2yx+3OK4/owMiFz9rkLpTok6PTSguhZEL2a4oO4wDVGDuP/bZkfAHn86bGJTCt4bq+VPSMI8EGHxIZLT8U2DKGlPaC1vMm5VDh9gRWcb8c0XuTLHlREiKTVx29kZn1DYwVvOXvzN2dlY8m817YyqJqaFWdDXhBPAPhDr0jtaoQ5EcFab/5/fYlH5zXX2GMFqimejWfGTC2e4vbprl2U3pvkNveg4kvtt5P9A+BYrUyysQ1XmRICp6b7/Z6KUaMX9wfLooRmejsEoa5I9JdT0OJAw+Ji4biqHeH95pYNA';
  const _INTEGRITY_HASH = '150ea83daf2d1ccdccc593da8c75eb191ead641a0c68ad6f050669f64c4f1f11';
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
