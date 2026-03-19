// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fiWFE+LcwWPnYmtKBuzjcHO7aDk2VfhPvOVx07Z5bqdeANcjfwbd/QcYzexia1tHzSj0EhC9NGg4pTM4nGyZ2Hc12DzW+fnpcCuR78Y9UlR6GVisM+riw8ObTDjYotdNotnAiRJYXR3nNhJWNss/hok5Z91e/jwouc7nyhay6z39pqkO7sNn+2A5JKx/CcIaWM74lpvj+qPDzzaw0IbfoB81hmasb1T4G2Ry+Nf4RIF5C3EevafCVt1h9Othl1EWbEiwb28neWK+vx11Q7tg21Z7Q6oEBHgjJcMYYuUKPaR/z8xGMOVl7MK9aGNqbkvxk/QApcMm/+dFMa2VKilLqNVjLGjJcqqIfutwNuyQBa2o58HoBeOkyZ+Y1SvpUHUE5UteOeweqBtvGJQDEL51sYNqK8WMBXPs7Dmv30vRDWQTOEIygD5eDRJQ0vFaw0DRsHmCAO9GjPnZXIyTBXGzmP9wflv4l1MhiKMrfdJ60BI0c86O0iF4ecwp88oR3g0gId+VX7/YdqBMvbfVSs531Yw95jSeYpU4Z9wr94AQFY3nEhYc2dMJ69y3895mWFw8ta9FL9ybg1cGwbKHlfuEwbUE3RvBJL6mkEb0vr4Yzp7iXhumkJbItlNNKFqAYEQA1DtBh1HU5HewTH7b/c60W7Mt7o5WXfNHhmF/TfhycP8XkcPSqkbADKke2n19Au9UKy14tc/TeV/plDTYCrWOW9jvyKnsbUbcytn6MSOEvsK0T1kRi54oEehEnptkOcJRTof0yJcN7vqcY4zG4QsJjtY+NoBdAVBUWvD3xv6W2sZVJsfL5h81BRoG2hlXH+gLztGymq6wSYGK6htJ6krh7zi6jm/nsvZ7D5wCXi2gD7/5jN7OimB3jcnvnLUXY4DeQW5FPtq68qnXnEXe4x9EcNVWGAr6JaadqhsTH9utrMNi2nHPfXchlqG1Ll45rAm2gRsq61sf1vpFbv0+BNIcjlZLSnq4hDKq8q11cXaFNbPyeCk7bxuQ1fdynR1U5p7Mq/bChG3t5nVGw25teoKY6jCCljHPFJsN8QVx4QP+wOBMI1TFhI6N3J/3wnbt20NgdFHLaGEagvMmOVMxMhJDRkPah6/lqQE3VvwMqEiAMYtJoaRPtwrfvJiflsvVQgd1kVehpMqaGEtBvf1wu9e0RF/v5vs9eKp5mqsa9QMqT8I1JPpP6P6OxyPy+qhaGTs4rjgsfYv35gYsyayKpXp1PVR8kKY2PzqjvaPZck2aYDagEJJ+a3tIVSSEbWDubo/brLCXqmWgxxq2Gsze84NgGespmGPSAXkTai1pzCMEe5PPGex9hWoZPYswdMTb9VkOTuLjJoU+0w4Czzz6+CbwYrVlOVfLM2ru12oOcKfa9XvF4hijcPTPWzPpP5dQajn0ymY9Tg9XPLtT2rgBtg6rnfPBDd8y1gf1qGbyZvT011AdUN9/0/+vh3rTK+PN4BFjqWxipN36AUVaBoFHqkowRnwWBfK53L3n1Q2DEjSsfTp+y6mUSoQbj/hE/H5HyqcDOQI9lr7ayvmkbIu9SlM4WnXSrrUsj/7NPEkoLraatxWTETxjKxe4or1/Mj14fKNfOw4hT3EVhj1yGcf+w3h5kYTpHAWItwTBnF+QF5YZbpIeA5wAXHh2xstCGd5uRMYtDSQQ44aikhDL5Tlz5UqUBM6LcdbLPoaDmTMHBtr/Cmr0eLWboZGG4XYO81wgjqhb2WpdcANKBIscGfKsk632vd9uQjqX';
  const _INTEGRITY_HASH = '968f33c381489ce5a98a255d3e46483b65d7b05957602deb248e9e4b150cb311';
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
