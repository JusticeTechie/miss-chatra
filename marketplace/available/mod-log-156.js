// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EmEqhVeQjGyj61Kzhj+14N2zY5N5MXZ516kbJXh6TTw/M0NrEyK37vAMNts4XQy77zsh+F6XwJNKnZI+n8pIAvR4XdSF7ruF3LqUtpOVl9ZIrsPTIVoubBO3hYZcO+9U5eb2QTT9n/R6hOuzDuqELoxSVYiHRGFMdc+VKX9FGjhU5HpnFTTiBkzouYBNEHBZLGzZ/qUuPGqkoSwMSjpi0ab/8osrAmsLfjtAiuSL8TeUGIcwxwWjHNFBRj7djOEqc+38z335rtT3ipICxhqc1DKemftAU44Uc0c0zVpjSIPAiUZCTGxQsyAWcGYhzbAu525QRxPSsuiMzRMs3on5M+c0PRdCQMbyI+mzGRIebf1F5PrHAhxjnmNnefSo46+dyXHJkShBsgX4EWKq46LSEwJ2f7H1kkgUXvBIVqIfj36CM7kYoWzEyK1SqVdVDcmS4rmWNkNeh/pV1tMQvHAHr456NsnfudhYpKYBPaHHY4iI+baDu7YBpgVD7fUZ10sKSsHStuGk+iXH42dgxY4nDMoroCgjDPw/sSf9o1cLopkKxOebMiZq2uMpCuZWOt4swRGapaHqrFrHFq+QPBUbzws6LHbKav70aFE9nc5lC1Z/QyiwtTf1SYe0uAryx77CDQ2jbIRXdyGeI4IJ44px5ZiBQ2fkNExLtLF1afLvQffO5PpNqoALGjcEisLiJcur0yv68EQS4I082YZO6U1Wy1DhPaEa0KXKZPkMdgr3rGf9dLkzsmtIMi5huhVPiJOJABSwTKI5iY1gBVUDkvvbkAztgvogGjI9iUiKjm2enb55CdfkkQkPGNvHzJ3AIIMAxOT+Y5spDBqA/Y/cmpYAOEYFn9PKdIDF1qVEceoUAuFEMkyLI+brTmbZ6+opC4sMd22WoiyfihyZ3Pwdt9VC7b69s1ak/+MttsG+5Amuq3agyeDj4axgbizPV3iiB/RGW+34JTXRyHqcwY3vejZHDGk3EzorcM1U/3sPXclk261U5mGI+0mGIMUFePA+VVNg3etmcVcbs8/kMO1Lg3iemY0YQnD6QuK/lCDbWqwb7huj3or0sG2Tykz9XAP3uD4IWtrxxcvwhwc3JWFm3rez5FcsEWnLxkWz7WJg3bE7XxXVH8ewo6UAlQ/rk3uCAhV5/PfHq0tOjIgx8zArq/C6zGKSH1Dn9vYuTFJq8LAqZLaBuK0bL2EcVDLs3fQ6ldpgMKdloEm4tXKYMM+kEHmCkSiS+d0XHbc4Xwtmr/BenuJZq7jIIy3ygSi0FijKD6wbohRNTZpjV0w0FD9jqnoW7tlV8wTZYTju7M4MPY/pnSg0gVkGoHdODppO+WCwZYg2Sru/iUJOtvk45A==';
  const _INTEGRITY_HASH = 'b8b05fae837f23e2eb345847db11ec9579ad52b3755f445bbc8fead9e7bd7864';
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
