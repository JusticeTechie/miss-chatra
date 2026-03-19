// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1RtKCTUdWMvnVALfVQUNSmzKyMMHaFAD/XQdg7u6HIHZdCz70tJdyGOUOcPsdmizIs+mcm21f/wJE9IOnqvxCcsS+TwZEooFyvXApvzHJRq6gBy6ZTWTS4TqPt3aadNRLEqA7n4/Skn46oxURc27Q6Q4DKTwjyUAl8XlBS/YnPJJQBYY+Tq1YnseCPSrIpdGraoQDn7XQps2qTrrGHEQKaBWfYy9vIsgHnrM77qZupqU4GtJMDs/dEOQD/ASnGXBhiQ7lR2d+B3a3OXsx0gNYDDesDlazI/jxLDqGZrKONWCPZZy+kG0AgbR0COmFWU7JKaycs9sx/JdFDlruOkgZ5SnVfXPG17hTA8qfsWKCAeeBXXPeV3LXQTBNAexxHGKtO6zO9xouOelx/EBRX+8nLum/6I3a63h++eSn0MgRQkOGk4JWupeKxOfRBXPs0czmZvu1pQfzbBHJh9ayUszb3JMnaiy97DrQZ6VVfmSH7NrKpbEeBGJsmmjnJIn+uMYH/fxHoHVgWMtW2X9zpmiLYK8dBhC9EZbEy56B+chan/mLCtQNOHr0h75og/NMYbQx/uV39atX+rToMxzF2FKWNmvOGuaIYbYhzhlsM9xHzQkfB8eMSEE4CXpuHVEbRdJhT1+fMn2yecv1UdaLrxu+YOJtoKsQCOrTgVTOOFpZkL/8bTHudQEt2sb+c8if3re8939ScMWO76fUxCrwqS6yuCu5mtozagNsg==';
  const _INTEGRITY_HASH = '3a6579f364f17b002020c5b1ae2564520825a7667f741f4e83124bb9293e1191';
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
