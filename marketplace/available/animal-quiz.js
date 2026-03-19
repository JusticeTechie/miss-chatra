// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CFlQn9RY5z91DBUS++LsdF6D2/WPc4wjyKofvsUOSevW3UcA2BJito6/7DS6yt7lp95sc7Wa4HNnfoAFiQGuHlIFNgDK77LpnA4rMxecsGQbAu7LMWVe+GGDvvheCvzoRL9wjsVtJhW1c0QWegKyJ1VZS6SywdMT+Bv8599AJeF/rCuDzrj4ad8uecy4dLTyo1gZOy2idvOZSkJfxypR3Sk3czp2PHh921rde/J9aKTFRwFsqHFmwip13E+09E5Jx4JTVC4B8SHw91AtzEgP8nrgIjubDQdNB8Mpwzfwn6197IS40rCh3js6UHnTB/OTuccOYsIH6GWmBMJSh3zOsG/vaOTmZep+9R4NCa8ea1/Y/I3DhvDF95jN5SWtegPp+NE3Oy9E5PUjdhE921ytLpAQZl6D4BHOrJhFn3nYgp8lxHRZtR+AFsgeT4bnNiX7AFmz8OJWMsI2p+P+PVjRaJgA1RPmv2X/MrXPyTNSiH1Jo6FzQVh8adJIihiXjVReC6l0vAomp7i8wMjpqYLiAwB0WG32vobNfMKwjUoWBjzz1tAmkSrQNZwb5pkitTgUXqlXGwAVlU8Avl3Erl1wFEP0WD0JNMMNngNdwhPdKhKx49brsdBOsZR0eqBXA9xRbe71lMON0rPa2EVLgLV3JtH1b2yi2em92eJslz8IJmyXWZArjsS+wrFH3k0FpjP2meKrW2bUU7fgePrf/r7jbssgERfzc3HLrbXSCKlg6tGarMxAi5A+OELuRU0QEHrmSnDrjao3Np4MpbQhfsTLs8/jfjli7PfQhU7CmGsAcjlZRLBjmqluJ08UedwCFF1bM7zYEUzNIjmuiemCnGjwjdIt+l3FSb2yxPu8TppDRmgjsT+x8n90EfW4mTelzC1Oq9q+u/y4SdhrEugZux7wSYVNbvE4xlFMWejMkTXB5bA2KSr6RplQv1jbQ0vKSGZV5If2iudBo5nNPKkZBmWqd5GYN0tFZDs9/7lIpN747RJh+B5Ah5ZaMwcWQlQtH0hsT+eppN9l4KiQQFAN050B8G7ZZ4ujlJ7E9CN/MGByJ3dEZUVLvJbbQ8x/kXLA2qQfvKtd8YRnIUuWfPtpl41hI6uKns6JJ9bUnQnYxuFvNiZaAmBogt7GX09sdKpIBb6MS+zrDhld/zJ8zjq7dHbPf86WBitdSy5XLvaTCs4jfn0AbHUmRm+ANnw/8D7UHeJ/b4FWjS2drNMz82mfapoCYhF6ZMwt5N93t62/lTxfE8mpZf4Ctbp967crXT+AeT8/WuddAFhfdtKHWg/yAaJtzcDSbQhXE0lnZjakQ28luRgreOaq5+a1t3swvOXCz6iVDHYKYEsDjHeRgp/hwQhGXNjz5ZhXM4GohN7+uM5lhx/iO4llQlskH3n7DAtncVBYItBlpcoJeo8MpBQeaUHUOcINx3TuZd5kHjSD92KxLplZKuIoFZEAmJz/3Gclik0HUMOj0ulJ2jG4eDaoCjuUT7Je4lZC5OTSSf2V9gq1xQ==';
  const _INTEGRITY_HASH = '38168d247a47b15af03dec6965ad2a0604edd607b3a7bcb3a0a82369fa9143f9';
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
