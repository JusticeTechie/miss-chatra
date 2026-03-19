// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'auh0lNap2eBLq2KEQZqmZLZOecabtV0of9j7tJwHVd9LJJul5wGW2y9Gp02Mx/Sq9mjDJP6bDzeROzTwRP88BnOLybqqVM0PiyxQ2J3pY74jrZp3MB502o3oZY2h5UKDWx05EqSjgx8sH5UCql/9ONINyZ2XmJ7MqOXpNlRXgXFpHP5jO6Gb5VXuOvfOiHQJSC3FeHmqc6LVlCx2kvD1aI9OiSYeFLp39AZf/LmPOpCGxMXdM4pYVBgaKcWhD3+Bf46PIYhDfmWXdg99EihcPF+BYiLNR69ewLDOBMpDIHjI8fbmmDZrrU11OQN29J+tkcqMGinSVdtlCEY7/KqVGXGTMpwIIDQeh1Rr4kjuQbcK4n+j7LMvAUUIzxhnDGZV718ciy82HBnFiQTxIH18dElYyf7Ti7JlYNOghp5TrxLb9OlvIYJUMRuFq2Ff7U2XSxA1jnB7BVZF/vTrIousaj8yt/QGjqz0Msqx1XtVdlzlfOMKG1tGVJCAnCaedh3iqYkTECvuQ1/Dl+dHsYq7H7cDJhsZQFfSO+9cImbjozUFdPYNmhSiEEESKN2+ZMPa5IrrtiRqIBZvZ6/jNM620kkjZFVapCScD8/t/M6ibr+c1VBV0HPu86pAYiStLOETVJwgZmS/LTtE6qfrG/xui/JjuKDH+V8nEfSCDK9cVYHcok/PyW9ehOi5fPuZwRw6uH5j4RtieUZlN+dLp9PHPAfYehrbMDOUrQ3j+cVy/DTUo/BpwFP+W0kiv017RocEpe2PUQ3V8y6SjFay0Qz17YC7/SN9R5BB47tWEBgmpzxekZtOoiZMVAZog5LsKXM9bt+ovmjFhIEmRO/smwkMMgRKVSqgcJQ3kosKcESrPujMt2cL+NoCXm1bBEkzyevLXUSCoghJIDRgbMsioKQ3yzPzhNSf/9EkhjCigtCQFAvaek8fPVlGr8+9jdDtmBSc1i4w5xjOULcE/UA9lYjzkoqhfFKeG+ZaXTQkf8W7vI1OHoxV5S+F8IO6S4Lmr1dWtTTqpruYL9yl5XA+spoMCKy2ibRW8aIVDURSxvI5xgFURYiaBEacciLiqJMFJzXN+Qsb773k2V2OZSCeNQk047leQdbeNP0pIpQ36nw/qE2ECINqB5g0te+mUwZK8iYov4cA08hOeYqoCYMTSe3VQ/MbhQJtWvTMm1VloFqrtEtmnUbXOoRQM7GCVmQiVyWP1d6SuZdI09L3gL0JEY6tPiAT/bAFLV0ZZyByyEQ99BcyRP6xQMcuJXzq79awdOFCB3a+QaDUsqMzwK/VHtQN/uQTZQ==';
  const _INTEGRITY_HASH = '29f3a7245e2a9ea9d8dd4c7ff546716767b0fb8f8e1516ba5899ec3ace4ce47d';
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
