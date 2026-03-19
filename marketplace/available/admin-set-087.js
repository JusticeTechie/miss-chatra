// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uhxtpNoXU+Gm8qMXDGiXAXOMm+JWla5qKANNJcqWG6MoXt6xKqKU9nxx8+15D6mblF6+8c5IamQrFOLSMAPJ6uEjNzLi09zCnJmjs7u+I5bU33vQFiGrzEIOFbB+SKkeYrdr9rh9e8G8F3M9Gq0yfHAbaR2NjQlONRtcem65tNt3Ehr68wgtTYLWS8KWhfksn8uvOW6t1TWIiTIpYci7hX5DPR+22XeaIKnTJiCClBTE7igALmsLCXJ6o/degFcfJDRLQI1DMqONzOQfkPenq0DR+Etdyy5Re2IpJu71u/ON/TgMhCKbFxNL0r1rrEH7fI9HpfWUkR7/Z4tBnmJOjW35YpF7d4+A+hhk6c1g0E7lr/FXCUuxvUD5O4g8z8D5gEOawZDxYGJuibCjEjEcMzoQg5a+a3hvSb1mbmd/UVFwdgSVwlSAz5+an9BAgxZLMQnmRaQUIxJq/0BJbTEp99Kzf9e4TplYPFUw5xJ8eGY5pfFKOEr5mK1aw13CyH7qXYlVHROrgaIWw9+n769bdb7vPV4NPaD1GH5DlpBn/b7teF1tZhE7tAQmnWybyu0N+4sTXoNI3QW1ILPwcVtR/+kZGXDJwfo+QpE2W7PMOL5GkRieF7I0fRemJnVu5rKN8fqhZOl23CmgorYnyhr1z9kim9WxWGPs9rcxzLvHAny3JGQ0X3xJsF1ubsTYCyqgRGV5PN7S2CRixRYSyWxGqaadlgbJYn7ojCFNMIyv4q0PJ1IpFADweJss6JM01/t/rZhvTtikwiMPly9kA2YcgkC5/o1o6HKDSpuEGCWTGjuQpjLx0I/jhI2XMvUbk1wZ93hqDu2uYLD3RGIb2QWQW2/yKXVQt9CKHIi6j2r8feEVL45dmOuTFSB8SDUK7u+0wBRovws+SwoszO6/Po8hvP8psJAtIEqFRIFw1N07VODnowWLf83JLeQUeTpRZZ8VIs1ROLTz2xZHohT0OxAcJkvfpud/9PeS';
  const _INTEGRITY_HASH = 'b99d940d79b5505a8a36b81f1fe08b021eae2a89ce91640ebd2efbdf22db039c';
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
