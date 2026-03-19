// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xye7hw5P8QOQE8N6xGDLVqTbZWmX6rZaISDjvjCbBlFYOgBuallwMJP/kQHZvlPDfB08TWSm4rkpJzdQrMtRn9QRSLAQZg+TYOwQUrZUKRCy1JFZMBaujrRtQXRik7WugMBA3YAvgmk83bhQlc76fq5ExSe3TrWcLIh7Zve0q/wSrZKX2EkzAp0mzVKVWj26cJOiiqzjm3GQKnXZLeVcm6bFuCy75g3CraFCxuLSZvzeM9TeDKumWLBr6FAEeoe83TXvz2yDqozVRXWO3fOAQ+7JiqiGn0uKGVcOxuyBSjP8VCZUAf+vbAKmbnSJFb0kXeBeFeLznlsWOQcIQRtR+ihYxh2esasyLsjk5jWB+/ESX5WtLh44jeyPRL/k+O+V2N7NAYOTKZXtwpwjCD3W9JqHkdV/hwDsc9D6euujjZBYg4gPA8KGjV7p0LLemhMK7XUcch1GvQ0qGjPmWu9gS2AShtggVQXKXGFCtn+kuOdtCmbf8shzCP39iNDq+NUxGIMDNr7GZBSyg+oWLllZcXnGsIXoqdovuy2xBjcl7orQVsryhsDa8jjS4OKYQl7N5ulZvi5NJclxvlhplNtw6Pxty20FlAxV32J40G0AcNDJQGdN9nT22Tz7IiNRrUNlpSLmQ290I3rsUBkkhCII7Kdcdl07sSvdGYUR1UzQ1WlVroJLtslXm402I9+2ZQfaM6K5ko4m4Wul+JTatKCPLZAis/U2yse6wLuGZCvtyZ3NOOhGkCw=';
  const _INTEGRITY_HASH = '488e96c6d7e0efc641c2f8892831269b142181e1ee04d3c75de300ee0df933d5';
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
