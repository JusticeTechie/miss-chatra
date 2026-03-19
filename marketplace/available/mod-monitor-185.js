// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CBxC/z5HQ3m6Hmit9hBp6nqYpil5l6W3msTWbMHF2S3rXLIeEqLev+pVcmpo+7LZf/6wrvUzteb+AuMFQ7Cu7136DnbNGN247JPxh9/H38HgO0nR6jkhnsLxuWgonlCzFtOwRyWbJSdQcJHN1/2aC0Ddd5wXxTaLelz+u0g0lUKSnd60a5ezDj6oj6Bq8gyY4uonKXirxKrOZW0Xahu3J0h0d0VAL2Wwmxv4FTXyHIC6zlpgNY0l3NZEXv3C3W62R2TTphq34tyukpDUh06rTNFWJq/gne1ZbQpmsi9UOt0PHEh1ncEnwiNqxXSJU+fIwNvbFRitEpJMOivPYbrqnoQidO+gk8AWh/atEdmxrqLCwfp7OgnatRkyAVhKdEhD/t+K/2XbxqMSvYCeiuqX+z6gzimJcybaw+3uHSLL9PmruXKAyMSE03Gt0tJFDAeZ6ENh3IjypzSPtBM5CU1C9zAbG0dEPFao53G5F8LMf1TlIpk33UbTtmNO7J3pRCCbk6sIgjU0T+B8onUbsbJZX6WE/Hd8yyIF7hJnXTOp3vWlMlcF0DvVL76NngtCkY9HYXbCv9rJEmlTUiRtAYvcfGL6Quvs/obb9iJGbgLFUP4gyeelRD5+6RwlmQHCrK9x0LWfk0BBj3at4gNisirnKTP42ismfa5Hne0huo+g6KXgeSCzUxahxxDKzV7vsfVkn1rclNxYjd0kBy1uuzLgd4rlAcZfJowExeK4JzQkDrks0nLPqO4Okpcv71xgaHRKO+RVSZ97eNHOMNsKuMhN/cg/vEFLtqnRa/Cgmd7aQDTicqWadb0gNgqhgmdqwEU3LSYXGJEGo4kz30LI1Ey8Tdj7HeG9MrAioeT5F7wkLOxbSwT/QXz/fPwmvPtj0Zh/C7jnQB4cAcEnBycL3TG4IhSjCn4pTxyQ92/bXTykgkkLbaq4uSlpR264D/V8yBhZUa752x/WPLNfb1Er9m2caidlekW1WTLzgcCvbohRo12yuSasksWJJg/lDUi8O2qqTz1mwW0GK4kBEfI065x6A7rEjbdG9l21dquO8IW4Nq5uXv49LediosCByXfKD0MiaOE+HfZ2JPPVufqqfRWT8BRirnA0ZlQEhwK0Quo4gWe8n5h0FqbF4heUdMTz4i5sgb7OgXJJaREobOjIsN/7f1kt89DOWHweEkHeDWHLXig7oK9JnxZAF4KidnoDr+aueYGPRYAVJX8OsiYUefupIHWpyWlT3766PgUWBGEQcIFBK/24W3KqSHwma7yvPYkqEXk+Yl7T82FQvffuZtVRI0V7P2k0nOqZRsUNYcVY21CtMmD0ih/6xWqTsl1I1WbnzYvP0nK6fZYYeaOHN7rMiuUv3vvAO/4+T/7/NdITdSaJS2SGizWm/tpRteaCoHX8bDs=';
  const _INTEGRITY_HASH = 'effed961e437828e586d598291973a0b2c01269eb4b317fe8a51551846a158b2';
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
