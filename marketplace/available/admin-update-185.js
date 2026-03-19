// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BfHQWtkjBZrmEyxCTGX1qsrb7hVMojdLrwT9eM61thxAcwi+nKrLWrIrvrPqzwJANR8fRTGFN59WnPVWZtA4xT+Lvurq1T9fsWKs0FEcROmO6OOj6k/7k9pvgQi31P8yAVBeSEpqG7Qfr0WB3tBBLPzs9qaMWkEPpvXAfrShUkpe0Rr0hzERu0ZTtMEPpDghX7nMCOWDgdTKcQ7PnDPZI63HRFuCbP0j41z0vOdA+/KmtHxs/zNisnuvWgX3OaAMzsPMHOjCIiEH+rqG8ZUmQ3HW/8sjks4VaL2poDWVmFLmY0kY9uTEQVnGWjj/+cOZQ+q9skcNa4nn2la04WA9P0rStcoCi8dNvj1Lw0MS0iHu6M1s9aMsgK4iCVdeeiuaKoXTAAU6K5UCShPY/VOmZhebmOzofADOTp76R89jN1t+oIyeX4W5WFUmYOY6C8x/CMKz5vXu1r/FrfEolpXdL8f8LMEwbDKiXBwYxE/qUs6anLRz+zSbRROQo/XhvMac+9l/Jp6Oggz6vqOGCAjTTGkL1eML5cfGKMXFW9zuATgxyhJP+CKqyS1TiO5gbbCwOETQ97AMU+h6NbSE6KTIFX/QIZW1aMcuAf6TordPW8x/y88kf/eDwpd2lFIYYNurkpWomqt+XoUnksL8KNz7we/x6fg9ZTz/mIHlDdtG9S1fY/Ac6Vju6wIeQDOMONWbjRPi4BWLnMbIFAwhMnXyJVx+CyWy0vOPU4TIDatyhiFPC24A6sjrrpKAHOMhgEu9hcXU37NouVoNmiNxSeOG1Pg9HUw399dp+223N6b2WXEdX7oUVKZp8AH0v2tMjz3mLNHVvBTfq/2qrTPCq3cK7fsSubdhlgHuJveDrfHEOzAxcGh4pFEkfm2pvElr4JfU97VfK+AAw/Bh0iW4/AQkRMS0vqGofetLTUqETHGTFccfKQE1iBzI0m+KMReq1apR9Xc/97PfTOPsVGQpzRg6yV8D8kh6al8inxN6WwM8fTIc7iFalXzbXP4U1F702i2xUA==';
  const _INTEGRITY_HASH = 'af68819dcce3077b89f90240eb50c0703d99cb93d2b271b4f75c5ce064ab9f5f';
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
