// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+gN5No/HLgn8BdLx0iVtiZd2OGcq/yIPVV0vtux0iD7YPeDQ5w2pVa7m+TGof3UsSiFlGo1ehmqsnU66EOOX0WfFQ/ivOyhyf6/Iv6yzlBmpwJcZWJNoSLAi2ZKDOwlA2NhzOPU/zAZZ3sStL5fjyFHKuL943+qYt1aQwGGPhDnv8q/beZpNlH7vRhgBIS4OCRleu6rPvITcL1zjVmEKzgyPeJW2yk055Tca/LmcHGbkAGKtHAJn6754Y27st/IwlnGIQkp1S4jQjA0wQ75k53QZmGJFbdtsDkHmJMXk3Cs0zdCpFnAVAaXEvVwr+08mC4fvPvvGNCXce2x0kRdb2X2dbSYNT243LzU3EgyxrkWMp1GRUVA9yO5nR5NUnX5SsScX4WHiKDodjGtleo+xynO3zkm7tOcQ8gcnhjl1GgzWV7CmQLGbYfrqaA61JfNqlMJwFwUwXI4WDShsa0RlAHRoehDRdFPQajYsYKTn7S1Q4dFRcjMF78kNNDwYJxXMfwisdWFPsMkA7VGrQDo4xSRC7GsWic7lWwCEM7KnDwBE5dCaxhx73uqYkesnPJjXsc+lYMVo7YnNJGWzo9k4z/yZWp0autMxYgaAw+ZBLxihLKH2';
  const _INTEGRITY_HASH = 'f4fa48217468e09124b8a9da4bf7ce623c85aba167bdea38b4428c384ae81213';
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
