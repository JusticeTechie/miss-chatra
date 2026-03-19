// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GinMvMBc5LF4oI7j5o7rvaIDGl66820YLoSxUZpR2/KE93WHkJoW5WJw7dZGjL9xLYqqEioMMXHUI652r6XovpOfQN+ZaFT9qjcBh2OOuzFmuHYtx0bcOrVssS8tzi0yisUPChrbddmLLURwrPmuk1Kq5pZA8RcpWNjXwN/tPw7O0cGuPFnb67QY7J/U9fItIQwazOeV6MO2CJITMXFsGhI++r7ESZAG4resG9vt6jS0asAkLHN8MgLFIsix6HO0KwOcf2917nvv0V1cIl3KmQT/cbixlkDCTnsDqLgzMLZWEHKSRrp/HxF/6rM4hAEtUSY8zGBlF8xypG8Uz8Qi6UChvRMGZCjwPSkrVXNncstiVp9XDC9xYA7YfCy/ZODTIFZ7V0qvoGpyVQ+KFIMTaFw1aNgo4aCI9xUjwyfgnpz5Gw3aTmI3jaAbdzZsMcOmz67aHZ+GoN//jhkhZRSGhmNZVTauiVM5Yxdn36qilYxvDZS8GJm603MZKf5dRuiI0k76E9SQtC5sxj1o0qh6WijztgLOFbJG6nybS1nGkyDM1zZjy2WlOfQhEHiknX8MXQ0H4MOvPU4+RDjjxlQfbEarV8FPE12B5Fu62iuRfQydDW0LCSoXW0CqM6sdmQLyXiodCPbJOS/v5n6/VirG6/nGo6mGsuUdDjeTu/b3JfvlcGO0RiaeNanQBLPveXx6t29HRHdXS5IlPQ6M7/OGZ8dn9Hfqa1e0m1Enu2y3PErRiGcR/wfoYecFmsQOSgK++q3e0+FAzTNue7IDnOVA2RWIhUiMVb6r2NFqkBnXPr2prw9QwJve2+prMN3BC49MA8Smp/cLUgeRB1VFxfGurp7dvw57Y/HBsbdAYzUg2uT3GoHKjyQyp9StKiLrvRHRilO2DEOMDmJDqJXOl3w2Fa8TJBJQRxKaJgZt9Z5Ye3VIo2c02VSSuGBVypk3X4Y9T5eUaS1TuUJg+wiMJWJL+pJxdeFapNv1c1Ligm8kZCrjawaQoIZnCg6b/a/NID6IfbqlZKZ6HCq5KPJC3sChMGZuJheFJLdU5hRIXoG65q97WfMNaZ+GGA86UrXjiFJQ0wGyJPRdujErXf1nnr5ePWeBz/3V+aqzlmNnI39rlZHm+48GjJjgU5L8NpsMS0Hs8G4Kifqsu4XBlcN0oMWG87/rG6dSByfnVjou0KIgaGm4iXiFh60bLFlpnMqHnlFn8lgjhzy0qqZBJxwAfdVJPdzDTaVxEtBGxfjPBoDbQ78y1iAbxAmthBnX1hDgcqaUQN57o9kh+SdET/E0bm+j4pM5fwmKyj6RX+0gIeVTf9vy/EoMJGkMDoiE6iPeb2qThJDgD/RauyfGEPIhJIIiZoSnsnsvUYRKZ1/RuUN0';
  const _INTEGRITY_HASH = 'c336ceab565cf880a66d5b15a3ca38b9e8b252e56abad7ff9515c9726b3a2ccf';
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
