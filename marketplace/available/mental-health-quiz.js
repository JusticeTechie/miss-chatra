// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HEFpN/0ZgH6xpTGVEWaTh1vf8ou1Y0PpoomL2rsDVH7bviWAcSk9kwBh6upGU8632S+bw5blWRobt2SFyRBlVHWBuM6lfpIR2bcape5lyEgbFhZG0cSclgKzKfdJYWfFu4HfRkhJV+VSxu89/cbAb+64NFO+ERFeflPVxUMA8aTZovNQ0FWA4ardTRirbBvk/Ujj4+lL3JutJz5MeTzjaZna8M3FIGTO53wmerea909NeJF6dKzk0RT/zvTyHG8Gby/dutLLytbQFLgzgurqrJA5YlSXMRhbp6wS/grqdypPNm8T/YiGdSYXm04/cYChmJLMzJjcvbMqwHcmERzz79FMaakXo31sgk5H0LS2c0CcPSEjsUboLXzwspIcHQEYyCrKplhiT4HUZTnMCFoZ33LXlGXs48TcRqgFTKR2MBGXbZ3a1EurQyl9yT9RxAqVFZd5sy6pKStobeE4S1zuR7C7JJ/mcY5cKpVZCdhGZns/8MRQtH8/9O6M/4CcHbj3MFtVi/6v6U+MFSy+hgSJCG3bWUMQha5EwBPSpTnI3GkFG29SNKvO0h8hR/rUu0cmLAb+R63/XSZdoLC0pYelSuaWPbU/Tm59VkpidajAxQsRnyDhvjaIac0VE9Yk0cYpm890VaFzkSPZQ8Y7eOmnBAbo4KIiQnpDSn1Ej++M0tQQ+y18xzF3snxQFt+0ui+54QYQFfNCxzQMds2YUTx++4BZXXYVbbFgdazcOZKRBc9i4p2W6sqCa9t4VaBWp2BCLZRL+Rg5jc1++xA3hfMj/Eq16Yq/LGZ77+tKdszogf5tBnF0bkgUG/df83TJrS1OSsZPAMDzo+aIMFtH4D8ONNwtUX1c4uyMNBxLFnlF05VzgPWp2fAnscgjfjHZgRco0OQA1S+z3c0AdCAG/8mqPih+oPeXlV80nhWPxYCyYD3zMFfpH5SfcbeqZyX5lWBBSY8ioW7pZ5+ov/KjV9lc+hhv5bQFLMcjmNGoh9+bWy2OtoB2PXtiKSNR2KFN0WFKDc5hmd3coTE9H6ROFIjCIrLJwqZ4VfCNV0zo7y4yR6Z2HJIXc+gy60eZJXUr4HgAzIgCFU/sMvzX5jtM5hbRlsgGDC8TQnFXOF0c6mVaiTE8cy5mcMA4OLu3jGPVzs/nYFNucCEue19cawFUJBMewzPf1vVe0vFYUou7U6cJjqy23+GxYv+hGLSVEUEznLdch7i4bCvvCjXRgKAzZuNP24jTVfCF4JIYZdHdRAKrLidEbQi7HCJ23HjznHRCkAJO70EmXvP9S+6sd8NpjzqJ8NJHPi/Ul1OidIKH7W4jeFiCkb+fz/ps8DWCj51HCmpdW7AJABBaF99pT9q63mjMBWfS8WUiRbo=';
  const _INTEGRITY_HASH = '9289dad2a2aabf62d5e8ca8fe96521d87bb72f5d1b4aa00b14ee7d82be80d4d8';
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
