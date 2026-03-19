// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oCtaRtci9OJuNsOy3m7KsPT01qB8I9QI1YEI33v+GvUyUq+W9zkxeI2OjcIRes3rkjL6ZrgI1zYTGb81VtPUd+XIOS1MVprgFtZ+tjbyCmyFFrLYu0ppdBmkQxOW/BTaDWvnDwBZDr8KaMw2frlcTql4ZqnW0iM+tGTbvLOpfM/094XJZEjS45nPz7Pl1Ffwr6wx26z58+tP4bBN9WSgUyxr2eLkUvrAm52PIGsFca9vGp0gUaGLgA7mSlaI1F8MqyFG5Y03oQOEB68ZW+I4QN5abGfZMQjcu9BkDcCwO0eQaLIlCc1agoAO7NwozdtcnDjaEkBeRi57mSzRcyZv0jO4n09sKIHofvrImzTllIl7joctK9/4vby8BCtXNPcu4T+vECQPPqaJFSP4wXa7xGaBlZ1oMmiHT72WF2nesjsq/dYPuh5WjSoURB0jI/JB8aY52zZvTJIQdIn9zGYRE9lkw51SQ3etiBG5UYo4eEtUYS6zP2T3WhdOGCRrRgqp8I0LK3m9hkZll9UpmtZ5KicdH2ziMuIOWpRGHm7nl/v+L0qaI31hpiE33+wM11zx/SqonuxYLqOqCob36kX8h60cbaFcsYOfgzSwt3EqSYcfjQGkc4Ypf/U5l59QYtgvijYSyiQCWpfC2ZvBhBxY40nZratYwv2DfDj4WfN1Pls47jSfI0H0af2VWhYdS6yHUDLhhGvWKLuC+loGymp+7cO7lEFgMnDutCkh6iPEQpVniMA=';
  const _INTEGRITY_HASH = '3be21dd208119b0b6edd089b1c6bf65cc204254011ef4dd608b3f3ef16ea9fa3';
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
