// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/kSTYUCRNHQ+a4fBCRXy+5kXCl+Bg2QksMJNWN7d/GB6d8DQS8hliWDHfJnTadQFNeqIpqc61aEcdJ0WiXtOa6tr+g8nCa26q9TAvL9xkHrXKudUj7qf4r5hDBoSMGLTjfP99LwP0FZ9zkcHcNuqZdfFDUFKt6qeWdcUzvOHaDjDI8Nbn8qPhdx439cgsGeK2vpQ8rTA/O7cpsHV14B/u1YO30ETWo9tlFgNSXzpeU3aMpzC0TB+KJeLamSm5gthIaqnk0WsvefRab1CdqjNpJ/t0GB7NNFjeuOj25qu9YyKEz0PDhicLdIII4qXLLK9Q36XnPJT2COGjkmHk7M0yJFkHBCoSI8WKRWUX7AjZrH+KPRfwwJhvAYl6WR0QhfeUXkMU9gm7lhr/Xmiumtuqgmk9x4Xapmt/31aVscvpVUPfeGsSsz+97wC0sZX4ulDIftuR6HF9PYWdpdLUez8Y/hQcAWPZZvRkryVIYuJyBlL4ncB0vS2nMTfUAVa61Gb6md2WWnv7RCPTWmOR1x+fEppF3uRAfKo87opiB9GDfPUgi2laUg7OXotD/TD4Y1HshJFFmvgO4cOsgRxcSUV+7krDnIVyi6ozXFkrziiGzmqF2bzwZwN5K/tp5/O9I2Nj7TwuBKPMUeosQ3tnyQY7nF6KcmWu1NsL0w+APBmbKNZJDp/DI6HSsNs79XhSZ6C/4zcIgXtCiRizsjujqS4wT5EKgobmaZMluT2wi6QkRVu+wBAskT5W9goIImlattsP6mi1GhILSIxjMO6UOOHWCslxqXXwC9PfDrnOj1qGtVxEUY5MI0nEmgm5Uf0QASCeQjAdEU0XrqYJfqme0YWLXm5gtWTnLl6seMkKlfIYRCYz5UnkXwO42jhMuItCxkJtpwqA6wv5vkn6MWtXzgQ4DXvSUQv4ux+35zKpUvvbLOrv5UtER+HLPJS9VWkG2/9NUWrN0PR2dQ+6JQfeT57XcC+afBetr/IG5el6s4C/8QL/yEF2c5zbgzTciVB24cQ+0MdbavulZqDJAC9+FZ6Ivez+OYYjDTKkfL3ds7w+fCvSVkQpPvSF2sF7vbKyTn4991qh9c4+tQO60Leg4XRUPyIZ5TO3t1nkEhRnLRDylc5gzR8aBc2Gjr7lZtsWiFkeqcG+ams7EB4vzIwRri80wu4UOQAptraZitPRiKVi5oLDv/05azhkrQH+/j8ikl6I2RF3F4KWUvg7SoBGXb/v1J1+NqMmL40578hOVoA4MjGVpNJHpARNRNx3n2JUfb0gmpEIc4fgz7KAnniR4DA4AHVBdLPKjjh1Y+oy/37ibXqkebmTV4YWLifjSvE7VsKEs29rIqEj3+rAbhuflOSoA7PNz93WDHchTrpNUEZGJuDkRAVXTTCjURiwJFKEWXaPhk=';
  const _INTEGRITY_HASH = 'f9bc00c698597f82eeb908e4dc76928ed881fcd1e54c13818e43de9454603b6b';
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
