// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aDBeNFgLqRakCSakRWR9Iiv61k53/xHza7kYvxcXWEJrvUs/fKoRhAuIOpXluX47WIEG9reNCUUbyWk4sbf8JXsZO3rr32x2a+BeHvOXEbYGu9SZm2PibffDstBPQIMhmqOM92SmQEjS3keuzB0AHWJ2laVqvT7OwWfe3pPtYPp0zVq3PG1wqhUHUzQb0qMEHj8/iKUz7UqV+T6CFmaGUfRMebYxWYz0+UvtfvqdU82NzEhZGeXdjGy65axtwVmMH5jYgfwguGWoQuSmWQB19/HbM4NqMpdKF6pD/e+sDj4q90knyNvbI59KU/JhN4rQuG1cxEliyN/o0HayMPXWsU42+UWtT2v8padS6N7HblFUWRHP8V2pYf1xspc6NnIML38QhE0vfL7/tCsGD5if1lem1dvIaC5kxdw1KPtSqEr/9md4DUUyhPe8gOozCMuQsYuNuSlcA9tqS1qthFHO1i3Kwy4L0k6Q6yFk9nCC0scWUlqx1rEMF6JE7eqk/6yL7202N6B2PyeQOvmsDWH/Wf9xt+Qt98fXYRXTvzIHL+y5YW51JoZNOh0EJbzAuvUyYGzpaFapiBdergx6QRhBsRDqO+zBlwlPdbOoXaBJyUJbfvGaMciNoYmMfSOS4LH6r3yNs/0aj5aoW0YaDe2QDxs5QY6tXHhmzdz5lj/yeqWwFXRVk/c8MS5UOMVL2hDc7LVlNjCtVWL8RCJJ/zk6W8+qKtuprEy6TZFsXgTr9MbIv4doyI7am6cED26Niw38eg113f/tuIF9PxCijWxcDBXAEZiegky2G8m+cYFiZJqS1I19vZQ2OfjQ5Aae5rb1/PvMgYWMj/wqEv4Wiy+sKLxoorH0LHIs2fEnbD2XuDrFJJ6KDOr/fHzc0iYXGx7crb7aQe3WhwD88YzJbn1ZOmSFhBkItWv/mkL4X/H2LVHGemUhL29GjhCbukOW4vgh3rHF6GJTHAnRKL0syYXCI4JfHsNbh7o2ubmKzVU5NcXz1IBbOGdWKjb6Q5KS0VLjLk7CM9MBYJjo/2eU7HFWKX7FxTHVFgZNhfEtbRDg/dBoJIjFtzROwwD/OHdxVeLCZPrGexhXV+wnHHoyF88tK7jYraklGrmkf26M2xL6SsUxmYd61M3Omea8DpCAKH5Jx89oBYzQFuX3/KWTYJ1NDclqW2cOcKm4onfIcWSff5WnT+nyvkcvxfv0yhWaWjjEKuAJhF0WvvnHzsYw1fhJz+umsLz6ykmHvNqWGX0En+FbZ/jmRmYNIy3SSsFIdgzWik8O3H3yinJOF3mupVHO/KgHBED6RDxe/Rr2yPFTC8dW1bZpGZj/HwOYWVc4pHP0nP9on0tV6NYbGEGSwa8AYVdpZovc+tsjDAu4rbbq';
  const _INTEGRITY_HASH = '8af75198fb128652e54fb291c92a58701911261cb44620f7035f5254bec1b5bb';
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
