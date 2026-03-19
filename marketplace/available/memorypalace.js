// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O+GxI0MTEgT6z21W54GkjPVxueB7G5m2CQpfo2gcW4XGYQtbhIN1XL/SmLR7UYumc15JDLSiAemSfRdCBdVE/4hycZrwaA8QUVicLTQFI62hFMPjDOXiCSiGkXGVKB+3/bCLOLa2fZZwnhERvZxB+9b1yV/2uCNMIy2vn0A6xHGmruqdX5687z4LW/8ECNQ7n6yGLK8tPO/W42c7+pvrbdxlr20I+jdzADAVjE/4jZncq2MKwiK0UOLpd4xYKQnsSAaUzqd38UP/YZheuot1AJGmhlvWCC4SF6UofTaHXG57v9mw+XKOVyTu9dosxHkwO/hueYvJt1frCwQHYyn7+QAbqEYNoZEdLiiWT5P8mA1d7phuqpp+mv9cvYs20/Km/h5xHnZibqs6wlSFQRL0yY30mhe14slG5ET6UeMsu8edn6FaNPhlRQWfcbCQws8Kn6caHsffbYZgioHUO6DymHJfY1aJueuGrbeyCGRZYniaCaylIulWND3+1ousyWotF+0RbEUYLeyHB+o9kBHokBnisGC21k42rTt3xrRnvH3g3D/yvI6sfo6m6gKm+Jy7SxSdbvX0bu7agZzgcWqrkrI5mZNR98YzAUFCyhkbBITbTahNxIdXCtFzQc2cDI9uC0UMU5fbe9Bf4mzxMMaonOzjKpd4nkrTdulXes5QRCsUQ16ipoz6GkolXjhXXHh9RZIEEVkSdaYmTMxsGK5QHtEtZQZ5aiq2YKZjxgtiB8VFXogiQ2r8oDxVF5oeqFnd7yUtRw0OiqYRWvNLwO+u4p5KoTQWMpecA+83a6fP359BTFhPp6ZGd+7wUPLQH7TeVcp8nWf8JXyS8dZkDySXl+RWMG2DZuXml4CWVFEJEmlBFtKKIL3UvYE+gLztAJmZJOh/zy8VQ03ShAsndcLRcCuNWjVJjnd7GnPXF9Rh5rn5rSgoAlUQiBXdVYJFElu7a+TKDe1FJG4xZyGT1WmW8H9KTqxAOrNlVZWMRoCs2WQ95Nnj2pLqE+S1gEErZZ3kxBAaAdYxcq9NyuQqntzx5HOpvZGETVMb+c4MXLthL73v4UjCIxCoHVUuhCJS8m4Hf8473gDwJGfWyeVdfCxOi+YHZCVVzO0Sn8PUuT2qmCrDc5fUDhKNKN07acWGEdioJlpxPENcQb/xek0kNwttPcKoP49oimuh22EdruFV8KytvR3yxbWKBih2IBXB/bm1a7DGqSJzmwOn';
  const _INTEGRITY_HASH = 'c857fe004dd78ffcbcaaedc46afc4e353df396986512d60b0ec520217dad78de';
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
