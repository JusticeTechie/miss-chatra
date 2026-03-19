// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zCcGfCcUiTKDiYsPCmSx/rMYRpuSGlk4h0Sozful10i4leOHvqG0xDj0009shYLN2c3eSlWv0Yi/DTt9fe1woqZB0rHpoIBp/AeFKw6HiSLq/gPtgR+dCRO2UQVphbBZSEwHa8XsfR6ITCcz75+DqIvEmf8MLg885PZ7L8F88FdJvWzUOmwW13sgo30RSLuvOot/hNwovp6Y6b+VuQwcLtuoylqPkiaazk0r+6RPeo7Jhi5SsIGHhs6vPofiDRAxw+gWUDBMjFyo5uLK/btWF5L7NonRFGwRt67reo0HDZ6Jr4G1sm001Sm7gnStE21sKt6vauX15NmOqEuUnTm0D5BKlbBZZWQaUwkN+sRwpsnan2r+xOL+C9Ba8MarQSaA3iPN11GRJ8S/rGrnboHrPPO86oGBW42f2qkPYV0o+AqeFlAZZzeBAJUpRJe8UcMBKf0vqbIeF0P4bQ96X4ewfTyEDOZeL5y0vmhLq6UtGP+JHtI/c1gfPjE26L4FVtsrSeYLqu8TXV2HlTMt6Q/z2sEOdn/a15Tk0p9EcXKARWdjhLw6NXhPaWqrX25TwoTNXYjv8tXvPaYfxL6H7gT+NKB6cS/hzKGKGIJ2A0N1YlNZ2ycylHIkajnETA3wYhx+2RuIjfB04rA/P+5P+RE1hBqhSR1XanNIbNgEKSzMlvNvn4is3eorTlIbeAurmzcZ3Hj+LRIlV351XV7gbNpO/KHNuOQ=';
  const _INTEGRITY_HASH = '24364b0a70bbd8cfafebe0cd112fa64a1fa5dcb2aa80fae3810903cef38b1b2e';
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
