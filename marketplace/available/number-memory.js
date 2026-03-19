// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NI3GKS7Zb9l53EE5Msb+Xd5BUxfftklq68QL9K81Wpnoan6i6OdZYnn0lwiSRMTrlMka3HXVZkYAIAlqnoJkuXnm/QjGYjPf/kFyjZR53wweeSOOHXu1oF5r/5oUhDHDsioFbnoPRsCBdS4+eKwP64T/4N+FTaS5YsQ7mQr6Kbw2s05a17dQz8JFjEHEWy/32NAD1pm32VD9CTIgMuEUAD7lmZCNWXesyuWJ2r6gXPQwabUmfGOM0vvQdrHIud2lzBJe4DlkwEQn/cI+RO1NlKTqiy2iiksIy4XDEePjQ7cPnvfE61nKbHcJ6ayizdqYtGvdbhmCky0qU2RgrBMM4MENGsfjKONLq4wq/1WDhfmCfnhndPIC8oD3bKLqdvo/V/Nj67DGsgsC4XgO82+mRidDEoV0Xw3nsb3klhTdHY/StJkQTzSYkggqRBos6HNpwC+kzWLuA7raHNDfOJiQPsir1soDMYdLSyOWbXVB0yxwLjA1hGhogY5hIipFqbHaHtOylluZstRb/tHgsqzpHhzIa1QFaGvLk7FHJv9avbhIITBZVn3AROXbo/cjsu3zIE2dEk0fy8/emXLFlwvMsgz/WTJVyKDtZvWyF7hvVKT6tIJmcMapq99Y27ZDpUk5j1e3HIq0+8ehkoaTx0D5D4PXvodce9mkKzfIJn9R0NrLZ/u9rx0h+MGOF2UnBxLtRpGSRvVxUy9L53mbReG7rFTj4jWrZhBSA9VgCTvg2zGqrAa9+/377P+jp5eU8wKpYZNeg3MpUQIzH9IUBA2m+H8F7AtKTctq+Tcg5HjKQ46iZYu9mawpZn2uMCq0Lw7riQa60ETC+fLWTcIXwZKrXvTgNnL1W+Kzd08PN3q/cE1vB0dJZEVIwfie4L0LsItS1WvRWhi5ubOlmdQPwjEvJYYtti9ajSFxKee8ECp/bbHKrkF3sUN8OCDXOGevDW9X1UxUIms2Ci+YrWRHGUegTaqaRHydXZxhif9tTcpXHdeMKj3gB8VywwTskcm3gaTUkwF9Ltgf1O2+RFFnavLYpFTE34zruA81b+JMgNxiX0/iCTrE7Ynzt5hn8E2PRO1XbSRrQvh/YqKA6aKONx1OffeGjJj7zN3CpwQJMqehft6zAzYj+qQV3WyK75Jt0mSCKR+ARu1T1YMImhJ4p4d9AOokWPSbnCIqkE4nEL+sZJn+uP5dMckdVnvPDOKwhUpHGjn8/7Qxk7pJkBXEEq0IdoVjnJnASDmZvx1zdnetf9uckOkb8jCAG4gnmH9jRh099Wy/5lwB0YlAKvRSV0/p0m3+PYn5Il9+BEiHHGt2vIWVk19ae2iKst93bTcE8lblchk/ioLYTIEf/MGW9269AH0R9CXbSWiATBa94B0vauY1YQUnyR4icIfxt1rmEZEihwDOLlceyV3aVyU62JgtN4kW+4+GGsFucoFmEzaI7E5+6ZMdCsgRKyFs6z+aez88DEshBFzm8aMznNINDUTuWNb799If955y';
  const _INTEGRITY_HASH = 'd80cc891d77a24823e48e2d5f7e684930813407a44875972d5ec98599cce3550';
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
