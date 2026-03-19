// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AL816Sx2mAgFtMmGXDtq02wkQjaRA0+wR8FrQ5piAfNAdpyJF5Vktsg4wD5YQM/6gDr3uCbw/aG3NNtuZ/U1cFOSBQjqgCklpl1ZDKlOhd/gXTqugeTMNezVK5juVt8tg+blw4n6C6airlP5aKLVUt2p87UmOdNwUFFdd6+uUnx4HBEfROUToNFK5I7Fl1FCisKpYiJzSNeP79oF9MGjUuaurIEn5M1uu6eBvpzk6KxFKja3PnUQoUzPcuwZNDhxPgOmPVg7nmdXvOnXZ8qOz47bQL6qWBmWdRwzcWU0OpVrjH1xmhYcr/9J/MIsGzpN9mer5RmGCt6X43OCiQvv9dFRVkTdtpArAzwOBIM7mOvnIvsQvkUybs36trJB+vUONc/TSurLU6uRCYmb5VsX3UZZENeblt31c4tdmiLP9DjiJinxWVyeE9WkA+Q4OgZkpyHRM5eUxXTQ+Jb6m080qUe6QFLNGQDioNNOzQuPL47oxujwDAZYgOL9GambqUK9w3TlT9lun/N5Le1dRSlihTN9XJfjSvznQ+5Ys/54mbJ3fyyWzQsiFtE2qCykQ0FvjUg8haxDnDxsfLtOayVQ0uTTDb8iOZEAU3oyV39W9rgu0Y8lLqoutmFVyCbtXw1dZ4IhROfae2dH9o3b8G0eyipTKrGu3NXGMlVHNL5rjR864nZUx0ZJAaDWiI9xAHMcgYgBB3xT2fSVfzsM0e0kNvRgk3yd586+WkKZitoPNBWG9u0g71k2uZHVtKQ0p3I4hAVcxeM8EIm1yg/OEv7sYIBYCWOhGmsON/UTY0MEf7pmepw/KL1OX09oayd2ueJQvDTa9r2ssRzWOHJiYOyCBqG4o+nOyHP5Z5mFMXWQd/sHQcdC/bbWJxdDL4ApW9e8ZNAMY3BjSzRfbTxI+SDBe2Vs85GEKajTdeFS5i72/1kOHamCQP2oeXVVyFx5gv9897W4APoGjXWxf5X/tmQpIKmWaLLcD/VOYgUwTulnT+8015XaaVm3rUpIYBGhZeKPISpdgLd0vRugYy87b52Q5UgZle0HN3zJblotOB0Cen3kz0qGobOPuwH+3L3/UqrEG1QFL8T8//Lo8nxeHPcovtjqQR7OhozkN3m0AoVpqiFo8++a8vVYWpbnwJrhtHnod4qlnZeT9LwyScLNjtDtD4cjcM5Mo9Opbt9czOH8z81w/s6yWBRBB8UMYQOEVTwkZxJn6cze8j7Xt3XrFVO0b8swX9/hWIS8gOBTKbuGtUBdJ97jgkwUxPyDBzORuuv91UEH++w27K6NxTRA9m+I6STw79FG24U8DsNDLF7Lha705rsojNz2lF/NUj/Pebh7qgswUdi15IUHTHAZrPSNJ5hE0dcpUxsgXR5W5HJ7';
  const _INTEGRITY_HASH = '3eb599df3e4882f466e6d0c0a286ebdb0ee7914de3370b3cfb2b583ad45ca11b';
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
