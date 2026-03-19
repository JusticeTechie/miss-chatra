// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'arWexO2Pt6gA2GI0cdSuCWqgatYtnx0HNfsb/5rNq19E4AF4vOkxuEJBpwvUwvTa7kwYuuTIGGRP+BKZ0443pdzBQMtL4q2PsDNKZKVwxAz2npuZ/ajXt+jAPRKRGxThlNhloxDBczlljM8Lm2eWzfG0r9900zDI5eKpHi2BCAqwY+nYXHUAPP8RvDxSPWELReD6YJJY3+yISbucTDpJU87kskcJ+Q8UsJvGSrkBpPiRCy5JWYtoXvAKtZUGC6YX4yI7ESRJ/bw790YhATg1Uc77sgbQnKoh85FTbcd4BiYIctapEujqEPNb/MWAtvh0AYJt34m9FewmrTZySr2UKXuw2ZGCx83KhCs7MKYJnCqhIsMitvZ4iGXBVA13jPmDZcgtmkcqKnsO5mpPvEJknuHNFN82+KmBBTHfIoY1eqNOxpFhsLLG1W+oz0noYUVmUuB6o8JqwSom9QNJH4tp5rj6fWS9MSRsRfAWIMZVQ76V4f3LF+JUIKKIHDyxgoScNDXYT2tpdYJk3MA/dhiP1ZqvfOJIhppmVyZAAwwe6djGNaXEzMwMHfeUAKPsGOrfh4TeS8DWTTDJTp60Pf56nlmOkJmJT0ECh+evZAb5Q3e2pFIbBgga3GyMW0XSKL+MoppXlFtJRiXRqsQ1gP9gB1/wgUSc3/+YNa+QtiiTqta+YCTjWjV87B2zXxtLkMxwkU0d1t6Q4TplDK9ew/2kL7NgQk0xJNbymYSRPilW7NfOcW2A4eWbrqmdDgigpuBdBURgBxBjqQ/Ax4cBcncdy54eHKv3vBWtRE4mYMRMoFoCjd8mLvoJvKBaNZko5HePqhtkU3QvqGyIlc44tW/lkej+JV1mnAEQWrOlbap3l/JAvERelL6GfomvJI92LH0MPHhsodxy7N+WRw2b8fusVWb82tqlMEXL/F1HhSNFVwVE2CZVOpPqaVcILMUqhT891tvSXXF3lsVpTFjfDvydQCaPy2DkOls+ezdvPx2fUXUtsafI3EISPf5ovU08Mon30Bg4oXpgE/MdI8XONAEF4M07SqP8xpB0mf7AKFfbiCO32R7r4bveN8M/1b/WMWliPCpGNf2MpMIJwIZ6pvAMbwTg++CwMkOiZfMlWOxCLMruSCVGaLBSEFKOjpydTymjCd51MHSFuTCblzab6+5dHca6s+XNXar5wPsf8ZX+UNkmqJiglI4x5daKkEUr8WU2ySUsHcdQ0joW2G4GtZYDvpSLBhXSFvF3NrLJPPufbxW6KJwYzsO2rV4DBKfTnclIFpYgRXoAmF9M/BznbLER672rr4+oxMfpvI60a+Z3QxDYV9+MCsdv3H4mPP05TZM3c3u3fuTZnZCpH10eaS6z5xBLgH5kajUkhQ==';
  const _INTEGRITY_HASH = '01a6e2a7726e1f43528df8f730338941792b03b6753cf9078e080ccdd70e06ed';
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
