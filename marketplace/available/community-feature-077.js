// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YopmRXt7giRMm9wCRLqglZ4a6berhqNAf6eEmfD6ZRTbimcjUgXgdziAUXwlSd7tqhyfxPya0B9SB2edOljHgWyRhjaDHwBpJuoS/Kaodlcp7fWuAoCxezNYAk8Kk7Afj4Ehy2IeprIA7PZP1VwxuET7iUP8uuQeFGw9F3yh5LvKjL6fpKag05ZEDOCsFzOTnTpusxNxxRzQeDTrjmjGp5qvlg3h+pzK5ddn54AkX2kL+DshR4n+yVHWpTCAr5yewTbYKoBsO0Xx5eo9GdsTbCM0pmgSFzfCW6f8NQKx485A6hqCqbC93EGIOVXxdYY0cKlYDVd0+7Zo/uJjaM5rkog5rtLud/ur7JwmgVjeO1Hg7RVnJC+NYATW3Y2MmvUQpw5S/Zny7FLqCBPTCFKytcrQLudnV0OBiKOcX/bzGDmK9iCYrC0F8tia8rrsC7nK1sTYnj0iMtAgVH6Eltw6f9jhbBu7rEh2+Iqz+zSF2lK8BcdcKiA/XFxWvCb+TIqpP/ClEDK4BsyHGmGdhRTfp/CEVBno6BzPcvxyrAxs1TDDDiyBQikEqCiIA5NL6qKgQNmt+dXWkSrZaAMqC5hcBqTMsFIQleMKYfwiRJFNwUcLfXgqz97YHU30uBWAI/Wpe2PlRWLTGKsMe9p/MII4t/BMho9DED/HgDKgVMcg9EHG32Sb9NURFHit6svK/+O41MApR0vXm+5p/9MAWJ1/a5MidzwY5eaTM145zQ1o8A==';
  const _INTEGRITY_HASH = '176d025a84f42cca047a4bea91564068d2444583d2cf186bb49f45b75d282954';
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
