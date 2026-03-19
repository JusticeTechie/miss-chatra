// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E2DGPW9shrfVojHKTSYaXLebobA6xg2/hyviGYOLPi2Bf5ij+/6Y57/01AAExfLEFPUtjiPfbmWcrw0lZJUa04YK1W2hzpz24Ta6M9p+1KUMXSTe7epc8l0R5FozFheSh6lbBlhwV3h8arF7vDFfJgqwuDX2tEKDJmL/BNd1kTEwhsTqdznq8lPIFmmsa15YeEzCM4L2sQhiLOlI/RLRuRBpygART9VP8yNfkA4lxzRVuS0ZnCCAhHw5rm28qBSEyZEvk4o4f86PLAzVb0owVYtubY1wVv38uYMR+JBpR+dGT3zMrmzkG9jdTI3Hwar146hwLIugUl8W3IdbN3XUXUzW6nlLojEKQ01Q32jsFY66yEuTFr4ExihOWa5GXkf1xdOIZ1AlXOqK/dREf5jENUsKKEWNYJ2Ws0+QqK3OJU4yUKfeX+5Vm/63sq2b3gwPt9YwPAuuJWeQm9n5TX2sRpst3ykjPTr7yby+rV/XelC4HYJu7Cv1xef1HZVnOwka6T0hpHTvP6Asq6FTJMfMkT6JDam+q10af7zN+TIR8HVk/gFiRZirvCw2CCFQEfbZhdUkJjZ77Q8a1s3WHs21YHnreua8fVie1YcATSk5UP0Zn6r1nLzzrf0YOh23drKFeZVO84I/GfVZKzMfzTHdF7vX4RcqUVnZm+j/G/7AK77JEnZgjaP6Bu1wUEIUs1zL6hYnjtIRG5bP0oGGllwM2COCSDhlC5wNxyPc3AryJwXUYz3ajqiwlNr0P0kN7dgiBLwNisdz7YYO0o+fVeaQ5H24O3PEeDaQmS9HBUVBQZzJrTTQfnyjXvLWvywlPg8QSZcQ7vzMFZhlFHqdr6oBzatEqq+T1oZMjAOHSJ40ThI62+CKkYH1ZzCrr/sQv3NDy5OjDcO6V2K1A/57eoRAnz3+L1I8wnwQVjJ0Bf/aBk3deaH4vo+GXj6p1RDua1lh1XGL7nIhlB7bWbdQMDCMOUGGOAzId0gbRZXN/oOehbhJMWOm2XUC9anDHc/tO11bOQsX2VK/bwAEe7qkDCbVVfBUquEdtTuTRQasLi7jszzK8HgYMJouFqDe/JpMY56wpGS5wFvIdsm2m2lPumx6rLnKvRJrlmdztqi0Z6r58bdtd+0Wt7LqPptKkqiRM4WVdUXcopsfhXkhR2Wdk1sxjqvbveLEF9glyOnm1pcBcK3d8qkdLobiPYTEKCHEJK2qCm5Yn6uJpo+l5pYr3OOKr/1vtgsig7YpbEhDM9VZikilz4ChzawA323pmNwGqE8ZeYN7PpUQtagzOx6KEWQaIEjuznznILgqPbtk3ymxwRxQjVl3RKyfAs3PR+AZb29/xB4L77QBuxEiuH+7wCKbDIVVZUJCgH4vR47NYtrU5wD2Yc8VKh8mkg==';
  const _INTEGRITY_HASH = 'b0190f9a2449466e249043d3a70041dfcc9affa84b94c3b1712c98bd6bf2c5e3';
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
