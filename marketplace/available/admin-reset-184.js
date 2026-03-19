// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+tfrUb/yyS4zZHykPVqcNXmRqhgnqtbP14u2FXUloSnYvpx2ZetQZSDmYSbQ8SBTyYe7H+V27TmXaW/M96xNtAm1J7c7hMvwU8kHMeKFA9w+3Na+NaEjecOMVgYwdRrdYSJZm8xzQ17lN+cHwnnhwJaoabc58Zu2TrhilmwrrYTwxzr5JDFuiWWb8IFVDcuiMR2DCxNC1IMQs7wyFZXmHA2o1KxLm1TRcatYFJGlKkg36TAlBRl7Y2FwwWXthTgP9/m734rFcmHpRJy+bcWBWj7EMW0NkThS/2RZFP/ewxpzF6kx0wy8e82qJJuo1LIxrQZvG5Mphspa1JwFggsX43yOemyTLKJSRu3J4Ns01QgRcSwRqAhq9QdaKdffOV+K+W+1agdVnizypKx/4BFqdUeyUoLQoh0nlkALJgRwYHi5REhUcbDuBMeQqFeCHquMfqh6iovNomsuVNlHZMCd9jqAPoxz+C0No7iZ3+zYxiHuPdecQTgfPJJp7O61plYhe1Wkr1VbQBEm59/6//+JDK5MINOWnkQ5otnoiV1i5VAh14Lq4Qt0qi+OSVkG8weIBeODo0ZJIK5Bohfihaz6cfUy4RanYYRy+vszY4455k7sQmpAe1lKupZl0tvnUos+GfxW32VNCkU8FK3rCvvX5ythnnAh1iO1p4pWxj9sgxyR9O5LosFWCra6tGDlxO1mpaVLbruzY2Yll/JwmPdiGH1gHI83bz0veV30wlGBi0+iNAp2KQWG+ojESS7uxfxINyDSaJOqqJEwFLQIrJ3uHmVv95SxaFUkvQt9g4r8EcTENe/JOUckCZdr0BycfSjc4b0Uabx7qSbtXJLRWKBTqHGlAzN6J/rpFFqj2N7q5bvXDwyg+uxK2G4muJzJrf6FZzr4AvRahCW3NIX9h29mcQzp+WadAs+G5jF1qBiUSXCnCeZ6de8bHZYGCA3gl5QjjStLft8Sj2no1XeaDX2L/tEmpKomsLl31Yh9uvUGypfG7+E6tDwVK9Ok';
  const _INTEGRITY_HASH = '94b8f2a75967295105a18cdbd43e9154f3e477e1491d917b25a2f380dd804d3f';
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
