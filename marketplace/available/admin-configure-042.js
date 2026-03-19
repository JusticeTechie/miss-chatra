// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a+7ImuXq673+Ea27afm4+zr4mhYpTseg1f7t/Cca7iZdm6KkG2tt8K4ZEzfVJeGBEmbICgR+DW5rMq0jgKnsEr+WpFoZQvnVTCh+6qNtNi0KTomDVGR9+cMrpv7mLJA2AhY+QYERhbfuS5b1t0CzRCJ/tFjVX7/ZdEvCBgKhOf35yRax7v3B0lCsIDtkp8tmSCvzsMO47fD3C+ZpfjfjPeqRf4Q585SM+A5bfgtLJ22uNPOUqTgQCJ5MOsFMrSSIqBKrpIXoS2ufpQEht/3/7k9xfnkFJYXaH3xkBoY/UTve+wSGYn0s96iaMCxgZRhLID/0L4HDUwpk4ixz7Zj5oSIaK5+LEnnZvLL8/mQKP52a4xYwG8F33vxSzLItkDStv3r6PgTn3MlxHI9+cXTvo/uDUnLJ0wRVey12tsuJy+x3jH2Wf+VKbFX5f8JZ5kEg4kVbjY53Kxie4qO7f9KU3cJErnAw24K0cms0OYUmCQH4YiHuy2M3fl4d+J5d29JsNGDqsO5t49NfMiXCE2kvsHVMPX2087gZy0VDX3Ax+Z7EpGBXUkoOypeFHCLg5Ik0N5iXjeb30p/zHLwJDw3TflLn7nZQejaa04cgFdpwDLbE7yarRnu3Qibn3J59k+b8xZImW9s6GcISqjFAgbWVfe08iwvrzHhNRgtFe/2Wd4osaKukQWFGfIl08vaT03RQcKavXoZtBoJA+H5cH9/Vhs/AQGBVC8HFgrF4e2lzad6dCU3o1flwJ0Bke7iSB57rU6cIP/G6r3/bW88pKwqW62pJQvVwFpSoBLhYiGSrKjYe7fnqsHNzw+L2WLa5TEMu293QmxTR/kD8xVGW4Cu+iFqirI0UXOCvBS3yuqS5knEQFKbFiGY3uADBEgeJwR992o1cdWXnsb8o56+ykxDEKHX4BT1otQ/pbiiLyBFy/xwxHHoW3h44FZGAvXGBdy07aFK9umielBvpSYMiPcya6Z9PLleG2aUO2/H08ywpmP9pw/oocoCiBFiqMIaDux/07QTHx8O4SSE9zBVqm5LCXrQD';
  const _INTEGRITY_HASH = '343ff80c7481bcb5b83f8754a6cce9c9dd2a98a04d7f0174ff6aa58ce56ac132';
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
