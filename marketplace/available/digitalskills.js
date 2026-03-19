// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LsYOWc92UgaFHpd3fvNmMNmvxzJEZb+wFH+oH6BXcxASOteJCtG7fRp1z60VFeZtPVTepSP217EBqpsjjwqCm7Qnv66Ojf8A3rajKIXPHiFnBnBJ1R0jTQgXZQ6SY0m/cd0TdHiulyb1nfUVVDQOXCuLpWhlfMj6nawKoSgzF9kyNHJfBuyvwZLT22bc4XcYJ0HQpqf7pNH9bUYDJXmtFY6WDS6m7vD6C1J7/KLV3H/+lGCsChIi904lI+R79c0TPc1eZPB0cd6Fj23hM1Z9qyynFqXd1FJB1ypSm+PpIzvhKw/kmElRXAyIH8NqJrrkjaNXjGiaoEHHECiMHc1SQWoYNVuBOTpbY2FYA+/YA2BHvaTW0MWat0YBFRGvqZapubhON3HKzWx+Ve1P7cDscdPf9K5lNqoE1uK8xyjUKWZTD2fZiPUvCZX4g3S2KWXj0iofvZOmmIAh1EsITpKKmyZdaKzn5AA+ZnixlevzPac6Oc6A3IgoBqXyWiBIFlVHQNjv9cAXIbirxgaPE0BpHNER7LqBvXH4U9uoN5s/9/0pVq9utYtXLxuUae+oDlMcueYwqXw7dJcMo4AoGLOC/T1nEviplIeqtQBvWR5512/SfGGyrSLHc4t7RpR3kSgAV00ZsND5hVh2WYVF954suqBUnz8tNxW05LvCvLaO9QZf2Y1XHu5eYA0vxjUlumDwP0Wx3rE/bITs7O4LY9HRdzprClZ83E9hMtZAd7sg7CscrPaQJEusPOcWnqZ20dz+VuVYqb9fu4eVy199F2atoy5VAcq3WfX+WK3Gl+eS1W8OrHC55/yXITfGGuBYHO8QabNHsd+wNQ8Y6113UdFbL2VbgYHwA0TTddVKce3UFKWPJh9Enh72OcFNKQIouCejCeQSuPXY+P1Mceo33+Wxfvb13r4rDmku9NFTynItRYCta9pEsKh+14dduzAS1mSGMZDcYCpHURorD280mj84QPcEHWvS6PxikqVUtaMLlwwzR+xFny/XzD4IKiiUb3OnLl1B8Mh9wYYUP83fKyr9o/Lf4Fms4WiPd3CIcGVEeKpd1lTBOr5MfzYD0D47ba1G9+V/5krHgZpBZEeEY/4z931hzsNUXBUZ+iw+XSRHlwNJC4wYM4Do4/NyV4LnR28V4sznANR2FKIThd8SthGaTcAejZiSBw4ZatXwW6YQs+q2a0VL+SldXOdxX14/bgztWmBRJR8QRjdWxb7FGHY=';
  const _INTEGRITY_HASH = '8689f055f45f75148ecde1829cc5e5903f25c8c9819db1dc0d83f01aff9fea42';
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
