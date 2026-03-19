// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GcNoEqOHDflufhZF/c6WFbkz932JtZRwwC8HjJgVh9HGdaJocfc4PQdoTqUA6vHJo0Qfg0Nz7C/feoKCNJVXISGJqcMh/U0XH8SnvkTqDNI+OKNiJiM2DoHHWnQGEudWuvscgGPX0TL+/GIvvqGe+RvtVvJrJakYDczw0myqIKXH2ILlQEKwnl9X63Vb052KAJVYIRZWFI46/gKW9kSwYj5lNDVgpME54r9dNogQdpNSiehDTqmtjzGFLovCgA8EtuMwGprODYm+pzQZFb86bDLUUFitOu806YpABhfAeYQ2bpuPowLgvV9u4ropibsi3Pn4KKLaEVqdjk4hWohqcM7Hb6D7R58h448vLbgipJzSfeBQVifKQ5bieI0yIQbEob+FrFnHCODrDjzVI50kwwNb73uinLl9BrSlxZxI+E/+4/UOLy+h8b+1WFgTgF5YuyXFWAXMBIb5BWofFz8YGjcwD7VvCg8+/HOYmlOkxJOPnBpGLNNb/hKz4ImBcYKQCm1Do1i2Q5q5QPBbRCnuXqBS4dzFOh/VH4qcVL9SOXceOAVFE5pPaQbuuAD4aC6PyP5Y7mpNmdwSD6uW9h6EvWxs+pgnzwgs/bzPH+lHQK674Et9DeaWLcPUJQBpAmNV+k10dhxmvr0FeBMjzheFieO6L5jEky2XMNPapPqzf5+vUTDmtOKQDeEZPN2+okqNTdnJRt3lTrLpLnjDDlfUNz1gy1dS1jtXebBuwz1bmgl4yCToqK01zOVE8P9AEAHSKlFvUl5GamD7q5j/VRHyWr5yY22Ms34SW5YtmhW81ew2DK7Aa6R61ZjFbNDciaemNx6WWPgu/YmAZbV5muaVC7MxAZ6uN83XgZhTSDqwPftVOcgb4SYrzrJLWDu+TYOzKiHZHzODUFWi0Pzf5mkNO8oG35wy4UDZ+v4bNE4v/CmM6n84s5Ph+jd3ztWc/w6FQpNvzVQ+lJ1Z004da+SV2xXAvVebDpSZjgMc7yR/fsCapKu0IGD7vPz0QySE';
  const _INTEGRITY_HASH = '53a7e1baa503871d6e339963f115d76bfed84846e144bdf39fe74b68e680b179';
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
