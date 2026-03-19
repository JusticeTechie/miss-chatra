// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jHsovFK17GxwBRdMp5mR4sP78Ka9kXPgZAQvjI5//ae0AjTT3ok880K2upYV/1GlA1L9lPC/pRP3cB/MQy2dYWnFr7sKZry7LZBUj/rbFBF8sVW9xLtUlG380N84qDlsPDdIlgYKVVxr6YDt0MpS0c+sZMu2ey8q/jSCKJfpIMVTG7xnf3L8ZZCMjd7AXYioSBn73/Wisg6FFaOASY8/0LeWCf0MWrmxV7C0cRCUC9RbxHn19fArXS9oT1dg0sGqfrkBViPxEbyC2qKlONyYfzho25pcQZzVDq7v1xXqSj3r0EmXqgCx8DYLJUr0uwwVGJgqJW9rxmyU3QJLC88x/BfGvWvI6a9+llnGWf1dNsDmld0IeZoAuDUg/yPselkyT1PxRgGLgD0I4IsJnBLTjhx5hq6nrvJ+LkjAvgZeYYR67+i826PIll5VwYLTa6KKvb2CYz34CNQRas1T4st2ICWQNOzrV5EMNN+9KAj1loV6J0Myk14f37R1d8nfza0CRR/XmevyWQMgEMJ8fCFQnorGql7t1Hz2+vTFMUbEvyxvaFUHKbQZKivU2byYD205AYO3lLf4os0cLPNRIenVkYNhpXZI4ciF7VIXPWhiu/8wJE1LExRV0sLh6NitrtZ9o/W+jeGIJJw5gIvzob4lQMfFeZmhhLwWjuFMdzjnnT9kD0JCI10NAMFUMFNoIcmvauqkIQbcr8uuwgtgDlSwhJfIvLv5WWGaRtRD3Du7BCyOoJ9qkXmHiGlJKs2ja/Rj24Mm67D+JI7Ett93wXsMO3KDzijPkK3YqWW1mwZ++nsdOvvAt+3BxiVpm/C+pt9Z9Dte1BE7kA3u1gwjTf/Zuv2QI8bXjuZ/sxrc6oIVc+THba2w9UIGD36TvqKpY9evLmrrxbxDPKXlAot1neYvrL5IP+ZU7olTN7R4rMCUQw5vr0/XJ+9zawk+dqDyZzAQTjDaJyMzguMbOIoLiH9L1ALeOzeonwqqDgjJ0F9slnrK/bTwUtBBxia/MadIs+gAFb6L/hAGc8xVpD2Jhpd6f13/iP1vi5Vw5yeYYESOtiVQAfQm7Pze/vphxELFiMvO3PMt48gmi5BJpddv6koSMMPpOfBEIkxYxZeYQsa0MVz+SvyICoHU/pUjKvSY3olPz2x9zwllTKiE4zWEBTvR9rqFSVRqqQJuRtWKk4ukApebfOn1kTnog5szUM8xNXwo01XdJaxS3WKSXQTI92ia+OcOlb/5sfdX5cENRd0cR6x69hFdvPRbz+6W0KwVJ89x8bbDp28fO2Mah2SpkbkSq+XcUbMJun94x5H+XhRr7hIUZRNI4v1cwh5/7B2EL0b/8OjFqDunKAWy728LQZZ/CGOyQ0nW18HWbVtbzMdhMojA+whwNjerdV9+nMGNU89Ws6xJBKWMX+Kn7R2x1y+/3gCdLyjj4TalXvpxU7oaL9tGw5jnZlVEpDt7vxwMqDFg4MiB3zAz+44RSEeLO69S+sUi6cNpYHfJq/+B7EY5UkrEdOYuuPp3y41U9ZCMU7jrQzlSEmEOPK+jvWVUyDxXDYgti3/yL0//RjCkNQVU6CKRxLdx12ZkSQxn7XPFFYs2UUAsA2k7IF4QT/M69rjE8Z81EVoIfJdpfqxFwf2IhMb6g65/rCJu1SWN9paZdgMy8XlYHHU+DsB8coBOPv0qE9q/Zq7cdEB/PHeEWTGmEfWv/P5ll1BfYc5xRPcEbqScW+YpQFr0Q8h4lbXGzhI4QHLKgMotTjpoJHYFRZCQ9MJ00kGe5RReHwtgxyE7NXPnXqB18E+537Xg3ZcAVGYz69VOkF53768qJ71q0fWOe9ySgT/CSiGQGW6ohHeJy5K0ODOdRrfRUomCnxAJSxzx8FAfdXWKG8cQB13F3/bQn4e5VlurzQs+B/QDBdvMdg0S4JpImg0q5pP6fJrcgYMo';
  const _INTEGRITY_HASH = '13882c56e36fc049284b982067b8bc1ba6ca12004276f98575cc73736b3ff2a6';
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
