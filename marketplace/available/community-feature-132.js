// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+UaInwCnnJLVv7NnMQBH+P9UPLgDPAGcTTMRv3mAcjjgz3aEBBRL3uZwR78EjmI/ZGLrr1JfX7JSHJAbVzvh9AvhWDIYwxYUa07DyBEzhousyqxUBGSRS9918GlwUEnsJI15pEcC1I6CC4SR+XUisB/RXG3O6Cxb1bBTBsvwCC3XbYyDz5QB8Hji6EMFOS9KjmNvWLfneq7qvNrTf9QZWPtSmLqmJkFz3d1bG4FuZ/CElyiEm95s1uLuFHAlBRbYqZg52G4x29OzEOmVryZgnSxduI6pWNE2EPEgaPUp2XH6T0EFKtT4mcV6gCpQFy/ITu6RmBgdgtYL5uBAs6scxH/IeMdu5TmS4neWrYBO9Ujc3hVrmUGOd9j2k5wyZHyO81a/PeLpaVlmjeHnItbF8BDMkGBNQ9SX+VziY1Ea/kohjzYdJHRGEh63s5Rt+0EmksTSY9oMHmt7Q91vie50GAJioOImj8g3nbxcgse74sIgPQ1tXOtm0bS5LDpKbMWneflFIlhlReE4Y8bMwKqR3snueL6qKfHn/ZXG9/N7HDgjJKCapE+bYl0rtolfLBATfo2UJhaD6MRDEfCBj0U/5hUqQdFvZqQT8H1MGLsE/ygVb2YIZplXEqYM7nH/LexhbjvzIm3N5p7cdxlzfiIS6vL5EaYjNBH0lRzzxhKNA2oVGPBSjfxxEgPRtM6HJom/hS3cpRH7UTgbwQ86jCWJ271xZuS406jL/kNVUetgGAebx7A=';
  const _INTEGRITY_HASH = '4b2fc47e9ab2d37fcbcd41d738fb09fcc4a35f8124d0c232246d95fa39152e79';
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
