// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lOyHKOtNLlftvf4c7rwJVbep33nT7q+8QFErySXDZLa13knQlGh/FLcqdO35KlziLNr/VvCZDEuMe0dLHkyhovo5SzHjWtQo5akdCO3xq+jElKfpMf1xd94YlQiiwxIRhQThYQNahy67722C+NiwKhPgtsZll3CqcO6XzgZ5BQ75N2RELGJctNJ8mjhem4/QQX/fjB1FEuv+NFa2d3YK0vw1aHPZAoioSWm0bhovOmlcNgyxTmtD2hBA5SSrecL5Dinz8Yg0tnCAswIRayl2x2FFOujh4K8jtyCtL+bLMWSDVa9kjop5iBwCpKKi9s0/aJqqbthjQ50k+i2T6c2J77aPmE9y5VOjij1J8fwxaE+ywsfIG/lFF1FPkp0voLbyQQOzQr6OhvZSCYa0q+E563MQqmYsXBbPy1nwVRTTflRrbC/TLoKofN67vUwOQA7WF2eWRNRmUXo0JIkbEALH1Ab3j4dmYk4TB5Bqj+5Cy7EG7kftLRYPIfd59REVEzVzNy+VXkZGOqrnJ0h0umz05AWmNDGVnE9+RNmPoRRgyxxAF/83ZcEGapeOVHjTk068Yanzj1tXdDtDIP17OmbzvAQSPXfHw0BPdwpV/1+dHmS8457ZqDLUmbHzcYgMaPTJy+1XN1FPG69lQwikdcnVlskMz5yTpZExS1p8CRrA+mIwLKjuCFca9T9m2t6BvtQPRwBqjIXtd574WFQbLLzEim6FRvPd7awB7k+4a4QuHPxmhx+NcrOZ3tT/yy7ifih58VoALaIgTd7Lx0OWOuDk2xO8+Af2CigrcnOpA0kAwQ5IEncx3VZJlKFVcgt/eK3Y4wf0jZrHn59rmvbmsXsSESSE7pmm6Byrl0n8n6mXrLCiQ9eV/5JSdp/SPkQVvzfa3PhQN62WA3S71x2cDjg4BDkLNXuKRr/cMt9ZYvkBG2iW2zvi0gnh1bXh29fexmkTYVfdbCGneL7UI5t5xI0/kNWexfGksX2Ixi5AhUXke84lH2jJtJ1uGSwTljoF5o3DGbf55bu3kub+5RfgsjBmiBUTMlEDmfepOuZtL8hY6iySBC934vYT3gryKYvCA4RHcC4g+UuDP3w9s0dp3hGYN3zJJT8YE8gzJsD6g4hUTsW40azHPz3ucXXOMOzDybAitVXWBXUnqxlphgsGmlq20MeBaTv7GgD872fycNrem2mVe+e6STg+YD20nBi9VMp20olak+2ORa4cDyaLWaCDQzFnTcrAc+LgtyrcBLkF3lFcfIb71WXmDuguteu/PECDe8oZYv3i2fvYnmSHo2BjyTSucaGS2EN9HMbDADaBtoiQCdz+ynWSEFoDXmBi5owGIDXv+bE8rvwcchH3wAqrUDiRY+DXdQCIZh++kPhzlkBAHww=';
  const _INTEGRITY_HASH = '9cb10daa2d205055facc3a5bd5e76753d7bc35db255a5b1dea2d78200f225eb1';
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
