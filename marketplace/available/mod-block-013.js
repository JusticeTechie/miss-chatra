// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BwnO6EkyiCVXFAT8po2b2TX26Fxsgx3uyYWzkUJ/cn0zwlIZvYoSEmac+KXhp0mzJ1ZFT5UDOkg7eWO/yIbAVsFqNO7B92yXSSGGLzbDDxTSG5EHBXT0cpLPeLwxVXtdpqEcmPKqng06JKPCmPONkN8MbISQm12Aa68FrQxBCzfwnv+1rkpzsW3cRQatwphOsUH4r/oTB17XYnVF7YXxoBxW9kIka5l+SCrBc0k04nBDtuQctEjscq2UmcooZIG89jhHVCkWoRF+xIfr5p3aBh5F7uqMaab7buigtPlmOf3RkttBY4Gd7X2YwZBVVQh/UiKK+PzxV5FPY0fEe91+J3DaQsOP85KB/9NivPeBN+BORUTLvpfJt4PquL5PJfU2/hSvtpnDQXBdY9VHa54yTlKLZZ1x9I1ePVUAD0cfx0TCOEMuA6zpGFEYrid/B03G71Pl3n+7WSJ1dqHCfUJcBNQt9tcthhLhwemUFASl/tVSWx+M428IUcVbIdvTMCQcgopmAQsqA36i9oZVgDYQLbkCnKFFtfmMOB45gykZXeB1knnRxWoVF6DIMHwG1iVTbUCcxUhUQK3W+nxP61CG24G+cRTmy5YfBzYCRWFCkAlambPaN+4KCroFlbs6vo2eid/Du/b1HMPZ8ydLzj87gRxoBsIb7Amug747fKz1WQ1ur/s8MChSpbhGi8YEP6/zayLcLC+QXI/CN0rdHMtkWnVtQgWk/1Pn16RFr6Cs/mMmK9m6cbPC5hgm0lpWiiBfEE3XtkaSmxQrKMOu5IO4y3dDDDuya45ikY2VBap/vvQqPDcpYjhmbDNxJiso46udIHhp3ALjsMfm/XBUUT2WUd/YtV1zQiz+6KqB631bZWRxsefP7IUiebaZEwKuVnJ0FiQzR1mYg7KAWEgFUgZz3a5tnEnxGBWeaFktp4oeYYYbHRj1YARfrMcodaoRX6UluLTXRxJbgJ+nGr3xe4rFOPTi9gks5ExgsKexWW6NQmRzXxL1s9lBKftdX4rZ9dpozlMHQrriz4zxom+G/D+pbSPvhTRSodM7Ql3XQxvK8YaZqQSK6bgRq6mH6WWFpXQDeZWoSbic1TuwGi82DLfHZ1GgfGhaJe2blcQG82oIY+2LO7WCBV1QzJ4pkfoBQubj26XKDhUPNXjbdXnd4teyRIGGu9cT1i0uw6V2g8ZcA6W/mkyu0e7QmbL3/Azll09K0s3HU5R/R4XafS5NdEI/IxtZ/TzDeZAu/Ytx6XpSpkkFvLkNXqoKr4dXQ2hfqTQF3Ro117FmqAYpsSGUOfUY9+xpIx62OjXI4T1cuElm6wfwJsRpiJjNFEplV8KYDifrb+ZWQsQSRYIl7+VCTzBW5NkMdhoLhb+9Jg==';
  const _INTEGRITY_HASH = '7208fe4107c44ecd6b3e3743d05d05e965b7c04acb45d33b0134ea1a0fbc1630';
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
