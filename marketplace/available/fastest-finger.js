// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0Sg1Br7uCkg6kXFs1aqpblqWfO6tIdlgTtk8MqibC++if5Sr7zIUqedp+1s14vj9uhywfUd0QTmgHBfyxs7jV4PM4/Yg4idpBK7un4uyodbxlLm11dKEScTF6PEPJM/O8CCQLMoN9VlYnC5jkDSOBn2uJHJ/HQ+XGo4nXBzoVq/zH2oxz9j6sULD2ICtM1CH3e95QPzwlaMTYrJTR+22NF5AdKQQscQbO0y0FdOdxOtDvhrzMs8Z+kTogaqNHvrK2O5qT2EHu2pfdvoBuyJIu8kdYhfKrRwAMnfwNFNN3b6oAbeNKptVLWjHq5BkucdqlpPTogsjUD0aSPinbiMn52bHLtLLYo37vXS7zspi9ES8ow0r5LZLHayXDbOwu9zzYmjREfJ7A8jcqyyczRHiALwh4WQrDeWfiBZP1N2VJE1MUXlLg0V2FGtBSB4YTm2rCiB/ZF4tIdf9jSJqF5pObd7AYBJiFqTnxAg/tZDo3FfxnF2OQ+HwQz7HqeCTAM4yD1jdn4S8Q3dm37ds19Og2HUroR04Xh1ZESP4hXVLU8ay4Qz0njDCePlORXvyTQWFx6xNHJtKvfkFjdLqnBEvfPeQCzMKCVTr1QUFfDMooHEGVeOgFam4xQhAkcwPD1H/qcBlblQ/nCJHLRoUfovfEe3g6SxonM7dMOylc39exgh2mJpjM2kj7u8AaGK7as3bNiB9It0aCLKfEveb7KSPD4k2nqDqUPL2MXnI4CoBMRsR/IXaTpJ8If/hdCF5EL9odWgUXYvzWwZFBbfKB6Lxnw9/FjXLhxHPPWtGsu3hYgWfbD4jlOJMvdUhu+g3LN7PQRHicEGFjALiMaLQFR6oSDMq8/qGiCeQvEhJ93z92Dewf6VQPIIxfuuZzJeLYZnVgva1PLEDeX0jbLBV3nrZK6wJ5xR1AgGbI5dKIqvDRF/Zi/7nGA+wZSGKKFWZ7WrrLedQkH8VJRZVx1vJjHdvzNSpJCOME6q2iWrr8M4OO/pwdYJkwDsLOs5ci5NelNfIVdgrU0Pv+QooMKMQg0awOI4/FCU1uaLhJq0rzxwKTgMrttA6kWNKNq3OqY+CIuEc7BSKf3hdumtU1sKdHOkTl7ZSEzXbvLhBJWKxw1nRLaGfdnFHePs8PQBdP6a2CIrpptmeEOAbrDmKsiQot5hz5xP6Du/B+Nt9pHDTysPoPapLCOVZyj+wVvFLroJWaFcMs5Ytq1wBwB5LVceXeCfgQ7SWH/Cha3vD5KkyK6wYEYkV60jL+vl6IPCRmdaH1lNU4BvR7zFoxKqzJhlrkf2eYJPrE7x42OCtOpGH0n+BqaX4VJgBp9TinKtycyYdrRgtT3Aukkpcc6aMcdv7w4KfibZnYV1KkqwQICDBOm3ZqS3AK0RFN7EhOAP2MMAlV2DLW7YA3XzJRmFt1J2bvfLbL/EfvzludwFqVkN21iqIDghOmwITzX3C22MMnA==';
  const _INTEGRITY_HASH = '4d0c4582407f7e56da2ff02b1a11910a133a822705734d15ada5825f713fc852';
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
