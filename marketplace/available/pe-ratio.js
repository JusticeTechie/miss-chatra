// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JjQIdgV/iU3eK6MpW+mXYC4ijFUBeMRFW+lTURYScjZFSHk1ZaV14HVu2Fb2+rLuHkBvG8in918pfH39PTjwXVHktWP19+Lz9vh615X8U92iy+89QkS06M6zLWss6KAaarqNoH6rbWrN20XTEw5NyBg230+INuEaP1mcj9OiCFKfZZO3F/UkLtvOmXxYHC6S+h7dPzp9NbBDOkpCtimS1QROfqzIsxznv5Xxlf9SfdvL7AlJmtd8l9S+EI+jb3+MHSji5tmkD0LEyOhXVuG5IAVdVV4HdI/s0WHeVsBWT0IbWpVOri/XCT5mF9w+bto4xoMNhaGYKnzt8CFthJ8gXeALQeEAVeCmXgICAnPBVW7XGJ0lXqAPAwBwONH5oC0sk5a7ClsPX4BYJpmfXMnJtCs+KH/u7OwJx+JCIALPn0E91C3XBVw86K4ExIY5SpNx5mYz5Sky7KBVa1Vwsaty67oZ6ZO7YawT4XXOemAw+lHJARQEDUZd5kvzwcSnbV/uYtLeP/FjRP3nH6jd7VOfLvi4W0JO4P6ODt21mLMEXsjJrmHwr049GEY7klijUr6dqPZ0gL1gzBWt7BnIOjT8M0B7Y+wgAuWPX2D6MUDdBxluyY4FUvz4Sm/Afrw1fW4lgPrlPzbnpxXwi34WoNi+I4yjuce1/hn22qi8hp+UgF3qOPPRL4uMaCe61X2yDa1qyXjij+4TXjsBBisJMv/uXN7xb9EPl7XmpR/umwDkPXyUeKD/9MUOg0W+X4KtWRhgf3hiY0dqybaxn4Doqj+jC7btilwB6tk0SPjMnL+Dr53VpICRjLSKoQTuOmby4kdzwv9tke0c/sWIwoy1aeAZyubZXFzq9KEs1XGG8udeZAIdHJyllrip6Mo+CsArzWb0GZ0xt3mLaSUACMhQxsSx27OrTfjhHln4WW180rUMKiWEv5VKDfKH9wdl9tIMSjwygU2qXJPlQb/VzjGgKLlfw+vR9L/2cgcwHfEtlK/+FsNl6z7nv1unGnRdzNa7dkWgEQ/px+ozw2lU62iYt2wh5FTJPqfaZBprMp6xgzONG9E7UMcl4MWp34BqnnTtEY1X1G5jDj/MDMMg2x2Jmxj0/HvEUZI1e0lIzyEyPKfDigOMlf8NSJIhtBZzqA==';
  const _INTEGRITY_HASH = '1ab4f11d76d02c2c642371c75cbe13200d27803ef6ca746f450e4da8f90ce621';
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
