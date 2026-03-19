// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x+WKTRLNVdCR03TXo6siq3xBZenjw9y9bpBj/sLDaiKTxkh12VD99qkakyN7hix0vMbfclk25tcK0fqadvcL2GHINZLdUYRFNtWgAfAlT1ru25I5ZsLh8pCOUUldnIPS7Xa4FPfavfy+SETfJTmUcTm6QEhUtx9sNiY/NsOMIY/l5s1I/pCbUFIgq5cCHZyzj6Ox9rRkluOnMsahFlpryyFNcAb4RDOtrtVe5NGmAn1mlL39d7KJr9gmtjUaqipEglZ1EZuYZdQ++R0F8uPzD32ROI+XzbLlwb7vn04s93fpx8T7+sTBy88t+fj8RwzDy/sV8ZRsByyvI+Attl/t+8lslIZQw936nx1hZi2hzgTm0zmI73CS7GcREcyzy5ccZ0iS4WJ5bTNnMGPeqj56+NsGhRit5HW6J5YDnR9L/psfj0gRil8Fpg/aXCM/qGrGpN0xU4WUO8e0DgKmlPNAByXkRylCxG3vB5P12d5z9502Q03u3edCoDPtBQK1SzAyKmS6DMgLcmTFAkuMQu6uZZqn3KiFf/iSdUTOWpUOD5+qCatwUVxia7hfPA3eyk/DKeno+26M8VqUQ5/5OWCVYwshX5qy7ScCbb6iUhoY4Vfmnx8VRRZXGufSOWcgP0UtVxFknx7Ox/1TqE7F5nXD301L7hURFYqfXAc8V1thSoxL/yQlf6NOQQxvSFbPctovmRP9xpnFuS91jdaHPRcgMtNMllMmB0b87G9iS67ssPQSCM6IsLUG4binvfMDGA/85GJhzxUIqIluTcFsA/8gQSHm/VEAtRzFTwRGaUYcX+WuCep/IQt9Y+VQERBHQ3Ku/GK8N0/T0giwVzEUrM5ZNY9QDgegNPV7VZFoKBxnenJmjXEa0IYZPtu5WUhHdFtH5MRMqq3gkKrVsLrenk58B697Dccajw9G2VhU1LZiUW0YCf6RPRgBgsy9rY7W6zS5rYTCOOCgv6FHAP16+/XidmFpkdgBz8N+YJYB9xFIm6o/j2MfQVVt3ApgUhnbAuVQUIn7Dx7aaivBAPEY08bKlSKrHvMobi9voBhSDP3XWDrgGRujC+PvxS5f1RGeIGsrObyjftRJe5fja2T3oM2ldzsR1eEpsxdG6iCiPq7jSMasmi/ndx4HpYPVduRdJ3xFBKBJmGPtrDXht7vo53gh8dKfTqOLFF9QYEM7JQATm8gL4Jk2jEo6Vq2JaBI313/dP8VOB6zU+kh9d5it+lKLP+Mjd9R7V4q6O02A4stQ5BDANO4hbgOBweqrBsrMuJ0vfyOm+0ED/0Ne9edqM3mb3NEGZogUizrY9jpTwTcLfcQHzIEbGUmg9w0m0fOWzHRowFn4fdqQdhyqP3RZJoNHeExorZPcNAnIHHyw6Pd7';
  const _INTEGRITY_HASH = '6ec055c64af3958ded0d58104f121db64cd48ba29de9f8324613a6d1cbb44063';
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
