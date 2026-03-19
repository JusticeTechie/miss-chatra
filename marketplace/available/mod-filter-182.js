// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XhfZRJ18EYbiw0QekiS/ivEx1l/QkF5UHOCW8iGHM+QA+RmArZosDCcazNjh9B6rlRTgEuw8r0NpnoVN4xPKX9notnCpesbbkgYUWJX66e9wPjg1MiZl32nPsM/pP64GWa7GSFMf6UkWpjt/8SrybQpOgpMCgoy3j7co5hCRo26fHAii1x8LH7fzJGqxsSvVr0J+o35eH2LEvO6YVIRyVuUG9PRIfPQ2JZd36pUDmx69tHDq+XggxwgudeSI5Er1txEm9o89AVuhuICP325EmpGR1D2vWwODABaIHL1LijtOzD2pjpi/SuRPc3RsIuZoK2DXRo0SgMP7j4ZXC+CjCjqj8Alzmwr6JDRIF7LSR3uWNVb5hnMDaCZbLt/WaetlsWWjYZ/T5sfVVAG284JFP0/KJZNuQ60N0sVKmqO1xPWFZUQY1UhqxFwjDPJYo9DbhTsYf2uyb9u7Hea8gZrmKtO9zSXiR2X+feVTTHiQ6fxcHNojFsvW27bEPuonFoF5lJrnAFnxyB9M0YhvtSr4lLgAsZBBmyvvAmK89aq1ADnbzmYBcivinecZ/LTqiLgkLTAZvxU5YYe2P/KUo+65PDl0DKDrbfBL5AK2Fcdr6bWyU9+fiuPAT/WAcmjrUf2NrCCsDsdidX73qWl+ck50r/Mj+6K7/ZXNR/mrbzdtPRsfZmyjU2w3kmxo2jdRNRxSzH2QZ+arM8FSPIb85Dx8Cq6NgtW3pLp8smIj07t/VOQcoAICHnNqxvtMpBci6Eo9MjYzYhmDlOJGMxicnhpHqOjdccyHmNY+tWJYpTo7LNhJl7hfd1uRYc6LEMjqE/VI/w8FjoYDWzBv2eRPThG7C3SALr3dSz6k8xiRqRGLETdNrYApfU6tao3dVKgJW4Qjg+yHbgzQ/1ZpAsaT5NOCdnE2eGVzGWUgg1iW5txXw+AnRTultyctjgCjSRv8eAW95u6gudXqABY49VztFWLAiObReh1Bpx7Zh8TSc79m30WmV0DxbvWidAC8ACe3Lh6bfrYZz+0RYg+c6XgZ9ZW+GJ+2Z1H+yFIx45uKkQ8Ri6NhRn8qCou6TlJatVchnXR8RnZZCgzFBU4VtPy7B80Qf8PDaAGuB7/sCDTsUsxFU5miy7VcheGo1xSP03JOocYnp9q6YeZFSxP80o5IrRqwB9fY3/3qpOu0ZB2GV4U6nnMhwczpUkHaUgrZLIw96C++GrgdU66PN3nCQdeJG0fgcbXyBHBPjjOvME0XmoI0u+gj9k72IkYbhcmZYGz9jsqrJj4wl6jhFotUf4mDv8uyi33YsxNcnKTvOwQfpAUC2t/I0KLNmJKG0bHYeRxT1jQ8Fojarg6RNMoaMJmos+qWkKQ8hXbAT708U/SYIMPs+hnE7fcBrSwwkg==';
  const _INTEGRITY_HASH = '2130f929f138506e49e0e771c67e6800412f13a1eec73093bb187c013a797e67';
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
