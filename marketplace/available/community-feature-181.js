// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Yaw0JsorIWxWGEPqNmBYvT/zNggans2RIyJnCv79OolCDJT1nmV4eiobIASIdnXKWehx/tmI6xmMuy9io5f9g9dFJf6sSTI7AvyZJoKcL8zXGRD3MWGi2+lKYRBvScPUzz/9AXfPdt+N/LqlSBQznUV/xvHPIq96ZsxVLurhyf9zIMUp9Fz+P3lVtiTZVs1IfoiRRkaMrXAcBxDHtzpU52YlaLupqUwsrsO2rCCgLQpIZC0dlDiwg8ZxOu5b+5u9qn7VyzyZdBosCoSPXCd83ZkhZN9CBqp6qtTRL+cB81VjCMfBIrt1D6XvfnkAB4n7ydfEYKrhBUaFk5Y1B+7qqkixLulPbWYEVoBTGke3QQC4iy6DDaVj60yNCy+6wRA6aCY1U2TnKG1XWY5h2mg6NydzB2Y6+7wLrs/iX8y1fAP4+COwTT789rKMP3Bu+8JJLIlpJNsFZrWxMUKRcmkF27+6UJoYWpP6SUlN1Fp5qRV5mHWk6tMpIrimleb/VDs7IBNw5Mgzn6f8eeZocIak/ge4gK8EiQoSmoKP+g5Ufo9AYf50uC5WuEuBYPWNA6MrbPwQtWzRfqigrtniUITxITqKeTlnxBqGUjwK1GzUdAv+ceT9/F9NccmYgYa8WveFmAsykMM5oTiv2BWDWJmwieuQ4/lYNVvHvIlCfswT0M7CvhT8e9bvsEL0fSDPWGvT77Y9/8gcw5tMlEvTea5A/88/N01bvJgA';
  const _INTEGRITY_HASH = '7a1d7f9e1192f21dce31709222930985782aebadf57b3c15bd564dfa61ce7a19';
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
