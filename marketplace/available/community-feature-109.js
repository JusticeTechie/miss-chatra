// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LRQnVA0fh5MnxP+BlvTphVdVTWf/E4g1AMbCPo6SlpnIMQIsyAXbmpYSdzA3rIi/Y/CMEGa3lhwdJQ92CLBVBdTo0mjTuxfmM2gvvdBTTTllrC1nLlZkRyze8ZLims/Ez0Yf7usf8tRIBsIufQ6YtI36xcAo52X1ytxqL5352VBxSWM/ooeJHuB1fHOAKzyGNosWBAKoFEqNccPJ0u+oyzGEiG6+dbmR87FRDhNHl/4H4KGHmUCTQNUr8+CbfNLvJrX6bSv7oj2UzeDN5hTuesyN8EZlppOB/G7Y9YcHI59N++WUgFOI9QOqLM7iqFTRNa2gJ7+kN7gEWkbsgboWCGdEZTW7iOkLtRWw8gbMV1S7wMnpVny1ctd6gUiwFnylyskYoE7cdWxT1dYAlxZqV2JLDaceMoMUBwx/B3+tudqSSV3k3Gm49zW07aU4h668uVxYct2I/vIBpdiUEPzSNqrVGBPjSmF5jtAusx7ULaPX5iDxX/5L3u5h3HqLYcLk6fiZnHGd5lN7CmWFYsZrCaDAKXiv+9VTEI5ubLUsU0VxbFssMAbdMaD75/6yEWzJBYDq7GOknNgRAmiomrPVS98SD8GHsyvZb+Xawflm7T138SGTG4EwulQ6XvuYSO+wXFGh5xv8RDAJ38HeHSmRmMsTfuN5K7GNewfBACcLsuHBziwlKexat6ANO6P/5A5wAt1jc2WFBqvRxZQxEMfQv25t5GJglNGkOg+vnogB7Z+1M2iHCzQ=';
  const _INTEGRITY_HASH = '6b229c305f5e3f0ce9d4bca52bd94c4df2406bedf71f7e71bc6b8bac4e6c9876';
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
