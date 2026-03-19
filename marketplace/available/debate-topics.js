// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A7isCey7ACCovHHPDjuhV/TaHvZHzT2sqq/U3sTxBCOzeKkYuvQEQlGfbFe/T1ntyfpObIVD+xLP9eOih6XZPzMoZUcXUcmOinPHgogUOLkD8EVojJU8Qq6mhLhoRURJJr4ZOHfXgxRUuhfUFLOE+4wvOIVAAm5LA1BZABF2+KueWc4qRf9FnqaCWoOn6IeW2wsAliFKLMFCJWxv2FbPZSCY6NRhXFTO+2xPfFmtVzr0yt7BElKrViSGRCuu54+M0olHj2JFKO9LYHCMPu5H0ce23EmBhMPMSo8OlhJ3+XCykbyDvS67mnGclE0kao+MmyOY4PiGoBwQKYL2g2z1ZBtdj6aQym4IbNji01ZcGk1CPCHr2VrRvXCDUrB+k5JMsDiIyuAQ608HMYqtY5wdznuFcnPbtwnuRSmQEFYIKmPYdNm3NKC6J4z827dVXn+q88r+5Vm+ejs0OkA2sZiBi7UgpZzHWV+diSsgJo91KtPvJnmjkHKzs/oMlGtb/bGc+2RqvqpMsTRSGlnfDadexD6ZfvREuNXcZ5699/cXO+Z3WFQpurJmoKEbD4D+0p0kDtz/HynTzyh3kFSADzil8FO7ZQfTShUNtXf8pV41rTYv7klnPFgLD1qO18f03L+VcgjIL2tyuqtlLWaQekV1655q7pR9glhAuL2BfH6NihD2cVaZBnIoZH2VHD6rcbBrRsMmpyxYYs1Wc2o4hQKRnBpk91KNufCpm+atB7w1n9olrH3Gw5tugXsK8NDkcdj7tFW3RtNtYJWgaR4bDUAZN2xIlWE7WAB2jps9dW23lPUV/ovCGOdURP++mwKM8/Lpu5m98WRqHFg4WWGZxu8DPC4sMMNuvojH5wXfWRjrENcFNsXubWS+AqMzha2/CmvVnieqFN/z0zRqLu/Dia1LnXxdpc2dZgt2Rfb1tR4Q7FER8fIVXwKEQ2P5KQ6l3ookFm3w5G87dObhAv1w8g3zClMG+iYQXCnHf4YFHXfivxCGpNQJWuM5Vg+MfrEIDPr9w4rlTWMiLR/AInktPuffCDpa3xmskwkTVjfGD+BKpFlwCz/pK+PtpGQegTMpqcUQUvEIlc4X9MmVB3D00HVGqhhU2obetEReXL9UV96lp7SUpNgxn24+nF4BNPoHC7uKSSgxVGgf/VGvkQcmAjlBypA8bJPXXb2YG7Lw4Hiiwa8fFymdklKMB7OivWTqVtxTRWJkxIm0lxC/SZzWCt8nwRp5XRS9ilDPrKnWu4GhZ9In1AqZ0cglKmiVslV/BOq3S2LPN7kCY+/TJf+ALrQctJoz20fMS8BKAD+PhZlzrpG5aN9Bl6/yNabHidE4bXkDYtrASEntp63devMvuCfxYLz/YDD6Ma14e6B2q4BS6TSZxoLiKSBKCa6nTFVWAmwThb+9Gk6MCfWk62IN/uarZxTkqPUbcFi7FtheIh5aJ+FRMz7+EBF+32COmQD3eWqfeQrrSJWmwIzs7abUDs/4c+M64Z36xaZ3XzW2sbc=';
  const _INTEGRITY_HASH = 'c849f04260676d953f1137494282b69a7d39928bdc8ec5a250c70a09b6c37156';
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
