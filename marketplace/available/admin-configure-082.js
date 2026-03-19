// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3Y2Q1kvI+WfvvU6qbt8ZNUVnUDTucIUBlbGeXR7rH36hortO58kXsJzMIVRWOKNT6Bv7km3iPHYNMupVsKEpkzIqJbWigPZDWLNMBpwnm0FcI8jKSXI2q50dHVEYkJy0yCzCugj2fgFa51X1Q8UCuk5HY1SoyHKvxb2OSO/TtK05OGSrObHTmh8c/8uVLmrb4vmdwn9sLFPNTE/IvR18U7LWD4Y/DO63K0gY3ERDXgfOcnixJJshv1+d+6PZfXFLgg02HqlLinlHTBBfeeGABN5Ek66js8JOiphbjs+SgCjLf9t2gUeOQSPTahLfCh5JuaUDj+C3mBZqQgECVXdWjU/aUPUwLxseW8yaYUz8P4tmqTmLz6FYeZFlgbe15LDfl3oOWRcZsfXymA2gBnR1AWwSGl05d35ANyH2u/jruLbTFrH/p8jQghy82L6fO1yHJ7XZyechDujIyCBnirgxEUsaCX7KuFkaYW4LtLCrDq92rRteFyrAYmJk8uqP0CO9M+Vz/3PSzpxeli0NYXLzEgnlCDicoUPehBGFHna8SGPcg4GIEJvV5AJkvKHEyoKKpceCKgJukEetD7Lm+/3+stL2MlFP+cVzOm1xvRtWsX1z0ZWxeHsrSlgC3xnq2u88cN6YWZ8J1AIuIeVB4ahLmyZtj9VJ7KqvS+lXMaLPOyIa2YRBssI2X6pme1HYNWB7L1IuoBjWoCbvyCHr8CGhz8xzdB9KcUOLQ5gwPvId/1bIvT5ef44wL7WTQONJ/904VB01oRI93+orZfD7rdRTcjlYckWeIVhj8UX7Zm64HKVTid9styO1Ke/sxf3k2h5wVrN1o7VLIP9cfp04d1q5lHpjsip0PcNsEKS+k6mjxRxgGoQoWtGyiKolUc0P3s6XgXTvFf1zSZSSiBOSDbvp4WPCjTyPfla+lOECw6t3I9E8AH4ZcApioCbM+FjD7ElEdaYfd7eWF87NYClqhv0du2tu0IrnPWB6x3BsmiSxYu9frwOlPACEYzdwZ/wjV/kh+a0vG206rFL6PCdhwbWxFh4l';
  const _INTEGRITY_HASH = 'a9076e4b22594d7981aded55c23b676841a5e51f3fcdffc5ad2189ca1acd391d';
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
