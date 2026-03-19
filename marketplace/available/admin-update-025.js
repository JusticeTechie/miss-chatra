// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GnoekABXRWknrT5GKQN0LUzy15ymBSIKUTNK+rO42zBZWDlYdPxkFSqUPToC4vR1IcKBIFPbnnGzhdkKFwoxdM1fvEb4uk2c4wFueZAd5kO4Hvw+MEhmCWiOHasCBq4JxH7pYRCy6wfqjY5zBdIp6BRItxhCXdJP8sxxiYYHuKo7/QibaKTu1o5miMoERYDqPR9eH5snGoqbpT82pSKDbl0p6YzVccyDLf31t+nqgnDjA+jAQyv3c7nD8RPjeDkDz9kypzce5mci8FlirJ/5E0KIFnqu4jtv4ujEh9lOnQBd0lGq6tbpjNjlqoMyKPcS8AgXWBYHcMTTE93tyEeOYKqCdBBN7j5sKHXFJgvOKMjkglvkALJK5FxlngRgB6k/Y4jbZ+l0jfqya11vdAiAbzROdaXZEUgI5rgunkncbW93WPWz6+6GjDk/8gnXsK7bns+o1ntSFaGFAkicDIkaMZRS+5sWeo69H8JOkhLEpKIHKbMZxrqEKaBl8D40Os2O6hqfXMmiEhSzIkHw6MEBqrpZpWAFnOhGQVTLbqEFz+vvTjTxchkT+Hd2aVwRNXWjCp6xPygZlX0yTheQc9Ti3F/3y2pT6pSIA1Vq+TNGBoRweyba2+d+4PxTCZXXpZIxGgkyO31zK5COYCa9P43UWLxASpKDsoF7phAbwQec+0dJ1SLilnjPBgHxGoMBvv94yB0FUGqnHkFPQD2LMPyEzzFl27WOTr5CihbKMCn9t3GwTAhLEgMxH9ZFYTKV4gXyoDXQNoMqAXe07J+dmMRBw2RDUAbVmf+Jou9NpWKId8gACnz+dkMDDK/yoM3n4DLMhjaqFnibsAy/7Kmn751JFN5O8AAxB9cSIJIk583ZKfrXKjs4eJbpfmYSJ034E4Nhe54K0bgVHGZXzSx5pjJeC1ckBHdw1Im/W/xopDUtVZY1MH/60IvMv3p/W4dW6yxpQFzw6MBQI3tdu6GZpcGtgoN4ZZU7eTbPLWu32BRBzJVlX8zCwNm9jifpI2C0';
  const _INTEGRITY_HASH = '6f85a244296b0d353dd829b656afb26c20c68ffc4133294ad17117297269d926';
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
