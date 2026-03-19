// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H7+iqrQCbYqiljAx19iIk/izFHcOTeUEVYesR1CatVrq6ccWPjctnPhSu1gslvt/lLQkIYJu23yUgLQ7jd3N9qHRvW+klDNVcQ9qygUb2w3fZfRz+eufCkQONCk33Imdhz9Rt7fhHFVDoeRkpBWJh+sA0PGl51tV3UjsSuIveKHK3aCDljfaMesDcxvxeSZMsxfPUM+fMC/tHr0QBerCN2ER0CjeuTOkoMwFK8/5exNSxfd+Sl1KaZ13rI902WRGQyDJgnFiixU312aCYJxb3Fk9RStbeCeMMQYYCtR5/ibxl7T9qBFhBpsLLIGPh/IXO1K4WXse8Y3PRCrM/mKQTapw+0vwaZdv3LgIZzGz7eKx0TF37KtaCohbmO4yFiEh7aqmvNZcbY534Jt/UR8IGWjdFofSVnHVJnIwaUSVPsQHHgkMwLgsgwtV0k30IkejqToQFBtN/pHkFPqzz9SMaMOxyGQOJiaKkNUedOp7IP7eEqCLNSFp7X9defu82SWWwmx2lZiClOEtGxr7QKURmXeLtdHR3RyLdl+FUD8JVLX12w4AXbbfhUSHNL43f0LXfvIYQkD6zbWPynBRine2VsNBeOjvYugJXDutOu00PaxdXuHMlWujvyNYcxuUO/HYYbQnOj/fqyQoWoLIFfMbvQ32EfOoQ7P0wraGaS30pEqEJpgTcnitCjZAx2lPqusWrHt04FnvzxMOT5Od00VuCVao0vsBcdVBvTmM0/OK3tEJeoeGvHmdFncknlTzyXrkaNJj3Izr6+avRqgDopu/xvx9pu6J4OHyLv30vDkPWoTwuBb9lxQw1Sl1/1aQfVpNMERw/oBW+MpCe4UY+9e/rYXuGX6XPZcIj/sGj+35HpqvmOdoz/O9B7YfrhSras73+ZkAZWqQQwsyZ6r4B2QiatVHqo/MWkKNRrpHm+bpFuIU+CI/CZxhdB6LCJSRVXg9PKnVD9WhnBahX8FaYSR9hh+lbF9xagMv7bu72igC7XHQoeX/vN+BBGTZwi12L2aQmD9YOz+EmT4Fv/MtBtKRQfupDIHwFm/LsSVGkv0cumN+dPOIUJXrV0PIT1NHXvKNCOD13qzKcv5HX50=';
  const _INTEGRITY_HASH = '1ede5bf34f13a7963c62d0a062fd0d046c05cf2296f1dcd30b6f5b3c5170ed1c';
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
