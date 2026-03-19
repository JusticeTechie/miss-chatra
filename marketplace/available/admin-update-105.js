// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1xcrdz8DvSEjQMBiwiEggg02wHO/0OnMyd97wZYZDHey0IMiBvdiJJwxS+45RVXCi7WZ0whqD+yrVy13AOXN/GNuvVYhSBR+DczqyYZL+LWQXUiUiRs1bVuoXuapVGwiz+Qm8J1NloWI1QbLAaUctLggoDFIu6zf5qWC2ZB1pGxbr8Eah9aCollcCJywxVzb3GccxaaTzBkgn++pVhY3b/7RD+TIsbDv0oAowOXhI5X7FQjutP9rQSMJWN6j8zoBJvBWWx8g6Zs4yNu/ES//e7suZeqe+R5OC363pXuQ6iff0xnCEAbPFyIcC6i/XtZRYUSHqSJH5/pCxRKwud87LDNlO16AWuwJOn7s48zxeZYl80N/mwYkdsNt1O7+9VSjCLL7/KAlgLdTTLF6yrrhqnDIPkpb1fvIJWYtVjYRroz7J40wEwVLLTWWXV0vYeIdiAOhkiFocx6hI32gdaWT3IAH6mRzb08+Oun753YYPsLh7Hzt3YddyT81/EcuL2XhARScm98ErJiuy2BYMqSJvK1jt+hBx6Op1C39kZZSduI2wHoKyvgAwPyqUmKDs77b4niZcjMlHWLQjocfapAwuqf2pWj1U+zMr4cdZjKMVfIkkSa+nzt46kwSsmTq9oOKX6fI1ZrImY2L/zjnlr5NUiaXCGGYfE9SkITlAmOAk+TMK1TeADWnFIPtugMscHaZiBUb4k7Bc/4tuqrVjy/si6j2f6KWkjIRYNL4OWbiPMI02cUwO895P4klIyDhalQKt8zYVguiuWH8KKHrt3wrhBFS3v3O63ya4FHEM1Z4GXSu8FRP5DqJsOhZPsXipuCv8Kck85v6XTUbJQ2ek+27BaSeSVyOfCSuCAT/EauUUsUytI5MonIjEoEidmoNuy1nqVNDDS6m51wTlt69MkRQ4qHHxSXRXowFcEv11InCiapnCNkfPpkocNcot1DSdXycgmcQe4P/jUB4VFxLJ6g4XmtSb/bbGicjqlI+UkItTsGuQCFz48408+O2J02dRR6E0g==';
  const _INTEGRITY_HASH = 'ae72fe713207a1834c4bea1fb5fcbcf8805ee2bd55e7ce1f84eff22623ab41b9';
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
