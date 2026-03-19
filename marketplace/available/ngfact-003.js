// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rRcO94W+zOzisDlyiZ/+bUitmwHiEacV8sKq0cJNKvw5W8BIKmXWFMHGPEu8rRZRrlwF/pqO9wox+4DdNdxb28fYq/fjXY0PbKkBLg1YitdBW77bzW50ws8Lm4I78IjOR9kb4TwVciSGHeTlEwi4yXCo0fOSnxOLDhcOkpV7l21EhhPeSzb2E3VEQkDTfLezn2CTzgvuvWBMtov1ALkLviRPJvn/kpTBWbAoPJNQ7ftX8a9NybAtNumxdAaZNyip3P21u2gFAKo8pyOdx8ETso/glVW7pslGSI5fkGLVBDIMSLtheTLjavyOUGoGapmxbArGNgJpd/sFTkLfL5P7m7kYpJdDPflqhk89CeX5r+tQiN/xUtG+8dRs6VNf0on5F3MqdtKVzI49PdwTdo9BHOyahuXh0lT2FLd5gfxn//AOeNE6ZpfT5wHRhHiXxUaF7i8s2MVu05Qm5LgRZr9LEQsxFpJp61smxyc+zDQQSIva9VX/GqVZZ99xeKpdQIeve5j1kw2zw+UzEKnfPIIdu588e6UMVAhcaz/gOqArytE7U74YDgqAgcvOgboLbZ4ZXC0b7AW5PXrhk61kKMInD0b3WbhcRYBxRpb4DX3XOVz3QNKIB2HaxyMir7XnJX+sV3x1FkzKKYsllS4Y+22v0rMjUQdHI53+m+vFG9FeiIj0h4B7coLz+uv7T+sj2I7/22PxyMyaeABca/nmiiWsVJiyOa6/O4moxsLiyW3xTpo=';
  const _INTEGRITY_HASH = '12362b3bc4f8ed42157af7a1fbd6c6950a71c21d4f5bc13a13602bff2a3e5a2d';
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
