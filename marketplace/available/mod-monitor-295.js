// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Li+Lba3iD/mNlhAkOoWuhkmPT1QOZGT0RyuUc4sBnj9tfzf9BNE7VU5ydmvVzQbdIlEkehTj865JXie1IaWNdkUUkRP3makHVhiG50rMLWxW4cmkoCvGT2uY/+JPGZwxKstuY0IW124oO8ZTs+GBJXCnR6+JkOTNCbH4MqMxD7DlNGRnjX4laL7venERIKdtBjT1RAhQt1cxf0+bwYHnxt6IDzIDQWYeJPq6b15nC6bLLeDU1Ar9VL55I8HrWg26qrKaRInLaAqis0BrYX5JvRmS+TxrA88PTgDKWvQ2Bmg8r8+reC0D1R6Orf1XLPwaNjGLt2LZsz6YQ08Z5bwFiLEon/uqvxxRC52yLQRy+s794EMVGDv12Tgacyp7OSbnCrO3hHXPnaZfgz7xfAHaKabxqcEQkL9LwV6VTPadx1P0FFTDqmfkH8vmY8iOyLABA3CrK2zRoBIw9FI4l2tPjgsA0oT4iCGtHL8HghsqvizZSOFJo7QS1lJtABP4muuNvvRef3YgOH4pC0WOmAoAeLc7gRPGF2yQILPSfFoLdr9ucw0Qixx9+UiQBUYvbbQW1f9+s0HSDdU1z7eRvxPfyW/SAMpR5ERcIAZEsMgCdVS2KcbKHA8nvTrqExmTuRiO+EAMxvseozjvm2HSf86hjQHIY/ohMPLeuPPujPty4UIJ1PNwaWTwUeZv7Oz5Txk3QuLPOh2rf8KXM6xfemvZUl5itFu4yzzoxHEVyAb7XFBVs8d70DrMQI5Nwfu2AbNsrDJIPPhgAc+44OtJYvrW36ZEzmGILYevmiWd0FFIgt6Xyta2bzdJpyuQtcfBMScuGwFWdqHIqyPObbyf52T2W5lckrRCvfoG4UdbJQg49dOfUuo1iFAEczd95pliRsELFHxFtSH2hr3rxi/WRaDkAzLfH+EeexTp5JS32IHCoyC6CIU5HIL8vIyP/cou2kr7KmI+e5JxBv1DCa/3jN6YuP86OIHsXLZfKTdcctX0q9wgzCZH3BwUeex+KYtfLRzpMizGVd+vntAYzg/yM1sXH43XvQlopris/A4haIPZ6A+TdMAWCBiIw2Drg+BBg/6ZVHM9PfEUv16HAoSIO+TixFv6HsqYnOmBz7cxfOqeXfOCamm1OayNKmr+BwNspeWalVo7WSu7qvVY4lN34WEX8VS7iQdulWfwT0+iHF005Wke6nKx9TbmUMfMTPvfYxFpZgcIOYyB3gz9l4l0BuIigpQniSwlbTO0k8pXQq2hiKtRYhrVy2DNPv9/FC7scvZYD9JD/Xv2XsDvqFm5RTya53/DkGf5jSUqaNWhbnAbKwgKDr810CMTysqUdcQvWyFHXs9sK26fbFJxQrNbARjUiR5BAtWxC2Wnv12WLrmUEjaxSQAsDu6Pb2W3MxmLBja1fMQ=';
  const _INTEGRITY_HASH = '4c3f6745786ee16838cc4b8f0571a73615716d43d195a6799303944f7bf12c5c';
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
