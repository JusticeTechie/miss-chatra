// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K7v3mBSuBcSQhTx2ENG7yMCZ0qg5w0um2l9hUVcdXp8ZRypBglRv1VZpbtWiZwYdaJl2NA5tzpd3jzn5e4px3/Qccvkm1Pw54bvacfrnPTJlxIwwlHO8MzRRbaKcfkKNFy5KSqnSXG9MA5nor5UHaz8KQJ6hKzRM/ydkkTCkAvmlkHf261wi3eWjitFftvUbgqSK0KjOX8LMvJpoDX56b/5HmdjeEZs71ofDZSyh70znlqZd8p1TduOYZV8gbEaldYmNpJyxSFQZU0HgZsmRjd2A8GVrC9pGMbhuS2E8IqIv7B4peDD1fneNaTE7AGF2VBPjHnkOLrqCB+kidcBnvYPy33MCHcOBniR+SbHDBJuFbIxQVc/7h4Oz2caN6K9u8DJzuUBr/DY777bjNrn3xGi7HFWjtDl76ANSC/+fRsIz73vB3EirV+tAaFaQ6xuBQ2VUrkvrPLTEF7yYsp4C9h4uenyGl1VkenJ+abgMwjJFliER22GKGCi7LisxnXV+jYYouJ5rr4fEjAr9d559YS8QYQ6fi6XLv6QSFnPUQiyYpRHImOSnKMxiuEVv4NhURqjF93dLPCiztTnX5y1dbBLJH2fmFFiODbRfkzpZ3Bj+8QwfQXi6LwSThRm6LroUYoeeNJyb2S7LtOJk3qLO3VeRtVQu1u1o2MXTw1Uv3Z4ujUXqJuCt1PKO14wlUzx2BbnhubcM9u1pb3NdyxBlklTvQKgHeyFCJEPRfbOsdDBkcukbdRbbOSFnE7AVdM/G9jTUWQAEOX7u6EDvF3slb0wGtw641pFfMqCu8sFlbQDZtquz+Xz15qApo9xCVDUeDbgQR0dxoLJehdlTVaNQEN6Pzi4ffCa0BRXFsrY3pbGshi1C7mqsLRc0geNz//J4/e3foiT+iGB7hEhZPRrz7DPKxyA12bzLelq8AwZjRWtVJkO2w5yNQ0yERZk02rn8c7FlklAPv7j9fZEK1UamqPm+0MdTJwh+G/MpEApqL269QJXndFX2aFiDcvaDCYGjw47ifyx7stPCtb43VzjqCnqT7bbJ1leOpLi4t2KSRpL/jRfU6dd+RD5z9WMmpyx4gcRHtSAxWN5hUGUpsnrGXf0ixfSrf6VHz+H8ndtP27MxawPIoDwJKG/KRRTOj1jUGvqj28z2xDegE3VrRnpxHKr6w9eVB2dyi0Ns2WKDeeTbKK4HEJzt7CgmKpmzVqEySg==';
  const _INTEGRITY_HASH = 'e0873de233100059065657573da77cad709402609f9953662eef027ff66831f0';
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
