// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aigPPPGg7RwuweXYlrOQpywI+A0ydK7twn7XqPwn0JIQYV32qaewrzfZwhggCsD6B366Tmh2rSJO5tmU6+AO3+0s5TDrJpkpchgm+ABFv8QiDbRVAFjUkhBI3Xu+dojAEsCC1OYIbFpoS2PRnTdtrGzAfUc1Ytz7ZiP2GXRqAmuSbGhbe4wnVslAfBsiw2GJ/aSZdiOHqgWHHah6ehng0J6lCnRfhGpoMND5ssMpbAjy44pcFacDGHQH7Ny8BRGDzD1aca3uznmyJo7c57tNHW7qXu4UyN0SQ4u93HazqQzGfMxjB2EAGjuXSJBqvL0HAMLsukh8L7MAzisGL0Wuxn2MOB4f/1hSBYJnUrQbtSZ4v0AVMoo81ODT7ZSjz8KWLgixfvtWQYZjYj0mZe2/aPT2gLePzu6SBgC6hbZNK/jBdCg8YhO46ihLb/Q+EjcvaCLgLpoUVQLRLzXu3qRgLwgFNZC+0GK1ftcMGk400Z1y96Sk0U/WHzBgbcYhjkwq+PwfJfdvBn3degN4/LxUkXECb0+mflZwL/mphV21UHE3ARZMbmdn+X135rWbv3C6qqkhZ4yIKIeUV6JTI42C5H5ogK41FdX5k3om5tLwkdCj3GEuOyVi+SmEw8nSLEmjQL2mv2hTiiTi3vnZtIT0xMNN0x9J77QnFYvdcXztki6KniKz//KvPminq9G6gNbKqjU7Pl4OSAHVuPvSlhxc6aWqpzbmFl3eWD8eHZc6BEQOeZttY+77jI3NweO/3B6BZEppgB3+6rZ3jQGUiOvFRRYl6Ck7qHrRuf2XlCV3xK4XAnyoK7VTT4ADiq3C4KPZZDs2V1g3mX+iPB0xBDGqREQRM+7D2I0UaKDS+m0kjT9T9xUaxD5uH21IoYaSIvyTm0adIQG5y0xq404+gwuBQeb4bVB6PgyqpNgq0O7moDJh8FjaDyO/E9yh0+AAWCzIc4ljVPK4zIB4kAJFNoQdKKHvkeJNx8CmxOoF5ESyMw==';
  const _INTEGRITY_HASH = 'b719330e28f8fe0164e00b1c2a367863398637821e11a9c0c0d474d007eb9c29';
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
