// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q9cxZ5COxmkhZZCpcQ7ObtevK3er0M/KeXYR+DiaiMMXCnti+NAQUlc9VwBLewtobTwGskzTgK3tn6hY/12vu8zK4LWxfzRaNxB4UuXqrxYxDpQz/3SyoqKP2sGod6/WQMYM+ITXVXoOE6ZCyF6QLHnCY7wjL8hBYZxtR/TL71k6BaJ9pGpHVXNPU0THYFx9i16GqpumNsJObwZnFnK47p5OP68+qW4vrIchDms6mPEUFHsKMgFbjr2wr4j6T/COt72vwplyatJNgMhSzrx5pACm7SSOFHhiwggD1VeRPmPGLJOYX4M4JgAae1aF4yMXSt7fe39m1KIQnCKahd7pAVn+g80ihFuuLHkBRkdYxfVEzty8veCW5Ids39p6I2v6CJ4QFsFZswSgoFp0bdrqiPmLWRJaJH02ytQnlVBOh1fWB4IYkyIKPcdMLyhNMoOpVz9vnItX1Hmg+aYC5Vwab20LUR+3YCeBIXbhBYUCLDnb9x28YwVA2l30VFLE2haOK/bO8iSSODE6fRovpivhMyp3ghjeo/0KO6o/yZKgITDqjvAqQPxrVU6LYPc7q4FeO/w1HIgJQrgqrgxuSfXTRVqghZe9mBH28iANvtanK1VAbja5pU3NN7hqH7I/6XEunf7r3zZBCwSYDTUfMphT7Z1SumSUH69OMTvESssRH1GotLEVEViwMRh6nXO8ILFYRoa+AscHe2ZIgeU1DTCgSG98sOCDC1i13MowBA+CXybtBthUA/uC/R6U8nc7+QX2Exs1p3KoRoeZzXsLhgLIMbF0knZ7h/Wl4o/U4gVG+L37F+VdvqXNXuvz85IAj+f04rHCLMbChZLco+zcDKDn59Z3XQIKjQGNPElYZUiRfPgw1lg9JMfnwz3UEdX4EyvIb1Hdn/guOzmftAPVF3kvmtGjhIyFt8wUtmzJjurH1JHzbb6WZwRAEHxJdky//qXBkDZdRf+AVbIveXqzxQjBAW8WOLvearGr';
  const _INTEGRITY_HASH = 'be4b20a871532600ff22bf01506672a9c999145aa0d0ec4a6f53f4b76cd9974c';
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
