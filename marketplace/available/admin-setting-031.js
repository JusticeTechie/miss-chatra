// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2bmpalasusqJ35yKFG0kp+FCHjQx9Rg1Co9wNX9pXG9VgHOYq6vtxB0yUsPqCbg7dkl3zqHxJrO+supPJCm/FdmeIB4h39cVWU0u5tdngIZljTwMspWpJYt2/m/+7dwCXPvQrYgkOnVBpKssfr3YJSjVe2cS3Wjx1QOFoQ99y/2QCg72EwsSLO7Gip6sA5IE8wQ930psh/c4VW8SNNJCzPoYKWlT2NqTmmcsJi0WJwCC0I6pSRmNsXXpbl6rRjdYVknT7LHrxmoXdgdmLw6YG+zuRSlG1bNyNdQFEhd83f/UIIuys2hS6ORFs1Er7vdfgAq5FyKr4hGrRtf4s5/AWC5YYJi3qY/pBbhdkRtao1TGS/Apz9tPynnUtSJ1Wts7trCorUx91o0mcfQNfdDB++T4Sv9FpZmEkviZbpX39EqUnuLUbaJg5EZcUbb1D3diJ00IX6I7+sLuvDbR7WnwYQzQxv2P1T918nzZokvvrfL2x4yOx+JdZwHovzp4PqK+OFK5oOuSq43DI+GBM0ngoqVIKkQHvsidXhMQitE6Z9+kfQjbu8G4OEY2yG6OgKM/8Ia+imyRZYWVO+JoXmH7IMrn8BqcuAoWpcimdtnB+h3S9T15QP4jIRZmU23EuWr2IlzWlLwyxaud1u9yWM0cNmAg52aUrieulC03VS8LEefAUMMciEJ9iO8tGUV/1CBMArmuFQrqIS/qI+TOOZXi5dAMSW5N5e1Wjw+VeYpFhwNUqh0EEQf65DesBA/FJiuGAFL/cuLMrU6MOWZx30zeuTg61Sxb8qNqlVwZDxXG1lAPoovcEofi4wYYJxW7lqopjM7d6d6kjxig3zmASx9AUgG88iTt+asFL8Km49IHhJBpZASL1njBEb8U6TwAeBR2G/M7wfkeInkryD6JET4EixVL+YpJmcoh019yvEtLdeuUi2/xCfhvEuwg7o3ApQ777toKmzkM/R3kx5L2UFFP0uRzG+Qd9+o0tEsRSF+JYKZJfAoRoS2FE6CKlZJ98zO8bR1u9g==';
  const _INTEGRITY_HASH = 'fa27877c663317bd065b567cb2db0b1e8f6bf32533c0ea78414cc0b37698a724';
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
