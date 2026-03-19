// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hjZpRvR59QkWGYvsYde0xvmXb+cSdlN2lputnEKz04ePFLAwTRHhG8nsnE+nAvz204JSj30al5mOLR3fCkCTrT5+KtmLRdPBL7VbuHRkf+SRCV5rjNqyOOf2rEw+FEMDVduS0HiWR1BuS6nDaiSCacK1TxWacX/0UpKzfPEuQfQJX1pASu6Gpe5vLbA4ds0oIfSZJaHNeHU7qaL1lYJvzO0mYnDw2UHmKxBRb4U1ZY1IXVhVjmRWfGvvwh4r4pNAlGH/iQZmEcKpbsOQZU/DbdYpi3S5onWdJkqJd3/wvj6NfudTj3owdOkqe7zB6XpJe2Tn8IrxRj4TQacOPcI7bIXShplOl1QuXNoyyR1+th59o6hfbNSsoHAcIpv8aBy1nx92Lx0mRenl6PPmeDULFT+2zQLjsrRQTBvBFb6u+d75MVVa4pTPMnM5kgoY7iuvK0dtiGjLQt5FrxuL1uaqAJ200ftDs7VBWxByE5+v+ZNK0LqR4/TyoFnvyoFW7oS6UIAH6rNXR52+iUvyJKZ6mnRKC3KbXIPq90BMs7ejv4IYu8cyImdxbgaP2WZPgkh+bkCTbIOyn9r04f861F7RWevHQEvbOhW5jHqWlLiojEbGOkbtyZQDfmXdfBqBkWUfUST3ZqnTWu+QCt2TLetVpTZu9FaHSAiDgGDwuADzDtLxzGsDmJSRAD6IZhXyLAPPpyeaCm+Gq4X2iinw4ONYATM7Dh/2DaRZyXxDhKqkt+oNmO7EmK0y3cOpVpVhBKRGCG5wYCmDj5pAHMMpSCEo/DcchkHYCgnwzJ4qy1IrvBBMG8QF78fcjbLAZ5tOv1zDm7WPqFsDJPjCK5ThWUiEL9Nkv5f1h4RD/ZN234LXR9TNcNR/tsYINxtQ5t3ZkzEimh8HqfFU+dz2sJXx70ECEr1Hxur8bIapG2feQ7EOq9ZAKFCzUXdZVu/nzBlTna3dp/+v+EVi51Mh88x42+e0GttTpHUuGEhVCagg318oz6sgg2/kjNK5zVtDdjQHeZSPVaWza+5ks9JppiWh7RbfjvKnl85DhJT8Ip7FGRGsY7gsKurRPfvgYeiNLCZjS4VX9zdOEEYue24JCGOvwuPnsBg31tY7luw8c13Ic0ieETR039cG6V0byGftq/xr1edMhdFoTgfZR4ucb4Fm1GL6U3J1f4W6liTWnrR69Sai/q28q8KmIN/blL/NDcgYc5Zi6zdDL30=';
  const _INTEGRITY_HASH = '75ef6304e3c342a3710bcd25b7f7cc88e2b47b55ea7c095464bb782e42f67864';
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
