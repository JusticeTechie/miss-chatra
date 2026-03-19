// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n5jAhP8VtL9nz4rQXQDLzdIjbQnHuluPFBUmxJWrOoHG0+pXw6NrN5DUAID4s/ebNYBZYpK+G/6CtQ5VVDZdNMkdxCQ3akXOsrapceBwV9W01gncCbf2h4RVc6s1glDXt8YpSiqBnItaamVYaf8MODU7o92AA4kPUNlyUmxcMSVZIK3GalFINXe+vKBO8vPNUlhrLQyGhdHjp5u9yVJT//uMWb70YM4KUBg9VSjSrzlEMNRxTpV/OuJTa5VfRYp/X9Rf5ghjMP/xRxKwwaImT65SNLY+y7/F3PDOoyYCwGwZX+jgY7F9SRIyFtMPRpLZfXq0RLaH6xwCZxrVUIi5QovFBJ4bRVzzbwBf9VnyHJjrCxCkHz3e0zazTUwV3UAWDyLUHlPUdbS/knxY+hOUH6/63lfgFsdDxzjK+31Jcph1PmmwYLv/FsXPEyTFHz3l/Ml/wvWCTLnZ2kxKZhYimE4qfQDWpd93Ij1mcQj8LQGhXpYE6J28WvjQuMXHL0Po6IfwWblIiA+MhTiqeKEsAesK7iJ1+U5O4d6e1hPqfqphGY4BJ6Ca+4tGay7yI4BRKyqY6N56/DC/vydxUx98KN2/Fo85uxdGpp/k/gPVlLxhMnmTcwZzB9DlJYZDorqqcE5R0DvHKI7ljgXNM2ea6WS0tw+PRSLFNCCYIUmFjJv0uqq5RlTRmsg7rLNtDVRMj274IshBtV36hdRkYKBzyx5Ag6mIo65pP3WN7TVypkEpl7ZYKwK69h0Xg7MgfaiNcYFOIc2fF/3gTIrVKk11GLozzd0VkpDXFFpGEdCUnH4Xdm9dGRbgtkF2F1wWxGexBgNnznvcOOIP1Gpph2+2DpJUQFfd+lFxQ99+XBsXOCPN5U/4/f7ssIjbFF9XJxs+Jt6BCpodUvaNztRLBqlHNuc5CVM0OOjrfsmzgrbTesgs3xkjlo0bmUxi8h2+qtCNmKKxOlkqWZCW/gAbGgQ/R9qoaLSfAmp0KBaOHWoPI6Bzd8r1j5393xLFwww7JC1yoW1MYm6JtiG1qWEZhHFgt8xiMWDXCwF7/EjNmV5S2V9OetCCk2ZoRH8MLNcSQDVS6xJIBT1Vq8I1WWm1W8yOdQKrFyolqpbei8dxYwCMrq7srRZqGRb73yh8Fsff5oOGPPF71vdjXNKb7oForSc0XLPplgtfDloX5Nk+eQG3iUFTvkh5tQfa/qk3WPwG2ve4xf3mWWTcqiI4ii+niJqdUEgIBzvsR6dWXJwj8yMNVpcebQ0dJs+6J1v2sejWhEQRD0hGm3c/RYzWhDTBT3ahOCgLzAPihutXCH26/yjplZK84erRzCMjCkzzjXQKAiPB5gYow7Ig5g2hGrnV74TvroohsbXzr+ye6w==';
  const _INTEGRITY_HASH = 'e0a90012952a100f90f63ec2fedebe72053a606878e562abf9fa737a190f3f83';
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
