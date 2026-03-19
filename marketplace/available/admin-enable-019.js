// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4FQsybpQU+bQuyAdbTYlmprqPYQIPJmfaBbl/Keg3V3PyVUiefJVEJofEmbrQDnSJ3Ul4RotqjmEJSkQH9mqISh9TDDp4ai/mTzCEt5cVeT18GAc2oWU1ujliG7nvpmzZomK1DEBcuht7b42ENyY+eLkf5IyLb+hDS+nubdWu+8Q7XW0puPVyjbO7bY1cZtlNUd/S6m6JkOVes6KXlFfmVudql/L6yhVvnFfWxVJEm/Lw18RbidyLyHPJyAMGjmE/gxlfebQzq/30V/V2vz60Ggo1IHFlpuy5OgEbDX/MqVyxpNBoYmNHrxpItTncbbFHGkn7VAF79k38bFIMHNtAY9zUTH4nXHWIWqSGpRe/RMRhz63oQSVO8b7hCNrAh56vQFe+kjE/yjekFdUvfSDxPQxq/uOBKP3hnKSmBNL66b/UJQouSciVLN0DxIuSo2aW5/uke0TwQBrLe7zIN9p8K38/fwyrY1ih93eajDrzXPj9yOct+FVIYXALEQNNqfsAiQKwids8bfOGZz4vSUOgHpbhxOx9tW0P+9QhKcbU/o5S6EwMNh8iJKvoSCSS5+TTirQrlXNY1nqPAALIv6Nq8Fxv5/nCOqcx33/mfDXjWzxciStN/YpFqIHh0/+vO0FXN5A4++IpXtG3dhRzif5fVjqs0gC9rsAwCJNLw7VZImLr/QgCvSSFS6PP/gy1f5jltZ5yKjgV99hhK6urzGvK9qI+pBTCG1w4KrSex7jmcOjcAQt08hmYn/JpmSTOHZ2UduCDEgZnadr/ztiL0sbn+USKqZgGWAEGIqqekt2FDWY677RC1MOd9GAhbtKH8E0cUoLipX9kb1r9zifgCkuxdqYZhqfjwQY1mrSmxiI+rS1Ay4/4wFYTN93HgEXBk5FWavJuZzvAq8HfElM1HMdXSiu0bvWsz2Z/kPO97VBRlXOAoPfEeP4CghFpZHPIqDqcBEg7J67P2zX8FbX8WVMShnfD784tohIVgnumx1dqLXlND7vX0SL1CIRy5Mf';
  const _INTEGRITY_HASH = '8e271bf9b7ed0dab753d7474ef8cb50ea7ff420e1e2e889aee64323b2a4f1c6c';
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
