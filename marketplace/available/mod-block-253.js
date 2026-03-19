// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd748rE3BWUqmc5M6OVMI5c0Be5h+aonL5ByJqPvqVe6/+HKrM/FGPxj9kk3IUtlx8nqOnbR5Z3ae7VYouhm5zswFPrrLUAnRR3OnkkUneSzKC9NSrYExK3IqYL/BIpkUpAZ93pe9NHoXD1F5stEdIXhiRYcFF5JBhIEN6Ar58kMMP7ND+b+5MyBakDBZf1MtS2CD8Zipg4UCFRq25LXszIPlIgIauLQ9u/Zcchz+fMtTTsIQQK6mrtsx5491zkRbWp9p0AL6Tu4ay1QaEp7CLzc+JQXzKn2zisynGRgUt7MEYe8KcMo8ekjNAL3YaBO8t7suQR031NsBHWIpvflXgeklwKcf/7digv4bLmMkv/luxt+kgKKPPuqiTl3aNFt46TiLzlPuWF29P9cnUIgWH5JZi5leisCTYzzHDJcuqIrZc22s8sRlgkOaaBt3RIraxhn561zlg0SP9Y8BhPmKyRquYW3vK4iiMmxFVjPoYFGuGWy/D+lsnM7rfIUBpje9jBIzGTaiUEqlmbexKwZgRKBFbWKvZxjbSxAnyUgYTaL47xsnRiodBTkWjllzieCEw7n2UTfQX8HmfhgBh92WY4mNq7Drt1P/2NaAx1wyLZP0GkE5/YONwjMnsB/jO5iRSrq2+jBJmmNRf9R2TAV52YHZ9LGHl7mTGsx/5b47z6LWuqCYMOoit7BMm5yQyY1QEYOn02ipInEhjnXibPO5/cjNFRFNDkD9wZe+/E/0AL7A0rHfWtjZMJUuXwekRx8HQ6E+8WF8Bl0Yh77ilKyCLwHJ/x8gz2UlidT3rlAekaie1kkDFqWeDGVJjkhjKRctg6KSILP8uUp/8sMxhfQCafoxLJCikvC0UG3O16u37ZUFh7z5JLmnNiFMdumX4kj//7P8fA2N+MUZPSbaFxwvPg2VyYtfcZ9ectY53lIrHN/YDbE3N/InaAJ/TQvIrXhv25nZ+lkKyVKX4AZzcLttjXqMsNN8AAiIUEjZq3VzJX8wA6W34Q3pSnm+Ie/jLaSmnc8ctLQmseOThSuJ26zoEJDHFxUeJ3YRl1cwfXq0ySS5ml9iUzYtpVAvmjB2YbU6S77sM6Ri2+cYfE8gIWbbjWaZKgmFow9ecHL6PHyPGAnKNgzGkT4PQ40fbyzLOJLc1bO16LLxHagaUKKEKU/sRoQmx9x6HaymhRGxEbhzUoSQQ9zk56bEBOm4oTNA2yYTls8GUYwtdCHFXkPeLpeP4b6fqYHY5nfnEFqQ7a4PEl4Jjvy9JkiNkaDrrW+3XXr7UcQAWQN7WF6C76f3dl0oo/FS+Hf1B83Wf9TJ3ADNkzYL+8AmH3hJaM73nEcccrxw94UY2a4nDaRIbxKPm5wFh08vrRbeIlnQr3RQgn9N';
  const _INTEGRITY_HASH = '0a177e6326f85e094a4b3b875a033a4826ffc8e73079b086aa514677342bb63a';
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
