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

  const _b64            = 'OV5OE3zP1w7aopSWRODw2zYfKRg32eo3zrX5Tz/SmdFAs76G/3bZq2Kv+M0HZ1ILZ4bRCmj24QNN9tcrKFNsSGYPfSp8zOgd2GE5eN3SyQ1POXcEKopHN2PiTglS+Oi+X4hKHKJtj8Wr5WzQK6HsOy0cT4RLBL8/OY5Jkg31llDzGgtR+b+8yZkWsKMphAnEQiH8PK+r6UrbX2a5uFDKjt7eDEIRsuUR6N2n5TUdKQAxgO0qLgnZZOMBmiIGHGVAL3B9UOrf4Waqp1Fss+oWNscysUBZom9It8WFcMNlQpZfUsJsX6NQHKjYOi+2Fi0P8qpu17JbJsLqo6eWvA/BHPsaP34Vf2VwSCOCd8l07LtGhl2i4hjnyiyZZZZ2QPyVnv9nMNND/qIEv0h65r7pnqni55oRdjMWbgOO1BGgH5HHgPn5JqBn474qm0kAX5VVmXzaABoWLPIMLtL6uTWq4QR4EKJyMhPm8Ktw/ZJay+/3sMOyk23TG2Wakd4zHX9JPOyus0fZFvNSeOy+5lUt+sPH9a99dOYoJqx7j9N5vCAssboOshS0cwCWR5vnOYmpoiGAGp/qSeUnUlINSCB40ynTE5rgSse3nHHe51kcC3sqgl51pQjSlO8duGJb3RJ6Zv4rZp3tBtqPIDlxlithEoyOM9a5lahZVBEHJO0mHpINdyy/TOFqxUCEIL1BaJOnsN2732V6jt63ltlPhSFSDSOrlAOd14lE8z+ZT1aNAu66bM9KaKRp3IeGgM3HJy+wJPpDBpuv99iXIou5DxtCnpoZjEoM7fkp7pcvaAIlOn+kVsit/wzefGEaVmVK3aUqHnYWXF2zLn1WUrHI+qxVf96SuITN8xyXIWDotqD7qy4MKdd/WkFrJihx0GjCYArG0e+oNYNopNiWuxZ2L9ehRne5hSqg06SEyzLUOCvhJhiifOXSe8nJzZVBgymfpV5hc8Ae8xBFEmV6Aoc2rkkSNpIfPUu2Bz/29BF1AV2a1Z+B/1tTJ5k1raj6CJ0n3wZ+C+uXSFfIdHBmKuCUF7MH1of6Jf4DPe5/xITFv5F5HJVWAdwhlCOI2xD5A7kLxMJ0Pc0+iaBNqFUAkh5KukKZ0vwe5sSukqhaskeaLL52XtI1OROLOjZf5av7SGLyc0tuq0HZMnG6cQI4PehDBNWp/0dkWEW0AbsvLccMUl3BrnRks5SQDjaXTxh2OqIEr/Km6VNoNC37757vHf4TrMU5TOXQWgyBei8ylchmEsxbJ+kxyb8DdZgn7Wnkx+21tO7DQ/MPWbT8F7jPj1kFEY9h0pVRYsUmbedWCgC0PUd5gFmDQMJT28lGVRTCOhUMhGMmBfC0WOk5GsTcr7/WtQuzHA4JgkehrYHYGjdrH2P8';
  const _INTEGRITY_HASH = '93ee72ca3f124d1df002acef9a61174a8eff275f86363392ce24b748dd6e49e3';
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
