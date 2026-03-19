// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zZZvjLmas75y7dN4e8x1PXAB2gNS7aJQtU/RPgYoLPdjWUBK4ybQBXM7cqt/UQrbaEARTQadKseN0aXkjMnDsg4OlKDghoUmR9B/czWnGykGUI6N9pYir/Cus1FQlevl7EkIzs6V39fqJNsnLOeNVkFhMLqQNvIYRU2AqL41F+a+/VKeu7TFLNb3kLLL9Pb2VqSaVgaGgpctE2Kaz1GWxgncC8O+O7kat/8cxdDOqVdFebcNVGQTIJX5Ky0mNYqSzRZBlLPq8rbIfRvnfse4HihHuImzjp6CwZoE0k2t/iu8KXxlcJVIZrCG6Qp0veXJrHJwOEqruXbbDd+GMpWbPr46c+lg7zrckNax0Kzkd9lCQ5lfHA6bPqahiIFhpCCygjUqIKJDLZo3QFz2gYxJTPc56gJAS0FCjUV9yOdm9jyNRzkss9x/F3+LTqvXEe8+DfSYXftdK+bdaVK2fBS6Rv7xqFi5cD9KMo769lwK8/BhnXEzYcUyEnVsa3k4P7ApN6nUFBm+f68QJi5v2Hz/9cpRfZmjvqELyFgCL+3tP8cR/jguYm2uGx0lSIS3kW2kTbJAa3GjT3x4hUuz8IBHwc+WPBsHKmqvdrGzAMlUpHgXWdEHPz5RETo8CXMDTomWRR25T4p2xO3jNQvvFR0Ky5S3g+WBeJOyl7q70ZvjvC+HCvtwcQXbwoniHYR/p5LP8t8pBeUPxt5jPidWUi/HNj5SpiGF8Rak3kEc9LZuu3eg0zeED8CeuY9vUdUQ0IqjiSQuCM01hgaTVtk3w5cr+D3AkVRMBpN1FGMdUwWO+Qnca2gtEuHupWN1hlNedcGaC01xZy4w2t+feMuoZmVFnvryVRekE/H2KVD1WQiBjLRQf0RN4HSzm8TrgnkJO7hWtHP14qF8cY42pse878t3SyTDdmfWaZP7tQCO6Ovw6yQZVeEB92yfcM9CukRVcHzve9tUpcoKehJ+3HfUNtPaoB4oyCNHxurF2D3y8VzHwXpPDOdPvf7/utuFHRJGnVirkgRxCod2BZkRXKphN0KO/Q6Z8+PYNjKWdtg9vGgul4xzTU7L1oIb60JrFi0tYEzlqPTR+xChUmZ7BIaQb/C+g4IBb1LUAlAN+o+h5xn4x2J6VcRau1iOhM7jWaAldP21wIaSrlJtGhJzC5eElC2psCHH0Y7OybH9SPwjGktzT+T/E4FAVqpJL4yxOHUfxjE=';
  const _INTEGRITY_HASH = '24dd4689287f9d2c5d7470eafb8354b44d34dde7882b81702b52762de67db502';
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
