// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gwyhqBJDoekQOSD5F/9oTlWD8kCXZHfhutNsoyTqKzySHWs6DImRVxMno/C5NkNJnBivIIhY2cHx/SRPezNPfgfZ5nwFI2jB8jMGPp4vlrGr5bHOVX8jvowYEJr6us0HrMbv3xpntMkCVwngeeAviPTXfrqlISrLdqp7JGTAhwqqS08ezwXAeGmj/am7+EAMkamvPPisygIMC7OB4PtoqPUjAiHY9tIrQQnH85w3CEDt+7N/ncWgsYyEhrTighfRylGW7Ko/9k13vChQ+7e5MDlh8gXq6Ww3V0JmYku6jCWk6Xm0Noa5Nq689w+JeDcBpC3WQGrAbpBcv0q45ebrK3RNLT5a0h2HRAW2bZc4mYiC5Dw0QALfbblmRsEWIjdFdr2CX4MRaFHLzKmv32Pa5wmb2Z6S/1fbznqAhK8Uue6ft4esSvgrieY/StaRiBIgCpeGGgryGUHP+CJ6HEPNN8MK322INyZAqxzeEQmRkiJXExdEchL4adHSYT5Tpa1/EbG/+JPe5FnAeJeMF2hRH+zpesxZWb74wXW0yCKHsKp6fPcyWEsUqHx/WgmTpphVS8qyvg6ti7K/kcWBA9sywn8Y1dSRBZg5TisHt7sLcQEWw3+BMWgewkfdzC5udNh/YTPkAihSD0kSgXwwapA6/x4a38iAiDTfkxBralxDczxC27VLCslh/uRvu4RpyfO054dnn/IwV8gHl3H1gRS7/IQ1kjRvdrS/7l8gJiU=';
  const _INTEGRITY_HASH = 'e52367276d863aa3bce4eb2f497c82a559613ad02a40d91f19c5f0edced6a2fe';
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
