// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IpUFRoQtbq7UQl94FamU2/nmsEEOUKGOP6hnjX08rjqsMmEHTGGZsACK3hpSUOgb2lxY+L7Bg7sNA8Zp5wTAyBYfCTQZrtYdXqSPCpkJ9DY1eBlUxjlY5Icsbkbp03uUZ5PpX83ELfbq0dnJB3wUgripJMjp1BrEbgG4fmizSoFu+qaAEwhP2tP9G4mNcBcVKLAlFAPZvBzNgpkN/InBT9H8K/WwtAvP/rbe09uwZ0TG4GDI94hifKnjOdIlMnZXF7v8fhGytmoKDSCyDVXxms2RI7w7oXbXeSz2yIyvPpyQWDr++saR3g9TbxeqaW2phyRiUjLwstcGlBQ7dkaic9EfEabDBNqfO2qDEBkvYvdu1iPYEJ0+xA0gWdq3zN+D4ntsXTS4txOi52CkpEfZmoHsj0lGVbUoYQx8phFDaTcNWEyikp8BO0EzlPI1vC8bGF74mVDLnNupmHcJWxvg1qwj9xW+Qd7DhuXPUIf0qtWtQi0ER3yOyaxm6rKR2e9YXUA+mWxfEi4tXHs1+c4JhLsPCmxg8SUeBtxdAY7j4iJMtM2893mVrEGeb5b81NCVodKSG1fCxw3gkug6SwoLSQLHFLo3e1cSPsS0LNn8S2Lhi6obnwimn95bBOYD4chNmLiyWX6QJ7yR88M+AD7CL3mHhbqTnd2H9cj39VBynhS0OqyxcSB8Og6u41OyL/dpS3pJ5ZJ4cqLCPue91qQcDKOY0JocnYAkhOD5dAwtueRE39AaE2rQss9nugN7SgY5ZQDs2ElvI1f7kk+fDLFSxv8DZn/s4ujixJK+IDXd2erj95ZyjMiNf1+2YNtHwHmP2SKmJhfK8LyrvLInyCUnhaw0TeqWg4iEkxxUx81DNIS2QqI7WcBIxbESAshOI2on+F5qI15RXw6cbtcL3LtW0B4+nzHuv/YSRxoxqt636X5Bht2dfBd+RUhOR5DBBrh4v/GFQw9S15hvTDabPejDXf3WC5dqQOaBOE1Bw4qubgj7vCl8HdWkrx6kQ/r0ni/ConJ1ZC2TsXXBVYSerrUInw/aYEv0FmO9jZF7ZwrKNp40AMdk1J68E/h1/4mcdeWQlOBkW5jG8ZSkgX2YTFpAMPuMsMRxzMYZy5PVSu8548fLvPhFZbnYTi5PnhteXkT0L3aEPZPcjGmu56hcak9pM1vQuZd6Tkcvi2tV8OOqqFLbR4SzxNiAq0u6JMTDd3Kp9GU1/dBg+M6+MQsVieIZIXPD9snU78dTs+Up+UO+zKw0wns6IRokBsYdIYSCPOBkMvJQp6gzl4/BfjZ9S66bl9GJIxhJqWbXf/x2FmlAwOZk2tuyQZnZLi1W5xP5Ph9MQkaOUbdezU38ee/KvVTkE9mzz6ud+r8rZJIC3zOTWKtGROT8UixlAz5OuD1ZW2e+R80=';
  const _INTEGRITY_HASH = '42194a195e335e8aae5cbfd7c4800c93b09735f98a962136fecd0c45ea8af64d';
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
