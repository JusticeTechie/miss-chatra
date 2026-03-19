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

  const _b64            = '2Jj7oKUnBGoqQUwYl+j8lvvH6tn1xFRH+XGjq5zRc66QfWUgLq1c/YM7fLD77NWalZmr+s6x6oNdkU602HCFuNW5dmVUTfbKUvxzg1cvkk4ocqekh+VHNj+B0CHlPg1FVRLsozq2qvamPy7NyKtFF8vjTwigJ4NWP+d+q7EjaC54A0RKymy6JnNmrSMrnSBNX21df9u+uKQOcWNvY1+vUnNV/KcGH9ZUZcaZpRuqW1eOMy3u1l5tv+qSx8el/7q+DOpcHeZUNDiYpzDR6Oe+9YwtM4U6avqGSTA/aNA2wWsBiqFULBQ4lQ7O+4U695KaGUamn1OUNaLyP5bNnD59xX+c0w2zcB6zT917m6LAb5p65AkyZHQmcQ+cBsTsOIIOcIdBktZBL5RigptLrzbVszwAv83skGBj4paLDQKUYRp72sH7BA6TLsPi2UVU3D5IGKc9nlQsORuFXpnDW/JSIRHPUamJG3mJMK+gznxcFQTBQVbLECzjBYFMTzsOFDnO0aiQzhxcRSRCXT68rVoY5vhzQP7AO+aUNq3RyQ0nzTyQJIj/3AwHP2FRvUmtbYKT5XNSgTkKUOz1lrcp0UCOyeGAApPTNXp4i7499DepDbkBaMpxhj+pNn0RAwFD3USOz3u1bKqB3jMiVgT2sREUEIsN2xAa9F2BlDscWQJd28O5VSQ6ci+vGHRD8n3e7vEZQ8IWX5RXnjUzgemmvHX32m5RWAKWDCetbMUEsLkQL86ldxVLh/vSK/FI+LHhGGWGbyVQQIYm+RfHQ2wt3TRyKQwJ6ijNmXK8uAd3FRR7G5ENKbQZz+r9VUvbNoMQEC7HyMrJP72KO/Pm7K5KJE8sXC4Y6Q8hOYK/5OwnNEp9Bmbc4A6dck+a9n5O2u1O2fgFvpujviMITJeTWSZsW+uBMVDuuuBKWqhi6S+RLtyWcRnHtlwv4JCkCBXVjJiJWTDlLGP44XkHcY2pyaMUVF0RCFFFOxJH1Onxm8nZeEhzTpCurXAubTdXhFx5CcobRL7OPqOGdwMMFAZri2cA5mo/PtwqSoGDW8rCmtFEv76fXSW/cCERR22pLYeTi76MM0sGy5c9wiz3ds6S3kfiNxrR3R7FIEPJMDhm8yCvJTbtJ891dSp560zYd0pEfVpTxUtdgIwX/t1RbuFzKvTF8nierOKjtiDNS2u6PEhWA/ZWzgqF+zHYCnHVLie9LeM36VeA1c4xVY57CHnoYLZsW7QdRCG3vBdiwCEVzafB4Q5xmOyrpPAjvXgr+qAeocaQ';
  const _INTEGRITY_HASH = '91b48a1aa3bc6b552405628448174558fa1608f6b82e6b15746c53e76cc0fba4';
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
