// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qsvcxew4rwClF+xNhO2MMJVemlcqnSV49i06SLJjgWNms6I7vYbeFkubdVoh/TLE9nRm5Jt2H9bpcRdLYpXoglR7hhAxYffCISNr2cnBoU7Uf+V9cv4KqBA/9wegwuvcrQw4gpmAc8jDYtlsqsaBiu2FBeR4wj64kOO/rkw9Rj+RkXgyw4eYWfuLw9JOR+SvKCIdQk/JfZ1Rprr8O1cFsB9wyGrzw6IyNYN4EXnivdcbo3BGW0xjDAK/YmFd94KYY2YwQKJbooJK0GGf8mjXtHFgtGCLyeFh+/Cn6LjOSv5ZBDgtUugAcR+MJtCOQofJYh2qvZmfu49sv1ceBn42CUcPCFTP8YCy40K1rItj6aRpQ3zH9BWRRNdNfaDeNvC7qb4DmJEpA8dB/u0avATm8m1itPaVh17xZao91GwcoJgKsW1ceOpbOFiLD9psoDlqRntvKGJAhxAXbgU5prHU/No+1KDzv0JvY3oYcvr/3Kq22yTPPbqUHFh7rs5h1Vz7yEPwXIj7yUKxtCVOQcr4k5wPRIFOGd6BhOY4Aqej/LHVg1gxu9Dzlr6Gej7ASzTsdS5WsCjhowuDaG1BalO6tNC9DwGSOAGUUpT5fNNYV2Ndr0edoEXI8alKqHICOgdKLygr7Ai0MhvmVafX2oO1HVxck+ujVPyG3YR6NYHMPoldzOlvTPVzqkS4244VVs82i+srJ4tQ81DOdz+eSE/faiWCk/msuqmsJ0pkr0OJyoILhs5CEHemLfORTRZm3MjzHP1rgTw6zOb4GjSf5oblWelLMjGi3jhxVkzgzbcOGaZiNZecBwXid6Q72/Jpf07/jENrWpr8kcR6raZFLXyCom4OH2RBSMztinEGMbkSs50YaGM9TTgeYGUoX8aLAGX+DWvc5n8ZhOqotGOXye/bARMT+fOlLbEM5Y8V2Cpr6kSN+qbTHgMhV3N9eEo/+aoPIwerv9Rj83WF+vaKoTTmpKtw0F1lDm2HFJlTny2kiHlkaO0/1ea94Mf+mvBU';
  const _INTEGRITY_HASH = 'b506c137644bcd3b3bba75b604c1995c674829b0d6875990df72f66c940bfe4e';
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
