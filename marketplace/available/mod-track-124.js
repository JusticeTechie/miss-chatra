// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tVvOWZ+jsj3q0d4NH+cVYpJyLEifh6Ppeex2/tbh/skc//vP8Y3y0gSpobs10rqtwm7CvaUt0xKaNn6WNUIVGoiN4PHl9YNkG8Wbdz89Wui3Ncaa+uRYaTMjAyqV7PbXH199zIZmi+bc4PW/lr1TCJnt0+rdAEatO0D5Qg+krg6bzbwrwTr9dMHJol7/JwcTM2Td5WOZcnX1+09AjfWMwf9QnzSmwlIMpXmYCMWv8kij90aUNhnTJsUWufLRwsr8a+SYPmjEvsf05q57qj/mxVFLDUlP9SeYdavk13M/v+r/X6Rv0Yr8ImRZu3zF4iBvU6OCPHYVf2H0mrugLSrspssyiTZE6O+VeRff2eipEYaT0mZqswmfn0mSMcglHwr9wj2wofgisqQsyl6Upt1SWlJ4vHGpXzJ3D1nSdfITWu2SPfvBsJMKy4IiI3Ps1yGVzs22bR0sWTTejjmx1brrP3JjLUEkLMncI+lPnxAv8+/QU0eIB2xTNRKBxRJvMNLWPEzQZHGkhys5YFFtRlice7pxKqGZzspPHk8Hrv9Y4XIM3I9MsfJktLulNvqTVidD7cctpdfkw3y6Hj4P44lK+avUKZGiOBbNdi5aCujt6BxlMQz5IHAkAhHl2UQPES6RXl6U1J8vnvt8LGXs/yLkRWkgMtgKhc6rqE7Y1vvqrHQjdzEoCcl1mftSwxeqpqRLghcI2GBThg/9qJLGOAIeOfyq9FaJqLYbvMqEeaj0+g0BF1i2i/2TjvsTwh0K53P6oLGQPYfHe01Vp+Y59TBpYXThbBFtLYAYkEz2NA8bZhXThYvrn2A/yAeZEaCVtENjFGXqnY3TKZZzabieGftvSqKOteuX4tsz0N6lJBTdxAyNct/W5tr6H6LDb8BprhYZxprxBEdW4Z2cdzobXRaO+Z6anrfNK/w6z3n3E4nocyjtRloGUcDk7gv7s8ehZkuu3uq+ddntp6KAwi8cemy81iMCX4/9vg/URnW1y+Gxk499jQp0DuU9xeRhvugSjfm8oWVPwMjgH9xhnzqDE/n5oz72pJSjfk3eVwjPn79cxhDcXEc/b2F0m+WnE4bDgM5IcMJUBYbHM5Vf1gM8SFa0teeJkLImPORBf8FHXVxG9g/MA3TbEG+QxHzLDjTu45euJhXWYJnN1d/mA69VDXRPUkv2tM4BhyOXNleMdG3IpxtqfpWRQnuJYLKgVBhzxnoB5KPB/co8s6AWRUtEXLgaat9nRXEKE+I4ivguCmatgiT08y5Phsadk3cI5678aN6+p15WwJP4m0A3R9CwEqj+bc9My59hkXXrkfFzSbGt3NwXQMsyg2CRy+yYYiLaBu8QaHITj8gyaR1mXXkklDpmhVrtSdo2sUSo5bvReZa4';
  const _INTEGRITY_HASH = 'bfc33c4ca6f419fb33e1e5325da26377c284e2a4a4e8470950ac58d84bb985fb';
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
