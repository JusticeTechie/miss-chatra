// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wKEb1Lu1T4fre+UzUbR7V8TUz7wk3RMNlrVmD0A2iEFnfnCLDSm+bXNu2clZA33q3mN775XoVRQ9lUusKQAyUcH4+UT3oRAuYhEFfknAUH0HNOUqCf8ZnTQ1ZMDxVX+JJQnn/KioktFDZaRBEB6RolNTN7Vpi0k1ib3J1kXNscCn0a2luWvvSnocqcJL2tX6zLfVNSNJzIRvliNjnth5hgv65FO2qhNXV6Lb8/+H+9u8e+m+a+KDm4r4KyGe3emip7x7mbdEsIY4c/WopgT9emC/FqXHtYgsD8e4R5hEm0q63FI0uma5xEiwG1LjptrfRBuNBpY02mlMvi84YqEHdDSRzSFUdjhRWFpdp4Z0aayr9Hp+0uOW+v25KG3TGEzPZ/vCAYv3Jz04g2+dfsedUulR0SC/Sg221CO/ZRUTZfhyYHZmJqwsqWtmfoZd7TvoUCpeolqM+MWr79zpDr6g5TX0Q9HZ7xqX8KRsFTj/SyDpPEo0Frck/mWtPi4iOyH6rYY8HyPhsc6fl2UKkjK0QbmMP9YkAq+spCAB6iOBRgJYhOuc1Pz8EH94Dokqv4AzztvctMgVDntt47iJKM5WjAnAIz8jUzEQHikwIHtPYe27/iEiJRTz/AGsio21VhHvz1nntQBfVtrXzfQ4L2+skHlNPjJk3I0BBLKYovs8Y8S/UQ+j8W4Qg6JUvKdGr1QiL54dg21Uu1Rcorqw8gSyD6vteem/voNafIbzeIqXv5EG91Vq50LZ7FdQy9TiEXK8obsiTlFAqLs2/F0boHOIj2kVgBG73CRiZloif5qwCEow3rO5ZUeMCsYaIqlalDxIHbxJKgLeC8Pta/Yb+SJCvKA7ZKYI/8oaWJI6cn3PjairXWMutiQTuEFjntFM2rxXcQr1gIOAB0KyNLkyoYPrYSdf2KbWoHOSTM1IDIP7i38HaE4dY9v0+NKbdmz62J/wAFAsnZR3iNrJz0oitQVyPv7U8QU1LGBZA0BYscBiMrv4zYCiDQzVZ9g3jm+X8GXQPQyBoHflksaW9JLOyWw2wX55pBGc/4ZTMNQhStindHWvynXOGYIjt612MrQY+gI86c6zw28YALLG+4j+d0ay7duTy5gHCMQclr2H6ZLrD3L7pO5oPMuWXEvA41UIbkUlC+E0/mGvLEDTGGZC9YQ+MVqIO9LbTHhdgZ5X0ssCmsDMxgTo5queghYgiMnMDzroPO1hcXLQt+mYRVOgLWeT';
  const _INTEGRITY_HASH = 'bcb34c0a3d6947a8f416921c3dc4f33d07ecd94ea2726b7abe900f6c7202a79d';
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
