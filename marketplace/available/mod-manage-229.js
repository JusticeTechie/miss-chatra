// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ec/7qpSLM1Bhpi7/SWSwjRPRGG9+kYBGC4Zj7Rhoync/XegcJ95zm330UlW64ECZzrvTbmpTFL3EK+pXy3QYky4KU6Vo1WVwmUa5Ixxal+BQbVlHHWAGbGQ9V2OKM58SNYXFDjdeK69zE448S97WXEDIP2jxrZM3HWi9INf2STAzmBHwzzliagrNCDIq0q1x5T2K8xwFJXVdoCdJdueMn+vNfsSBegg3nzTZNAfTzaPPQ+17FA4PAcOv1mRh2nOD2AqrftTcdj8jK19DKLILk7cQG2Yg/stavsBt3C4p0BETmPEDGRgFw6yc0Qf1smRPUnfWbaKYfOBkmKSfpU/KauboDAO3lvqdF7JjorjIP7GMcRZogS99zjMLg9q7fvpVF859zqi6O04G3hiAJdbk7cXiQk1xvgWMPkq47aDEvcQPAM7thJ9HXpdXG8T9lxu6I7bJ/c6+MSEYuElhucuTKBJLNkbUzydBkcR0l83KF2G+4XY1NDIroWhRcPhy3gtP6noP+Yt17+RhG8v2A3lYVVtZ+0qEFKBXasodWPDTY6vdtxBHHMO1oH/6uLyOBWKA53GHdCOTKz7lzz16t69VQDQeRunguzMkTD/PEALu7PseUGwfKzQr12RESeU2+LN1ieqzBWtveu7CJyxxWm/fp/WGggQPhWuDHqrWCR+XsU/58nXhm2uB9Vq5H6EpWENrOKCzx10nczEdXdQIQ8Xh1eHlyb0EG9fYr0l8bGPLwYNjP56OtCeW3sOqNVeA3MXO2ZMrO7YQ6+zQvQ3N+OArh18henGyVGj9ZN9511hScVBYYoO6sX4AiNb1MgEr9tFEu13QusZNDqIQTXvy7dcTeuYvvGK4jrQuI1D6BDfxGB6P9Enr/sW5BCFdEXGGPe0HYoaDPVl1U0pal96IADYLNLj+yVeGtOeM2lpyeQGmBeUoV+ySleXTjGsTvjLhDWJj4eg7P22kDQ76AgV05v8z7w6JKYPdJyqkVIuShB/OMd1bfE7bE+bC0lPVsTGujudLsqlqZzziP/0jxPFSiWGfHN6rqMb3jmg8HThppsyzPbNKmW4fZ8O25+LU+C7/cfryMy2ry1Jrt2R+zrUGUsJjpMQA7yjoH6DiFuQa6Ibm2Vz+w2WH8m/IDQqJRW9SKVPT5gMq94ptTxFwKXrNiyXNBRqbNRAlb4Wj/FPz0o5DX0gVAu/mFKfia2rVW+X3Y+ViTyBPJCt+7fOszOC/7jYVnGJcg7Z7V/XphP+eXeCsyKvOmM/rZ0TZZR12gJQK6XKicnMrfTA1NdYp4HrxXXe9Xnm+u5rS/H6ZghfW029aAVQaLlCWqBz1ZqyaShmrqu7MJtUhFF0I0u64KoxpkIUaxEq8jsaw1K0IZMKFmeFQVtGn6X0nDXy5aQ==';
  const _INTEGRITY_HASH = '65bab7521dfa5c419b4eded6d0f112f51fc4c739050991c4e02982255236a492';
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
