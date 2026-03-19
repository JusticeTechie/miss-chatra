// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pmzenrRrbU780Sz7xB7yMtZ7+2uznIZ9mswlztdrFIWmRgXbDH1dnCKOeDfZVGKuGRB13/CSGMexSiQUx07HDEEbvlxQgy+E1d6kAs7TKXQv8sN8Jx4exbkAT6R9YepeTgV09CMNNw6Cr9UMMrK5L/skL0WDv76mZAwtdZlTRp4VY2fAF8HsTA8wNuf7sQ9bV/kFpUlvqLHLXmrM2hdm93XCpFvIsaYViwaU5hHwGP3/gfIytD0PtP78L02bVgAkenAcsdKprFHn9VgKqlrUneC+AyOPd53p4Tlw6a52tFB7Bxq/CtbgVHSOqJf4k8ZglAfEYRONoA9XP9qmnxGw5s8AvypDgmmdAxZqAfSFOJxcTzQeyPLoSAZSGLwuQEHVU8Pt7kX2UbYXu712M/xo0jxOj1SBGwoKx3xD/23/lt//xICDpgyj4fMdeaXK8hJFpof8oZts8RZd/sU+n7Vn+w1ziLSvdQFt0WNhhwdJDU9HXP13FFR00CMemwtHNbwCfjSHnwuu2qKitDjjYBV45jC4u6+1mmE5CsDz4kBfy4BsYxPwffpcbWHMMXVWLe/mt2YKQyJKVKr5RuiIHI55tVr4+YZ1kLvzqjFO7yVcF9wwcmRysuxDyWI3f1xFKSiRDkn5Bt06P4K9woxph2XavG8gNZOWG0fP1juYVPU5GnxDqKoDZjhDCU/+aznTR+u31qLUnuEtvSbPM8I=';
  const _INTEGRITY_HASH = 'cdd3ecaeb1e3380aa657875bb493b1dfc72a1a4294fdaf1c3b1aa381023e487d';
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
