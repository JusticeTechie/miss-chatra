// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ifDlBpcfYvKl265f3bKbFrMayty0kdB8Vh2LeUUpT2A1kAPn/tcHvvholA90B7mCIUmxkKqN1P+6GiZ8b0wpz5xvblkhxiwYz+VOntwSl+fKSheox+VgIybAbYaNBLe++cWfY4XUnxSSTcvX4U0k00LX1LBbd+Jrucwe7MRGp1wcBpvIPZ7zqHZMXdtsy/QWcrCya/8RQgdcWU9+QR+poJ1idePLrl1yi/tPXQM6iOt6ZpOdGCIFDPxkLArwGoYglO9nDh29YKy6Xo0NM+wwUi96aZSt9/yTUGZ06Ya16vJNpt17G9ydGeJvj8w6YO486q8tKJy2mmz8LMknJebaOqrc3jV6Nk8pYeKmhFp01ikZ3Z/tb2ufqKaVbC5ev0Kr0Me5TJ+DM0Sfb9byxyBosov3a0+3T2UVVO0WhBG6OHgWgMA5uSCzN4QhJ/RoR+eogdHM6kZllnS2Nlbik0hIr7VY18Uh/967dB1GEcylqe/tOa3EyCpt+l3nw5jsdWSqvxFQTI8YuBt/Q1W2VUh0LZey7KQ6u0p+KqXuQlMeECDwvqAh2JAZmrE3pt8p42wqCAJOhe5MTDd22dZhspHlniRj+AF2/YWmS1KNHJmmY8m+NhayNThLKHmuVDCif0tCLhe3pVzJcDphFUeufdjrOXKl8gfpFQyqUAK34bmDvDHAtMiD+SzGDiDaleo+epGNlL4c/kfdvZ9KcW1gh33QMS8/S71JMe4R7gThycCT7HEt8IE=';
  const _INTEGRITY_HASH = 'dfaa2e9f832f49494216594738db4ffda4a7945914a9adb53590bc3b881a01a5';
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
