// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Yx/NWa+NMRjabRd5+qJgFL0mEWUgCNnB5nlc0JKqZS3ovMkzLvgMjA63fvpTAGuPwbO397FmuUGZP9LeP9S3fU1O7IQhUad4HyUFa2Vrn7SQr9dsqL4y6k4wtuV9YPu/DdlzGwi3cXj0dVfa7hkIQUygUPXXkr/4IciVmuKHIS2jerhPObjx0C2xRmAgO+sIk/YdoqjHZjO6xPd0mfa8Kh5BJQaodz31C3vJb2G1LhKyLE9D994/RDYQ4iANuktpMmZeS4VFZc9Kn80/xA5iGTDfMqCj9gvTTdCxuQGgDCAoE8aT+1IyqZ9NQ/GDD0XTvmEakLfYys6FJrMIxLs7kuwX5wZ/WAfasCQSpKMYRIg29Y4oq+etmAI8SJkXv6azBHIkbqcBtgtjEvmnZbh6Jf/5TwCTnX5V6JB9Z+rDuW06F6jWXn01XoAO1ugAigg/PWyBFK0meUzSCvkSWfFmUT42ahTQO7mFKmMIC2WJKh9b1OzwU+XLlt8aK1UbDejGQv90Cim0ckxMzHcopQcLoI97JOVkUPWwdk38xPBeavOSYaUIsnpQv6jnHUh71UuZyoo+XKsc8c9VOeJKtyNVBMJqnE4S4uIiihJL27zmVLELNc5/cIJRE94w/CcOvo81HDpLDJo=';
  const _INTEGRITY_HASH = 'cf758d9e417dfa41c54423734faf1850eec60fe9737a810d125743207011f236';
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
