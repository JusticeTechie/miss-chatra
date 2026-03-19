// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tqv/x4ibU/x7A24wLAW8kqojuf1HSvGslKC927b7ij0I7xiyWWxF1Wgq7cKoPkNH3y7B5evPG7pMMRRE3oEPgtE/ZYT2y91FjIWMmqOZ7tWqiiZ50VBwaztp4ubgNLa1BLzrjVMF801Sinu9a3IrOj422UYu9aNetjSFmtS+8eS1cnzzzmwIuIibOIMErpBCh/m5pPTwG72BwimA38ghRxfEovYryJXviW4suE6l88dsIidj8fpawKEKYUlHeSvbeetI8/1lKDzuXpo4az5WVYxI4U3Ew8hNeN1lgBLsL1tHT+WL4YPLL+DHEdHvleSv3Q1wrnvTh4JZOsCiXtnxESFTZY3v74FmiOsf0orDOxRovemrMirK19r7ZhffKA/mqwgkWwHs/bhXWzPhaGICr2z1lVBgW6frRdZ/WvpHbOhxcPMcGcG0+MSPpsRDZf41mJn0LAGSHTZQO8Jdq8xDQ8dcfcb3MNi0VDOOQuu81rrl+/FRvJ3b6m0rCuC0rfQw/MMfBKG3ZAc980zlZwJlOsScoeJe/aRN480AImbc0vq17OLIHlVnaT+F25e8TI/iirFTmQNTL3wb0DMIaW6s32Bn3hNr05rkUVLhRk8m9qE+OGLSoQQb95Zx21oNskpIJyb0+fTVIfRN5AJTXOWcdeFFUjBOeFZORe9KXTu7WJWEa3gDI0l19MFRxR3zpcD6eUbYuO5Q1uY+5JX2kI80oX8uSNCG1oE6pLFc17b0ZXvMqL26VrhIZeFOnWPSCsisFDJJZTKqM7mPNd6JqTzMJ9+9mSoKLyTMg4nPTMzRRlHht9B7etF2jY9Pjd2GC94SXivyW3FiIuYUb+ft7O490LqOcQS7ULGLDRcfJgP1TxB6Z0PQZ4B9ZVOyHa+WO9SyBT8lTvUXcKFtAKcvekCVfRPrOrA35Hta5FZbiYQ1dDyNp73R0bgfmFdYE5QoxmrJas5VCHvApZ2Urhexi8SBt6I0UACiy2nyAlMWodpsqwfaoGhcHwUnW+wOLPvdh4D/iKEtPXgnDTM82t7VG4o=';
  const _INTEGRITY_HASH = '65835c1dbfcd80c34bb9af2f76cf77e88a5b9a8fc0682d2826a72256a8b064bf';
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
