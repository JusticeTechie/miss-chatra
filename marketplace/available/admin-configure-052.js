// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vSCo7Aai+6UG9r0TphRsCTgaCr/OazNwJkpjIk3F0PFByBHhpxLbkAZenKYuN1ctflSIi6aR4B4b4CFFs5CweTsoKbsEKnCjK0KYuiuySC/IUUyAe+TeRgdf5ggv5eeKEuICAy6b4tcjsS1uxvr/bsj0osDHdsCaiH2Twx1/bn9I58t6gHB3VxmW6lmmGpdHMqtekr4tZIF0RFdSjcdM5Sdplje75oQNNndb+TZnNhWA0qwfMPD+5WTeRF0dSPQNVjp+SDerC02TNT4dNr7+bZlFuOAXJM7iveS4mEEix2Dzq45F6TIOr5lUIDDwP6wSIi1XR53/eFOSQ/3TATPBRyHf36hecNpEezcKjHgJa6SdBMgC3mTLYoj41iEQuG74Cu4Sm34UFQQcNJunG1Ownu1SOHENsdefjFXMXEEBmCOP+JnchMs0Vqh9DKhoO8QtWVWtybIT5Wd2AGg9keOKwBSuEPpXpu+iOtGobfv+WERkabrC2joMrU8Dff7Sg4zugFJB+3xFSRSmMwOHtDnaclEs2zN279pQglI4nRUOlF6RpUdb9cYVDgClJWBTPn8yYFl7w5JBTohx68uI3wJBtQfDT3YJqOaK/tI1KAyDuhyIncekJQasYu9SqU2Hty2n+OhD/zJ9xHj7/mdVOhSXEssDoDiS7aU7cSoopaXNJ3WBYqbQ5WRNQDvdgzaFJjhjZL5bhu98TR0iALRQqw48Q9Jo43eaDOvSw5xwy4GiRS3gITvN50k7ngOGBpt+VxcSy1LXG66wCkZiZl9PsydnDYUTi8/jlkt0eXLH3gb+Tx/JqVCY0sbkkH4+izwDAvk+bc5I4IqmVoCNXzuotubjoWyHg0KXuv9stIzBPtaKy9TvpmkPMRIXQsu3UJy39bgTrzJFo/9vwnLOFdHcIWL8tTRqQgfdK6Yo2OQ4QfbU8rxibbk7+IT0IXGwv4vVE5HKc/qsPGq8oYvD7UJ8JtGRvY6AqLP5RbhBrm/PFWQ9csSXrXvvnYWLSESHITH5EYfQ7/fvIh4qyDRmMFH1Qd6eLydZ';
  const _INTEGRITY_HASH = '465c56b7b96ede030b1d73ce6b73d5caa7a4eda840cc721e7e460b3e7579c7af';
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
