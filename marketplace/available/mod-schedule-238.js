// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '779YXpFjMuU2eDwG1b595bVdg3FTZ0C0zwX8hLB+7f9tgKG8SKZKWoduUmidTelI8tlIAE4V5CUhEXhBASh8PvJdj/3r8bkzk+lLD2QblbQE/mbuwIAgb97JH0SMc6c31LO4ekIGsSVXGR8hDcY7Ht4Ad02mjwUFk1PNkv87UwgMq0Mfp1RqlBHslos5cF1AhSUATyYMMUO2Tha0op45KDbdb0BvN5KMb550V4FmqzTca2dvzTe+7zf8eu/auLHxuzkukhjmcvXlpmDjNw5ZRObSifIUttqAeUtsvwuBI3EEVkBK8aWjW2Xs4JJKxQvlM0K0PgVgSqpsFZ1+qs8yRdXIWY2+On9OyyDQF9M7i4JBIQuj3+I9laz6P2gjuLRstolVnYfQyoNH+seVQFqReIPcgufsxAVRHAn+xlzv34nEpXpYyNnIR2/CJanWngLtR3uBzyT0qVrGqDpX9UftGpvpHmNPOgrOe85cZO9RStyAPkwiJJu5fKxJ9seAH32szhBP30ttXI/iRjT7PleMcSqvYz29J4BNcBr037UHxXw6u+yPdQ/zFDc4FAeRuAIfSDaW3jLMyFpxJsDLf5COHNG6KDmGUHqRWXMwRA0PSkogy9iHGk2Joeh+vx4IAm8x9r30rSoBl8WD0IBcgWhzABNrtOUE+p1vnmnXN+RdjroetHfCdona1eDVKA1XFitpQhD+v0Ix46L13l/iRK8cB5p7e3synHxl5vF7gjHHm/ReUiXwUMJWKCMLE9ABPDHCP8394cTP+fjD+AebJkKS1MJRAfDBQqVS2ZEtfWP3e5MHL7gFw1ZFLCNNUWPtA4ly2gDexcYoE+5nr5SZUc4Hylye5eZpYb2OQzC/6ecL6LIKTvugBznQV4oZ2xppj+eXeUo+Z+hiKSK0W/mcBayzPAvqExqQdeQqfl7yjoqZ0YS4zW4rWtbcWgWUfEaW+5wucFhopreym1SZwC2LyR24uP3HL92j8bbz8m3uODgz3bCc4lILjSdXpM9mMeUWqVu3ik77A2KQcjr+mTJxjkegq6ky0e05q5hwopy376FOZM26zyUmMgfpzaggFC4lYpagBd2Mzlu9q2dLdJrSUicFO7CvGDwqSeoAf9Et9JbwLxp64YgD8UkRz4aar1BG6Z8sJsqgj/M2Byh6SGj5cxVNsA+6w5XRjdNXlbtGvk6hx7n5wksLK0ss/Aw9NdqnMSYkUMcp/idxi57LDcVlQkd/dB6l4Sdq/56+YOaODOYPAuArfqIKGuGAa+Z+ism0Ar3pA/irygpIL4o3FnjtGiCHvGN/JDiZH3I/Od2KwXPzyrxdTbN5yRvOyq4TUlM63IDJXa+/eZXUENFOp3LlvuYhCgUU8dzDii+jSuTrRtU6fhOnVZEAfR5CdkBm/+2kXtq5mehExirm22MxLXxB';
  const _INTEGRITY_HASH = '12f2685e4c2bed24540b683acbd56755d5ff3a3b478df6c5221d1cd29424e942';
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
