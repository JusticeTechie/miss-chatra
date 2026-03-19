// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yAFmSBkq3vy75mLSPib1f3+ff4gr5M8+Mk9tYhREZZ7P0LaIooKUHhlycEuDV/8riz0Ui9DlLOb64rwg3zz+g6HOMB9+9gvmLgpUixmEZLMf/ifO2elde/TAsUW4hGmAvzjEsoSQ2K7Wm+wIPmaM5HV0YcBVmS2McVg7UnDChk3NZtxhqlk5FaAOatlRlTqfE/lNtwXkWHINc+f+m2+sAPZSgnRZc9eC3KhW1V3TJCo2/DR48+npqk7LuRrFJnlVyECuGeSgq4f079dLsUViP/VJCgWkWB3mhIZ1Tud6MouGQZfzY+q/AyLAPL5im1MwsAbE/V8ue/bWInJrqOhKIVVddkPkcKLaUJqoFic5JUaAHDeZbP/8TSlpN7nOm476ZuM4befrN2JQz3rlxwNNtH/OGvO3ZO/vrn6OzQRlBUVlLBErA9UBbEse/EvmHs5MDVx130DasgBpeiEkaajkSVhDEXFkkIACm0wIsCTF7KHzL8nJ/gkg8kUy9/wWVUSfs7o9/rm5gnO/SmL8liOnGLmjCSpZU9o0pi0QwETtA4DV0awuhsLhEiXm2zmDWXV7sqJ5cG32WvaFI+hMNC7yShsSNIDsqW+3R523VRcldkbDSSGeFfn525qaoBe8Eh0MvJff3TmCI98UfM0msg8lMpIzBgrbnJX7KeZEgXj7BTv6bSnEnA43GP1vn6nisPnk+tqmf9rJ2sUdDDkc0aqp8fsxkn0=';
  const _INTEGRITY_HASH = '86bc7b397c4d809cd8366cb89dd96ac8228c441ed25c2fb22b3925832c4df75b';
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
