// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qa8qd9aeHfgA0QwpCLaqoHwhe5NSaSMYmVNCtzP9RDVyr3Jeh2heSzyOP18vaYo158+Koz6UnRSRs1MH1L2BOV9jouI6+ENsbBOVjxIWDwhYKXSOLvJIHpwP+g2uP1X0HEtT0P1HZAnHjBloJqywhTyEYgF1aHJab1EysvTcacf/RBocAUvynOb1tZPML2k8swf4W8zlUF4TUe2OFmykICbRnchsiVL/H+XS1x0LfreGYy4TWzAU93m8/eY0rIr4HqEI1IEombysqE7o2ErgMGs6oiVkzHwK5XMiCcFcxG32C0ITvJEVm+CH05/F5KefFufQYm/ZNGW7+tundADpIpIjdgW5Wda7L4h4tMAxbhxQ7RUYwAjhtY1kWCytfVSrdPPRFB5RQW1GPn3pDd3a+Ztip1I/ZjZv18OreaynTks09HJm226huqJ/UH0it2pbzIk/OuI4lf4NWsQ/emwPqU2yUAA73LFlba7RLhAUL5tYJZsuBhXwOTIhomcOcU5rL14iYb48t7NduHX409rYLpwZKxFlr/9Ew/iCmH8AY/1eyTcv7nmP1SXeBc4pFJdspez0QkyQ4lntVaePcfPBmXvdRixgd7RSv7Kei2zsN+Cx5An3Pge902cmvRsrUoWw5OeqHegguIeCZ6iawYOqiL6BBDSe2+/1unuLubUTFmREL9SdXwoOkyYKhmZZGfmRSu7lPdE+GVU=';
  const _INTEGRITY_HASH = '575ba2370d539d4e47aeb30036de34751d8c70f8b23a6b5cba074129432816b2';
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
