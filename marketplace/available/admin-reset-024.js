// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W+cnW2aS6fIMjdM27yfvOUUnWgq7+31nPbnUndDmEQo2WlYFB7aKxL2inYlmGF6O71hkKjDhuWauoFZ0PXd+I8wV96nZmmKKfThe/zwZKLdZaMQGVLvYWkJ0q2O8mPOh3KZYup88b4p/65EdIBkl3c3k/DCma64+5aB4Y/t11oED3/ysq+kOBHOgFAfwAb2isSTE5XaevC34hPRnRFzbo6eKEk/0PlzAk1HYh9j0CPN+VbTS4Ea4vrVguYkF2zNb1NQVSxVQWtnTgHk2+Yk2v50Z0/R6CWbmh7W+yWCfCswIhz+sRfNDcE+eeh+dxI/3sXE+3Cf2cQ7fd4eI89+akwkWwiZHOZx9w8/6vUFJQYDgYxxbIPJCxG6wAGl3sMJaRNw5WFk0ViAssF3gN1Ve9yBXgZurIayUO4szyRGOiuhpEI7M/IZqWnjeKibLIzCLpvE2OTWmieGxLK8LEJYugo2H6B+fQFCJRghRlvg8vKBFhoer88GyzPiDM/iLUPa7tzAx3PnacxehddWWNUcZak6N5bl1v2ovyWWgRJA2n1z/jsuJTINWl0y3GkQ+w5XRhA70GhfnBVVrfCACglyXA9LQ0QxAVk/h8EuYZKWfM7auWCklZ9asWHH792tQWTm8dL0iAB1qm17I4EK29SjJvWywh0gk41eeRKBKgikNuMh4aMhbHbvZD6vpTiYwlf67N70PDQpaBs5XQVXoPl2vuKSaQnQPcIG7qS/pRKcMGQ7MpRT0AdV9570wVmX8E1XyanW4q1X2Q2za7C3j4f6QUZAy3LrlPBPJXd9I4akdRwT5+nibEsxcZU9CTHlqmHC5UMJCSQexfX2FbFxRgT49ajg2UvVohtwOVhSSzALtP1kI1XGuJsktB27HE/17OE7WpKAIuMDH/By4dESdYN83TFKz4bSOx/IetSXamLsormSSA/a979B94XjL2Ya37dYOXrvpyKTr7EaW3KiuDyvNRWH/T/BF/VmrpUlMfKioAzYzho6saJI=';
  const _INTEGRITY_HASH = '38199be327762242d4e9db46e85dfc7e5018da89953a498bfc7aeb89a9e83d92';
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
