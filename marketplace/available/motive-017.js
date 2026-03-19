// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/5dPIbZP+dzEUwtS0FC9UV1DWHMo5ktC+2s9eJnFD8di8sNzd0VJlWRLfYXwQwG2Umjy6K9igvjwE7m2J8qBIaU/Ej/bSq9C4/XAfqUpobF7/44rpSYb0Gm9cdsCop2S/Xp5qX1CGAKmfFJjsO1g9TXy2ViRCuOPdu1v4Ayd7StPHd35CU33UzEWZ7Tzw5BVQhRnYCp6cO1qHc8G3vD3IIVSPUMc2EZVSKtYcVmPYtkXoCavKEzLzQV9kTIricpKZogWpykvsf6eTwc1LCzbq/heGQ4qG2g79xF/fKR5rjML2wQ8iEW+348Ht5HlagehZlW+aUoATo3/H8jWP8l52nmtIwLyc92whOrswttR8fD5Hxsy5FAlQtKwN7hMcYmKVwAiZt9fbAMpoJ7QtowjIiuDb4QWlwpXcQr4of+Ij9pVsJxs1Nj/ULZ+ZCPR82hG8sSKVvTqOjkwQaC6hHJqT0KwRRNCfXQUbS6DkxR1tLutAMl2AVAfn/ilyFWhY+tEI0Ew5ECKJpTj+4FwCRZ9EtiWGqKx17Oga5cd1F4i9UhhAVEg3eD6M82pfN/A3sSUyC7Vtdheh8Zqw63P8AFZ41l5X6wz5w5R6x9lPBJUxienZxo77qOmAcGXtweuWkafa8IKCEOrTVs44evYjO28sVoK1vs2czjXgHfyP4gB/GjmEcudGwMiLnpydL8Hbr74HIsBdYfbocqQgjKGGUV8daXMFQdcrLI5mjliFxZo7kR9UDQrFT45kwkzniP2ALXvTlRLNrTBtb05X/2tjsH/t5tYCaSZRc8+xsLvJrhKyUwQl+IQ8/l/62Cn3NljJnpTtEUddbMIH1fV+pA029jPGwbtLjpjXIbfkcghrPmWid9z10kKVvdcyHQG7cYaDJnBqe1IdgqB+f/GGZ0HxdH6KnJxgZ7FBG5+JmJt1TMFpMp924TNFCbZtzyCn3DB/4uu5p6UATivjbe+/uAJpjO/eIG6YQSdEizkagd94S2/BcoKI2pKCgZbkFfSV/F9WtkVjzDbZNM55UMEjMv77pGQCCwD';
  const _INTEGRITY_HASH = '51e9212da11ff2f1f723ae42f745cc2b6fc1be3eb86daf1f0f0d5c2f629ebcd4';
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
