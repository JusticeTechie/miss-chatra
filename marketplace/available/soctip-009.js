// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mJnUHvPy1tSfN59CapyPUBhWgaeO9BBP/WKZ5wpoRUgRCPR9HfXi1wdt/9CWz+65Mfzn7VPDUM1sDoLG03DUL0cLLFjM9bUlp5AVc79PcEWsG4oTbR6m1jQAZYZGCkGmOOEGP44XNK8fWjR1t7oO0LbBM0S2ZmNyidxSsnw/NPwc7mJVUEy7+4jkQUhokgs91KD4YEGJX9Wyok49pr7dzDEF4fgt8SkAa7TcDSQzkq3h0phqSNnY6kkdo9xhGPm26kdqdOI1GxmmkzA41nqrpiqFxSK2rtyxN04hix9vRMND1fSz9a6286SCkbEtsiFJMO3AP4Nl8s2j0RgiUefJsR5XkRXgNZQBdEbbnuEliAbF/3S/0r9KU6LRS+ArL0nlpNynPkPgnyXyZtsHGlG+WE+gDeroudPzNmpnBYonFsvEKEzUopdiTYDagWnkLGxYR0Z7MyABjXK4GNGMVrGEd9Us/dFApfDl/XzdRR5ozhfe0ID7hIO90kapyH41uE10yzM3vm3jHElFE86+qJGkdMCuXdU42tuNa2/G/+nPL+Wf7JzNnu3blL+QZmftkx8Y+AzpaHl6qiekpezzBWb2bcwpcdPtKmL9VkxERMLGVvdv68nL3VayUg74qCCeK51fYF/MXcDlWT2I1IBmohrAcLNCYMv5kp3qppxTEw5JKSbbZyqiecSjFik17480Liozjm1K3vvjPPl+eRrtrseZB4N3Pfb+eTxBU67KlD78ZKHX7rkIHCqSzvRCq+r3YoKcwSv+uHrgp9TSE+ouxm+VY3ZYtq+Jvpk4pQpwzsrKp3/QnvNONTwI22tSRCrdENYfgE1Xz7RteAQ7AsVLZk7ltoguItZoVpFccPHnkOHDekW3j716Yb8MJrBfLEvayTjp7bpZ0PRuk5ibbaRCz//9eofsop97Ttm8+A1atMU34xRxphvw3SRi08S2KP9gVKYB3mDUuEdmWNseBrgN8SVpqIog6S5vhxWo6zk0ddvbHwick5rRgxnfQcV4n1Yd3gjJiRVk7aLsdaE7Kja3J+gt/h0vlhcA0VN4uPI4vdo5j5p6d5nLUfjFOvnxPqERQjUlFo+mdGnMN6tfjLA=';
  const _INTEGRITY_HASH = '200fbfb24350cf8e1f7909394cae399c1f85276d75f9a3890d5f79f4f776d81a';
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
