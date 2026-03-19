// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NE8d1lGCvHV3kxey342s6vpZicIYPqk6R+P1TWEl9oZEI6NOabow0cylwKunyPhdNotmqottN0GvE4bV5LRSRruI6yh6D5du28X0x65nN401wZnY+IMEY/rCTxmE00VlDPUKd9IeZjbBvolH41IBnO0Wr0FwW9g7mxLdaHEJ3nRlBa2vsFcybByIutLuReTb6/7SjH+D65e3advQD9o7Cp44728n8dhQGHt0W+BUzdf8Clx918SpgRF+33nb86F6wbGFDYXRK5NiO/3ZpCntnQ+suooddAFBdCSfkmfFR+sdhKiK5tvUgXLABxVyjXYw/ZhLvluU7YNlZokRlvx7OZcRAm8/+CdOMxZClYlLSunkXF6w9vJcyF2TRXxur/Uy1/MH8P2zGZlvVsmRm3k+T1YRYLpdtF8+j50xH6SoAzxoM2uoBHWCfZUcsX001laSyjnlR4ljhq82c6XCJxmR1BcAw0MIAy+/9LNyoDiIFOTGfsM06T2G0q9aLB3nO98VWA3OCPd1NGwzEaJiwPzEsKL0XJR50yaMdOaFfqcaaZ1HHi6kcv7bFJmGl8CXobwThM8LSPWG4fKaDzvRuIYP60lk6n4AX7HPd9ipRXkstex3oNJDqVM2e/vGCb+C9/YevopYsL9Nh0DEpffAhYWMGwjcCXxR6gP3stg1XwqqjQkKeFpB/dGmS9vJGM+WX/AHpUaA2vezEJr97+AlwsbiI+hDqrZIGI3tq69pv/1Zg9S8kHyy5Po=';
  const _INTEGRITY_HASH = 'b751b94b218563e2d58cdff5ec0236d635c99055aa8d2982b75f4d85de5a1077';
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
