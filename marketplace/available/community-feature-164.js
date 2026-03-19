// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jIbshIFX0djmE1miJDXydLzWHO8jejEG/7eqT1ZhnmtbPBTEFVZTyw0iWxtfuKsMwgLZojLXlVQAfj8VvDcosZwioHzzMlf6px26FrVEV+ZMd9I5MuP5gbHSIjFKAJBAjdM8NWNqFikIwz58jlEupTTXBXCUNH8J/0vZnnjULLZfDx30uoRRqFcrKJkdabVo19KGiAkKzUGPMcdpWyT/2JLxVRTCokLKNz9JCvuOaufbIlDwclzdmxNM3gviICyR1tRa3Akmcxzr170TYpctwJUIcsKJ5osG1AxNdCpSjOW1UwEZc4qg6a9ueBeY8KBiUb2davZsiem1EAtFTi2UYOqwQabqNa1N96zhN78qmvctEpNkiKx0Vyglhh+gq+Z6py1splNgi+tsela1CrX61o8Z6ilSbcY1BzfPoC8MkxJlBNSgBGavdasV2fdTBA5dMQIqX0aJWWBQcg0z5i0QfDx36Kunf1f4G+of2xzTf5TU2rgwI2gufV6+NGEUxk/hN4bZ6rymPhFgzLtfnWTJWpuYqOrx1mAacB7TFpfFTsCRSdKcYOTWLyfhgqplo9978PcI9ElxUus83yMBK3tEW4NW+5atJYYgUBibRaJiUBC9VqSbIn1p7LNk+gA5frGJEv8/Ki7sWc/dTzBNPyUxF3m0NK7sQ/Jhhhis4JJnRG6WqB7zh0QhkgMN9oK6XAwsjIkGM8cUk5uCypK02C8WXbePjomNDSeoz4ZomXaKjY9cFUSa2yE=';
  const _INTEGRITY_HASH = '20283dfd25c76256e8e3d6ee5f10a3caad26d7c589c0eb6f4d2bbb5b4d438878';
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
