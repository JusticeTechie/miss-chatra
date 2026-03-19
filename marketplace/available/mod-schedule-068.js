// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D1rxAV+Q7vhLBQ+pM3h+h6dtFneFdWbo4VYynt0KssgNsJD92NlraWsJRA9aCnPNsOeCtCoHVhhCJcBlmpss57CSM1A4apwGWflv8akz7G06oYJsHU5fcQa6iOwf+qlIIvY/ASlVvKnD94Hz1bHjPTiiHFB8OCIYvotp7GgCrxmJUXklt9vocqZuZ6+TRylSY6Iiu3DM7sP480SBTikUvEm2Zr8dnkzf03izNUzRy6WPiXoKMC7dayX+aZibG3oqhUA9hjm28ijibKjxKD9c6nRQrLyutWIKjXdYJAeCYQZLSw4OkbwEqam7vt45uggi8nPG3rwHVhMDkdHdY4xJC6Rjmh47xvA9bMh0JNDtJCs2vDux7suFbwuhmmGSZrroVmJopOy7MWs4Z6dtP8Syjua6Og5UIiqE9F7xV8705oPSzluw0wO8f09wf1w262+t/KEZu++7yElEeAynfZaQpNowfYFQSh7OcM4SkMWD4BEWeau4+C6Qo6huBvBcptPbhZW0IzvaNdvnh5fIB8ZPVmlOuPF2ewReSWH9HwKgwWYMMJbeBTudzNo/Q7+Uhy8Zzy6hlVZER81k3hkESTxd51Kf36pUV7fdT0NObRLj/eDickZaC6HmZWCUQNalCL5kDMnzzKea3S0p5IbHMizp4u6LpNsn+qGe167k1DSWhseanqm31kxlWK2Sh42lYgLBMd2UoXvIzWyRmCI/E4CvCUVu1Xsq+bSVP9TO4IjsnD0Pluv4bpgKw3DFchslSMgy3D9MCDpGa6dXezQOO4NQqjxV0oZuRkvkkLpD/KaGAgSwBUam2fbVUZYXic7g2dRSOuLZab1UEIjc3p2EH0tSLictSJdJcx6V+bmS0h7YvfJq7InUEqwYEn3QEQJUP25IQB+KKdGGCPz53oVKlzFnsjLzXcVPUq+R64qTJEjqIwJplUFXVNQMKQ9d3AA5N03mkLdElVbxxQKne6yFFW7jCXqLb1KGjpRGBH7A6W/vTWSEFydXBHVAEeGhExuVZqRFFc6MdyJNmBqcN+j5Gcs9AJ+jKAeI3pYwU9jBl7FAdq/ZHJyeDp0hlstceDm+IXnzMDsQNhBcyU7UhZoZfqP1Rps2WBrkeCghfP6PEcN4iexHt+LDvmorMolciJ6ku9A9lqgkGOf++EeaZ/AaQ92eM7huAgwFInzc4spLIGZ9/WLhX2t3NyE49qU8cNegMk+i4jwgdQtiBDbgPOYQPnzt5GfrFIL4FtDiG55N4uspSACbLVJ2idKXmcvn0RldM5C/RRy/h5yIIcGCNCsWQzN+Er+ecolYmtJRAMi8vD41i/xB2gFtH7+l/CDvllscj+7BWDg3CtPWKOnfyw42UAoVGRy3i64wKU8D+j2zpCM9a4ZJSWi72sGQ5mWDnGfKh8XkEuqliyTcOg==';
  const _INTEGRITY_HASH = 'ccd08bfe5cb4eef2b1bfb19fad3ffdf9ca825d74500bb763e7ab1eaf0b974f09';
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
