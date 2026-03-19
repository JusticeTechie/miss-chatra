// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ix5DFIfZFqcofS7IzLt8Jpb+gwHRcUqsuCDP+jutJbE7Ecu6UL4CdnRrzQsWs8unN5iwunxGVGrX80FRr23chwApZ9ExEZi8PtIwOJ86iDGXa8RyXgjPwpd2eQrSXh/+4ibqhvtNbXq49FcXduEnaTNsOPvF8nFjAEYBYy0x6pX6+49RvGEG8J/lW937JBzUsVxOTLR5sCRTkF4elh89LZS+O4MlK/HNuyCkjygzjQWqAsCyWCpKlHT6wntY11smE/fSNwF7GrmMCRLntaFDEcCSzDqXIvfa3vfUY210j41kjLGrLnXOIsg4QNWY8s6x9v8mr6hy/xXe+AqX6dxMV1sOoJTZwoAYXuYAmeMtyYZOBuQKnq7NOlixnm8ZjD0Z+hzYxZ1OpUqEE1aISA1G6bP130fbDYJyYSCtM1135DaaTK/rgghIs1TFUdgUdst3IQ5kpXdJ04fnf9OMeLtv7b/IXiI3ueAq0M3B7uTNMJ0x6zAJrHXEkjncccC3h6+oQEiu/BtKSBioqZ2EM7pVXm17GKXqOWrmNX/LE19+LS1zywUAnloNimbJIgRwqLdTDcWXkSQkTLXGGt3lDVOogaGnreD/6JkUsqo6MtZs1g2MUh+HMgCPdUEt3biX3wxC+CEpT+c7MqmmvpEKcekXN/nCgiA4R03MY3pLGUzrCdZj6MGFhFGKp8ZS3w4l0ng1MJNNhd0sKbMSkw==';
  const _INTEGRITY_HASH = 'ed11fde16e783793ffc37a4caec118d279e23da0c0fdc5e375e4be6884e552e1';
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
