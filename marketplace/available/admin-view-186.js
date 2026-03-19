// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sXn7cCYOCASfpiKv1SDRhcZjPwVKYh3ib/Y+hGJeia9Dt6tMT6uU+qIcg4/Ay1lZPlpceI+0d35vTL7Ihec3se+lBPpPZAY1C0nPJ72I0+vp/sptypyvLl5C2p0HuTiPfbCMPLQ/+jG14PPEuG4MzjCo8FmSrA0uZmDg4I8KULU+YVLQfKgh+o0ib1Abj+e4G4BB3Z39vRmsH2QsoUOsUN4kFJfZiWDOnB0M5y7o+3L7+vFobSkgLlQUEmSukZmAQh2QOSJV91pqvv17xJnWX49JynRU4zGFNeTZ/jFaIHf4NJdXIniE580k2Wkv2rOO8t3ESOAoTIfMjzkU9os+AdEae4pOGzWDQDV8CyxmXeKNytGxQVOCsZ1YNPWWViW1JRFOZdDZG8BzGGOiYe+Kvy129jJYA1LhMd3r1/YQs7DfLBcYPhlSeNUNa/YXWo6MfgqCOz+xBCAPdBXS5yEZDHwq18T7m1JeUa5gynvd4pOpBN2hpA4sVx054ibWTmLJ0Byn7k66BC97H5mn1L6FQs7TPEPslz6mZvhGMQ2W7yhYMd50NtPFW17tg04qOoeARLotYrCqmMXbUGR9XcGE6NFqAPQ6ks/Q59jnvGAbg5ZXGF0d1eZR5guhaNdPaHIhDqeF4UJDFOQps+Gq5LC9/zBnZXj0n+9uty+JXeGfASImSO/3KkGQXi+JuiYnKuiW/JZmKX66ZEX+S7+YJ3RjMahs24qlWP/aautL/+w67i3aCXm0rlI+Yv1UuiQ8erLAsiPxD0nJ/0D2FIljJ1VlnuOLWubkAk7gZU2YoEZi3/axlX/3K2SJEzUwxgu2Wpy71pz3OnTZ1G8YZY76Mhs88x6ejwE62+5Et1hd2JO1BXM3sO9RokWF+g/qyjtp7yul0WFrUQW0SOrs/940Tq+1z/uUz19tbkyus4pZ2EdUS/kUdxWXk6+CYSjB4FXhuXq8ADu7v6LYlVwnvMbMp/c7dIifh/GWDJFK8p6N+aU7Ek76+mY=';
  const _INTEGRITY_HASH = '2bc7cec2082028c45fa7777715b62f9fcb8164f19b54aaded9c0d0b237d870c3';
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
