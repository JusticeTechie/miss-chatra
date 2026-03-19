// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dNaZeC7ZUe3lSnwV5h4H4gAG+j7fJwIH20M/tU3ZnVHyApVZz86z/GpYmAMK9y7TIntB5zmPtuLjaQV35lck74eaEvn0xoOjq0lBDZN0JqdwUZFX7M/1DzDInKIIu6o1gaFYgKdtiURrvpePKl5XBBm2aAbZkbWGxvhvlRGCh7whLs2OUrLGNV43SaSoKcBFvfjGhq/oVzIbXiIL/6qlmGLgLDU7nTPsa+IH5I85qBlMd5ePt1TY4ujVMsuMgd30F9HLGzrggxJXCWx/juV0epYJy9jfTdjp23bHVDrEOwSwP6sC7ANjDuIbeLN1ZVqLt0vR7p5JfYo6QmQaPiBwa2yJ93dNxwzAiYWBsn19SZPoasqLGItKeIQprPNhEBFnyJ2m4Q7ftNAALEm7q5cSpGP5sIrfiofJ5kB1NOAy4KyfACVQmwaEjuIR13CMreaX4YdzotXDznd5xbCiwH0IrOkq6J7pZ74CJo1hIwLVEzCZWPPaAy0yWkZF9bp9LYTqqT/HJKkckDjWq7Ey/d7fSE2RRUFGhhdrRFAi6e2ShdkbAz1FhsykkhCtHiZFZFUeStgcNZ7R/irFoMvyi7hDM8aehEoA9gYR7X/1kpfzpvLkh8ih4ZJNHvTXAPk5u7zWZQlQFFEHMPqD9rOI3PiNb/eDmnHxkltcpqNDtRH5PXFoHSQBcxeLAvqp5SPNBG0DLm8IPy61Ho2iHtxvV9yjhKJZVa83XgDDKPYN5x05aTZ8R2G/VJNI+FDTE5vv0x5feTxQKyTrwfC5RLiTYsAeq9ncK5ro4zYs4ojNOkFN7D3Rz4MRy1OsPGpIhxD8f7ZePKz/1j1E8rAIO5P9wkaACrNFDl7Pgq0rr9mAq///hIYFlAfA4klQrFjlonkLiIGHujpeIzC6ga3uiHm/kfMa5CPxWCvaHvRMEWhiPU40FB/wD6y08dqgVHwsmTdE0SluhVetHE2CaQ4VHzgv0gO8wVasaA4te0rN1UKPX3wX1Gj0w5iP4IGnioSjIPGS2PlBLnfNrNaINnrGqkoTk/U+34GTedB8cEPoMZqtzHc36+r+Aw==';
  const _INTEGRITY_HASH = 'fffb30c4bc2bbc7ba593886bd9b3b814df6e1ae6ec8a565ff10f421d5136b18f';
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
