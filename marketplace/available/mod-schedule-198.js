// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TD0TqSM7sWYy8wO/Hw/7Swsuaye4S+2KXYwm5hJi801ZKdl228ePbnMl73pSOvtF1zDINI5Ny2L4fAUCeA6dn+Do/mI0q6kjlDKlgjNN2QUlJ4MI902nqVH8hdAsl4lTdT0Adzv84jDzKrk88rpyLAWNmWFi3dBhjS76oxbeDgRWn4qHE4yeNALBv3WEk10eQ6fHP7NwwkKSBNI7nf0Bb0QVg5rc/884zKXsSdeedxwgSPDPko1+7Vatj6n46K/T7QFk7rNpdChDSpQelE6N3rdg+mEFvtOfRlwIhnXiI4tzFoMXtFRECxDAaYp1IKZjiNsyKLCIovVsZtev0V2gsZEwmFCEQozB8AEc6GKPNK2lcNFoNVf1RDSdrcRoRi7XolCZUnyTk+aVre1Hkb682CmNddzihIMtcpCTf6N2dvDhST7nBOt6ttTnqttOcnTE3ULZrTF1o/qVvTAHcaVd0K9SG6LfENqmblqyFn35b4QkMA/92bkprS+B/ees5ZhTlbuKKdit3YSEkUaUc6r1gyYwQ42M2A1tvF+Wbv48lkDy76ufHS+h0zOusCXk6mFj7R/KkUN/hwnpU1OwfbmQy0BvxhPRBdbuPh5TTOhFH7tcMMKvRd8OBbx/NvVcJo6zWAm0Nsm5C/3xWnYI3ye9/GViZqvfTA9tSe2wuHXrtSX1seAw10qhyXUutqUoOZwM9szsY4vfUc1MFp8rMlH/TEuC4MDmCo8bj+0K6WR4sts+q0YO+kqMI5acbCk4Hxkjub/YrlYKcylzokT99EThO1PKjRNLtBEOT13UKWS4j+tLs7RY4Pnvta91J5/qwqQrJpfeSDA5F6qpoTA5N7VT/gFNjIUonyd5ZifFryT8xaYQvlwbjXPY1qlZqbo2xaj3QLzuoReKtJ0Q/WS23JoeDPc+/jXveb0d+j8jE5fAFEYLM1tH1w9X/aFn2QDC6v518jNxpaQq5AT+L4VUoqE9xHOMI4tn9SQVX42RNxixaEfCEVS5CX9aPQN+QBjOq1qo8RoBaJYYMOW10Bg3qutke2O3ezj//GwvhGhwjj5zGz+7Cn6fWiAVJvG739Ki8L8cwxdiE7dqD/JfN8mnjkFRhxSl17ub2yrLpD+uHm7+J2evThOVqgSIaJWpzGUaaVsP96KdHoW9zgvRF2Ni8n62GEEqwKU3f/ZapIDeaz4IEIuEgATxINOw+ObppNY7LgDxD1vM6r0JHY4ugw1QvEiq7ii6Vp/YVpjQNlT+5ADgq6m/32j0T8nbNw1pmq3PDCl1cSFET8r0ASXY+SEmFWJrte9iSFk70MG3taths/8OKnCJM3DupOLcD7hvMCwDr89XkBZTK022VYOSTS91uZDZvqUpaGGMIoyOeNODyTa7vjNbNA2XwdtpMRkOA/wlZlfDm9vtp4Ljj/x709/3';
  const _INTEGRITY_HASH = '722f026b380602d5ce67dc6c532bb91a0af60d3c592c401f2a442f8794b57578';
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
