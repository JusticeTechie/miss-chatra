// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jvb6Ay7FmXMhSOVgckekLuXdD2htM3BQp73rgPaKb/TUKoBIetH9Yfx7IEAqpaLY53fjJ2nFLGszGrFwbmKeAkm+SjoBstFsHSOdvQUpRpXoXx6bDtFHr5Y+DYcMx0B2+qlkNZ3+NlmgjZ/s0M20WKgmGOKCOvNmqEfkeBh7Jbq383cL9CeBW5AYLVyk51n51ZAnZQUYJAexgKihBMyHXMwYy1noaNKam524P4rQNYX5Lm7LBg43ygzLh3BvMLNiQ0Cm6RHOzMtEAh1W8vPuahr2xLDRkZi99w7m163J+3o1IhT8BKArUImjPk3xp2P2r21YZ3gxZOs7Gy4tZ/AAUd4zFKnhioVd04TVZb53+yI17gOqzGVmj5qmRq1fSPc/i7jmwEB0wwyEBAeBb8OC+bRImM7BL4gY71NWrqSiWWnjUEJo3OGguMDa+S6cYleeoUTD5vfYDBub2wd5HI/jl0IfWxTNeCHwqnUJwY8ElF/9dsbdO9ADZ3u1CzHHw35PwUwze4+W6IUs6pfG04Iz9J5+eXdMruDQgHnhDN2tPylG/KGpYMHpv0ABU2OAzgImFsnLkIzgkLdwD/DrIQvWumdRhz05+kl1O9F8KLMLknBmnT+ueiLaOWHoCEGZKTqcIHqZRN46Fzgu65UOvlVmR4GKXL6Y5EvOhCREDdkSY2N26RPgOfb2o9Od6gpKIS5lK6BMxc69Rr4iiXMeaDEbREDKUeUzPb3thIAa9oF5jiKr8bLl6KY=';
  const _INTEGRITY_HASH = 'c6d611b9f9a3cc76518b26b9650a5ae444cc5a695e107d0dfbde4c0047f74856';
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
