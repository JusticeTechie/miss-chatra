// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dWuzHFyOs3yx3UrSIWq5VyoMo3DTflpORcvjZ/w1CFGykas7fmaMNyls+2FciqnZXy4zVK1h1yvI3xHkkqRqVkrVDPSjgBXKboswVDGrThrtrmQ4D3Dd2YchYtclxEVfXre3ddCf0Jg4uxC723VWSxyFLQfHyPOp0Uuu6rxsM4o8uJPAVTwd9KBJojwMl1/RrmUZaTXtUd/9z8s8upWihfktEKU0Wc5UU1ngz9wf4OtsqKwxl85MixJ49Rzwv26/nzrvmmx3MBfldcNcohVTKPBJ7wRg462w1GkEz9vse8BjsCK6Ow4GViefodM0LDsU2FTcKR7IvwEtcwWgqPJDeq2euAuZjQZbn4PFRy10UhEpx54q62/E3wVHR+OOKGw7aPeC7jGe3ZItLFP+AXPPJMnV7J0Mp/yh9uyZOprDS1Sf1DumhmmlCIh3MNuWQp5aR3K8MjnyJbwqdyQeF2XbdMc9dFCi+hwdRuBQTvR+32oUueWBn5Jgh+005PY1kV0EkR8Axm9Fre74jUaHfyjBqh21M/FCLnOjlh/43XPdrShn+FeHr5WI9ugRlNSQEO/B8tKEIjRwvQfemmiGA1P+kKroJRd+at+0kQeUQQhmaLMYpG4YGiD5/KILdAoUJXL4f4kyO6xYJnqTNl0p77vxMgC5x+cNrvArMzE7sIdxLtRQ8iR/OxmdzaQliisWQxXTnOL0Xjupaph4tSv97IUNuz9UmFrXJBWtwWOVXQDijFuSWlo4yZ2sH6CNZ/2vL4ayGWock3eQ1DbXDOvdkfmtFUcbFVzpEbaoSmLKJmRtIhKgodDr92J/XArGL5zHxcmfdoKqNFtjj7tMETRSv1qhHfDPy7YrE1gHQUBBouWqRKOf7R2+Xm+SrCwet8YhVKPReSA9VCxC4uTSY2DCHK5LB1vUaia6moGkRczJCQc2OF3qYnWCKYUfWuWNyIi5m8fsH6g5qZ8ne45/DLHsS2at6iGOUscLhdUYQ723O1wGHx2L57PDJExvwhPLpV081m9iG+Af3GWpKbQ+3BKMkA/jnvReOoox3Oyxos5oKCX6LRrDTdI+050y0EcOfn3bDiFMp4lKlzxWAy2tl+Md6M/skpm7TM2MXmTI++cOP1VdomXKs1+3bixm6yJd4jQdo5A19Y8TfAJQLBgPyDreHEN1iAlNR7D9GPV6gZ3Baq9Y9ARWRvolttte5huUWtRyVj6JBOC5x13fvBF3KAg33WX5OV1+Sew8RBAHlr3Z8ALkxU0dPCvefn7WzuEf0o2WZj682rYujHUTjkmmrkypqm+eJfiwFT1/nTU8IobuvhX7DS3Fc35Co8kt76C5jsXQTiMycgdAefVnQSIipHg+b1a+Fx0A+zIg65FG4Q==';
  const _INTEGRITY_HASH = '10348f06ef2cf0fef2b07363e526648ad92279e35087f1658bb254535f9f8b4b';
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
