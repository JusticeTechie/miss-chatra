// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UBd8F2+GnAdX6wMsH85NnctrQZpbjRPKMyQgO72oG8KCtMfw6p5ZCo2o5+y6X56RJZALoTLBEtA0JJ/ayBul4Fd0ikd1E1moyPaUZ3OF2LEC9w8MuZqEpuRcouYm5xp7mSB3QP2q/4Uypv9vIgl0HvP2DQW9oG1FtSI5DwSQKEjT5C3yydgswXgEYBQ7fHMkMsOHKDQtRahJleQi9Hv1xO+7OZ2sj+wWBw3anhEVtwJTJ26Cn6Fk94Dkvu+opuV3tafEwmTLnCsWTsXtS1lG3gvJRCFU9TvGZt9sGaL/LwkRD/XVTVgcVbYdxMNAXgD9poGeeJH1C09QomGhWl8EToIM/EUGSVdzO1taTsUzJ0OzBbNDOnPjP2M4aM5ahm9rp1UH9/gRPRKePBwW49tQaosv/o95HPu/eZnaQS/WRlsi52ZBIaUmtMx9d6l/TCGML2DhEXdas3bL3aCXlmX9JRXxwqbKdeKEtd8XcBfQ4W2duO3wQgaKMVwlUkaE7QsiDuHYiCCLCaSb/Obk2peLl/7AfjDlndCcHHgXCMGCf1SHKx5O+bGh1evYOYuYeHQFbDGVmmcsPbVIHmyZFs/4fDlPNNrrM052Vixhdl7gd7PlhU02vyGU1UDRqQtjProJ8BrBgwnqXpf+E2WZv9ILZNbGIpRkIEQpEHLIKllk32NmTjSE8838kYl5oBFGLoh+0Z9+dQ6zmP+kQegSVQoM2ilmlCDRT8xlzCJRDWwEBpJM3ILGYITP58qiqBuSrAP2RPU1pUqUBSHfT/yd4AQZ2M2RcI53vaBY/69XMWynvlAGjyzEFh4pY343R4QcEtSBwQtKN7z0ba9Np5VLWiPED6CxVlpbfyPDF5y6rxyJKlHvNl3fwCm5+t4n0ZEYbXcyfY5/WSWZIgEuPSl5nyEy13LXNPzvxK529x3h5tTuLnA7tNCLCIvzDeH06fMxXTdGwi1k4DFfrIfSsz1dZnZa23+iRXz+BvNhOfdjEw==';
  const _INTEGRITY_HASH = '2700aa8f7017e7cf429dae314bd392b76bdb53b5d696564ad2cfeee7d405d902';
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
