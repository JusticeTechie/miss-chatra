// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PfpwXkuxFlO43KGIwoXmCF4PgonvYiqo4N+L/YQPFmDzpH9rkCPDGKP69fVX6u3tJDdBgnDjNZpRAZimiuCVSGHv+lNMbDxgshjwFw6rz3l2konTgruMYIWvFIHNfJU7wZQpMI/rXVKNnhVlOkgbzQ7uWtYmvZYNFVFEj2SL/Wzo+DwtkLuIV9MTDjMjT9SADs2yNy5ZiUTCf31EqYKNay9sW/ttzPufh60OVHhINt4DN7jJm/Jqo/AWb+PR//ho6Zrui6suzkIpQ7OcxYBBwAYzJ5dbDtlHN6GkZ+S7NPKunFVgKVkRLdHMKmZTAHsKfEHYKdZeUqob7xWbq5B2VhUXP9BC/Qvl4qu1ZdosykKOLYLfDUWlkK5GDDHsyuQSua1gDpZu6vt0w7kvyNAg+A+hIelTXWT6R3ViH9mYTDJIvv4JOWqZ9QF5wLcghyf8TKVqqOUywUW2rYoHEqML+YyxMCPS2AWgi/nwQt1EUW3Qfml2K/Adp5AA28/uA6jQwVdx4/e4Rzg7/Sd3OByoimWJAEEjOZgVXbJAB8CpoAa2qX3pHKF3Ks/W9QOSUoUbmCAeqEAvS29smLEEt1+BMyiMslbQU+x5H6wZDeVsmiModCgOvF16pD1q1SB9B6an3tEQquSV3Pjffwm+gPxYQgQ6vudHtUPpSyZC8R1PVnIwG55VO8l00AyVOnq0VLUoR7547G/2QhppdKARCdUzYAlwyYNNnT+4Jb81/22xG6Gjppd5powHyCSc8SZ+I0ngq42QMKuxiWGrYpDUTaNxhQ45uFldgahTwLbvbgD+pq1MjkKJ9XAZX78kM90sEhH4JeDHwfYBGklD3a5w5OHNuKf7Y1i4ncbut+UWEtNd4DfdwdVsGNedsafP4vYlwMu2XvIt5Dv/8mKqvHqkDWGIQPhieyFtZOQeSjIbKGvRjeC5u7pbbpatwqaIn/d1TlHTFTegEbTMTnpbuHcGvcCyXHEIP++cPzWTYvkUvPlJGRX5UBl5TNG9+JZMxsL3Ht2xq8Pc+D81sR6F2DQHPz5svu9u/DZtebEDZhq/9UjoT0DKl/FAWHu2Rzf6Yev/hWBM2EPbOs3kqT9LoHd00YGIdnR3g2sQAR6tv2qqGeIlzwEZN8OqUx+tEKEAWj3YwWLPYoriW3I8Q7BEhjuy5w+wGJHVZSTaIQH/wI5a+yvw2NpnspOcd+IKs1lWA6dEda0Ra7c+Wi/SVcslvEo6+6Y70XuMUNQ9XMh8on3SAEBoOZDrqplennW0gRWfMPDi3vURF4RdQKjHhpxLY5XdXruaoLHGSsek/p49sx5bQk0TwpLMyvaNIEEMt+E0x1WAakOoarQt0j0=';
  const _INTEGRITY_HASH = 'aa5ede1da882e0bc685ec99526920a22f2d186460bb787464e7a990ae2acc315';
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
