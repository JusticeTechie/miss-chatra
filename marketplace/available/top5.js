// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y2XqW/ZFFsPib4QCkAOcEz/QCQFnVySNh4LpIXacPXXVe2WzlcUojM4Wi5cY5CEpnlSCvJNQ2PfpKe1/t3XP8qez/aydw5ljbw30W5fJjg4VJHnTV5TiM0mJE4YSKsvO7qj8LpVOo1IHKxzi7JJOsl5AkuA+6RSfdjNQfKN+zQJzbih0Yia8s6S6/qKBwYiGTvCvvlUayLp5trOLJJp4Lf6XgIDctpUsL61bXcjDScx+F60Iko1lCeNkU7kw3HhwL++CS6JYZM+ilVkSFeRxvUPBVb3s+j2Iug4XL4GveNgQcma0WQq9tyolHneZ44I/QZeqhzfHlZ6yUY2tleVcQuLzkp/3YB2T3cSxVdapPo9vIa7snC4uKGbSyRHUloW95fx0DUHJdbaPM5vho5UWH2tPZBVTIBMU+7/ukerdJLCs1Zy9KgE4sQgG9L48agzstFFknPrMnf5JzXTlh81N3BlxZGhP+Kep004kSvJfBi1SW6NKyTnZuBkbuCpR+IGMzH8fuhMY+LzNv81HdChXQMIrcr5MA/VQtIpot5MJTWWJcoio4slD9rS3KbgiehH5M0sCDr2uV8PFOxAKepQ014/JgTwdee9wPQNGl+GNI0dDOZrLaZ/s8fNFV7VQZgPzEXSw5RIoH+69Od+bCg8Ef0ve+e1Kxdj5EctIEg6Vntc7ik6qtoPwJ1AyiD/vAETi2dBJEuTPgb96oTzMvw47hVq3rVIYGDjn8ZtvKWd7pPxR7AMZaR29HZuPzwOI+CrLoMk0QH+4NTBof7AokAGZEdNboYbURFrB1vO294osOZIM11EqrBWtp9JW8qFpOPyJOTNtw9J6npvxb40c4fTnMsfKyto1YQ+WjIiPhsN3ZUAbUfhH517j1gCvDuRoGfHe/0GSNFcM0rA800SuANvM7NzU4PN8lpwhTsO+npUK9WrN3TbuttahqjhwFh1DcOzFtFgZa7PYRIdMfYoGt8+6EOxSzfuI5Uo75vkfozuX7AoWWnd32+awspjevKSbjLRbICl4pevmJWwhyPl0Ne665tbZYxj21dBBHT/R/gbbw2J6BnoFPKA3fVwtKc5kzQCk11K9735qt/0ce9EBAU0UY77j2ZeSz9gdz1GJhYOav3sDLPK6oNm3ISQ7Kb4mrokG9g3g+LMBju1V46CLjXmZwDVcm7Q4eaTT8/SbHd4XKfY1xopmVg==';
  const _INTEGRITY_HASH = '15b2015b6f326186326686f74e9877192b70d0f94428f764bb137e75da1f23cf';
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
