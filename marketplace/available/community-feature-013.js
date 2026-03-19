// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YNHCSoRRbxLd6HiRsf1OoUB5oSA1dz4kMq9+bfAjPXP01l9Gl5F3zkWTkFJTZPhCS8Y+P1HgUpJWhCIYSsVbVfHqEEuBf1SnX1y/r8ZqOlkkJfdBdVexyBo0pwP9+s9xN4qDi/Mclj56xUC1i1h/QPYpmn3zmEOCwaWidXP4YIrWDOcvPILLkxj/MW+Zat9jbVBhlUdDspa6lSSXT5zFRKXJhZMLAB1T20HD30GuNSJuPwExpWlBFonoIsPl5bEBqeu04B/iyrRfkbanrvCthsmNoGuIKtxVh0urRVw66niRK31SbIE9E+HcFAwfuccVlYXE1Jk2ZGcpIzdORMR54hAYnirvle9RiASe98SsjvXluioTFFRNwoF9/UQ6YhiN8hOUwioGcu7hC8Lr2cZDP3NiLZ9k1DIXOK/a3HydFMsF2qxlyZYN2YTZw/wget154JyVu56XRMoqDX2ZzDaH+GFZp0JMcTRIRCCxlH3ig5W/sgEYlN8946YObdvrJN+OmA1N44pTmPzgh+70cJxLbxIGucyMgv5BA9qrtEKubAU/cLTYsOJFsfac0rQQtX9MlHhwXkBeCJ0GlV64DSg5nPT5b3LPh5ZFzKvH75GynN/4cVzJSWM4w8nLXmhUckzyNADC8uPfEugmxWP+23g+43B1gN+AwTfj++csUSauXYEuT3AnsZv+a4Z8+3QtTrbrT/aOkwuBmmrqMCHuhSPVaS5/qfbWnVdZTw==';
  const _INTEGRITY_HASH = '19c41a0f29232343e93dc884722cf2bd68fcec5dbc5168335425ebb425fafca0';
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
