// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l5kA7cGkU85nKfVnV3IigKZ4sQXexY6QQA0583+pW3ekhncafG0QV4lvx9XsTTRwZL91Wuu1xFtJeI6ZUd/q+dnshWGTG6vy8L+5gfMWhoGwEn4kdJR/XPOqy4CmiAmCZgjrox7NYjGPsCQhPvSblyzzFwsBbfflMqz1sQM9N13xbqXU6LWZR0eoQ01rOu4QUFl91G27k0D8bC9GOjHkYMmKjuWw4oHFk3E8P2sFNZyUqDuUsQ5zxJVMOteQGa4oqPSdxK/JY4SWXBOkKu//YJUUB+oZpUHvuTKbGPyw7ekWBXFfjFyP2XNs5sEWBwzYWSzin/6MIWGus0eZEFnS7M3OGUrfu0FZodfBUP2vGBCZ+lWXuCnvUsMuSyZF6Vmcb4r0pDy9xXnNFZtztPWZdpMwD9gUF+TdQuLhk9CRASboyZNZ0EAioYfLKa1PURmhLJ0Rwi7QNI4IrfAKykNBy84yTYq+GuDoC2OiqCGXGDz3XqsztshyJiqopxLNDJfd3qkrkYeloHo+0NfdUX2DcJNqMvxsx2wKpvZWKAmDIrfiri/Ane84Ld9bsYQ39ixRkTL3bqBlndCOkBGaEz54Lbd2fRjQxh3NOBF/RHZsl7mFjPoO3sfzG0FqXKCAetSsS0qZA/e68Q3X2Bin2zkEYjgEyGw5G75fbLDZsqG23MhdksBSAOmKkbfvs8fjLtQlNldG4QrasyA5YMUefbGVA7E6V8M5ig+eZ9aZjQLf3kWkek3ZZVYGlGNHmzlKLBUISgmnVi7m2tPqFahbs0XJyqp2wltval6tt0X3NIljuFsrZLlKjBJ7SnolDh249afIvW1jL746ElQLitPX9GOgZyymRBUU868XvzinU7kMiNKrvyC/8RXzENy1rTsOKjUt33Ld2YX6Mc807QhBkRvB20be++jPVTI7UVY2POXohp2A95qF/f8nfWbtAkGs73ek93ZkJ+DDqHyEx8JE6TjclNi4PYRxxHvoDK+pgdlARsgPWcl8l2E+Pyo5P9ud';
  const _INTEGRITY_HASH = '949705c186a6dbc8c1d74995dd40e37f58621c0656ad95ecfd77e3023457a36a';
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
