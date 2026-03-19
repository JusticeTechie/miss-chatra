// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tzqRXuZ5Fav4Ubtsby9yolWHqkdbySG9ma69Kzi52xc9gsgR3RA8xHstsIqSMJ2hsxD/1s+13Ghf/K4XffQpdbu411u2q15QYZemgp4dw/cdas7LVNh/feISwqUpWfzRZRhRgGjiHKEVwIukDOR0RiGgl/qaLsjfXaDu9Vp/ZYST+irbG0HCjfVM73mEFNtmYa6FVYl4QvCEl4lJqANLeGEmDGHDpIbLjbXxYhgjqsCvjzY2/V3mSwnH6DAWp7LYU82GTHPpZqMGRVlOS15jV60e77QY4/y756bj4HF+WDq8lHSVEwE9xvX9FdTayUK17I+0SitSBHzsOeqbfanEbwviCcEj5mvM/ZImP7D2YWhmjxn7vwemIVHafcQ6HxKgvdl3ldpSpghh1vTD048xAlRmyQSz6X91hEBv2B1RoFo7mQKoFJqHzDr7o+CsHueE5D69V2JpSVjCMfIbGloZvIruAizJUUTjfkoUASETfSnh49PmcMnU65rrcESSMx72BWK8eaeiC46p+7IUJw1sK4aHffNWXQ/3lx7vfjka+zLTf0Z8aqYtOPCECdgHdmpRC+O9tQdvDO4ytXHwLSErL55XxODaTUW/CrgWzRtG4afI20/F7guRkNF0uebX17ITDwQtqWZ9LqWVONxPNUdGeBCgjzqF7npSwzDUSKwhwgImw6NA84UfxauM1MVH7z33+Hlmoq8pC7UP+RewZrPSe88iVxiMlomO3OA2S5pJcAcMgn0MBXMU0yEj5xkBUJxOKTrvS4uRjKum8hsh96YJkD+pBppSoPsqzP46joozXK/NruKjBbuG7uS2YY6kBb8lw0MatWljaqUl6v/qNEOTinJ6I/zf10XiWea5JLt3ScJZrkFfOSCnF+TQlILYnxSerjwI76eVpsIF6l9leBEoTwE7UcCbw8NsKOVQOluk4rbosWfucgezqDW0YUSicLimKP14+nmGtjEYLARlJmFi3Tdzeoj8urMXx/v9H5QrSV2G5SV3wzd0iaywKOX9+5/OKGw6YpPhMWEENufUSiDqJxXnZ40yLDb8zTzfrTbrF72f7KfLLxzn9bHkgpyW0YpNr8FzN9CUlKnLTGCE5PPC5uMgNxPolYXhSSsWIJr1JOjwoPjTAVNi6Api0LwUsvJ64gZ0/WaZVWgN/6KchcMATcHNXtcwww8MO8V59sOCGO68GUlnvyiGNwRFZLNc7eAZ/84M4XujAvdQizDfRmQE8M/zt7C/d9oQQgBcb90ZgB2AoIdAsAHxwcKCASfXllES+X4WJqkVkeOE4SVzAGBI4K/ra9o0q3yTAS1WtEmsSSTqgYKfIhWEeWjjNl2Cgy5ERuXEP4g=';
  const _INTEGRITY_HASH = 'cf1e4befd886b27b8373960f52f48a144dd109723cebc7491399f1852e1b5ffb';
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
