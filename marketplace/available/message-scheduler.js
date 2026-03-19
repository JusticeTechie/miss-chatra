// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/PH7GWgeaVSe/Gt1mBn62SPQeBN+IU6mtHjVpLnI1paWd6LHRHkvOGBXbiKzAo80OlL66MkEnivXny/jmJokGGGD23Cx7Jub0yy7er/UIDZ1JxaHkoLKpVprDEREdLVcWr7F2QCWHnmIos9n+BYINRcuAv4A21PMbL0zp5GRAhUsHhimUVtS1hYcaS3TvoqTaOp0NnVsFA1QYTZt5Y1djZSGc1wVnsV4gaelwnRYoAJHXP5UPLjBUUcQ6IY6cxMmm6c/VwcMk1HMrYCL8MNU+gCWpxMBEcQUpDbupaGn5mS+npN3kV682qYGwE9dF7KBhpY05fH2Hw0w1WNmiMRrr93VYTOWx9HXn1UjJVD/MPVXSkqOvbppqr5hXsoGtehSFk0PlT68mjDpVes2ZZdUiWC/Idwp3L4BrNHrElW06owuR2WI/xP0r0gfEz4/uhjbiRsoFDwDWDksUTLIstFGARY1RlJJd+tF5UcKo/v9nC96b8DfmP2/OdX6mSx/jEXXqJQ1vhDlqePjLM24Qp6DCVCmpmaoxOmvNkULXimdgo29KFZ0v00DvJex68BhT8i9nhzHoSy8Ft4c49LWgnhGBx/r+YIVf2im1HJn4eRul64lueN34xJCaQTyOJla6DE8l5Um8h1rjHRhKu7hNmO84lQH7roysSlOJ1xPYt27wv4RZdxenzCcgPVzMbPVdFew1UiszLNuEiAzUpz1vJyrdNxIOm7/Gn9jYjR44jlS2wBdCdbQ7vZ3m2Bs8gwnJ8yLl3gCJNDlMur0iGnZfP/RR8tL9zfdNZAQwkhDrojy7/AbZ1kBho0ohezhwyEJdqdC7HuBMcthwpk3sHFhfthejK1lIbNdIkYSg5PUqOEWoRPxW0wij7RMNi6A1wwpcp8uhRjjr0CcCfoEhH41oorDp4lKFVuP0Mh2ZBxg2HG5rR6Pzw/JQbAs+6NFSeLm83ABkGKH5dTVBeqxp5MEW5qnuGOWAkuuy1uDXmN0Kg0Yqd5+tQjRVQ1yvX1WTB/J1qCFyRy2GYPlPq41ehvpr189Mmiar0h6tk510IS3C0JLQtRWB7vVSclPK1CfM+o5bpQJApWbS2TQ97CemD0zAOkQQ90wn0dVjqKBNpL5BA2q13sAFJ0PCcPQtMUlBys4cZ9ngIbVhDuZnP1HYGRyJ8dgFKkxdChc7mpR+Ag9Lqo9FyB1GI/5EmrhosmqwlOGTD2Bk0kdd18Tc8YoKtSxDP6jMKLVj483kTmrvyq6h1RKwSibegtLBikAlqMZ645aEbepq+Hfpl5JaQXYzOYbJxrueuNbbofmbVW86n36hVzPNQQRxu0BAsTqeEGxqU5r4VrIDeQPYugeJjM5iIJff152u2mSThbBBaw8yu/XdpgKjCWW3RcHfA/0';
  const _INTEGRITY_HASH = '37c74a4ae1fcb7adceeed2b7bc3920e12d4f35300733b6043bfd46e7950ea876';
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
