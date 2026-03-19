// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6Xem5zAFAPMcVxVKLhLufPjP0Cj3KyTqJq+UNob7CK0b8hVqok8+TeVQomIRrqPvZrSZ15pCVyd5ODN5zYv/sFh0hs4wTdZ0rrwWZXXCUOIEa+ApVi3s5c0gXPwVol4780i5IWs33OeKebh307WryXZxX0+C4l/W0gDA0UMaM70TncyI8oGgjVqmGIkCbmL3r9VfJUp/ZGZunk48fuxJb2g/MguecKKBJ/mo20V6UdffwU7YGd58GPZNB4PdCIyrHlMVIz9E/97WuZeEBo5hATTnm/FUXFB5n6dRZhc1soesvYtv2LyIXabygBt/j6IJr2omUida+Ytd2wdLFPuXl+J8iRChTeanZzHSFRIBqryQeRSBwKY2twRcYK91QfxewudDk4G+cFdD1dx5n+tQJHCS1BzIeu2gOTQ9kC48uA9xDKbIB/sfiemFY8OLThJvKoNCNV4y0BRbzSk1IxCFF5trV7aQqnTA9T6hJ28GbFd5xZ2+5FLwY6fDR5BpWqUWG5cs+6kxChWjZmuUDhPjU4jRJKAgZj2V3oZMMgCHItD6wkyi4pPzRHn536wqGwwTGrcImh4rcSdgBM3ZbB/Eit4Lu+qnqr8YLEywm8dzV89HllClNQbytJr0ZB4zBJSEvPl5GxYW5VX26k/4Kg2VJeDa5TnTON8gCWiDUvnuGh3/xzzITPHSiNRohCjSuZ+G0DG0Tj3GAs/WoUnG6fX50wdr3AYLSSXfGurF77jWbWUXAfSlU9ssguuSlNCGR6y83Ile/V0Z5iI0TOu5ZSUKRG1QOJuosu89h7fsf+OxAe5WHUiIYw8Dg4TZ2a01NK87XhhFwu4GkZCt/GMIrFurn7snjZN67bR74Pf6Wgl9rvvD512xO9GKF94UsJSxnd2lMnN/MatxYd25QM3k0l86vcGG8yjF3idRt/IDTfEhkiotIgudEw1XFtn4E5QmT5A4NrrbyN2vBVDegOPlhjeeQpvw4hV3pGYSf01XSumN6hD11cRmDrg+tSl2UPSPRHGoxKoVd0kpgzDgfGOTTGBvWU/7oQ0SgLsqUe6pTa3qWOToHsGI+ynXZgHCAXUkaBQGvPKCuLf5Iv0M3wk=';
  const _INTEGRITY_HASH = '33976d8510e149158e956fc8699f2e11896fcb29921ea19e36a41021f3d87149';
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
