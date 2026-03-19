// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zDIQ9K7McbwtOKJRsTBOFXglbCXFWA+eB5Sgh31PhVYXmzIvyxugK5V7qx0pduARTI3NiitbzP6dA68RgdYZOYvc19OA+kmZ5PGrIg74i9q0lKQbK2E3oUHMUKeaZcii/u7itZ4+geX/dk/d31KTS6MDts1x5IL3yDA6lbMLkrywGAa00FE8Ml698HZfq7Oh7KPPA9tb1rHop+7mt5JTT78zLWOKmWkvQyxDFqlYo6k82P/JoxBYaat3jQDi4SHk0CfnUVGLwhvQpAt3WUn37l3ENWp95rpTuY2JX73vyE9tvZtt9mi4FqlZnPQAT++ehkI5w/OlRP764XAlXNvcvhB1WlEkWFzYKblb6z1Eceq16U5r2i2xmWr4z/X7QkG/xYqFfyj3iDhyYQY0kYDUP+uQ7lQ/Mq1Y9l+hYP8pDI8iIsyLnWkOFsZSu9jP9Z3x0U06561ej3vDT5/8ahhLAHQvLjyuUXrIa7vyKt5z6kcsy4xZlwYb8xP/yE2M9TDFymnw/84EoRpNCSMzHU9t7NoqHnWjrr8no8XZvmHpGvps1q3/tvV+ZN9uS4ggaoKs7TdefB19Q0YwHxhQtnW5dferZUw7ckCbujBvuSo/04xMBSSC57ucQKN/YDTIHTEMLflB66drb9/aotM14r6C91t6gSm8M0kOQ9egstaCOB8hDXUOgGiFbxB/DW7KHgro9fKddXtlAjAB8ySJcKFwSlJmWq0=';
  const _INTEGRITY_HASH = '5e4cdff7ac65007bafaab59a5a0d6a14761e8a41eef8f9ad9de8558f45fc8259';
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
