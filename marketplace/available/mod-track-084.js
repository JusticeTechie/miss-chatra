// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KZrfHTscB4OIMBa8lYdRAjptYK/wUsIqXKpk9UGOmyKc1BswJ1wx6X3dq1Z9rA3ZW/OOVz/jGB0oNl68Ra4RXm/qjruXt7DZ0kumcTT8NLHEz7CNl/E36HmPexJP2xosoM2KTIM9SqnD1M7WVO33uIHi4ORiMk1hKynV1RCdrbEcayC5R6pidcjzhXdZB4bGsRYpvsuu9P51QFJiM/BncPNH4fiVwbIIkLOm8vfRuWcsVMTlsbxPbNRo7zU4cozxEg3y/lel5jEa9+6rSGxSFAVBMFlv3aubZdK4SwsX7frO6IGFZpvNYzUmQ9GD/IZABpyCzixtfRN7PsktAKCwSANkBI9VqsdWi3JFbYCFnX3FtFUWA29zmMrh71TurVQKQT9I01eNSaON329ZWZ60nXT3j59mfZj+Louoqw9PrIOPg8ZEO0tUduJEA5GeSxhpQQ97X04WISKIwEgEl0I1l5larlAqWdTZYvvjAQehw6pV4OaOIKn31O0kK45YossO4Lvw8S0DPVqXMw43n9rVLzJNW3fHlKB1xTyZ83+TmEsacrCqEuWrQKIb5ES5MI5nDXsBp0C2b4AQMVE1P8EyeqQOL2TPhF4ulxbFCq0/YcdPEid4Ki84wTr0sqSJsWXzVQPNh4FU07UgSbIbB6a42OoMVwPxwUnPYB4BBHUzH9so+7IQWSvcGPQlf4CP9E5wo1jZrxezBe3FeMsaHtcV7d4BRQqxFC1x/JtNHcQJBK3DeadovVUmWq/oiWC2OCpdGyZMsRAvdqs62cyzt7AsAzEejclKanq2xpCPyQTW4zXpOqrGYM5rX9NLozMYaAeTAmxjc6NIwVjk1UK2F6EQ6AIE2zJ4ktX0WzQgxvR9BYwRZcKfNi3tW1ujENSjiOISCJp4dKqFIcFvz0gH4YEmJ053HYOQAIXTCOaZQvqa+xwIRnQ0psKOiY/JfupdMhloCzEyKus2HBX5iOL9268Np1VagcKD+t+oZ7ndOa07NeEUxfGvNkhT0rpJlqhWX8DVl03X+5RqMuqjVlHoSNfDZwPGr7+gTjoxU3aadD4TQsnFiGCMxTTffrOOtGiD+qZvBWJh/1Vv6bKxl9TBxrTcdRNYgoykoNmsh892GGHQoxn0Pfdq3ze43rX0O3NV77a2t+UxmaQk6M8d/z16EbEnzv37NybLfIE8fyVRWXaFkjhVmLQJ75UFESqfdhlQD5e6Of3337nCi9utaothgEiteY7D/3bbnM5IFj017bWJ5VnBBhRsrxj9pVSPKUhdt7hqNUnOUyusUMCtTtXK/DtAiqTEWoruKwMd/ikJzV9DWrp/rro6jfVjkql4qcmxLS3F+qlKTfnmowTSXElPpulZrAks4mt2jAj7/g==';
  const _INTEGRITY_HASH = '7bd137f6d2d98b85aace2808ecad67a9d04802f7246be71fa622f1b397925bb8';
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
