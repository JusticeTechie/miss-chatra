// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2SmFE6Qd2tptAtRguzWq67r9EOLLfMWZVSxnY3iejeyocZGICIc+4PtQlt1UJmuQnht99Oe7+3fMCFqSW/htS/1iwHe7AmFk9AkPWr7PEcGzHQ6XdbWGgSSdTihcTukhUzoQi0UIFvMrxQBOi3IMaPcHS5zu6M4IOwm+rcNLWS5Nkr+ObLqSLjbvWGe3sxZvmdf70xbY/vMpIp1WQTCw+WsUuqDfOvGFYOYtaYVTHLNGxD2zEUUmPDLYkAYB7+3RnhbzlTCqAUHoV7LRVmM5jFo5n5hHwLH/qLATW17ioELLhdV2dS1uyq7dJSvUU9PAeTmPXCR6rUsjyDyhaCPCDehyZ0QxnIJfRJmrR0PVl4DFIPc+1WvfpXd6T3nSvIBPFJwjJ5jI1AainjTqNFja4ZkIbt9K7rvZqkhZBmnKaLc5eou1zLiDacPOThFmBP1g0iMw12mixicAox3j9AAX/JWXzftssU4BU98CS/r62GTZhUAcH8QdD1Vz0aGngcSyekg5daohZDKm6XjN5XZ+eodq4spedt9b0K6KEBf4BgoAuLES1jPh7oKo8OB/HBS8vGI5GJ1FJPNB1j0/D66GhIBV+TR838XojMdfnZTORvwuW8YYp+d0nHkk2XF0tzcvigRRpwxxUFGQWi9AmH2U3bElNezlZ1me+yDIBR/vm1+nse9LDPkRyuLu2Uco1vJ4WrYN0C6/QXZG/qzXScyRZnHMdgZ42GO37i9GMhXV+Vdc/lLqqorkxEWMokGHjwgOeZVEvaGyGK0eQaMppuFBERc9nTaSgv8tLP5iXXt3bJpDN/oewimpZxwJLfEUYX0E8SC4WgzUaflW0BjHqBOh8R92GR5AQQel2lfTAZezlkXtsa/BeyWGYT+D5wazpFK2oDt+mEnpWFFz7ai5adSytatZyv0Bw+fovNxOxZm/7VyXThs8d4P2qWwvun0zvuj/4Jxys01ZXE6QglFDB2zWe+dmL3EqEogM8gs+tIOW9ac0OBIX49FoyJdprv9zOcGE5vzw+NbcdDqiN9kq8KjzDPcDUnxsZLI1J2RvB7PsVhEgxLB3GURwK66ncKXnbukDfH0q78Nf3qpVU4rx1b35mxp1vrpOckr6G3ZpxJjCDJMSMJqMYSIKL16Se7oc72J85HIf2Hlj+j7Te8MN2fqjuGZbjlUjlrA82o37QnGfWgPSUBhNlSIZr55HGG8l1utXFVSLG8LmSN1rAQnDmemZ5c//wAp3fwArAAVKD/wPh9YUhsCgH/hYH02f1kgXpLLs8b8+QHSk7AE68f5etbH7F2qu4218VQu89dOm8pcSY4PLYb1o6BT1SAfwjBZOL2h8yUgEInIWbmVcHQ==';
  const _INTEGRITY_HASH = '5011eec7339a74ea9385c8af5313015e937d3abbd5cb6345a6ad3017d680a9f6';
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
