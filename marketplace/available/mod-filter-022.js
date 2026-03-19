// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sOCAv9F6nbN3gLNu0rAtDaqxuglQhoSklDOb+ZS4vA9kdTa0Y9VynbwWt0DO74dSN0BvKxYMqcX5BBkm4QLgoNGAax44tmHW5+TvNWfPy/8B5Djk8hs4q5rMnkkGG6FS6+mE7UEMpY2Rk+JtcfFcrmbh9Ta7K3uHvUUyL9UvJYksludS4MxZZU8YO1Qa8j3D+RfnwRXoduHKIQHqKqyzjPXCH/vYOegq0JpFBL3B3ElIN+UwnGy16DLPVht9CcIwh2yqiBltvlaAgEofb1S03wiZxNPC3HkCpTDzGOhS6rx4z8xZ6acmDj54kLpMwLyVXmTxcgp/Vwo8u7p6YJSivXoNWTboQrSlE19g3ZoMPuUXiyxkDWs+ODcNbVhvs16YBP5fHbDwATpNHmgPwl0UDTDo0sZ+CN/Oyx0EcYvZNbc20MFzDFoztcuDnXBYzUysd4IXhGElefvyBibuw0+PCMK5lQEB4wo7Kz+yQrYbY3+23qPsXXpuzQeVEpCbV12GdYCNAjTbbd4/tQUbznj1CDyiekvsn4p9QHuckr+tVS99UFz9MwwdEXBs/YPFQF8AiG4QYh+Go8oyZxWt2AYZz/5aJJajVwIxy0M9+9MNNVRzv8k7axZsS+Aix1cXb+LnY0c+vDTFwnEmSBV6MuYyeoBXeeA13FkUIVS+Ee+uoU/lqKSaf6wis3Ae+fTYFD33zqjr5aCB+UgASv7vva0gsN5OI7/FtaGsyH6hu6A6Ei7fuA2C2NJLA7yRZFauCI+Mitj1wCyOyTFQjq2wKFbJvGFCY9YSJpUHhyU63601DBjFoN+BJdCmfqHPpWnaocXAJCnk8KXvv0pVp6uYBam6C60qid6fbpLLcaXOplud5Xx0ziPTga1/pGladQZgyeITWNG37+1zx246azuoC5vNck5wVEwo22xBfvKazyOGVdU8dksgLYCLp9dok/mRYx+n+Yzu5ZdmpEphHENcMstmcRba305E13eP7s3omT9mQECbhBprK4AbGnO1AmK6YVD1K7GIl0+5YHb48xkFKqKuhfjBFNOtEb56bexz4K/fClwAJOEJpMexapHo2yqwcC7g0jHC1VueLyzfptnz+2UKizNo75b4d2wn6OSYC5jR5ndFtW7MHIjYvyW2A51FJPV38unxlgkmya+5Go0uQhFxNT3R6nSc7kXEuH/uVneBUcu1pWgiPUlL5LfcS6wyodHaX9xKmqd1OtrgH16ftio+RtDycQjAy7l0o3n442vCiT2d/6nUK49A7ZDBdmRsJuN/MmQ2x09cunj/Qth9+AUhIImpnVnXj4z0W+cOaV0orsvgn0G+z2RU/RSt76eVbqjU29eCx1NNJ+e5wSSEicxlRgRxy56UWHuWuMIpWDwRNwQYb5U=';
  const _INTEGRITY_HASH = 'fd568940e2292df8df751bc8d7e3086914c8671b99ef1194ff69d9b34ba97829';
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
