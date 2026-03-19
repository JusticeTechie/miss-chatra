// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iibyci3HwD0+2/TwPw/rvrgy1l/7NgvRhN2S3MKXKycRWLD6G/ma8UmSRpOsl80o1LhxF75Z2m37qeZrgyN2QQ2LPe+C0y0O2sUnqsxI69zJt2fwe264PbS7kadLvhEsJloshKHsKh9DVXrF51bHvevXwru8Uos/K638MMNGBCEvC9uO+EFMyM4Av8D0FinkfHWOaxqVwfxaB+dfYY2Lfa8sw4XSS5OvvjA07GQ55ilzVAirHEOXyYR+jH0qBbi00Dtlvw52na++/dJRFuwJ1arAin8JGC2cpr82zXobgm/JbPdzOEKF5+MzAMOfow+qFRHL2IZEWYzmw9Gg5O6D6PfV2pziX3miR2k0F0xwhPwurEsG9avJcq0QgKh3uy4lhT9UTluapX3w5H8X1CUheuVyPi/TxIfIyDH2+18RgiOR2mzWxtifL+GbciGPvf6hKvmPKIAuTDhcmWhY0g1Aoq7KUhtwlsKjxrF2mjkHWGOPjrJIF7EvJm7AEiVKYu+Fhy/WBzCaH+xCCiEgekVbri3OYC2Do9MtcoHSAZAWg8ku8yujfEYuTfw6u+jjxiBd45BD3G21iu8E1h53kX/Hjj9nd6F1UL8WFCP/Urt+K9wPweP/HiMxagiNyAoHl6Lh5i7J/ZS4tHWYj8d0NejwKHwAmNLUo48cwVL2k0Y7gmAFGB7FoHx+7NsANyh54gw/gzEOYpiKUUTG/doNeItuJrnV043VKDdwrnRf2aGo3LKl0TDaU6iNjPmbUVIXOrD5GppySpmgM3M9PIyREfmGRuf8dag2qnYq9GYWQ55fmUEMfYj6h/GyGjtAmHWc/RwhXBG0uI1Bx3DP28D5Z0V1CR5d9QbWb6yLja/bd5Sccrb6jYxXU6jQ1ayUpE5W+4gjJilDYWL6jSuI608VLGrSS0m/7qMaJaNnV0qjWaZlTydMnvp9SXpNRJFMneoUeWIxBSo4avu1q6TOgMVTe1uTpIE2TigKtPxs7Rs2l/1dh3rHg2fyOy8SHytm15wSU9urksHiR7mNFEQOUdjGMo+btCEhwe/7vtd+VtGOPor0oATHKwQsf6pPv0vq6EylV9AFVc+nZthpDpdKpDFgPBEmsH7q+WnDTGIdhLz1WpNzxjSV9W7de+8lR9b4PqjgkZndK2uPZ3vkqAIFrTLgFaAKTwGeWzMwWOx+ZTrjB8ESJG8NiTUlkB8nkS6TxlawCRkp/+sqS3TWgMXiPsK60Kk61M8b3y2Pg45YwPjByvAUWxtx4tBtAoAK8xtQulBymph1rRkRkejuuqSHLUWu1FMTIFnpMQlvrwrH3ln/FGcSdlRYk7Jc8dh66VuVn1Lvj6N7qXFLOu7A9jN9n6wuLLvI4tNv+mZ3wtjMhcwXpF/5Py9tl2PZrWRVaZp8F7dPUvhZwVkwOAxa4i6bcH+d6OWjdsFl9TFQpd1NtlsX0KPa7vaLuBK6YXTBkr5hvPJU1HF+YsBZ9WUvxXDC+immPGVJ9laQgLRfef8EveB6TfhjASFmxJhciZobkccgKqbdmHZAFdROM69ReE4thH0lQmGwA/mq/XKclnAqLfHIuU94Q0eOiWbn69qHfkb4vv1HaNuThBkj892ECAjMYPuoZJZEdo/KgCpjRDVWUjF8P4rKonqBQH+beJkFdPav6OdgPxdyW1UZ4A3+ew==';
  const _INTEGRITY_HASH = '87cd00085dddcfa9ef9f389d2278b0a517be9add50415ba0a6a664afceb5b0df';
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
