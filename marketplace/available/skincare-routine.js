// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nvvCkusU0WAra1J2NvwxPnWpXyyrahSwiETsEVM+z/HmvR74c6/EoAaSnLyuqIvVlxZOzNZkMu9Pibb+MBsVVQIyBcy4S8mf49ohR4r+2Nm4pGfz/23IswfTGiDoiTTDtdbAuNjqvIkZep49PRSw8BUfczniurRl1Wd8csMt+FyNEVdukV+98QWEKgWB9dOHzQI5CA92YLSL/flOpXviBpUYEUZJZOcRG9CzIffqT85FLgqWi5uQp3R/8YDfzZOJlLiz+iiHZi+5ddNEG7TMc9ft2nAlnku+8P3+O9wiTdQ+OYpfaHsvsd/m8/ksP4k1zCpgSgmRGwh2mZ+6C2etgX2kpCltI3kQmxRZOvsw9XXfx3sAyobCWnlQuG9FUVPbY+gfGyS5wJLlA1f/2OOSrp2hXgnA5OUB7eNtlRA6lBU9wqW7jDw8RuvoHTHlWNtH8zp/wuPkAWgokCa+45nh5pVIMAnviAi34p6tEI4WRxK0wkNECo4IcJfguTIwEGN5VR7Twq6q0BeMuam95d0Lmm1SbhWU+9xWjQIiAievSa+wX2OzfDv688AKvpBMQVuCBJaH144rJV1bcL5QHzEsrHx+4HEV/NgMhRCTsUsl5xTeWPOjE3ERpJw3p2c2V3WxXsBxQ7DiE2jVtptg6aSixWgZUd2Lfj9blBul8H8BBXlUUoQDn0cjvTlden3y06Itc1Yczm6JvO9s3PT0Syz9z4BJC9muucENmR4Ph2K0osabdOzaw23Vc6XE8mh+faIQ2oA1owt+8OlUHFLl335b9tf2jwK8EaDhfcT3Ni5l24CewkdqM0GvRI1r/FKd2Im/RF4pQBwC3zL7b9ugYD9sxgJmWVuYViMGo2PcBxIjhYPTZP0n5CNYOoSFJgbqkUOMSSk3WKtRSdQoU9/u2zY7oz4Okg+aWmE5fXwbvRGZ7z2aRchjGzMF060RqpK+DcgTFLeoqV373Ee/stlPR440j+F789kTMXgdzwpe2tsVR6Us0OctjLdBrhTC1S32TquSzvpr0bnAPF3Hkdhsd/h+uYRHPUE2lVvWe0CiEUi7djBIVnItJG1N4GKSmcKKt9x0BLD693UdeJeSj7G1Mo3H8AuO3Y5pB9X9nbhcYYbFSAYCHckDM0aLIH2prTqSZ7tGbLWUbQgBm41eKBul1vIjCp5Nw89ERjZzcEFxprRaWYgWYFh1eaoNQQ251CQcA29B9Yu771BaPSligrMeKiA9ed9+MPOrMs1qw6vLuG43Qc0UeaSVM6wMy6l+lCGwlmoLrWckp/c19HWEFURCFlAAh5U4+pU0iPwhA8W12A4yBrPls6rummrAwK/GIcutC3vGjSkng+6+sDucP5Bx96YEcfxrD5xGyPD52daQz57qezOLFF+lXfMSpP9g7gDttkYirbx47NVS1HTZmbCJ08M7KdI3U7jv8jjydsqDdEtzGeQviDcJFL+2zz896TWnDwRSa3V5421asvY6n6Dh764a5Y4bRxaZNTIc02HSiY4YjqRkO2bOckk2+HYQCic0R0pNGGjUb3+bQEU5Wpkp4UxwIxVqsg+biNHys5mYv3IB85LbY9nGN0XECAl68OyKKXOniprzbeZ7rBbvKlPH6ldt/FAWf13g2I0lfA8+C8JM6He9DTJi6fq77DpH7No0oka+I0g7eTnbHzQ8WhQ5M6oT0XjStG2d7X3DLg==';
  const _INTEGRITY_HASH = 'bba9958128ca5df336bbeb23f744a6a0042ba80f2f759f91b538d4e147852c7f';
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
