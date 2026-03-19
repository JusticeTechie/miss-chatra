// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ntj2KP4/Bi+Cost3SNfJGyWPGGldAarib6LWh8GCqXmE0IbQk0sWDFFfrIWOVDsz4H2x8bt+hwxC65Mo118b6/CA65BqOURmvznKCsXATsxB4/iDCvhKKELhbnhEfi+w/8XUHCmvW3u+sMMKUzsv347T/9/IkGKqO5IzxqhzVfSEvMgTO7tyxlC58VfKgzEoc5flJ31YAtG+sAPvGfheYD5x9LFkS+XeyHgpaVQ2YpjESCzqRTgWgc+0ga52D7SPbpm/YbJfaxQo9Z114MFvtY/RksqvH1eWUseZsEUAq/UczbbBL7vyM4/f5ggulp8MLmDeN8QOzLxsEh27ykfbFUp2N5m6tV9AYoJ83np8vI0bjybbIOfSTKHpI+ln5IBVSrZlSnE1jIzxuRUBD8mfj9dQFZW7i9gz15dZuRzuBrnWjIcm24LzsX7EDBjK5eCO7F17P1/Ahx7+dwYQtSDZUbz5H6CGybPrj7Y7BypRs+SjEJx0mQgWSknxwhshAjx9QhSTxKg5D6IeJS8vOdsgqJidUGQyrTO2kYFEKzWLSAVwV+oh6f7x/3nTjFioO/ApCD/kq61NlsQNR6nOfAaWA4GlSSA9ejhDVrII1VPAd7vdgzw+LglSckbMEuBVqVKKJO5QxzIh9yP2Aqunapl0+GAxupKx0I3KbClAeAGKli8CjjSnUxc3G3c9TwgNtxGxroLGpC4P1aDez7q5cd8Xj60ogVVqdMQq+a8QP1A3qnpf+qttibMfQ2X9v8HHVNwlCm3GaT1xOc2DccPAdEtK1C23yrh6hzDPmaHCDBh/7z6VzswiP6EiBHjSPJrHMfXtydP5M4QZLZ+js1diIc3rI8x5tHtXqejlN+hdXDjlgUnILKp3fHMyY/ZIbfDOO7pF49nd/Bz5YoFlPY2yfdN5JTWjS7u+Q+6XIzGCHHuLjTk7F/T/Hu0o5LUYLu52svHrO4/ree7m5YmPOXuQn80B9tqRreg+OofanwCBMNcWmdCF5VXEAy1RhTNw3PlXCW/6S0tOOc7wNdsb6/5zx7OCXDX0nE8gReLI4ClJjuSTK/GEw58e05xBsErnZTzm3PcCiLXzDGyZbH4zK7Ns6pLb2wRyjtI5sO1tKZEUJ0/IzmmyErxf87/KuK8wOuVlHqf2dZlOk1m6fT4D80J3mxc81TBgj66Iqgy+tDl664fXwXMV5vmeQiI+3aPYc6SGJUvxtA731LnBYOmiqDX8PF+2XMJCkify5XmNkAHVX1FdHOE0LrqkS6M6/vqG8ANK0Qv4sId9ZaXyf4gTxFOC3YcsrUKxErAlce0vsX0GnmferRwvZzEvtgKovQIT+UHc8OH8jbHK4hLi1vpxWjtYf0D54ABh2KQdzhXT2BkU7ZcuxJVYy/jK4gIixhF9QJj1GlR5X7KdRwRDUeiCgdsc8SkX5evUW+KfyvAOqnRIep8XXHJeeLUNvLahIlE1pqM6OmQutba8AG9IShY0UzB57psm6fmpdl8OwRZMTPynjNxzhBNugMhbEitgnwDgqmzbNVA+LhjFs2au3vK5+kBdV8Wce+kj4BPlUzQuL8jcUGm32v+0iPNRrCsceqaRNsGBJsju40hbF4e0Cbb7EEY0bv1o6yZbN2ouk9QxUmCtB+6BX1Uc9l1PXYtiQibmcQtUTafXaXMIAvBC5WNgrvAYphZ/vobxm9IpiZg1KjWYdty9Ji4Z+pw=';
  const _INTEGRITY_HASH = '6060f8306abfa71d51c8dd955b14932c611527aa434ba4ebef4bfce5bfcab67c';
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
