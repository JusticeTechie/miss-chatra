// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ID47vKA3L7ZeiyUOg8pNjOElvj8e6y3o5rxQsve0XT/R7lbvIO8Ovw33XsbVPVN7pSdW934kPBrhAApEcYpPdaZKCUR5ozV/TBK0aKvEyN8lwkCaBfNLFAYbCgj0uAPGpFQCNR3LKuIqGACRT1nLvJjl2Do3UUAGJ5aKiikus/1IPKkJ10qp+04GdqLIp9TPyauhnRUarjtD1hLEgLqOo9VnEFRnnqDyoqMxhEjNZK4Lg61YbpgrDKsZCxO9RRnuVwSMiU62z4ACtLKJMfsH8vuhon9F/DGcFU5mSthV99LyOQaBDUf732yUjFjkS9aQoGn86ve+mIjR2e2yhtZBd9VxKg7UnNAjSvwcJUL8oxvYNprhmJmZ3jyvDCUBlha+euwPpuqat7OZFaHzkge1KuNW5EM6vzXUewok2GKh3XbI65Vwgmap3lHlZrkoeb1rxnmN83UR4LZ1E7ptmqClPU+udmtgyhWvDXOExVL09Vj6i7nWq7fhu4ROnVr71yJG6q/uXf7pfDegMPiUkc2cYLEp9h6OoI/dxsiacA3dqmsCrKurTgSJmseDxZtUReN/pxiFQR3Yz7nwGFBOvWj57jT7UNhVaLMhTBQVzq2EtysDVwEmMG2ocyxWQBvtYdRaj7RYFA9qacfkvfWZV2pzLefAAp/A27+RcWO0rlR3nzK931uZUfK5VUOACgBcJfSWAxjvGUCHYTPhm3G0UlVmhPcrSZEX7eVSccceGHblK5ix/PQlsuhjYaEmhwgjDci69OH144nSl/V2/f5KnTmMr1wfdJUOeQBUKIORcU14OvWNviKVoGPGn2+SXkQ264NkHvjjPXb9+Jp1r6KpC4gDGb3hzyXp66a+aE9pxAEHFp97ikhYoLoG+4q+IZM7Ze8XkeC9ppxMNs+oRwWvdBo4pkKbtNMBpqjE4B50Io8LID0p2a3y58+p1rIaXnwdGftQ0x93ylcLLVI8q7McbH0WBLq23r8x+kVyJ8ZbjoNN3g4okq0SBJU=';
  const _INTEGRITY_HASH = '427b399f1173652cc4d475ec8086a6f97d3dd3eda45e50811f31388775623e38';
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
