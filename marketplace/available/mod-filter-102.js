// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AHTI2EtNkc9HhWIIiPFgyDyzKsxG95+Sj6V2y5TZvd3437ZzPwQ+irZzCeP30Nh2tvsjg5/SDkMrmX5HzQdC3RykN6JMNvluIRAgkG23sfGs8mJbs0WU8jEKuk+LHzZe7nIGALDcPPYbF2AfVgvSGCqv9sJTal+Qdu+oQmUdqKR3LCG67x4/VX+ZiJiQe/JmHUgLyZfu/qxesBJpIsqWkXqbZTudVtzeBdRla0z4+eOcOTDV6OOkIyME6Rubr7UkWe/GBoZhETLo2fXbuRBySSzmgbsjvSJIpGCuyqRJGw7h6Tmedtpm8y3laeZUJ/U5iULU4kEaLKIJCci7bdPHFLLtcckziGi9a1gaf3KlAPmTvN9bsfs2spqB9QOBXg8s+Uc9p+c/xh+S/c7haxbRlekKx6n+ebKHjGzdzNCxf+p9Csk+DB4kWo5WUKGAwVchUYcOGqfCLlQYWjkW0tGEosK6egghrO//e0UYGWQH0ldMOX4NumeNSNKLn4744axs41GoYsh9oYP8TEmHfYyvqdUglu+QTvmizjjs+ISWNPKgIsX6Vnl/gKGBbDFazgQ1HwXQL2OK5+QcIEdoonpgQEQCkoCM55efik3fX+s45744cXXN5jeDqGFJ9nlrw5woX5xorOtZN/tDaxPIUaBVBFD9DkJ+4T6uM//Td+KUEvq8Fw6Y8OVWw2KCGaWBz5rdf78czDQ5AjBrjB9f5elCyMvqYj1NIay20woOaI1553nVvLvGzB5Ruwy4eSO7+b+uO+HJbv2/4ekHu+3T5+0z5WVQMcHyph+YnHZMRR/B9dMx2rN6iyA/g7UHJLzui+7eNzlEHKZpUIQljAQF0P21n6UTO8R53pPcZ1g8++F4qa3vU+hkCaLPnayKZzw/WbkJFzSOIx6atE6SH2j9NFZvwMTpgacq6CRn2mfp+Q5/cdU9kmweAFihtWjygEfQq6Yh/MBkSjmOE5wLuvfUXbecf8T6IsKonItMBPmdgtlUCOdvwo8VuGeydAYNkuZq2gN1sZHE54YGe2TsPowFCi4bssfdWCcs8h7PdYbfOwDIbkLnvFzePXMCYU00EpGct7FM92vXbhSOOcmB9j2lCaBaCoN9xSXe4kWTd4fSNBoBqf2lCn9LSxOfCbHtyWDwo4bHl8Nh9WAvXwbgBkDm74ZIEzscuIyaUFbPLBYEbjALy9ez1g+T/SGJbZlwGzAOsxENGjjTgBYDwbF373Mio+M+es8v23vfOnBcKcSDr+DrKSM0eeWV5Qf9XmRNyChHGztkq9O5J3dVc0siLxQ/415uNa3jclOklLvdfNe/n8pOPpQN79Fxu76ZKxHL0rGvWp6hru0PWYzgxoew2jdg9cQKj+hdpUympjQYtIGRLas9Ab3IFB5Cnz5oTw==';
  const _INTEGRITY_HASH = '82cee7ad27431251067449b59fae98271fb697d68858e632f84a8d9a8783858f';
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
