// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XpFuPiFTg+WuArsX0u93YMu0nqMVP7FAowK7D3rK5Ps0jhRjfLYZo0Ka9HAAtrtvy2WVgwDW/UEJPaiwOAs7jTNtFSicqf9waIxqnpUX/JCZqEcXPVrbEGZUbTh3R8vhVBoPcybU0+545gjqMTlaa91KvNh9Nh7l0ttl8FHeTOaVp9URA+YYm4dM66j6ADEnIoA4HzkrE6MmDog2wfM1rgh3f7OGaBSqXxpeFY0bYHhZrfpGUwj1KTCSz55iSXdPA0v6xH2YcgC+tC3GmUpQMCvLN2b8yeNRcjoKX3tCngnhAyDZEuTtPyGIPauz81/xQQhSlZuOe40fSRYnoY+bUl6KBdYO80hY6U56qqWfOoKsZx9M29YQ943vRWzCz2VJJpbi/JHc08Lc9YyGy8s/YuZZVbNN9hxo1auUeH7NaFldemrjEVN8kF92gQvo95pVDpMWnR+wYCydSD/W9t1q0YUViEoQOtOEq9LbNwE6eyNDUem6cgF4nxucEyf5Yef5US6TOvYaHgZVo9QOaFIexs5hv7Gjm9kCjFE/aoCr4pmLIaJLtyIQ9q8/FgQEgS67X8xQsUZ95EBDt02/b6x+z6aqmAk0m5Z4x3ah3AntiEU024/Ei7NOLWaIWz3U0ixCmzg/TlFtjONVXpSqRwnbFwJ23hsj/sP7QgrzrK0AXEJXxSHz6Dft0TjsZPDgQ2QJGhzNWlBrZDjR0rY/eeUV9fh5lJBxMx04adKzpItGmQgez0uWNZZ5PoEErRqphooLLDS8/0eFB46vGkWMNepguVMGbZysMXPan6RoIWKgibfJ5pDz1VSIDwyQtPofdtXPEpoDAqffN58XPOimEtT5J9rmgbbBCsCaUz5S467gAWKG38dZFWkatEklsO7lYCqfRV43a4EAPXZRpDY3H06WcBqg13DhjKiVaEGd3g2gg28UpJuvLaYxBdyhOuxc7ImKn365kthbw7QfSaLP4gzijrQvbCmwvIn9/TLZcQ==';
  const _INTEGRITY_HASH = '0043dd7b646ef6ae4890b568f3c0a933a12d07019219d08c076f4da465d522ef';
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
