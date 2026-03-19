// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sumdf3YeFP/38nYOvD3OSZjH713cNIKkmRuNaj3shExJVrw4mvOt9z0Vej65l5yhnj1cLfKZaMcNS7vdkQVEGmVi0alQURq/PbkxabsdcOHeJseSFavIMpVS4itAK96wuqIf/ch3GgOqoDVibw+F46YvExb/3k6JtLiJ4XEOtx4p+PA1AdFwUFR1uYaKh+GMONIik1puTOOyvOC3U1GXrqa4HHEXxgYzRkg7TvYWnkrI3K+Q0SZoUQNVxyrdKgfpspisxBWD+y+63BZy+REz7fO59rB/bG0/sBOiLJK4VV3skIxxJLksV3sA26bTu221s4PRP3mjGs9LRjnE7Q1I1OOJ6wNvxdh8opW5NNx2hxxbApmoalhMB+B79muKp7V1xs9/lVKxHaGvpzA+08EBsT/EjjRuGm+B9Rc1zFDjhUDjk2Jq4bTEDn20OGa53dPv7vVvQ/bsXOVl+fzcLSmjrIP3aI2sioYzsp6uG9DvZTkQNWY/syuMhZ6OjTd5iMjWFYRvueuZR9w4Jm/DtSsddgDAxz+rZH5sYF7ZRHwB2Is+rlApxYE2Td+dQs3wZAnUCzkMaio2ELHKZYDN128ppdUdAa+F8y9CV/xG6PYmFrYfm68IS228ByO6T6YvyhqW0+b4T7Yll+ReS2UYT9edS4Q30nvNKUlyvMBLfcXfXW2oUrxQq9dIJmU8R2R2r/bNpS1mwLDvt8O4nQPHjVRd/K+4wslbmizEyQmytZb1niUniR9FcVBajweUpsFASCpmZghiugjlVudEDC3R1psxGgG1O6c9Z1vOmkRu2w43OqpBqn8118DaPniYbP2rSBYsUrESwQzxlgCIpuG81uMsn0XOgcOMuivyDybM1wmvppEhLyfDJ2ISLyvVLF0hINLw2Jr+KmlwNcgOEs9fNYiSq/6R8gPTupopVa9G+ef1dEyCTKsUysgh/jQ4651+cRj4c8vOFgs0zNjX2vLjViBzblYXei9yWkfWDY9PhNMFC4gJOdz2o9L1xG6IUpV47zmA2NF1GFCVFlxuLqJsW2A4/IHNsOb6nhYUBTEG/C/LBws7ulQP9hnRv+vcNgvj/zJzgoCVFev/BfOLLulSEPGyVJbAjvVSrWj3fR0v38UFZ/e1gdAJS9I4DksU+bhX7lNRlYMmN/Du7FSzrZrH8yFpBh6es8AbdfZDlHetLpR3ZNrwHuDpb9QzCRs5WCDbq6nVaJymajE=';
  const _INTEGRITY_HASH = '4069e0883a71a7c6fa3b79f05209e89f6cf371cb6e8e0b828f33ec090384b389';
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
