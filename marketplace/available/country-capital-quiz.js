// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A4jtBbFEe3zNhbIAFSu+X4LsHNQ2DjKJQulVa+frVJlKDjqSSmdZ59g9L9dCMgC4b6SSWKfMSIkYUCBq4GfcAvOUuUM+QckSif1oC+Skh/DdYPHt0UKSvHIu48rdAqO+tmDUuAPONMmlQGxH7uoZ1g+WzcspdZC9N+dizbYhXMOxVs9iqZqnx96nJ6LitBooTskZKcyTpTfCT10pr2ktspI/qNo+Au9PToLSyy63PXb/Sazdt+yzprtitE/ljZsCiUb3MIv8inrPwZ/WmqBnVrldSh8JvXPh3VDboiFfW8SxG9r3r0eUNTle7em6lqObivlfChh0eyR/WxxnSEKbd8eLOehWbEyHg41Z7Xn8zwQtGorN0hK0gmG8PwN0ab7nthAFoe+hT1I+YmhhGY0l3Iwum4/6BrIZvK8qVcKCMOh2+CleGafIWMr1oiGGtVbFSROkofkpuEvYeQ7vxGw2ougcytgeBVTRkV+rR8ibV3lnIOtCTihinC/8L0u3VZEf9eXUL/zpL1MKeJ4tmDMSmOb1qfe7j6Msi+0YcofoBGn5PqeY2zviEz8G6j7wjvIv5n4ZZE7khT5x+JQaRPZ7/3LyTxapZ31zeIcXQURu2dklWlNk7tQ7lxIXL/MGIDrGnR1di9l5NCoZpNsAv9GAg6dhK2tHkoIGPybtCL/UydsMhW2kT+Sj6AT9IoQcHrav439pDR93CrY0NLWSjJkC2tDpaEgpAjq9SCL3hpgU6VPBUiy24msfQ9nDd4X2vDV4VqUrcj6rSAY3G0geORMO/jgmSeE57W3R/fGT+UbjRr28UfZbeA8DGZmZ9nqcpOTYKeXiuqKF5yq1OJUiPhULXKwHf7Vks/h6PYFoeupt2cLV2UZFmFDcd167272CE18nvyh82SlpID3YfmBhlmSh2VUHCxDCErD/N3bv3oStfuArk4/Hx0vku3b8STGzjMvRxvBA6HJh9V55Gfz+jNcG8pJxaBOrrwT1HuBGYMDKoNpylJFTvBmn/0rrqCPNOj+kMdp0ZgeTge+Y1PzsBUK937rSmPmWsMlOH1MfCJMdN500TrmxMCaAX21xrj4EPIb/LElNfzjPzsF1JuWXqeE4xcS77K/CFko3ip7eMSbGwersQwhkn/r12IFYIjTD5UZ5lkIdeZzDoYnZH+COaX4e+kYdGFZJ0hwrq/WekyPoz/J3YrSi9Lxc7+AJV7MEZWtcPa4fXmq1m/AQQpHwGat/wBMwnllR4z5XXniaN+nazfnCSvlQ56VOBAQzXE4P+sqUWy3JLzX2DyMOppNDofINJ/JstaQeb3MkdQK+iPLzxmKQ//A0vW4POL4XljfCiU/iKBuyg9PNz1+Whti9jof3ypaQV8a+CnZGrf02CAmobIbVNXqF3Z49hX8bVew6eQToZceDa9xcs8cV+21O0KumrBcTX59//OsocV53cmf29AsMyA40ZmV1z6OefyF5eTK2iH77E+ugCgLt2QdGP3nirgoOxfDLNRkOMnLGk2IYOJV05IgjdwU2qF6QINNcnElpJi+8AXlV5TzvUJn/xEEuknvH2X6TXhoL7KDMGnGyYMJD0rgbRTBH6tw/R2P0KA3zpi3Ww3ZfUQGxXaWSrzGiAKoUClfP4moB9tmpFp1w/SF9E31G90xGIDhBxYA34VgyRiw700piUL9ja1uUo9mN1nW7ToIvWBg9FkLigDDvgMwE6hTa114Byp91rOUZ6tLcmzgVcdqiT1VkmCC0z3s6GVJAtmgR4VS0osD7jMjx3qM4SsUhZfPiYv+iTlyDvinKlxv7tWl9OcRh5Ph8DVOEQVehqY2Ko7Z266BoEBvuojg4fJQvgvoGLRp4RoEH1jbxHM9pLd6qDlHZZ8R6xEalARr3QcbfRGc4f2YsWVl6G9vXIaZjiXdI';
  const _INTEGRITY_HASH = '498fcca6fd0a2eb69451cb444ffb385ef24b9eab11ae156517e56e479e77ab2c';
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
