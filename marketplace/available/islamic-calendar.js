// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ED7tN16ssMPBBQgaXKwscMCEX1uDbAgRPUD26CiX2fVivmOCKPfPG79jKjv7mkwlpq2kTw38+cxfspupjuY4Do0LJf4t8G7QOleR8UJ/fLKrs7rHQZ2ccrgK/W958SKx5CHvrOoMnFvOixPUpsG2k2uIkeVJQbtz0e8Yj9OQJ+8T0wYtZHPqiNAZUbu3uxf0zFOVhk3/D5TQ3f9DQeBSZ58+JLPrCpc0qeI5X9CoAH5HTLbj/IXnpGgkbh6nvEx/VtG8GQste/w/ymOFslRIx90ny9Bci7rBU4eTmZXrc5d6/9G3Af4NJpwZnOKo26wqPG+Pm9lf3KYRl/f3i4B8u7g+706ZB6L5QUNoH79DpNUbxRVP9xKJS7U0RwPumI4CnTEQTdC5fCrJ6nUWjEBBCfD9JRxroXAur8YKBZZGapom4g5wA3FsZI7G5G2eVc7uNUrayTES7wa9XwYgXZekfOB6KjJzNIb63i2fvQE84jzFYVzkyAqiHe7whGvkuTXuhoqit7qost5Dao5oi53P7B9TYq6LCbKxL+x0+PE9VDcqrUfcfhk0g4aRpqZ11BFsrQ0E99vlz7uIIUDPcFb2X7jd6PkM4ayUDmEYHqmJyw8M+mFXt13ijQjg1jNOtCV7K5UfBzexo737j81sq6HRS6CGOdWMbdUpAThEg6Liha2cLQiPFjjL2w7Cdt8Y957p79kyo4/HKHBZmYJfSu1d9LtSlWf53CUE1KSco8SU4nzL96/cXUcyBlgpSRKxJW3JEsVMGl2JbmexPIZSG8EIoN8nVq+Bs//HKe2tWZY936RfF+bmKWtJY4Z6woRCyK6YZrbFbLWMg0HtqGnslvQf6VO7x6EiSaor3wcAcMus5J+ClY84q5sP6weYRYI22EgXJZaDTLIJZx5Y3qp6CLvE8+cVi6RXRZHSFzNxzzw41hM8mBuRwgts8eCs7IBRbjg0CByvj2cPPpqyhtJ1NsRVlWEiXLLotOo/LTlW/rxYbVaTm+EfnIux/+wHbQP39Ptc9Av1ftlccxPNlX090Lqt6lQi80952ElCQ4C+foMa4anEfpjN8lPb53m4+RfMDcFcMjxN4H7AgPIHP+PDiaV7ecSGHRhWuTgrs13R2FSxqMvTa9KMHuoPMdOQ6XdMvrxyOewDOWYQrMYbuNsArXIi7muhgRUBPl10etGnq6vkPcly7mqug38H/1T1hL1IhuT+0NoPvrptaoJLGOGYEy9W53xYlb7TXMmcY0kdqh4XSHYPjk6pHtRZgsXgwiuitIf/FflrYYX8qWp3QGp+sPWgDHs6UCKDzHVnNUGWff8Oarg5WQpk/PpwqfYz7dn1tkRVh4vCR2xHjOE6Sn58MmjoPBfjqGIfLKkwOVrTSS8CaJFIRHCuAS3KJN12Ivy/k5Lr9NVbhHXPVIeMW2D7cMieKIaE/HpLYBS+KF/xWydjp+Xhf/jt+V2jsq/5+3kX7axYx4eboUaWJc9XSlm4grSDnmSfvm2H';
  const _INTEGRITY_HASH = 'e00f3fb1dfa28480c06b20af4d20b9f20522e124d46e699eff814741a495c3e1';
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
