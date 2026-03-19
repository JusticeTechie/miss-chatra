// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vD1y+/0tZgQiuLm2TRqd+CfeLn+pHLI+lKzc6nFMiH2wgx3Qm1BfQ5Ou/PpRuWa87OFplg4/W+wcrIExqnzRDjBInVR12ioVbjVBBoURQL125kFbJDVSVlyO2YWlShhO3J9YKXh1kxA95bJF5MRzmbRBtM7fpdk9z1MNMJtLIpjeqeaGF60zsrbVvMYqOYMTLqOHqJTZVbJFEhL7mN1XS5pCFLkgE6o6YmU4BC6pjcWNZBGjlrQGhs9D1o4i0OHclFEJn97aMWIplB2gx6OnsrEOwpDf70M1Amm+uIshS8qduchPpZ7j82KKtRzESai9SHI+UCbDZPWOGPmIDSMl0DEka+FuelYWFBWTdo2eNbN7epRWpI/JgxEEyQCuExPL8JGCJLZl3Anz+7tJ+R3tFY/mDnMO/tJpWgd9J+UVP1iFwJ0xyxa05LIsMPzlscsVYY6IJeTI3bwRlbauFhRH7OYDOMHHIw/R3pgxdUfl6fwkQ+NnWUJfszoVZMWv1foSgEHblZLNEKP2r8o7hzw0cWpnah+qVZ7kzmWBdwAqEqkGhn2lH+QAXbDKqnGpq7ViHb2crtMWFPyeb6cKh0H3iydH4LFMt1V5GUaDTbuwxkc+TZRev0oRY0BGeOkTuEpLy2KEyFizRhi4kFd6mrzCTL5qNQYLSZD4m1gAMs7a9ao3IpLCssjWXsfubpJsrIl6XUygZ/VrUSRM06bPxKja97YkkshEQsSjC/nohtnLeSzKOvP5rBuRzNXQnkfrt5HSnX4QZw/2qm8e7o1F6kke1Dp+Ho34nziLsEAstRg/P9V0Zie1eaKB1rVQej0q2Aphl3NUXJt5V0vPjSOY/p7FRQAYJdKYWGLGJyusj+iR/8EBksaT1wCccvy94MDF+YVW7IDOaVIEs0Jjji0/piAwekWYlJHabbupdr2pzchVp9utudmh7F7hSuQxZtDtrj3XHiM2fdABW7F7pEHZ4kxlpZgOhl6YvMxkcMwtfh8bRpqFXylYlIeNVLGwco7nENWGxRIZtdvk40IS1HQGO9dkgSXCCE2iTlV3lAMAROZsMaVg33mMArQO1FN5Ql89XfqM6Uh+4/9Zy9BtlKKAAodIqavYGoaD6zmFsTGKIKQgbpL8QinLQTTl7vY5b+YoYB0r++oT68AJ/3pvaQ+kuPOCV5b1K46UrEFVz0DBivedG7Sne3a03tvceeHWagY=';
  const _INTEGRITY_HASH = '00a7b5aa00f6ba6e08b158d1cb6f5220735b8be6b91ae5cf4b9f3e1c83a0e5db';
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
