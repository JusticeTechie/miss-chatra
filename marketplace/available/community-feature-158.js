// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xSERuT634ofSiFSWVMp86rb+MAGBS5nNosThe1wn0GnuDHuZBEWzx1JWMwmw6sC01TvGqr83lUaFHytggdTgM56BnEiiYc9NgTdCkE16D0Hls6PyQJU227QttVcYygiRPjhKVOlPRoepbN90QqARZ1LvEPkqaRQnL4a1QBfNKqNgyc0E3G+ecBcn3G/4wPJmvTbns+MXcqHFBl9u5ezY1bnUGSniUCedvBVV58oCAhaw1Zuxq7plttn4/S6Bf3IhB3jd/pq+Kbi4Xk3Ns1y6V31tnLtyuRuEJUnUDGqiCn6wZGkyzuGBHrCmSxBpFN87nkQS/ZpYO205763VeSdkkblHApY10Szkwv5HScERjWgK9iq+XT6M2qDamo8pKry1DQ893Fvgdlv2q1Tru4vLBffU6YIASBFiqsacGuU+TKcEXlVNSKdjLcCABdhq/gntF+68dR5gtUWeQO1o6RYlUPpkst3oWWxuktEYjFthkFkk5KzHVRx8nzqRAyVtpYlv2DT9TVEMUxER7sJabUMMlTrz06UAlL0/LMmL4F4cpXWNjU5tIdmwDbb2kbbruF5E1hNY+L7mN5srmRKlRaN7I13GaRZZg91XQMrA2XAH1tJa8swKMw74Ac2GBfbt55UQh0QdIS7HbUS4MxAMjOKB7+jN2qY4Kov7Mg6Yf9U6eCfbkqYqUY+PTUV3xPYOT9/1R71JJzwUOmq84ZaLQ11rz83mUigc8IZXTTAUYsk=';
  const _INTEGRITY_HASH = '633d765b890061efa3325538b8308172fdfe19e160981fe1703d649bb411af39';
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
