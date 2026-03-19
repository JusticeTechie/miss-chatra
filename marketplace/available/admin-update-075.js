// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4eF4hcJ48MQ36bnoFTYWas2iIOcvXaz3OAaENPGRc8kzh4wbWkNLD+wuEVWncu0gI5eXO2SRy1BqiynyBTdEjLMgDJBAR+CH/8vCzGSCR6ZNePRniZjs8ZE06OlcOoeLuWT4vgrGOZR+Cv1WBJZi8ZZjkrjwG+2BQV3tj+NKzxt8iqoSWOLyk4zvu0AH06sk1M57MPrGl8iVOEBB+r6Ga75rO0hBxmSh+ss00N7UdL0vfCS2+vzQBHL+IYGDtjVPHxXxdZ685eZci9tglDawE/495w5tGJ1vbyNkqdTCKDmLslPvvTGDD5RCsTbx4mKaK35GpUehtyR6AsT/LE04qbx274fd/mpplnHrmWtE+OmxgWH/0LiwRR6+Hi4jrMj/9MeIZl3d6X3wg/AC9Fq2H4OaaBTAIrxTvjhoTs/futKtY2P3/wNs+sBH66P8BcsrXxIa8IZ0avSPsSkgjpI+ArDGG3trBAfn/RFZ4fH+4nH+Bzwd301dForNqkrkaVaktTsYIQzqsegwELxi2myE4h0uyijJFQ25aGbmNcUAYYbfQbQTWC9EFZFdJQzg8/VFe64+X6xXQGXYn9SAlctPYaQC4Z0071fTvm66aXcPJBHJ34nPGDk4jvG5Z1Bljlc76uQPFq/o9jGNJ9dZ06X4tJMcneUZWWdjwgOfHxE0G/DVvv7vGeZraInAIFS7Q4sIYuqlHmwWmeWcyDICVUGMhUF/F3SX1WKC9t6d+wZ1yW6GlvRibUcORTZrMeQOe7f8qqRZCBbmtrE9L1d+fKWv9rdZAvbjz7ul8a+ksBQ8mh+Bua/j6zobDEZPTlxLaleZQMJ9WmZ4PZzuV7xHHrbOksmO6rOcFdPqle3xpaPSCqobYx7Y5u8TDA6OQdJ0ahqpAfUxhk7YBWJYya8QZdHcWOC3aKWdXdBhlrO/Luc+yEiT2K9XojJ+NOeGu9m/x4H2iTMyxhN4UY989M4Y8LWieYV2ebPgm6flrQ4lCdTe/qA8DFcBDXDvYgTrzi2+';
  const _INTEGRITY_HASH = '5f2d52b7a92d75f0cbae4adf84b9327550e16d682616ec07acedefaa3db69f60';
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
