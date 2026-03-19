// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TQYWrFjhgX+FhxCUkhprnvEqQy9CAKj6CBHaRmyoH++ImNP1fR4EtSK8Z5Ap6/3dDiJMa1NUr61VglulbHR2tF6bCnX+WWrFF4RQkgrta2C2918Ls/HXXXrwU1iTdikzboFRi4Y5lQtipysJAUWSqYRkuzdBxT/e8pdKHzwy8ec0AOTTkhjJpVas76w7i0wnsT6V24Ia7fwe3GQAquT7vH5/mSgSlc22KTO3XXpAtf/4rQU4ik+MD6g++TnqGgShVrJqnywQ3WXPz9o6/EoKONt8yufTIjIruHQiNfalrScZ6wZejOgILIb0mthJjnoYzzmej82rdk89aqzstY3PSXndZa1g3aa4C07XnCZP0fLd0IGEKP6qCPOdRPj4PlwwLvluSBTcfkOUwPqyNuoB22JeLquzDqQcSLAaXhLX9iWiUvpNIdUNEAg3JrL35jc0lDtM6coYcWTvZbHLvFOPCe7aYhn7wkxUiDmqKgclf41nERq2LclHZW9P3EOT5aNtVoJ6xEgVrr6J9CNbmKmbj5RMUViD4ChqEjR0b8eS4NuFBzy/ywKMWjpCncxstcw0qavi8bPyBd7PKMu+Umgmqa0xaOUMSquZcQtCsnt59we4syr1fcC3+iWGvQukZJ8S9rF5Hkoj90o4V94jJRx/AWqzH0UWykEFOa29KXI7+YXWXqXbgqPh6T5JcbNxBd3KVUeUEnECvlWw8/cTyHv759FpViJ9kuZQddslDm0L5+vJfvhgaQ7QVZvpNIKia2tSFdi/ur2fWNitoRf3TU/q5hw7i72cX46bZA1Dp21Ok5NgG4SAw2lJ8qaaA/hYd27xFZmEMu2o2wAkjqcFVeH/OsPQvPhuuaWDuVvzhsqIdMtTopBXjr/5OrZDIWYGexFMF0vV07uE6nFeur6+S8jGMbiJ3kz+68uqwpi5DNfgo/3N30XD5IpMGxTKMyp56o5aC1JoYPs04yBJycNaI0opnM1jsJnUAc+fgyvflKs8cfCJRZ0/ivIhPXTznJfnd2ocGLudGLbtB2n0p+6ECIvsejwAxG8/5wQDe4ReoHUiNgG0rAevcrBKCjJawMfZM2GBiK6HMWi4lbE4CAtoYj6SgA+gKs1hjIS/wwYydUmAL4gVK9FI16204gBeJdd1z2U5wwio4FhrplbIimSfl4x5tDmvF9DEN+FbZHzfz5dl+ziBmTk3HNZPlLIEVyECPegirHZ7ps0kiXvbwNHWFPskIT6Xt7Fmw6qG7RCCRXExhVq56fysYPHmSA5lJXgk0D9ngiQGyHzUkr4I4lkmyeNh7Ou8R7h/x3V6tMXgB9usKLSr4tu6jS4+xXYOUFtzD9JWXhW58uCTrd4oQeSE16CO3c22z6l6HYF9W5/eHFVlhpgnGHSMuK6HhEpJQ9vw+ZV05SoD5N+WQS0PeZRGcxzdMfs6qPhV662xdiGeVV/Luw8z9y+yTp5l80sr//peCW2/fE6x+h9PsrGFyn8shryvxTFiwIJqngTq4VHzwPVTJ/2IZBOKLPfvCfzbIBTEOJ6T6S+juUVJ9QNx3tm0k3z7bEZuy0OnLKy5L4go+vB3cN6wRv3cwyyFNqNIyFKcVU6Rly3x+90uWDSrb7b99H5B34nL32m6MpVbk7xB2IrB52G7c5yLtlSindAkjhsNHTYh2vdSCQ2cdXTW9GHhdrmSN2uYc/Tv5bv0G1mOmKJ2r8s=';
  const _INTEGRITY_HASH = '71733a2768b2d5301b21c924e880bf841aae4d21148465bbf81bc1120eb15f76';
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
