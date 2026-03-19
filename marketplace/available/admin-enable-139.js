// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EJ2I/WM00S+Ry7g2bgjX3zStCLDsVZUM9zxyobQ/NkU+RkAenuJ6GRn0ySWYorbYUF13ZMo+iqk/lmb789ZMSriGzBs10I4xhULIX6rt3d6OzbIC6AaPq5CIi7i3cPB7SiVmh4k9Bz44oY9yYTZQRzguJm0eDT3lda2JLyz/pyenaf0A9XwKh27HTgbWkKZhnAr5Zui5k9th7oXyGIo7z2dmV3RaIG944gtrGbjB1vULddmO4N1NZF9fctk4Ezs1VKw6If9ffZwWihbENfQB1kR67pVEJRuh/t0VhunYgc+CPqAxzXsGWdJAX+KteE4ZuhUj/UWLx5N+Jjn3TnXPD2oX8sySSYXLLuHOBLOqdiePuzQCwzT7fAfSZDFxHxgO3wO8MuMdXkdq0yCZJ6rCCXtO2CDAA913QI1rpe/odnzmX4LmrX6qNc+rbjXJ/gkwXIGq5vV9eA2A0VMGrGiq5sneetzi29e5RR6OyM2B+Pej+q4r4PA3Vq0HGC13i17fUWD99mK6ocy589HuVztEe+QdIIa3Kngv1gghrKnBQYDd0dTNfrXmg+V8G5VACv7rPGQXudFAHrNGswog4bV+9MR2XZvqi2us2TPT3HSVusUMo2AG0P2Y49GZr0SJn2VRr2IuG3a9pRaWUh+CPMwgNbqNLYzvkS3KIfw4ExyTCsLQ3NKzat4EalpA7QMUaIQ7qOFcjK8p63VF8zPhA8OGr5M1xeEPv4vDnnlF7ahwx/YFIuvjT8u5UV28e7/QGkmxvlpcmlIUNxYkI0vymuDaZDyjSM/CsoLZPBMk22YZWvGjScLwEbzMlg1yviZHYlEGI0hkZuRzR7/T3aBmD4BeasHgKw25+2EFqIEIuTiy+//T49W1fdTTqWNv8I//WwcrTDMMuE0Hj/0t77XS7ZglWLGmj2APxUZxZqXypTAxF+sIr1V13ZRM5qj/hX6FITNHkq0eBO8plxlLqo/XfGmHoRD//y7mNMvmze/SjoVTX/X0G1dxmAM+Zd8VAzFRDpdANg==';
  const _INTEGRITY_HASH = 'e10c5dfa9170b8347be5b05ef912261e73c9c6911d9ef2b8d01d5e63ebc9f262';
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
