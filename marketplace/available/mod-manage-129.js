// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oIjMfXgo+Lb0T7sh+w5vRbV4FOR5YdbUfpeZW357AY8UcqB1zcPT0KJ9rvgqRV/DvuBnXU8neUvtEDoKMlSgd7NLf6DPxbmRpv1jEO8SxqHNZFu8EJYLI3INqM2ULqrIoC8yDlZj82pa1ORHw9eYYG5OwkQN6jXDFtxXyr/ZchTfQYsgPuCVZXfTW8LeuEYWRkB5jR69PaafL1M7qHxpqJ4WsjzENJ6z6HkjcEZRnBxzwegZkQQwal24GVOD/T0AYWWPb9HsGpW4Aw6ruzIFAsbyx42Y0mQAd5kuoMDTy7hOKh7o2t5vWw7t1m7ZynmRl9rklweReiGS0ukz6Gx0TADE8uGMBRBFaRhQrMI2QLlbdmOgplwsGEeqV2h+sedQcoN2qwZswNp9+1A/Zfp7iit1WYvhslirjm1f3NP02e7RRyKpYK89GcEscXRHMvnRgQsD9Ty4KR8bC2TMaOszlvG8MxgeKq19M4+tv+xtw4dWwvFRTxD3LdDgLgwUExAaKqxqWpcbQIZlkBstJNEcVUE67rr4wqhhIVIztp4HvkR0EhcsKDSH2A29kZlLh6wSlySqeqBhX1Kbz5Kpm1YzCHdPwLgdG/UTb0w8aDFiSwamrJnuxpmVmFr+6m0pBrWwMyw8QzCDUNqr0nL+iH/7mNUGOX1EIrqkp8GusvVtMIJD0d5V5uLFIyPkB6mgJAJlYHwVfhSxFRu7VcTxZBVwWdjgDH521jSCt+k1lAJQf7TO7p7QNhn6zHhnj9BUS7FRxbtFL7xiM3y+l5Kz5b/qdwJnEyKiNAZ9roiAtIk6kYNzAVZmU61YcIdpexbBWhelNJofqsPLp6omXr60CeoaxlEnJCfSzM8s0CKijKMpp+L1RseukRV6jr8USD7us4AcU+V7BCHzBkW7j2cyF8DF775BHpVeS9kz4ARiZ9iM4aESbeLIZIdLS5SGc2EyuEZM1W8LVaSe4VHlW04sgPg6UIRtKha6Gd2BEVxkdoLW9ns7cGSaCLFVMEW5vZwCpplc49IU7iUUqzE+ytShGBXOohNTgY/x4t/ofw/TZpsO+y/bGieYQ9thyyQDgOQcm4V4n6WqhFEoq1f1G1ui6sq4fnWtAmVWdSZonuNnE9a/yPOZT64VLZRmJcE/WvTP2fdr+b0ebJmM1sHy2zs9YyrujSz2M/RppBm+6KFzcVedtUtapUUO6+A8xnDY1FsJnfSE1yfBC+3F7zBIKMEIhhQ7gFfMUXjtmRnbY1UO30XSeCqOzDOs3M9RATJvomuiIjLGwlm78NH17bQZN6lG8cYp5xycsztFYNcyzALE1dP/lEuNe+Sl//QBhzCItWy+77DclJi95dC/w+nF9OSNT9d+5GhhmnTcIomS05vRNxeEK9NiaXLWmp0Ruw==';
  const _INTEGRITY_HASH = '48969bd246f5dcf50a86ab22bbef8ad2f871039ccaa1b9b75af97fad0827d19a';
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
