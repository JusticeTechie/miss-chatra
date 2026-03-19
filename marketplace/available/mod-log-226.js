// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'if7VPiONeGFNWcAft/47n+PptFRGAGO5BqfvypGC/a4WiHrHy6eHKTJBsQRfCcLjzh3Miy+Gx4Xjv8SIgPDqfX81u8tILPj0+g0HxjRRxfPSMasziNXI82+uXeSGMt0FdYq298o7jUB7HOjvL3TXlVgVEQiEU9Lh92Y595eOkTE0UA90qa4e2KBgNkyu+kCZyB7yYDtV+JcTxB2KTfNTZJUCoHKKQi9tX3p9bDJPmWLer6LKXqGKTi/BNeCBhOAqjOreCU6JSg+jDM1kMM4sCYN7m7i+9qLd/NGS+dgzo0xiWpoJ8X7vwb8GJ6s1dXhKB6rvF0OSLkp5m7gO67e7V5+eciMyqDZ/ym3KU1G8JZTvINOfaNPbMewuxc/G4+TyvzKfiLEtVHKPYjtEOTt2gsKnM4ulyWEZnA114BaFnXZ4/mytAnBBsFQAJ3e3lqKpOu5M0h420zgzsfXp0XN4Yjp3MU7fgylujLFdjcHsdaXtut0J5T4RSOit3f355ayf7qmzsZjCNt94PW5mg4DVBrXah/kcgYW1j38aJkWWzE+MSoV9vvuHXDoPgaRxeR346G+ghsBpauQuHlQTkLtLfSDi8UFIjnAcqbv1HmCZpFqmHLh+kEAA6nakS1p1FnjwDw31SRoMIwR0oJEry/X+Gv79znS0HibBQkAMLzM7n+B4L6GDlbKeahOpqrPMGGWZeapKgKfR4BpQ6+RyLLSaOkpcYrjQf81B+pgecyXdd9yntzdFl9GLMh9CyS23z6koUh2zDvRGtEeEJJIDIFmm+X68bDCMcWNKdCcQBcoGrCTEjIabRcHrLb4Sbgj7bhUgmdE4MXj/jY6XehR/y8FFhtZsQ7jD+RaB6l1oI+w8XS1q86PyFAd0RodU39tgEfS+Kd5wYz1b2fqSn5pcV3WKg2AiZijoaCAY8kRFAdzvpw+V568FPecrumX5hu9M+ijdO0iTxO+vLJ/eTW3mqiOtaIwlZoygD6rYzUj3kgduOfpRcfF3GXNiYnqwmBRZh3LHS7n/arrnj09J3jlxcX1m2C/UJUgjnBdlWwOKVe9KlySBDnIKLIpLahpeJl2XRzkiGt93bb0IJsPdDrsywsrzhcPvmO5lLZhHUr4bT/6P1xsEc2DgheSc9J0GrDSqlGksiUgTm5a5RiP+FOIbu1iXhEj/hEc4bD7j6xhWB6brmmZBLG8LNSlWdJb+5QHW2++MaHNkwMjxMlNg/RZeqCOb2Nqn4GX3P+Qds+c3QzOtYUfMSa16yOvRYcmYjBcxSX1kcnGVwpDFq7xeUKgFLlhspRX1l72+iRIYsfIduygaApxwYoQawG1tWNsco7nX4vKCf3aXQbRUo3vJXg==';
  const _INTEGRITY_HASH = '2d18db447665fdd6c07df7bc51638165845b21267abd14f975d1b75778e52630';
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
