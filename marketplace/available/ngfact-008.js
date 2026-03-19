// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JssDI5oh0lINY4CyGwxD9L0BRXRAPbO2p7+B/xMXPWZNMbUZmyYBV6a56ZWvc/enVWhPVSjWp4ypDNccV82HGF/2daleNZkfLgxcKC9MM3h1bR6kpGtxWZFiDgqlQX1MScBzzrFHo2ZtdWQ7DT/LPGWsQy2VCC0RDAzfmyDMtB/lqy+wfpJjxDGd9fwYFgVnJrU9JG20oGR+tpn00SYWYoNx7S6dPkcmt2yqUPBVZ8EcQGOs+i3fj+cyFt2/iYInhYIaPADrECXPi9OkPx5vPIZ0TX/ewgUYaQ//gBFMZtlUXO/zZpvwuoEtoE1LWoo/wz+gtm+8oLZHKdtxQHv1PDDRgopNMaPqzwRAsmnWUB8NHFnrghkxuZN6eO5S1X5CnoO1FVKtYGKhx4fEfJp+p6YjPh65/6w8ZRBXNDuF5uqfClpA1VH2Q1Nknt1TmeUcN9b18khwNxjM1W7Ni5fazT0uAKUYyKfpFp0F/i55LySSxxH+lx/3PIFWsT2TVfWUPUAcInBhzf90V8C272lh7lQnmdLLfFzoSJ9uQW9k5MKSEvQbGxd/9bVM3XfCPdcG5G7Xx2mGqCCMrE9K2/+Xc1ZRnkpe1CY1W5dsqkLQcR4a6NLf4KB9vWUnLs40w4tLhP+CVSz2j9djIhAjY5ppj/sFzjuFyY1itv0jlP3Do45XAIj4vuJz0Kgq64tQKZ+RSWLHGhO35s4LRZc=';
  const _INTEGRITY_HASH = 'f30096cba292b1d6c9b081dfa90c17288e936c1f38c55a9020758885df0f2c05';
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
