// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cc5mlSyAoFndvQ35152Dcy3eCr/umj4xKfYv9HxG8ZHrezEgu1o4re7HAAvu6oIVktgdVgqXvdBaVwqUxDzzPPmx1GV6YPnsA45qSoAoznb74veN4Sbqqs4DO7AfnfxCDa+EvDhM2LB60QtE6F/3QbL6m9UMAR8e+58Hqix9zyz46U0PoR4BEW6ePxDdRZNN6M3enTioJu1z/JzBqfqIrvIaJrR6nBKcxZff+0Ycixv7PdetBSb6HUUgPXwVyrykLZlRHLd02ea6IjhLuqkOQyt3fz7M7CGtOziXq2H6QEfYm9VOB1Luh1vX/lF7gjkeJ+G85IOF2ChT5ha6ocwNd6M7flMB/7cUqEOmt4W64Lir8lKF8k4EMQB2kpjkBOkAJTvZ8GFtAexhbD0VvhHWmHLORfqhKHLpNYwslaXT/Ec2GZ4r+p1PVeno80DDpxLH1bwd8SdYi8Xh6TS5iIclAL/XPX8PyU/eFzjLscrOiWxXshSRq//DHnvEJ+Z7nYy4q2Ysy3VLynBKmJ0Ky262c1K77y++zGveJxbNsTYRTGAJMQKV7cGqLeGpOb+TQjaplV93FgZTe3cSEnBo0NmzXV9pXPdrrMuYm9Vd8lqcqtAHZEgd76uPgBQ7eqFfwrF3hwf57iWF2IQFjEgV0dOrhkNIHJZ1tpgiOzgxX9m+MR367FWR+xbTm9JDqLsKShqPTZ40rm7yYKyIxx/AtavKVivKks6kDnG2AnCg+tK1bjbpz7rU5qfistJ8JqA4vsDrcjxlg2UVurtyNpyjG2g8PlZJ7QH+sxi7vFonkECESYtndKuq+pETHpD6O4ZHd266H57m38pbnJ9isGBhpKpyHCcjnU+8sy9WiQHqQ58hQOLo701tO4EN1MWflHzuSsyb1sMQRfy7aSAPfvj4vbsYd7jN81Yntz7yzJhSSFw8S4n0yMPok/BcTsiAiXqTIzLi4LjOI43UF8N4U+GhTxP1FKKshMc1ulevNIZnR3dSNaYIX06ouaoElWUq';
  const _INTEGRITY_HASH = '7cfd5524f45c39daf8b6e23fb2700468eb2368b6ff3835dec9c405e98cef10ce';
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
