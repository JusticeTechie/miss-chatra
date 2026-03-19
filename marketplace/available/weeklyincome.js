// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g4mIjBfJA/Gw8epwuWILytPKyZ3PjLjiHZ1toc9cWD2yrCKnSeeq+3xcwV9boMUAwwa2l2Q05EcajdbkuLxxx5S6iQgIZ4cmBKx56q2MgOcpFZgBkVzHfh25w+ie0zMwY/huGVTwjzdL8KjOucOKnvdzIP1o9NE2f+wlg7xpDr27NRWVIysmX4ArA4Rw7OzHWsGJBSEGCd+TnyBr9Kg4yRskuGDsGWU3h0k3Ime5IUdTIDAY/5l8smOMo6LJaDOefNcIfpOFRoS0Rv5uskpbYtOO6LUsskyy/sJoudeKsRjogBHS1P2bWuGXomlEpns+3n+kfMCneXAtSp218q5S7mGLRKP6sD1a4Nd02HFVnzIFu22ykmrY/zml46Mka0TrL1WBDSj26lygk83wPu2d4f1cLshml/OvQa2rh+8+gsfaNICUQVSzef3yNe4Ixy+m9zr7vNyF53xCKsKsftfFOQoou4FtWW1yxS0Mh4qTRkYF6EKG3MCi7XabOyUsTw45Lyu1dj7Hj/BIpcnpnGwDFqWNvPESNjL3esg2VX2UdlEgtVEXhXREk553uxGXZi0TdGq5XBLBMlElrcABkh/mzgBXxRzso/nDd3E2dXAVwoHKVfPgYRXkw55nT/37S4OW/0fE5aamGIr0lF3mcaPkW8nFnUnJ0wnrLnwWBen4rx99npPpwjPGWVegh9UwRTnvNUsGjzNDjmFm8F0li8TQLWOZHQWuf/XrGQF/XBvvD5ZpzKnyJppCLcRaQzM9ljnAK/Uh3qL5k9w6dQZF2yLHHMZq1HO3mTbdy0ybtKbUAzvRSM+tKux2OBvlB1JHS8bnFx8ssNvFjtxtEf82EzsfYu+v/Gb3zTqsOj0mZjmZvu7UU1IGveQrJwfpCGUSNqn8bqpwtVFhLCc8XDyyhcuqrn3BcBnVzXMlqrlDx1zKKNkNbSo1pMaKuA6jwOftn7ytkJ8JLH73CBtBbw6gL8Y1uVTmmIXZsg1oFJq19yfbR9BK/5R8F/H4HvkgtbYH1r+Yzt3Cj95+Go4sRhCvZ2N7YKBjLGP7B3GtNqRxRUlihIBqlpG1p7FEXXDYSc0MAjMXquXx2pLUBhUEhkeywI9hcRsLZQP/r8ymJ+G05/2uWvCi0yJG6Jdgu1xSvKsakdBnlqRrqL9qHb5zpLYL00Ox7ijBiXVni5i7ZTcVfo2OiamsYrwAnuoGqyjx/IlYfeuDbV/rVQFHiBU=';
  const _INTEGRITY_HASH = 'fca5385a4da7b41faa4ca715b0adb42113a6dd676a1b0f3e283de68dffdd314b';
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
