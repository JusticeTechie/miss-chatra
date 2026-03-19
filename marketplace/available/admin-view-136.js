// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+DnQdUqcWPVHp19WNe0SkMFM3voyAoIpcnz3rDlOu2dtFgRU7EpgD1bBLVrjy7vYTbRU5YQHPO9v2vY20UlMLsTzzz14AY9UC1lyIY5GR1OUb1uyrt5it1BLF54+qZeC7wDuSInWu99gCQOqBhIGuTPWCBDWaFoNuXaswMWCxZs7iqyfEipUJblO+SYuqYl/USr0G774UQAFRQGq1m+tmGuZ1rEQ5z0FEMF2V50w98uFJZd8iQQxNp/+VDdhFIO4sOvQeyTYwX6cqZFWchV4Xz8npysC3rvxUrrHbCY0R5RoS69rhF3wWpdLpg+8cNin4GkQUmSOj9qdhx9jsjWHhIr3os3blMONFzztWS8lFe9KdI/kXXsUdmzJv/ubAitPA4N8qvnfaN4mJWWU0VeHXR3Hv6DJ+mFZipdhZtGpVMKmmSBLxeypoSlOz6UFO4z7lR/miIoTpzijk4u1mqG13aH8BvrFUXKy+ZE10v5MjEJyW3oIs2oQ3lHltfj/LtQPgoDoh8tcZ65NXXXjCX1eP7HAyrMegoXd3v4DP8YX/5GgAw/N+qdLQ8CDuLHfPRS2EPMUt482/t9XjBpEdz0ykO4Mz3JGYKtV89xzTh/YqTJfPXoAODaSxeulCdNm1o/r6DSYk2qsWJ5DoMCcyZWTD/ZWHouIi4o0ML1Dx2DF8YvsNnLloua8S0nDhFlf+qmWQawcGcDkqCQwMqLBC0tUEK5iQ2P4bhnSEwSeO8mI5k6cADv8fvD0QVGVrhC3U4iG61Ra+VFt/4RqMIb3lnIg2Gwc4dOhgqR7qZBLsgTQ5qTKkDjw7ghqceJceMoJgND7x/TKo1525GOtWFnxTV5IUc3KafzDuARaEawdYd22JwRnZsDc2kKzmfDPx2hOTCmJq9UuVKyyhAWaM5WExVF2ENvxI0b5HYMpyHpvbTiwUxfxBuKwpb7JJ4hX6n0nE5BhiNniC/fwT4TFDJ9bb5ePGsERH/dw2YDLhcAXdMoVecgHSJg=';
  const _INTEGRITY_HASH = '073ffa5b949f35be3182b439809e3675369162f1757ee8c7123f82e0dde41d10';
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
